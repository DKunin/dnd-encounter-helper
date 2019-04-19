const template = `
        <section class="narrow">
            <header>
                <input v-model="filter"  class="input is-small" type="text" placeholder="Search">
                <select class="select is-small" v-model="level">
                    <option></option>
                    <option v-for="casterLevel in casterLevels">
                        {{ casterLevel }}
                    </option>
                </select>
                <select class="select is-small" v-model="casterClass">
                    <option></option>
                    <option v-for="casterClass in casterClasses">
                        {{ casterClass }}
                    </option>
                </select>
                <label class="checkbox">
                  Showfull
                  <input type="checkbox" v-model="showFull">
                </label>

                <strong>{{ spells.length }}</strong> spells
            </header>
            <section>
                <article class="media" v-for="spell in spells">
                    <p>Level: {{ spell.level }}</p>
                     <p>Time: {{ spell.time }}</p>
                    <p>
                        <strong>{{ spell.name }} </strong> <small>{{ spell.school }}</small> <small>{{ spell.type }}</small>
                    </p>
                    <p>
                        classes: <small>{{ spell.classes.join(',') }}</small>
                    </p>
                    <p>
                        concentration: <small>{{ spell.duration }}</small>
                    </p>
                    <p>{{ (spell.components || []).join(',') }}</p>
                    <p>
                        range: <small>{{ spell.range }}</small>
                    </p>
                    <p>Ritual: {{ spell.ritual }}</p>
                    <p v-if="spell.material">
                        material: <small>{{ spell.material }}</small>
                    </p>
                    <details v-if="!showFull">{{ spell.text }}</details>
                    <div v-if="showFull">{{ spell.text }}</div>
                    <hr />
                </article>
            </section>
        </section>
    `;

const spells = {
    data() {
        return {
            level: null,
            filter: null,
            setFilter: null,
            casterClass: null,
            showFull: true
        };
    },
    computed: {
        spells() {
            const filter = this.filter || '';
            const level = this.level;
            const casterClass = this.casterClass;
            return this.$store.state.spellsData.filter(singleSpell => {
                if (!level) {
                    return true;
                }
                return singleSpell.level === parseInt(level);
            }).filter(singleSpell => {
                return (filter ? singleSpell.name.toLowerCase().includes(filter.toLowerCase()) : true);
            }).filter(singleSpell => {
                if (!casterClass) {
                    return true;
                }
                return (singleSpell.classes || []).some(singleItem => {
                    return casterClass.includes(singleItem);
                });
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
    mounted() {
        if (this.$route.query && this.$route.query.query) {
            this.filter = this.$route.query.query;
        } else {
            this.filter = '';
        }
    }
};

export default spells;
