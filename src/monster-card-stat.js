const template = `
        <div>
            <h4>{{ monster.name }}</h4>
            <label class="checkbox">
              <input type="checkbox">
              took turn
            </label>
            <a @click="cloneMonster(monster)">clone</a>

            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">Name</label>
              </div>
              <div class="field-body">
                <div class="field">
                    <input class="input"  v-model="monster.name">
                </div>
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

            <ul>
                <b v-if="monster.additional_weapon">Additional weapon</b>
                <li v-for="additional_weapon in monster.additional_weapon">
                    <span>{{ additional_weapon.name }}</span> <span>{{ additional_weapon.damage }}</span>
                    <span>{{ additional_weapon.properties ? additional_weapon.properties.join(', ') : additional_weapon.properties }}</span>
                </li>
                <b v-if="monster.additional_spells">Additional spells</b>
                <li v-for="additional_spells in monster.additional_spells">
                    <span>{{ additional_spells.name }}</span>
                </li>

                <li v-for="action in monster.actions" :title="action.desc">
                    {{ action.name }},
                    hit: +{{ action.attack_bonus}}
                    <span v-if="action.damage_dice">, dmg: {{ action.damage_dice }}
                    <span v-if="action.damage_bonus">+{{ action.damage_bonus }}</span></span>
                </li>
                <li class="monster-card-additional-info">{{ monster.size }} / {{ monster.type }}</li>
                <li class="monster-card-additional-info">
                    strength: {{ monster.strength }} ({{ abilityScoreModifier(monster.strength) }}),
                    dexterity: {{ monster.dexterity }} ({{ abilityScoreModifier(monster.dexterity) }}),
                    constitution: {{ monster.constitution }} ({{ abilityScoreModifier(monster.constitution) }}),
                    intelligence: {{ monster.intelligence }} ({{ abilityScoreModifier(monster.intelligence) }}),
                    wisdom: {{ monster.wisdom }} ({{ abilityScoreModifier(monster.wisdom) }}),
                    charisma: {{ monster.charisma }} ({{ abilityScoreModifier(monster.charisma) }})
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
            <details>
                <summary>Additions</summary>
                <div class="select is-multiple">
                    <select v-model="monster.additional_weapon" multiple size="4">
                        <option v-for="weapon in weapons" :value="weapon" >{{ weapon.name }}</option>
                    </select>
                </div>
                <div class="select is-multiple">
                    <select v-model="monster.additional_spells" multiple size="4">
                        <option v-for="spell in spells" :value="spell" >{{ spell.name }}</option>
                    </select>
                </div>
            </details>
        </div>
    `;

const monsterShortStat = {
    props: {
        monster: {
            type: Object,
            default: {}
        }
    },
    computed: {
        weapons() {
            return this.$store.state.weaponsData;
        },
        spells() {
            return this.$store.state.spellsData;
        }
    },
    methods: {
        abilityScoreModifier(amount) {
            const mod = Math.floor((amount - 10) / 2);
            return mod > 0 ? `+${mod}` : mod;
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
        }
    },
    template
};

export default monsterShortStat;
