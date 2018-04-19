const template = `
        <main class="section">
            <div :class="{ 'modal': true, 'is-active': openedAdditionalModal.modalState }">
              <div class="modal-background"></div>
              <div class="modal-content">
                <div class="box">
                  <article class="media">
                    <div class="media-content">
                      <div class="content">
                        <div class="select is-multiple">
                            <select multiple size="4" v-model="additionalWeapon">
                                <option v-for="weapon in weapons" :value="weapon" >{{ weapon.name }}</option>
                            </select>
                        </div>
                        <div class="select is-multiple">
                            <select multiple size="4" v-model="additionalSpell">
                                <option v-for="spell in spells" :value="spell" >{{ spell.name }}</option>
                            </select>
                        </div>
                        <a class="button" @click="additionalStuffForMonster(additionalWeapon, additionalSpell)">Save</a>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
              <button class="modal-close is-large" @click="closeModal" aria-label="close"></button>
            </div>
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
                    <monster-card-stat :monster="monster" :openModal="openModal" />
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
        },
        openedAdditionalModal() {
            return this.$store.state.additionalModal;
        },
        weapons() {
            return this.$store.state.weaponsData;
        },
        spells() {
            return this.$store.state.spellsData;
        }
    },
    mounted() {},
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
            if (window.confirm('Are you sure?')) {
                this.$store.commit('removeFromEncounter', id);
            }
        },
        additionalStuffForMonster() {
            this.$store.commit('addStuffToMonster', {
                monsterId: this.$store.state.additionalModal.monsterId,
                additionalWeapon: this.additionalWeapon,
                additionalSpell: this.additionalSpell
            });
        },
        closeModal() {
            this.$store.commit('toggleModal', { modalState: false });
        },
        openModal() {
            this.$store.commit('toggleModal', { modalState: true });
        }
    },
    data() {
        return {
            additionalWeapon: null,
            additionalSpell: null,
            name: '',
            tempEncounter: ''
        };
    },
    template
};

export default encounter;
