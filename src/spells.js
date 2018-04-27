const template = `
        <main class="section">
            <strong>{{ spells.length }}</strong> spells
            <div class="level">
                <div class="field">
                  <div class="control">
                    <input v-model="level"  class="input is-small" type="number" placeholder="Level">
                  </div>
                </div>
                <div class="field">
                  <div class="control">
                    <input v-model="filter"  class="input is-small" type="text" placeholder="Search">
                  </div>
                </div>
            </div>

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
            level: null,
            filter: null,
            setFilter: null
        };
    },
    computed: {
        spells() {
            const filter = this.filter || '';
            const level = this.level;
            return this.$store.state.spellsData.filter(singleMonster => {
                return (
                    singleMonster.level === parseInt(level)

                );
            }).filter(singleMonster => {
                return (filter ? singleMonster.name.toLowerCase().includes(filter.toLowerCase()) : true)
            });
        }
    },
    template,
    methods: {
        search: function() {
            this.setFilter = this.filter
        }
    },
    mounted() {}
};

export default spells;
