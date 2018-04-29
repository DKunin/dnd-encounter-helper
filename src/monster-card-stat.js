import abilityScoreModifier from './abilityScoreModifier.js';
const template = `
        <div class="tile is-2 is-vertical is-child">
            <label class="checkbox">
              <input type="checkbox">
              took turn
            </label>
            <a @click="cloneMonster(monster)">clone</a>
            <a @click="removeMonster(monster.id)">
                <i class="fas fa-minus-square"></i>
            </a>

            <div class="field is-horizontal">
              <div class="field-body">
                <input class="input" v-model="monster.name">
              </div>
            </div>

            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">Initiative</label>
              </div>
              <div class="field-body">
                <div class="field">
                    <input class="input" type="number" v-model="monster.current_initiative">
                </div>
              </div>
            </div>

            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">HP</label>
              </div>
              <div class="field-body">
                <div class="field">
                    <input class="input" type="number" v-model="monster.current_hit_points">
                </div>
              </div>
            </div>

            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">AC</label>
              </div>
              <div class="field-body">
                <div class="field">
                    <input class="input" type="number" v-model="monster.current_armor_class">
                </div>
              </div>
            </div>

            <div>
              HP: {{ monster.hit_points }} AC: {{ monster.armor_class }}
            </div>
            <slot></slot>
            <ul>
                <li v-for="action in monster.actions" :title="action.desc">
                    {{ action.name }},
                    hit: +{{ action.attack_bonus}}
                    <span v-if="action.damage_dice">, dmg: {{ action.damage_dice }}
                    <span v-if="action.damage_bonus">+{{ action.damage_bonus }}</span></span>
                </li>
            </ul>
            <details>
                <ul>
                     <li class="monster-card-additional-info">{{ monster.size }} / {{ monster.type }}</li>
                     <li class="monster-card-additional-info">
                         <ul>
                         <li>str: {{ monster.strength }} ({{ abilityScoreModifier(monster.strength) }})</li>
                         <li>dex: {{ monster.dexterity }} ({{ abilityScoreModifier(monster.dexterity) }})</li>
                         <li>con: {{ monster.constitution }} ({{ abilityScoreModifier(monster.constitution) }})</li>
                         <li>int: {{ monster.intelligence }} ({{ abilityScoreModifier(monster.intelligence) }})</li>
                         <li>wis: {{ monster.wisdom }} ({{ abilityScoreModifier(monster.wisdom) }})</li>
                         <li>cha: {{ monster.charisma }} ({{ abilityScoreModifier(monster.charisma) }})</li>
                         </ul>
                     </li>
                     <li class="monster-card-additional-info">
                         <span v-if="monster.damage_vulnerabilities">damage_vulnerabilities: {{ monster.damage_vulnerabilities }}</span>
                         <span v-if="monster.damage_resistances">damage_resistances: {{ monster.damage_resistances }}</span>
                         <span v-if="monster.damage_immunities">damage_immunities: {{ monster.damage_immunities }}</span>
                         <span v-if="monster.condition_immunities">condition_immunities: {{ monster.condition_immunities }}</span>
                         <span v-if="monster.languages">languages: {{ monster.languages }}</span>
                     </li>
                    <li class="monster-card-additional-info" v-for="action in monster.special_abilities" :title="action.desc">
                         {{ action.name }},
                         hit: +{{ action.attack_bonus}}
                     </li>
                     <li class="monster-card-additional-info" v-for="action in monster.legendary_actions" :title="action.desc">
                         {{ action.name }},
                         hit: +{{ action.attack_bonus}}
                     </li>
                     <li>
                         XP: {{ monster.challenge_rating * 100 }}
                     </li>
                 </ul>
                 <div class="field is-horizontal">
                     <textarea class="textarea" placeholder="notes" v-model="monster.notes"></textarea>
                 </div>
             </details>
            
        </div>
    `;



const monsterShortStat = {
    props: {
        openModal: {
            type: Function,
            default: () => {}
        },
        monsterId: {
            type: String,
            default: ''
        }
    },
    computed: {
        monster() {
            return this.$store.state.encounter[this.monsterId];
        },
        weapons() {
            return this.$store.state.weaponsData;
        },
        spells() {
            return this.$store.state.spellsData;
        }
    },
    methods: {
        abilityScoreModifier,
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
        removeMonster(monsterId) {
            if (window.confirm('Are you sure?')) {
                this.$store.commit('removeFromEncounter', monsterId);
            }
        },
    },
    template
};

export default monsterShortStat;
