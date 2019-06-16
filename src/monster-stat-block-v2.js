const template = `
        
            <div id="stat-block" class="stat-block wide">
                <hr class="orange-border">
                <div class="section-left">
                    <div class="creature-heading">
                        <h1 id="monster-name">{{ monster.name }}</h1>
                        <h2 id="monster-type">{{ monster.size }} {{ monster.type }}, {{ monster.alignment }}</h2>
                    </div> <!-- creature heading -->
                    <svg height="5" width="100%" class="tapered-rule">
                        <polyline points="0,0 400,2.5 0,5"></polyline>
                    </svg>
                    <div class="top-stats">
                        <div class="property-line first">
                            <h4>Armor Class</h4>
                            <p id="armor-class">{{ monster.armor_class }}</p>
                        </div> <!-- property line -->
                        <div class="property-line">
                            <h4>Hit Points</h4>
                            <p id="hit-points">{{ monster.hit_points }} {{ monster.hit_dice }}</p>
                        </div> <!-- property line -->
                        <div class="property-line last">
                            <h4>Speed</h4>
                            <p id="speed">{{ monster.speed }}</p>
                        </div> <!-- property line -->
                        <svg height="5" width="100%" class="tapered-rule">
                            <polyline points="0,0 400,2.5 0,5"></polyline>
                        </svg>
                        <div class="scores">
                            <div class="scores-strength">
                                <h4>STR</h4>
                                <p id="strpts">{{ monster.strength }} ({{abilityScoreModifier(monster.strength)}})</p>
                            </div> <!-- scores strength -->
                            <div class="scores-dexterity">
                                <h4>DEX</h4>
                                <p id="dexpts">{{ monster.dexterity }} ({{abilityScoreModifier(monster.dexterity)}})</p>
                            </div> <!-- scores dexterity -->
                            <div class="scores-constitution">
                                <h4>CON</h4>
                                <p id="conpts">{{ monster.constitution }} ({{abilityScoreModifier(monster.constitution)}})</p>
                            </div> <!-- scores constitution -->
                            <div class="scores-intelligence">
                                <h4>INT</h4>
                                <p id="intpts">{{ monster.intelligence }} ({{abilityScoreModifier(monster.intelligence)}})</p>
                            </div> <!-- scores intelligence -->
                            <div class="scores-wisdom">
                                <h4>WIS</h4>
                                <p id="wispts">{{ monster.wisdom }} ({{abilityScoreModifier(monster.wisdom)}})</p>
                            </div> <!-- scores wisdom -->
                            <div class="scores-charisma">
                                <h4>CHA</h4>
                                <p id="chapts">{{ monster.charisma }} ({{abilityScoreModifier(monster.charisma)}})</p>
                            </div> <!-- scores charisma -->
                        </div> <!-- scores -->
                        <svg height="5" width="100%" class="tapered-rule">
                            <polyline points="0,0 400,2.5 0,5"></polyline>
                        </svg>
                        <span id="properties-list"><div class="property-line first"> <h4>Senses</h4> <p>{{monster.senses}}</p></div><!-- property line --><div class="property-line"> <h4>Languages</h4> <p>{{monster.languages}}</p></div><!-- property line --></span>
                        <div class="property-line last">
                            <h4>Challenge</h4>
                            <p id="challengeRating">{{monster.challenge_rating}}</p>
                        </div> <!-- property line -->
                    </div> <!-- top stats -->
                    <svg height="5" width="100%" class="tapered-rule">
                        <polyline points="0,0 400,2.5 0,5"></polyline>
                    </svg>
                    <div class="actions">
                        <span id="traits-list-left">
                                <h3 v-if="monster.legendary_actions && monster.special_abilities" >Actions</h3>
                                <div v-if="monster.legendary_actions && monster.special_abilities" class="property-block" v-for="action in monster.actions" :title="action.desc">
                                    <h4>{{ action.name }}</h4>
                                    <p v-if="action.desc">{{ action.desc}}</p>
                                    <i v-if="action.attack_bonus">, hit: +{{ action.attack_bonus}}</i>
                                    <span v-if="action.damage_dice">, dmg: {{ action.damage_dice }} <span v-if="action.damage_bonus">+{{ action.damage_bonus }}</span></span>
                                </div>


                        </span>
                    </div> <!-- actions -->
                </div> <!-- section left -->
                <div class="section-right">
                    <div class="actions">
                        <span id="traits-list-right">
                            <h3 v-if="!monster.legendary_actions || !monster.special_abilities" >Actions</h3>
                            <div v-if="!monster.legendary_actions || !monster.special_abilities" class="property-block" v-for="action in monster.actions" :title="action.desc">
                                <h4>{{ action.name }}</h4>
                                <p v-if="action.desc">{{ action.desc}}</p>
                                <i v-if="action.attack_bonus">, hit: +{{ action.attack_bonus}}</i>
                                <span v-if="action.damage_dice">, dmg: {{ action.damage_dice }} <span v-if="action.damage_bonus">+{{ action.damage_bonus }}</span></span>
                            </div>
                            <div class="property-block">
                                <h3 v-if="monster.legendary_actions">Legendary Actions</h3>
                                    <div class="property-block" v-for="action in monster.legendary_actions" :title="action.desc">
                                        <h4>{{ action.name }}</h4>
                                        <p v-if="action.desc">{{ action.desc}}</p>
                                        <i v-if="action.attack_bonus">, hit: +{{ action.attack_bonus}}</i>
                                        <span v-if="action.damage_dice">, dmg: {{ action.damage_dice }} <span v-if="action.damage_bonus">+{{ action.damage_bonus }}</span></span>
                                    </div>

                                <h3 v-if=" monster.special_abilities">Special Abilities</h3>
                                    <div class="property-block" v-for="action in monster.special_abilities" :title="action.desc">
                                        <h4>{{ action.name }}</h4>
                                        <p v-if="action.desc">{{ action.desc}}</p>
                                        <i v-if="action.attack_bonus">, hit: +{{ action.attack_bonus}}</i>
                                        <span v-if="action.damage_dice">, dmg: {{ action.damage_dice }} <span v-if="action.damage_bonus">+{{ action.damage_bonus }}</span></span>
                                    </div>
                                <!-- property block --></span>
                    </div> <!-- actions -->
                </div> <!-- section right -->
                <hr class="orange-border bottom">
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
