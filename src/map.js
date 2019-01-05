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
            name: 'Sample'
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
            var width = 1024;
            var height = 1024;

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
                    fill: 'red',
                    name: 'fillShape'
                });
                var boundingBox = shape.getClientRect({ relativeTo: group });

                var nameAvatar = new Konva.Text({
                    x: boundingBox.x + 8,
                    y: boundingBox.y + 10,
                    fill: 'white',
                    text: monster.name.split(' ').reduce((newLine, word) => {
                        return (newLine += word.slice(0, 1));
                    }, '')
                });

                var mainText = new Konva.Text({
                    x: boundingBox.x + 40,
                    y: boundingBox.y,
                    text:
                        `${monster.sortOrder} ${monster.name}\n` +
                        `ac:${monster.armor_class} / hp: ${
                            monster.hit_points
                        }\n` +
                        (monster.traits || []).join(',') +
                        '\n' +
                        monster.actions.reduce((newString, action) => {
                            return (
                                newString +
                                `${action.name} hit: +${
                                    action.attack_bonus
                                }  dmg: ${action.damage_dice}${
                                    action.damage_bonus
                                        ? '+' + action.damage_bonus
                                        : ''
                                }\n`
                            );
                        }, '')
                });

                group.id = monster.id;
                group.add(shape);
                group.add(mainText);
                group.add(nameAvatar);

                return group;
            }

            const enc = this.$store.state.encounter;

            Object.keys(enc).map(singleKey => {
                layer.add(createMonster(enc[singleKey]));
            });

            layer.draw();

            layer.on('dragend', function(e) {
                var target = e.target;
                starx.notify('room.message', {
                    id: target.id,
                    x: String(target.attrs.x),
                    y: String(target.attrs.y)
                });
                // store.commit('setMonsterPosition', {
                //     id: target.id,
                //     x: target.attrs.x,
                //     y: target.attrs.y
                // });
                setTimeout(() => {
                    store.commit('saveEncounter', {
                        data: JSON.stringify(store.state.encounter),
                        name: name
                    });
                }, 200);
            });

            var onMessage = function(msg) {
                layer.removeChildren();

                Object.keys(enc).map(singleKey => {
                    if (enc[singleKey].id === msg.id) {
                        enc[singleKey].x = parseInt(msg.x);
                        enc[singleKey].y = parseInt(msg.y);
                    }

                    layer.add(createMonster(enc[singleKey]));
                });

                layer.draw();
            };

            var join = function(data) {
                if (data.code === 0) {
                    starx.on('onMessage', onMessage);
                }
            };
            starx.init(
                { host: '127.0.0.1', port: 3250, path: '/nano' },
                function() {
                    const mapUrl = 'https://i.pinimg.com/736x/da/8c/b3/da8cb3d1a7eff4dc8b5562cc7865d28f.jpg';
                    starx.request('room.join', { type: 'dm', map: mapUrl, encounter: enc }, join);
                    const canvas = document.querySelector('canvas');
                    canvas.style.backgroundImage = 'url("' + mapUrl + '")';
                    canvas.style.backgroundSize = 'contain';
                }
            );
        }
    },
    mounted() {
        if (this.name) {
            this.initMap();
        }
    }
};

export default party;
