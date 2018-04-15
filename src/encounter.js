const template = `
        <main class="section">
            <nav class="level">
              <div class="level-left">
                <div class="level-item">
                  <div class="field has-addons">
                    <p class="control">
                      <input v-model="name" class="input" type="text">
                    </p>
                  </div>
                </div>
                <a class="button" @click="saveEncounter">Save</a>
                <a class="button is-danger" @click="removeEncounter">Remove encounter</a>
              </div>
            </nav>

            <div class="encounter-monsters">
                <div class="tile is-3 is-vertical is-child" v-for="monster in encounter">
                    <monster-card-stat :monster="monster" />
                    <a class="button" @click="removeMonster(monster.id)">
                        <i class="fas fa-minus-square"></i>
                    </a>
                </div>
            </div>

            <a v-if="false" :href="generateFile()" download="encounter.json">
                Download as JSON
            </a>
            <details>
                <summary>json</summary>
                {{ JSON.stringify(encounter) }}
            </details>
            <nav class="level">
              <div class="level-left">
                <div class="level-item">
                  <div class="field has-addons">
                    <p class="control">
                      <input v-model="tempEncounter" class="input" type="text">
                    </p>
                  </div>
                </div>
                <a class="button" @click="importEncounter">Import</a>
              </div>
            </nav>
            <div v-for="encoun in savedEncounters">
                <a @click="loadEncounter(encoun.name)">{{ encoun.name }}</a>
            </div>
        </main>
    `;

const encounter = {
    computed: {
        encounter() {
            return this.$store.state.encounter;
        },
        savedEncounters() {
            return this.$store.state.savedEncounters;
        }
    },
    mounted() {
        console.log(this.$store.state.encounter);
    },
    methods: {
        generateFile() {
            // var txtFile = "encounter.json";
            // var file = new File(txtFile);
            // var str = JSON.stringify(this.$store.state.encounter);
            // var dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(str);
            // return dataUri;
            return '';
        },
        saveEncounter() {
            if (this.name) {
                this.$store.commit('saveEncounter', {
                    data: JSON.stringify(this.$store.state.encounter),
                    name: this.name
                });
            }
        },
        removeEncounter() {
            if (this.name) {
                this.$store.commit('removeEncounter', this.name);
            }
        },
        loadEncounter(name) {
            this.name = name;
            this.$store.commit('loadEncounter', name);
        },
        importEncounter() {
            this.$store.commit('importEncounter', this.tempEncounter);
        },
        removeMonster(id) {
            this.$store.commit('removeFromEncounter', id);
        }
    },
    data() {
        return {
            name: '',
            tempEncounter: ''
        };
    },
    template
};

export default encounter;
