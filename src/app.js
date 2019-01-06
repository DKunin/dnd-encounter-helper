// Data
import monstersData, { genericMonster } from '../data/monsters.js';

import {
    spellCasterClasses,
    spellsData,
    spellsLevels
} from '../data/spells.js';
import traits from '../data/traits.js';
import weaponsData from '../data/weapons.js';

// Pages
import monsters from './monsters.js';
import spells from './spells.js';
import party from './party.js';
import weapons from './weapons.js';
import encounterTable from './encounter-table.js';
import misc from './misc.js';
import music from './music.js';
import map from './map.js';
import names from './names.js';

const routes = [
    { path: '/', redirect: '/encounter' },
    { path: '/monsters', component: monsters },
    { path: '/spells', component: spells },
    { path: '/party', component: party },
    { path: '/weapons', component: weapons },
    { path: '/encounter', component: encounterTable },
    { path: '/misc', component: misc },
    { path: '/music', component: music },
    { path: '/map', component: map },
    { path: '/names', component: names }
];

const router = new VueRouter({ routes });

const encounterPersist = store => {
    store.subscribe((mutation, state) => {
        if (
            mutation.type === 'saveEncounter' ||
            mutation.type === 'removeEncounter'
        ) {
            localStorage.setItem(
                'savedEncounter',
                JSON.stringify(state.savedEncounters)
            );
        }
    });
};
const partyPersist = store => {
    store.subscribe((mutation, state) => {
        if (
            mutation.type === 'addToParty' ||
            mutation.type === 'removeFromParty'
        ) {
            localStorage.setItem('savedParty', JSON.stringify(state.party));
        }
    });
};

