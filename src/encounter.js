import abilityScoreModifier from './abilityScoreModifier.js';

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

            <article class="message" v-if="party.length">
              <div class="message-header">
                <p>Party</p>
              </div>
              <div class="message-body">
                <li v-for="member in party">
                    {{ member.name }} -
                    ac: {{ member.ac }} /
                    hp: {{ member.hp }} /
                    <input type="number" /> + {{ member.initiative }}
                </li>
              </div>
            </article>
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
                <monster-card-stat v-for="(monster, key) in encounter" v-bind:key="key" :monsterId="key" :openModal="openModal">
                    <b v-if="monster.additionalWeapon">Additional weapon</b>
                    <li v-for="additionalWeapon in monster.additionalWeapon">
                        <span>{{ additionalWeapon.name }}</span> <span>{{ additionalWeapon.damage }} {{ abilityScoreModifier(monster.strength) }}</span>
                        <span>{{ additionalWeapon.properties ? additionalWeapon.properties.join(', ') : additionalWeapon.properties }}</span>
                        <a @click="removeAttribute(monster.id, additionalWeapon.name, 'Weapon')">
                            <i class="fas fa-minus-square"></i>
                        </a>
                    </li>
                    <b v-if="monster.additionalSpell">Additional spells</b>
                    <li v-for="additionalSpell in monster.additionalSpell">
                        <span :title="additionalSpell.text">{{ additionalSpell.name }}</span>
                        <a @click="removeAttribute(monster.id, additionalSpell.name, 'Spell')">
                            <i class="fas fa-minus-square"></i>
                        </a>
                    </li>
                    <a @click="openModalHandler(monster.id)">
                        <i class="fas fa-plus-square"></i>
                    </a>
                </monster-card-stat>
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
        },
        party() {
            return this.$store.state.party;
        }
    },
    mounted() {},
    methods: {
        abilityScoreModifier,
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
        additionalStuffForMonster() {
            setTimeout(() => {
                this.$store.commit('toggleModal', { modalState: false });
            }, 40);
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
        },
        openModalHandler(monsterId) {
            this.$store.commit('toggleModal', { modalState: true, monsterId });
        },
        removeAttribute(monsterId, weaponName, attributeName) {
            this.$store.commit('removeWeaponFromMonster', { monsterId, weaponName, attributeName });
        },
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
