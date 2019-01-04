const template = `
        <div>
            <div id="container"></div>
            <h2 class="is-size-5">Saved Encounters</h2>
            <div v-for="encoun in savedEncounters">
                <a @click="loadEncounter(encoun.name)">{{ encoun.name }}</a>
            </div>
        </div>
    `;

const party = {
    data() {
        return {
            name: ''
        };
    },
    computed: {
        encounter() {
            return this.$store.state.encounter;
        },
        savedEncounters() {
            return this.$store.state.savedEncounters;
        }
    },
    template,
    methods: {
        loadEncounter(name) {
            this.name = name;
            this.initMap();
        },
        initMap() {
            const name = this.name;
            const store = this.$store;
            store.commit('loadEncounter', name);
            var width = window.innerWidth;
            var height = window.innerHeight;

            var stage = new Konva.Stage({
                container: 'container',
                width: width,
                height: height
            });

            var layer = new Konva.Layer();
            stage.add(layer);

            function createMonster(monster) {
                const x = monster.x || monster.sortOrder * 30 + 20;
                const y = monster.y || monster.sortOrder * 30 + 20;
                var group = new Konva.Group({
                    x,
                    y,
                    draggable: true
                });

                var shape = new Konva.Circle({
                    width: 30,
                    height: 30,
                    fill: 'gray',
                    name: 'fillShape'
                });
                var boundingBox = shape.getClientRect({ relativeTo: group });

                var mainText = new Konva.Text({
                    x: boundingBox.x + 40,
                    y: boundingBox.y,
                    text: `${monster.sortOrder} ${monster.name}`
                });
                var secondaryText = new Konva.Text({
                    x: boundingBox.x + 40,
                    y: boundingBox.y + 15,
                    text: `ac:${monster.armor_class} / hp: ${
                        monster.hit_points
                    }`
                });
                var traitText = new Konva.Text({
                    x: boundingBox.x + 40,
                    y: boundingBox.y + 30,
                    text: (monster.traits || []).join(',')
                });
                group.id = monster.id;
                group.add(shape);
                group.add(mainText);
                group.add(secondaryText);
                group.add(traitText);

                return group;
            }

            const enc = this.$store.state.encounter;
            Object.keys(enc).map(singleKey => {
                layer.add(createMonster(enc[singleKey]));
            });

            layer.draw();

            layer.on('dragend', function(e) {
                var target = e.target;
                store.commit('setMonsterPosition', {
                    id: target.id,
                    x: target.attrs.x,
                    y: target.attrs.y
                });
                setTimeout(() => {
                    store.commit('saveEncounter', {
                        data: JSON.stringify(store.state.encounter),
                        name: name
                    });
                }, 200);
            });
        }
    },
    mounted() {
        if (this.name) {
            this.initMap();
        }
    }
};

export default party;
