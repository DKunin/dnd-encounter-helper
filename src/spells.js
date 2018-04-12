const template = `
        <main class="section">
            <nav class="level">
              <!-- Left side -->
              <div class="level-left">
                <div class="level-item">
                  <p class="subtitle is-5">
                    <strong>{{ spells.length }}</strong> spells
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
            <article class="media" v-for="spell in spells">
              <figure class="media-left">
                <p class="image is-64x64">
                  Level: {{ spell.level }} <br>
                  Time: {{ spell.time }}
                </p>
              </figure>
              <div class="media-content">
                <div class="content">
                    <p>
                    <strong>{{ spell.name }} </strong> <small>{{ spell.school }}</small> <small>{{ spell.type }}</small>
                    </p>
                    <p>
                        classes: <small>{{ spell.classes.join(',') }}</small>
                    </p>
                    <p>
                        concentration: <small>{{ spell.duration }}</small>
                    </p>
                    <p>
                        range: <small>{{ spell.range }}</small>
                    </p>
                    <p v-if="spell.material">
                        material: <small>{{ spell.material }}</small>
                    </p>
                    <details>{{ spell.text }}</details>
                </div>
              </div>
            </article>
        </main>
    `;

const spells = {
    data() {
        return {
            filter: null
        };
    },
    computed: {
        spells() {
            const filter = this.filter;
            if (!filter) {
                return this.$store.state.spellsData;
            }
            return this.$store.state.spellsData.filter(singleMonster => {
                return (
                    singleMonster.name.toLowerCase().includes(filter.toLowerCase())
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

export default spells;
