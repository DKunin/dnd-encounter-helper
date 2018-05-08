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

            <div :class="{ 'modal': true, 'is-active': monsterModal.modalState }">
              <div class="modal-background"></div>
              <div class="modal-content">
                <div class="box">
                      <div class="content">
                        {{ monsterModal.monster.name }}
                        <button @click="removeMonster(monsterModal.monster)">Remove</button>
                        <div class="columns">
                            <ul class="column">
                                <li>str: {{ monsterModal.monster.strength }} ({{ abilityScoreModifier(monsterModal.monster.strength) }})</li>
                                <li>dex: {{ monsterModal.monster.dexterity }} ({{ abilityScoreModifier(monsterModal.monster.dexterity) }})</li>
                                <li>con: {{ monsterModal.monster.constitution }} ({{ abilityScoreModifier(monsterModal.monster.constitution) }})</li>
                                <li>int: {{ monsterModal.monster.intelligence }} ({{ abilityScoreModifier(monsterModal.monster.intelligence) }})</li>
                                <li>wis: {{ monsterModal.monster.wisdom }} ({{ abilityScoreModifier(monsterModal.monster.wisdom) }})</li>
                                <li>cha: {{ monsterModal.monster.charisma }} ({{ abilityScoreModifier(monsterModal.monster.charisma) }})</li>
                                <li>
                                    cha: {{ monsterModal.monster.charisma }} ({{ abilityScoreModifier(monsterModal.monster.charisma) }})
                                </li>
                            </ul>
                            <ul class="column">
                                <oline>damage_vulnerabilities: {{ monsterModal.monster.damage_vulnerabilities }}</oline>
                                <oline>damage_resistances: {{ monsterModal.monster.damage_resistances }}</oline>
                                <oline>damage_immunities: {{ monsterModal.monster.damage_immunities }}</oline>
                                <oline>condition_immunities: {{ monsterModal.monster.condition_immunities }}</oline>
                                <oline>languages: {{ monsterModal.monster.languages }}</oline>
                                <oline>speed: {{ monsterModal.monster.speed }}</oline>
                                <oline>perception: {{ monsterModal.monster.perception }}</oline>
                                <oline>stealth: {{ monsterModal.monster.stealth }}</oline>
                            </ul>
                        </div>
                    </div>
                </div>
              </div>
              <button class="modal-close is-large" @click="closeMonsterModal" aria-label="close"></button>
            </div>

            <nav class="level">
              <div class="level-left">
                <div class="level-item">
                  <div class="field has-addons">
                    <p class="control">
                      <input v-model="name" class="input" type="text">
                    </p>
                    <p class="control">
                        <a class="button" @click="saveEncounter">Save</a>
                    </p>
                    <p class="control">
                        <a class="button is-danger" @click="removeEncounter">Remove encounter</a>
                    </p>
                    <p class="control">
                        <a class="button" @click="clearEncounter">
                            Clear encounter
                        </a>
                    </p>
                    <p class="control">
                        <a class="button" :href="generateFile()" :download="name + '.json'">
                            Download encounter
                        </a>
                    </p>

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

                  </div>
                </div>
              </div>
            </nav>

            <table class="table is-bordered">
                <thead>
                    <tr>
                        <th>initiative</th>
                        <th>name</th>
                        <th>ac</th>
                        <th>hp</th>
                        <th>weapon</th>
                        <th>additional weapon</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="member in party">
                        <td><input type="number" class="inline-input short" v-model="member.initiative"/></td>
                        <td>{{ member.name }}</td>
                        <td><input type="number" class="inline-input short" />/{{ member.ac }}</td>
                        <td><input type="number" class="inline-input short" />/{{ member.hp }}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr v-for="(monster, key) in encounter" v-bind:class="{
                        'monster-undeclared': false,
                        'monster-dead': monster.hit_points <= 0
                    }">
                        <td><input type="number" class="inline-input short" v-model="monster.initiative" /></td>
                        <td><input class="inline-input" v-model="monster.name"></td>
                        <td>
                            <input class="inline-input short" type="number" v-model="monster.armor_class">
                        </td>
                        <td>
                            <input class="inline-input short" type="number" v-model="monster.hit_points">
                        </td>
                        <td>
                            <li v-for="action in monster.actions" :title="action.desc">
                                {{ action.name }},
                                hit: +{{ action.attack_bonus}}
                                <span v-if="action.damage_dice">, dmg: {{ action.damage_dice }}
                                <span v-if="action.damage_bonus">+{{ action.damage_bonus }}</span></span>
                            </li>
                        </td>
                        <td>
                            <li v-for="additionalWeapon in monster.additionalWeapon">
                                <span>{{ additionalWeapon.name }}</span> <span>{{ additionalWeapon.damage }} {{ abilityScoreModifier(monster.strength) }}</span>
                                <span>{{ additionalWeapon.properties ? additionalWeapon.properties.join(', ') : additionalWeapon.properties }}</span>
                                <a @click="removeAttribute(monster.id, additionalWeapon.name, 'Weapon')">
                                    <i class="fas fa-minus-square"></i>
                                </a>
                            </li>
                            <li v-for="additionalSpell in monster.additionalSpell">
                                <span :title="additionalSpell.text">{{ additionalSpell.name }}</span>
                                <a @click="removeAttribute(monster.id, additionalSpell.name, 'Spell')">
                                    <i class="fas fa-minus-square"></i>
                                </a>
                            </li>
                            <a @click="openModalHandler(monster.id)">
                                <i class="fas fa-plus-square"></i>
                            </a>
                        </td>
                        <td>
                            <a @click="toggleInfo(monster)">info</a>
                            <div>CR: {{ monster.challenge_rating }}</div>
                            <div>Hit Dice: {{ monster.hit_dice }}</div>
                        </td>
                    </tr>
                </tbody>
            </table>

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
        monsterModal() {
            return this.$store.state.monsterModal;
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
        downloadEncounter(encounter) {
            var json = JSON.stringify(encounter);
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
            if (window.confirm('Are you sure?')) {
                if (this.name) {
                    this.$store.commit('removeEncounter', this.name);
                    setTimeout(() => {
                        this.$store.commit('clearEncounter');
                    }, 50);
                }
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
        toggleInfo(monster) {
            this.$store.commit('toggleMonsterModal', {
                modalState: true,
                monster
            });
        },
        closeMonsterModal() {
            this.$store.commit('toggleMonsterModal', {
                modalState: false,
                monster: {}
            });
        },
        clearEncounter() {
            this.$store.commit('clearEncounter');
        },
        openModalHandler(monsterId) {
            this.$store.commit('toggleModal', { modalState: true, monsterId });
        },
        removeAttribute(monsterId, weaponName, attributeName) {
            this.$store.commit('removeWeaponFromMonster', {
                monsterId,
                weaponName,
                attributeName
            });
        },
        removeMonster(monster) {
            this.$store.commit('removeFromEncounter', monster.id);
            setTimeout(() => {
                this.$store.commit('toggleMonsterModal', {
                    modalState: false,
                    monster: {}
                });
            }, 40);
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
