const template = `
        <main class="section">
            <nav class="level">
              <div class="level-left">
                <div class="level-item">
                  <p class="subtitle is-5">
                    <strong>{{ monsters.length }}</strong> monsters
                  </p>
                </div>
                <div class="level-item">
                  <div class="field has-addons">
                    <p class="control">
                      <input v-model="filter" class="input" type="text">
                    </p>
                    <a class="button" @click="search">search</a>
                  </div>
                </div>
              </div>
            </nav>
            <article class="media" v-for="monster in monsters">
              <figure class="media-left">
                <p class="image is-64x64">
                  {{ monster.challenge_rating }}
                </p>
              </figure>
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
        </main>
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
