const template = `
        <div>
            <p>
              HP: {{ monster.hit_points }} AC: {{ monster.armor_class }}
            </p>
            <ul>
                <li v-for="action in monster.actions" :title="action.desc">
                    {{ action.name }},
                    hit: +{{ action.attack_bonus}}
                    <span v-if="action.damage_dice">, dmg: {{ action.damage_dice }}
                    <span v-if="action.damage_bonus">+{{ action.damage_bonus }}</span></span>
                </li>
            </ul>
        </div>
    `;

const monsterShortStat = {
    props: {
         monster: {
            type: Object,
            default: {}
        }
    },
    template
};

export default monsterShortStat;
