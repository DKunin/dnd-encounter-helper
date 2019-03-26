const template = `
        <section>
            <header>
              <strong>{{ monsters.length }}</strong> monsters
              <input v-model="filter" class="input" type="text">
            </header>

            <article v-for="monster in monsters">
              <p class="image is-64x64">
                {{ monster.challenge_rating }}
              </p>
              <div class="media-content">
                <div class="content">
                    <p>
                      <strong>{{ monster.name }} </strong> <small>{{ monster.size }}</small> <small>{{ monster.type }}</small>
                    </p>
                    <p>
                      <monster-short-stat :monster="monster" />
                    </p>
                </div>
              </div>
              <div class="media-right">
                <a class="button" @click="addMonster(monster)">
                  <span class="icon is-small">
                    <i class="fas fa-plus-square"></i>
                  </span>
                </a>
              </div>
            </article>
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
                return this.$store.state.monstersData.slice(0, 10);
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
