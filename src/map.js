const template = `
        <main>
            <section id="container"></section>
            <aside>
                <h2 class="is-size-5">Saved Encounters</h2>
                <div v-for="encoun in savedEncounters">
                    <a @click="loadEncounter(encoun.name)">{{ encoun.name }}</a>
                </div>
                <section>
                    <router-link :to="'/encounter?name=' + name">Encounter</router-link>
                </section>
            </aside>
        </main>
    `;

function createMonster(monster, store) {
    const x = monster.x || monster.sortOrder * 30 + 20;
    const y = monster.y || monster.sortOrder * 30 + 20;

    var group = new Konva.Group({
        x,
        y,
        monster: monster,
        draggable: true
    });

    let size = 30;

    if (monster.comment && monster.comment.includes('LARGE')) {
        size = size * 3;
    }

    var shape = new Konva.Circle({
        width: size,
        height: size,
        stroke: 'black',
        strokeWidth: 2,
        fill: monster.isPartyMember ? '#27ae60' : '#e74c3c',
        name: 'fillShape'
    });

    var boundingBox = shape.getClientRect({ relativeTo: group });

    var controlVisibility = new Konva.Circle({
        x: boundingBox.x - 10,
        y: boundingBox.y - 10,
        width: 15,
        height: 15,
        fill: monster.currentlyVisible ? 'green' : 'gray',
        name: 'changeVisibility'
    });


    var decreaseHealth = new Konva.Circle({
        x: boundingBox.x,
        y: boundingBox.y + 40,
        width: 15,
        height: 15,
        fill: 'gray',
        name: 'decreaseHealth'
    });

    var increaseHealth = new Konva.Circle({
        x: boundingBox.x + 30,
        y: boundingBox.y + 40,
        width: 15,
        height: 15,
        fill: 'green',
        name: 'increaseHealth'
    });

    controlVisibility.on('click', function() {
        store.commit('toggleMonsterVisibility', {
            id: monster.id
        });
    });

    decreaseHealth.on('click', function() {
        store.commit('changeMonsterHealth', {
            id: monster.id,
            hp: monster.hit_points--
        });
    });

    increaseHealth.on('click', function() {
        store.commit('changeMonsterHealth', {
            id: monster.id,
            hp: monster.hit_points++
        });
    });

    var nameAvatar = new Konva.Text({
        x: -4,
        y: -4,
        width: 15,
        height: 15,
        fill: 'white',
        text: monster.name.split(' ').reduce((newLine, word) => {
            return (newLine += word.slice(0, 1));
        }, '')
    });

    var mainText = new Konva.Text({
        x: boundingBox.x + 40,
        y: boundingBox.y,
        stroke: 'black',
        strokeWidth: 0.3,
        text:
            `${monster.sortOrder} ${monster.name}\n` +
            `ac:${monster.armor_class} / hp: ${monster.hit_points}\n` +
            (monster.traits || []).join(',') +
            '\n' +
            monster.actions.reduce((newString, action) => {
                return (
                    newString +
                    `${action.name} hit: +${action.attack_bonus}  dmg: ${
                        action.damage_dice
                    }${action.damage_bonus ? '+' + action.damage_bonus : ''}\n`
                );
            }, '')
    });

    group.id = monster.id;
    group.monster = monster;
    group.add(shape);
    group.add(mainText);
    group.add(nameAvatar);
    if (!monster.isPartyMember) {
        group.add(controlVisibility);
        group.add(increaseHealth);
        group.add(decreaseHealth);
    }

    return group;
}

const party = {
    data() {
        return {
            name: this.$route.query.name,
            layer: null
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
            this.$route.query.name = name;
            this.initMap();
        },
        drawMap() {
        },
        drawMonsters(layer, encMonsters, store) {
            Object.keys(encMonsters).map(singleKey => {
                layer.add(createMonster(encMonsters[singleKey], store));
            });
        },
        initMap() {
            var width = 1024;
            var height = 1024;

            const name = this.name;
            const store = this.$store;
            const drawMonsters = this.drawMonsters;
            store.commit('loadEncounter', name);

            var stage = new Konva.Stage({
                container: 'container',
                width: width,
                height: height
            });

            var layer = new Konva.Layer();
            stage.add(layer);

            const enc = this.$store.state.encounter;
            const encMonsters = enc.monsters;

            drawMonsters(layer, encMonsters, store);

            layer.draw();

            layer.on('dragend', function(e) {
                var target = e.target;
                starx.notify('room.message', {
                    id: target.id,
                    x: String(target.attrs.x),
                    y: String(target.attrs.y),
                    isCurrentlyVisible: String(target.attrs.monster.currentlyVisible)
                });
                setTimeout(() => {
                    store.commit('saveEncounter', {
                        data: JSON.stringify(store.state.encounter),
                        name: name
                    });
                }, 200);
            });

            layer.on('click', function(e) {
                var target = e.target;
                console.log(target.name());
                if (['increaseHealth', 'decreaseHealth', 'changeVisibility'].includes(target.name())) {
                    layer.removeChildren();
                    drawMonsters(layer, encMonsters, store);
                    layer.draw();

                    starx.notify('room.message', {
                        id: target.parent.id,
                        x: String(target.parent.attrs.x),
                        y: String(target.parent.attrs.y),
                        isCurrentlyVisible: String(target.parent.monster.currentlyVisible)
                    });
                    setTimeout(() => {
                        store.commit('saveEncounter', {
                            data: JSON.stringify(store.state.encounter),
                            name: name
                        });
                    }, 200);
                }
            });

            var onMessage = function(msg) {
                layer.removeChildren();

                Object.keys(encMonsters).map(singleKey => {
                    if (encMonsters[singleKey].id === msg.id) {
                        encMonsters[singleKey].x = parseInt(msg.x);
                        encMonsters[singleKey].y = parseInt(msg.y);
                    }

                    layer.add(createMonster(encMonsters[singleKey], store));
                });

                layer.draw();
            };

            var join = function(data) {
                if (data.code === 0) {
                    starx.on('onMessage', onMessage);
                }
            };

            starx.init(
                { host: document.location.host.split(':')[0], port: 3250, path: '/nano' },
                function() {
                    const mapUrl = enc.settings.mapImage;
                    starx.request(
                        'room.join',
                        { type: 'dm', map: mapUrl, encounter: enc },
                        join
                    );
                    const canvas = document.querySelector('canvas');
                    canvas.style.backgroundImage = 'url("' + mapUrl + '")';
                    canvas.style.backgroundSize = 'contain';
                }
            );
        }
    },
    mounted() {
        if (this.name || this.$route.query.name) {
            this.initMap();
        }
    }
};

export default party;
