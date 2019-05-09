const template = `
        <div class="monster-stat-block">
            <h3><strong>{{ monster.name }} </strong></h3>
            <h4>{{ monster.size }} {{ monster.type }}, {{ monster.alignment }}</h4>
            
            <ul>
                <li>Armor Class {{ monster.armor_class }}</li>
                <li>Hit Points {{ monster.hit_points }} {{ monster.hit_dice }}</li>
                <li>Speed {{ monster.speed }}</li>
            </ul>
            <ul>
                <li>STR {{ monster.strength }} {{abilityScoreModifier(monster.strength)}}</li>
                <li>DEX {{ monster.dexterity }} {{abilityScoreModifier(monster.dexterity)}}</li>
                <li>CON {{ monster.constitution }} {{abilityScoreModifier(monster.constitution)}}</li>
                <li>INT {{ monster.intelligence }} {{abilityScoreModifier(monster.intelligence)}}</li>
                <li>WIS {{ monster.wisdom }} {{abilityScoreModifier(monster.wisdom)}}</li>
                <li>CHA {{ monster.charisma }} {{abilityScoreModifier(monster.charisma)}}</li>
            </ul>
            <ul>
                <li v-if="monster.damage_vulnerabilities">Damage vulnerabilities: {{monster.damage_vulnerabilities}}</li>
                <li v-if="monster.damage_resistances">Damage resistances: {{monster.damage_resistances}}</li>
                <li v-if="monster.damage_immunities">Damage immunities: {{monster.damage_immunities}}</li>
                <li v-if="monster.condition_immunities">Condition immunities: {{monster.condition_immunities}}</li>
            </ul>

            <p>Senses {{monster.senses}}</p>
            <p>Languages {{monster.languages}}</p>

            <p>Challenge {{monster.challenge_rating}} </p>

            <div v-if="monster.special_abilities">
                <h5>Special Abilities</h5>
                <ul>
                    <li v-for="action in monster.special_abilities" :title="action.desc">
                        {{ action.name }},
                        <span v-if="action.desc">, {{ action.desc}}</span>
                        <span v-if="action.attack_bonus">, hit: +{{ action.attack_bonus}}</span>
                        <span v-if="action.damage_dice">, dmg: {{ action.damage_dice }}
                        <span v-if="action.damage_bonus">+{{ action.damage_bonus }}</span></span>
                    </li>
                </ul>
            </div>

            <div v-if="monster.actions">
                <h5>Actions</h5>
                <ul>
                    <li v-for="action in monster.actions" :title="action.desc">
                        {{ action.name }},
                        <span v-if="action.desc">, {{ action.desc}}</span>
                        <span v-if="action.attack_bonus">, hit: +{{ action.attack_bonus}}</span>
                        <span v-if="action.damage_dice">, dmg: {{ action.damage_dice }}
                        <span v-if="action.damage_bonus">+{{ action.damage_bonus }}</span></span>
                    </li>
                </ul>
            </div>

            <div v-if="monster.legendary_actions">
                <h5>Legendary Actions</h5>
                <ul>
                    <li v-for="action in monster.legendary_actions" :title="action.desc">
                        {{ action.name }}
                        <span v-if="action.desc">, {{ action.desc}}</span>
                        <span v-if="action.attack_bonus">, hit: +{{ action.attack_bonus}}</span>
                        <span v-if="action.damage_dice">, dmg: {{ action.damage_dice }}
                        <span v-if="action.damage_bonus">+{{ action.damage_bonus }}</span></span>
                    </li>
                </ul>
            </div>
        </div>
    `;

import abilityScoreModifier from './abilityScoreModifier.js';

const monsterShortStat = {
    methods: {
        abilityScoreModifier
    },
    props: {
         monster: {
            type: Object,
            default: {}
        }
    },
    template
};

export default monsterShortStat;
