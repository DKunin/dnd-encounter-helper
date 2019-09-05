import abilityScoreModifier from './abilityScoreModifier.js';

const template = `
        <section class="narrow">
            <nav class="level">
                <a class="button" @click="sideBarToggle">+</a>

                <input v-model="name" class="input" type="text">

                <a class="button" @click="saveEncounter">Save</a>
                <a class="button" @click="clearEncounter">
                Clear encounter
                </a>
                <a class="button" @click="pasteToEncounter">
                Paste
                </a>
                <a class="button is-danger" @click="removeEncounter">Remove encounter</a>
            </nav>
                
            <header>
                <h4>Settings</h4>
                <span v-for="(setting, key) in settings">
                    {{ key }}: <input v-model="settings[key]" class="input" type="text">
                </span>
                <details><summary>Saved Encounters</summary>
                    <div v-for="encoun in savedEncounters">
                        <a @click="loadEncounter(encoun)">{{ encoun }}</a>
                    </div>
                    <router-link v-if="name" :to="'/map?name=' + name">Map</router-link>
                </details>
            </header>
            <section>
                <aside>
                    <monstersTable v-if="isSidebarActive"></monstersTable>
                    
                    
                </aside>
                <monster-stat-block-v2 v-for="monster in encounter"  :monster="monster" />
                <table class="table is-bordered">
                        <thead>
                            <tr>
                                <th></th>
                                <th>action</th>
                                <th>comment</th>
                                <th>rating: {{ encounterRating }} / exp: {{ encounterExperience }}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="monster in encounter" v-bind:class="{
                                'monster-undeclared': false,
                                'monster-dead': monster.hit_points <= 0
                            }">
                                <td>
                                    <h4 class="is-size-5 has-text-weight-bold">
                                        <span @click="monsterMoveUp(monster.id)"><i class="fas fa-sort-up"></i></span>
                                        <span @click="monsterMoveDown(monster.id)"><i class="fas fa-sort-down"></i></span>
                                        {{ monster.sortOrder}} {{monster.name}}
                                    </h4>
                                    <input placeholder="name" v-model="monster.name"><br>
                                    <span>ac:</span><input placeholder="ac"type="number" v-model="monster.armor_class"><br>
                                    <span @dblclick="generateHitPoints(monster)">hp:</span><input placeholder="hp" type="number" v-model="monster.hit_points"><br>
                                    <span>ini:</span><input type="number" placeholder="init" v-model="monster.initiative" /><br>
                                </td>
      
                                <td>
                                    <li v-for="action in monster.actions" :title="action.desc">
                                        {{ action.name }}
                                        <span v-if="action.attack_bonus">, hit: {{ action.attack_bonus }}
                                        <span v-if="action.damage_dice">, dmg: {{ action.damage_dice }}
                                        <span v-if="action.damage_bonus">+{{ action.damage_bonus }}</span></span>
                                    </li>
                                    <li v-for="action in monster.special_abilities" :title="action.desc">
                                        {{ action.name }},
                                        hit: +{{ action.attack_bonus}}
                                        <div v-if="action.name.includes('Spellcasting')">
                                            <li v-for="spelllevel in stringToSpellObject(action.desc)">
                                                {{ spelllevel.level }}: ({{ spelllevel.slots }})
                                                <span v-for="sp in spelllevel.spells">
                                                    <button @click="openSpellModal(sp)">{{sp}}</button>
                                                </span>
                                                
                                            </li>
                                        </div>
                                    </li>
                                    <li v-for="additionalWeapon in monster.additionalWeapon">
                                        <span>{{ additionalWeapon.name }}</span> <span>{{ additionalWeapon.damage }} {{ abilityScoreModifier(monster.strength) }}</span>
                                        <span>{{ additionalWeapon.properties ? additionalWeapon.properties.join(', ') : additionalWeapon.properties }}</span>
                                        <a @click="removeAttribute(monster.id, additionalWeapon.name, 'Weapon')">
                                            <i class="fas fa-minus-square"></i>
                                        </a>
                                    </li>
                                    <li v-for="additionalSpell in monster.additionalSpell">
                                        <router-link target="_blank" :title="additionalSpell.text" :to="'spells?query='+ additionalSpell.name">{{ additionalSpell.name }}</router-link>
                                        <a @click="removeAttribute(monster.id, additionalSpell.name, 'Spell')">
                                            <i class="fas fa-minus-square"></i>
                                        </a>
                                    </li>
                                </td>
                                <td>
                                    {{ (monster.traits || []).join(', ') }} <br>
                                    <textarea v-model="monster.comment" id="" cols="30" rows="3"></textarea>
                                </td>
                                <td>
                                    <a @click="toggleInfo(monster)">info</a>
                                    <a @click="cloneMonster(monster)">clone</a>
                                    <a @click="copyMonster(monster)">copy</a>
                                    <a @click="openModalHandler(monster.id)">
                                        weapon
                                    </a>
                                    <div>CR: {{ monster.challenge_rating }}</div>
                                    <div>Exp: {{ monster.challenge_rating * 100 }}</div>
                                    <div>Hit Dice: {{ monster.hit_dice }}</div>
                                    <div>PartyMember: <input type="checkbox" id="checkbox" v-model="monster.isPartyMember"></div>
                                    <div>CurrentlyVisible: <input type="checkbox" id="checkbox" v-model="monster.currentlyVisible"></div>

                                </td>
                            </tr>
                        </tbody>
                    </table>
            </section>
            <dialog :open="openedAdditionalModal.modalState">
            
                <select multiple size="4" v-model="additionalWeapon">
                    <option v-for="weapon in weapons" :value="weapon" >{{ weapon.name }}</option>
                </select>
                <select multiple size="4" v-model="additionalSpell">
                    <option v-for="spell in spells" :value="spell" >{{ spell.name }}</option>
                </select>
                <button class="button" @click="additionalStuffForMonster(additionalWeapon, additionalSpell)">Save</button>
                <button @click="closeModal" aria-label="close">x</button>
            </dialog>

            <dialog :open="monsterModal.modalState">
                <monster-stat-block :monster="monsterModal.monster" />
                <button @click="removeMonster(monsterModal.monster)">Remove</button>
                <button @click="closeMonsterModal" aria-label="close">x</button>
            </dialog>
        </section>
    `;

