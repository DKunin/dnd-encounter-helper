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
            <a :href="generateFile()" download="encounter.json">
                Download encounter
            </a>

            <div class="file">
              <label class="file-label">
                <input @change="importFile" class="file-input" type="file">
                <span class="file-cta">
                  <span class="file-icon">
                    <i class="fas fa-upload"></i>
                  </span>
                  <span class="file-label">
                    Upload encounter
                  </span>
                </span>
              </label>
            </div>
            <h2 class="is-size-5">Saved Encounters</h2>
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
        importFile(event) {
            const file = event.target.files[0];
            const fr = new FileReader();
            fr.onload = event => {
                this.$store.commit('importEncounter', event.target.result);
            };
            fr.readAsText(file);
        },
        generateFile() {
            var json = JSON.stringify(this.$store.state.encounter);
            var blob = new Blob([json], { type: 'application/json' });
            var url = URL.createObjectURL(blob);
            return url;
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
