const template = `
        <section class="narrow">
            <header>
              <strong>{{ monsters.length }}</strong> monsters
              <input v-model="filter" class="input" type="text">
            </header>
            <virtual-list :size="70" :remain="40">
                <article v-for="monster in monsters" :key="monster.name" >
                    <monster-stat-block-v2 :monster="monster" />
                    <button class="button" @click="addMonster(monster)">+</button>
                </article>
            </virtual-list>
        </section>
    `;

const monsters = {
    data() {
        return {
            filter: null,
            setFilter: null
        };
    },
    computed: {
        monsters() {
            const filter = this.filter;
            if (!filter || filter.length < 3) {
                return this.$store.state.monstersData;//.slice(0, 10);
            }
            return this.$store.state.monstersData.filter(singleMonster => {
                return (
                    singleMonster.name.toLowerCase().includes(filter.toLowerCase()) ||
                    singleMonster.type.toLowerCase().includes(filter.toLowerCase()) ||
                    singleMonster.size.toLowerCase().includes(filter.toLowerCase())
                );
            });
        }
    },
    template,
    methods: {
        addMonster(monster) {
          this.$store.commit('addToEncounter', monster);
        },
        search() {
          this.setFilter = this.filter;
        }
    },
    mounted() {}
};

export default monsters;
