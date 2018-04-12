const template = `
        <main class="section">
            <nav class="level">
              <!-- Left side -->
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
                </div>
              </div>
              <div class="media-right">
                <a class="button">
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
            filter: null
        };
    },
    computed: {
        monsters() {
            const filter = this.filter;
            if (!filter) {
                return this.$store.state.monstersData;
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
        saveSettings: function(event) {
            // this.$router.push('/');
        }
    },
    mounted() {}
};

export default monsters;
