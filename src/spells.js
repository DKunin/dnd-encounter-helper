const template = `
        <main class="section">
            <strong>{{ spells.length }}</strong> spells
            <div class="field is-horizontal">
                <div class="field-body">
                    <div class="field">
                        <input v-model="filter"  class="input is-small" type="text" placeholder="Search">
                    </div>
                    <div class="field">
                        <select class="select is-small" v-model="level">
                            <option></option>
                            <option v-for="casterLevel in casterLevels">
                                {{ casterLevel }}
                            </option>
                        </select>
                    </div>
                    <div class="field">
                        <select class="select is-small" v-model="casterClass">
                            <option></option>
                            <option v-for="casterClass in casterClasses">
                                {{ casterClass }}
                            </option>
                        </select>
                    </div>
                    <div class="field">
                      <div class="control">
                        <label class="checkbox">
                          Showfull
                          <input type="checkbox" v-model="showFull">
                        </label>
                      </div>
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
                    <details v-if="!showFull">{{ spell.text }}</details>
                    <div v-if="showFull">{{ spell.text }}</div>
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
            setFilter: null,
            casterClass: null,
            showFull: false
        };
    },
    computed: {
        spells() {
            const filter = this.filter || '';
            const level = this.level;
            const casterClass = this.casterClass;
            const showFull = this.showFull;
            return this.$store.state.spellsData.filter(singleSpell => {
                if (!level) {
                    return true;
                }
                return singleSpell.level === parseInt(level);
            }).filter(singleSpell => {
                return (filter ? singleSpell.name.toLowerCase().includes(filter.toLowerCase()) : true)
            }).filter(singleSpell => {
                if (!casterClass) {
                    return true;
                }
                return (singleSpell.classes || []).some(singleItem => {
                    return casterClass.includes(singleItem);
                })
            });
        },
        casterClasses() {
            return this.$store.state.spellCasterClasses;
        },
        casterLevels() {
            return this.$store.state.spellsLevels;
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