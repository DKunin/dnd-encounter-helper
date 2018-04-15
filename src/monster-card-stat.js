const template = `
        <div>
            <h4>{{ monster.name }}</h4>
            <label class="checkbox">
              <input type="checkbox">
              took turn
            </label>

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
                <li v-if="monster.additional_weapon"> 
                    <span>{{ monster.additional_weapon.name }}</span>
                    <span>{{ monster.additional_weapon.damage }}</span>
                    <span>{{ monster.additional_weapon.properties }}</span>
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
                <li>
                    XP: {{ monster.challenge_rating * 100 }}
                </li>

            </ul>
            <div class="field is-horizontal">
                <textarea class="textarea" placeholder="notes"></textarea>
            </div>
            <label for="">Additional weapon</label>
            <div class="select">
                <select v-model="monster.additional_weapon">
                    <option v-for="weapon in weapons" :value="weapon" >{{ weapon.name }}</option>
                </select>
            </div>
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
        }
    },
    methods: {
        abilityScoreModifier(amount) {
            const mod =  Math.floor((amount - 10) / 2);
            return mod > 0 ? `+${mod}` : mod;
        } 
    },
    template
};

export default monsterShortStat;