const store = new Vuex.Store({
    plugins: [encounterPersist, partyPersist],
    state: {
        party: JSON.parse(localStorage.getItem('savedParty')) || [],
        monstersData,
        spellsData,
        spellsLevels,
        spellCasterClasses,
        weaponsData,
        additionalModal: { modalState: false },
        monsterModal: { modalState: false, monster: {} },
        encounter: {
            settings: {
                mapImage: null
            },
            monsters: {}
        },
        tempClipboard: {},
        savedEncounters:
            JSON.parse(localStorage.getItem('savedEncounter')) || {}
    },
    mutations: {
        addToEncounter(state, monster) {
            var md5hash = cryptofoo.hash(
                'md5',
                monster.name + new Date().getTime()
            );
            const len = Object.keys(state.encounter.monsters).length;
            Vue.set(
                state.encounter.monsters,
                md5hash,
                Object.assign(
                    { id: md5hash },
                    monster,
                    {
                        traits: chance.pickset(
                            traits.traits,
                            chance.integer({ min: 1, max: 3 })
                        )
                    },
                    {
                        sortOrder: len
                    }
                )
            );
        },
        addPartyMemberToEncounter(state, partyMember) {
            const monster = Object.assign({}, genericMonster, partyMember, {
                currentlyVisible: true,
                isPartyMember: true
            });
            var md5hash = cryptofoo.hash(
                'md5',
                monster.name + new Date().getTime()
            );
            const len = Object.keys(state.encounter.monsters).length;
            Vue.set(
                state.encounter.monsters,
                md5hash,
                Object.assign({ id: md5hash }, monster, {
                    sortOrder: len
                })
            );
        },
        addToClipboard(state, monster) {
            Vue.set(state, 'tempClipboard', monster);
        },
        pasteFromClipboard(state) {
            var md5hash = cryptofoo.hash(
                'md5',
                state.tempClipboard.name + new Date().getTime()
            );

            Vue.set(
                state.encounter.monsters,
                md5hash,
                Object.assign({ id: md5hash }, state.tempClipboard)
            );
        },
        addStuffToMonster(
            state,
            { monsterId, additionalWeapon, additionalSpell }
        ) {
            let singleMonster = state.encounter.monsters[monsterId];

            singleMonster.additionalWeapon =
                singleMonster.additionalWeapon &&
                !singleMonster.additionalWeapon.filter(
                    ({ name }) => name != additionalWeapon.name
                )
                    ? singleMonster.additionalWeapon.concat(additionalWeapon)
                    : additionalWeapon;

            singleMonster.additionalSpell =
                singleMonster.additionalSpell &&
                !singleMonster.additionalSpell.filter(
                    ({ name }) => name != additionalSpell.name
                )
                    ? singleMonster.additionalSpell.concat(additionalSpell)
                    : additionalSpell;

            Vue.set(state.encounter.monsters, monsterId, singleMonster);
        },
        removeWeaponFromMonster(
            state,
            { monsterId, weaponName, attributeName }
        ) {
            let singleMonster = state.encounter.monsters[monsterId];

            singleMonster['additional' + attributeName] = singleMonster[
                'additional' + attributeName
            ].filter(singleWeapon => {
                return singleWeapon.name != weaponName;
            });
            Vue.set(state.encounter.monsters, monsterId, singleMonster);
        },
        setMonsterPosition(state, { id, x, y }) {
            let singleMonster = state.encounter.monsters[id];

            singleMonster.x = x;
            singleMonster.y = y;
            Vue.set(state.encounter.monsters, id, singleMonster);
        },
        removeFromEncounter(state, monsterId) {
            state.encounter.monsters = Object.keys(state.encounter.monsters).reduce(
                (newObj, singleMonsterKey) => {
                    if (singleMonsterKey === monsterId) {
                        return newObj;
                    }
                    newObj[singleMonsterKey] =
                        state.encounter.monsters[singleMonsterKey];
                    return newObj;
                },
                {}
            );
        },
        saveEncounter(state, encounter) {
            state.savedEncounters[encounter.name] = encounter;
        },
        removeEncounter(state, name) {
            const savedEncounters = Object.keys(state.savedEncounters).reduce(
                (newObj, singleKey) => {
                    if (singleKey === name) {
                        return newObj;
                    }

                    newObj = Object.assign({}, newObj, {
                        [singleKey]: state.savedEncounters[singleKey]
                    });
                    return newObj;
                },
                {}
            );
            state.savedEncounters = savedEncounters;
        },
        loadEncounter(state, name) {
            state.encounter = JSON.parse(state.savedEncounters[name].data);
        },
        importEncounter(state, encounterData) {
            state.encounter = JSON.parse(encounterData);
        },
        clearEncounter(state) {
            state.encounter = {
                settings: {},
                monsters: {}
            };
        },
        addToParty(state, partyMember) {
            var md5hash =
                partyMember.partyMemberId ||
                cryptofoo.hash('md5', partyMember.name + new Date().getTime());
            if (partyMember.partyMemberId) {
                state.party = state.party.reduce((newArray, singleEntity) => {
                    if (
                        partyMember.partyMemberId === singleEntity.partyMemberId
                    ) {
                        return newArray.concat([partyMember]);
                    }
                    return newArray.concat([singleEntity]);
                }, []);
            } else {
                state.party = state.party.concat([
                    Object.assign(partyMember, { partyMemberId: md5hash })
                ]);
            }
        },
        removeFromParty(state, partyMemberId) {
            state.party = state.party.filter(singleMember => {
                return singleMember.partyMemberId !== partyMemberId;
            });
        },
        toggleModal(state, newState) {
            state.additionalModal = newState;
        },
        toggleMonsterModal(state, newState) {
            state.monsterModal = {
                modalState: newState.modalState,
                monster: newState.monster
            };
        },
        sortMonster(state, opts) {
            const encKeys = Object.keys(state.encounter.monsters);
            let enc = encKeys.map(singleKey => state.encounter.monsters[singleKey]);

            enc = enc.reduce((newEnc, singleMonster) => {
                if (
                    singleMonster.id === opts.monsterId &&
                    opts.direction === 'up'
                ) {
                    singleMonster.sortOrder = singleMonster.sortOrder - 1;
                } else if (
                    singleMonster.id === opts.monsterId &&
                    opts.direction === 'down'
                ) {
                    singleMonster.sortOrder = singleMonster.sortOrder + 1;
                }
                newEnc[singleMonster.id] = singleMonster;
                return newEnc;
            }, {});

            state.encounter.monsters = enc;
        },
        toggleMonsterVisibility(state, opts) {
            state.encounter.monsters[opts.id].currentlyVisible =  !state.encounter.monsters[opts.id].currentlyVisible;
        }
    }
});

const template = `
    <main>
        <div class="container main-container">
            <div class="tabs">
                <ul>
                    <li>
                        <router-link to="/monsters">Monsters</router-link>
                    </li>
                    <li>
                        <router-link to="/spells">Spells</router-link>
                    </li>
                    <li>
                        <router-link to="/weapons">Weapons</router-link>
                    </li>
                    <li>
                        <router-link to="/encounter">Encounters</span></router-link>
                    </li>
                    <li>
                        <router-link to="/party">Party</router-link>
                    </li>
                    <li>
                        <router-link to="/music">Music</router-link>
                    </li>
                    <li>
                        <router-link to="/misc">Misc</router-link>
                    </li>
                    <li>
                        <router-link to="/map">Map</router-link>
                    </li>
                    <li>
                        <router-link to="/names">Names</router-link>
                    </li>
                </ul>
            </div>
            <router-view />
        </div>
        <footer class="footer">
            <div class="container">
                <div class="content has-text-centered">
                    <p>
                        What do they see, what do they hear, what do they smell, how do they feel, what enemies look like
                    </p>
                </div>
            </div>
        </footer>
    </main>
`;

const app = {
    router,
    el: '#app',
    template,
    store,
    name: 'app',
    data() {
        return {};
    }
};

export default app;