const encounter = {
    computed: {
        encounter() {
            const enc = this.$store.state.encounter.monsters;
            return Object.keys(enc).map(singleKey => {
                return enc[singleKey];
            }).sort((a, b) => {
                return a.sortOrder - b.sortOrder;
            });
        },
        savedEncounters() {
            return Object.keys(this.$store.state.savedEncounters || {}) || [];
        },
        settings() {
            return this.$store.state.encounter.settings;
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
        },
        sideBarClass() {
            return `column ${ this.isSidebarActive ? 'is-three-quarters' : 'is-full'}`;
        },
        encounterExperience() {
            return Object.keys(this.encounter).reduce((newSum, singleMonsterKey) => {
                return newSum += (this.encounter[singleMonsterKey].challenge_rating * 100);
            }, 0);
        },
        encounterRating() {
            const enc = this.encounter;
            return Math.max(...Object.keys(enc).reduce((newSum, singleMonsterKey) => {
                return newSum.concat([enc[singleMonsterKey] ? enc[singleMonsterKey].challenge_rating : 0]);
            }, []));
        }
    },
    mounted() {
        if (this.name || this.$route.query.name) {
            this.loadEncounter(this.$route.query.name || this.name);
        }
    },
    methods: {
        abilityScoreModifier,
        generateHitPoints(monster) {
            monster.hit_points = chance.rpg(monster.hit_dice, {sum: true});
        },
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
        sideBarToggle() {
            this.isSidebarActive = !this.isSidebarActive;
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
            if (!name) return null;
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
        cloneMonster(monster) {
            let monsterNoId = Object.keys(monster).reduce((newObj, singlekey) => {
                if (singlekey !== 'id') {
                    newObj[singlekey] = monster[singlekey];
                    return newObj;
                }
                return newObj;
            }, {});
            this.$store.commit('addToEncounter', monsterNoId);
        },
        copyMonster(monster) {
            let monsterNoId = Object.keys(monster).reduce((newObj, singlekey) => {
                if (singlekey !== 'id') {
                    newObj[singlekey] = monster[singlekey];
                    return newObj;
                }
                return newObj;
            }, {});
            this.$store.commit('addToClipboard', monsterNoId);
        },
        pasteToEncounter() {
            this.$store.commit('pasteFromClipboard');
        },
        removeMonster(monster) {
            this.$store.commit('removeFromEncounter', monster.id);
            setTimeout(() => {
                this.$store.commit('toggleMonsterModal', {
                    modalState: false,
                    monster: {}
                });
            }, 40);
        },
        monsterMoveUp(monsterKey) {
            this.$store.commit('sortMonster', {
                monsterId: monsterKey,
                direction: 'up'
            });
        },
        monsterMoveDown(monsterKey) {
            this.$store.commit('sortMonster', {
                monsterId: monsterKey,
                direction: 'down'
            });
        },
        stringToSpellObject(string) {
            return null;
            if(!string) return null;

            return string
                .split('spells prepared:')[1]
                .split('|')
                .filter(Boolean)
                .map(singleLine => {
                    const level = singleLine.match(/\d(st|nd|d|th|ed)/g)[0];
                    const slots = singleLine
                        .match(/\(-?\d\)/g)[0]
                        .replace(/\(/g, '')
                        .replace(/\)/g, '');
                    const spells = singleLine
                        .replace(/\d(st|nd|d|th|ed)\(-?\d\):\s?/g, '')
                        .toLowerCase()
                        .split(',')
                        .map(singleSpellLine => {
                            return singleSpellLine.trim();
                        });
                    return {
                        level,
                        slots,
                        spells
                    };
                });
        },
        openSpellModal(spell) {
            const spellData = this.$store.state.spellsData.find(singleSpell => {
                console.log(singleSpell.name.toLowerCase(), spell.toLowerCase())
                return singleSpell.name.toLowerCase().includes(spell.toLowerCase());
            });
            console.log(spellData);
            this.$store.commit('toggleGlobalDialog', { open: true, content: `
                    <h2>${ spellData.name }</h2>
                    <p>${ spellData.time }</p>
                    <p>${ spellData.range }</p>
                    <p>${ (spellData.components || []).join(',') }</p>
                    <p>${ spellData.text }</p>
                    <p>${ (spellData.classes || []).join(',') }</p>
                    <p>${ spellData.duration }</p>
                    <p>${ spellData.level }</p>
                    <p>Ritual: ${ spellData.ritual }</p>
                    <p>Material: ${ spellData.material }</p>
                    <p v-if="spellData.ritual">Ritual</p>
                    <p>${ spellData.school }</p>` });
        }
    },
    data() {
        return {
            additionalWeapon: null,
            additionalSpell: null,
            name: '',
            tempEncounter: '',
            isSidebarActive: false
        };
    },
    template
};

export default encounter;
