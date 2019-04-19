const template = `
        <section class="narrow">
           <input v-model="filter" class="input" type="text">
           <strong>{{ weapons.length }}</strong> weapons

            <section>
                <article class="media" v-for="weapon in weapons">
                    <p>
                    <strong>{{ weapon.name }} </strong> <small>{{ weapon.cost }}</small> <small>{{ weapon.weight }}</small>
                    </p>
                    <p>dmg: {{ weapon.damage }}</p>
                    <p>cost: {{ weapon.cost }}</p>
                    <p v-if="weapon.properties">
                        properties: <small>{{ weapon.properties.join(', ') }}</small>
                    </p>
                    <p v-if="weapon.damagetype">
                        damagetype: <small>{{ weapon.damagetype }}</small>
                    </p>
                    <hr />
                </article>
            </section>
        </section>
    `;

const weapons = {
    data() {
        return {
            filter: null,
            setFilter: null
        };
    },
    computed: {
        weapons() {
            const filter = this.filter;
            if (!filter) {
                return this.$store.state.weaponsData;
            }
            return this.$store.state.weaponsData.filter(singleMonster => {
                return (
                    singleMonster.name.toLowerCase().includes(filter.toLowerCase())
                );
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

export default weapons;
