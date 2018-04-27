const template = `
        <main class="section">
            <nav class="level">
              <!-- Left side -->
              <div class="level-left">
                <div class="level-item">
                  <p class="subtitle is-5">
                    <strong>{{ weapons.length }}</strong> weapons
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
            <article class="media" v-for="weapon in weapons">
              <figure class="media-left">
                <p class="image is-64x64">
                    {{ weapon.damage }}
                </p>
              </figure>
              <div class="media-content">
                <div class="content">
                    <p>
                    <strong>{{ weapon.name }} </strong> <small>{{ weapon.cost }}</small> <small>{{ weapon.weight }}</small>
                    </p>
                    <p v-if="weapon.properties">
                        properties: <small>{{ weapon.properties.join(', ') }}</small>
                    </p>
                    <p v-if="weapon.damagetype">
                        damagetype: <small>{{ weapon.damagetype }}</small>
                    </p>
                </div>
              </div>
            </article>
        </main>
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
