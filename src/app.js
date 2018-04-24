// Data
import monstersData from '../data/monsters.js';
import spellsData from '../data/spells.js';
import weaponsData from '../data/weapons.js';

// Pages
import monsters from './monsters.js';
import spells from './spells.js';
import party from './party.js';
import weapons from './weapons.js';
import encounter from './encounter.js';
import encounterTable from './encounter-table.js';
import misc from './misc.js';

const routes = [
    { path: '/', redirect: '/encounter' },
    { path: '/monsters', component: monsters },
    { path: '/spells', component: spells },
    { path: '/party', component: party },
    { path: '/weapons', component: weapons },
    { path: '/encounter', component: encounter },
    { path: '/encounterTable', component: encounterTable },
    { path: '/misc', component: misc }
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
        weaponsData,
        additionalModal: { modalState: false },
        monsterModal: { modalState: false, monster: {} },
        encounter: {},
        savedEncounters:
            JSON.parse(localStorage.getItem('savedEncounter')) || {}
    },
    mutations: {
        addToEncounter(state, monster) {
            var md5hash = cryptofoo.hash(
                'md5',
                monster.name + new Date().getTime()
            );
            Vue.set(
                state.encounter,
                md5hash,
                Object.assign({ id: md5hash }, monster)
            );
        },
        addStuffToMonster(
            state,
            { monsterId, additionalWeapon, additionalSpell }
        ) {
            let singleMonster = state.encounter[monsterId];

            singleMonster['additionalWeapon'] =
                singleMonster['additionalWeapon'] &&
                !singleMonster['additionalWeapon'].filter(
                    ({ name }) => name != additionalWeapon.name
                )
                    ? singleMonster['additionalWeapon'].concat(additionalWeapon)
                    : additionalWeapon;

            singleMonster['additionalSpell'] =
                singleMonster['additionalSpell'] &&
                !singleMonster['additionalSpell'].filter(
                    ({ name }) => name != additionalSpell.name
                )
                    ? singleMonster['additionalSpell'].concat(additionalSpell)
                    : additionalSpell;

            Vue.set(state.encounter, monsterId, singleMonster);
        },
        removeWeaponFromMonster(
            state,
            { monsterId, weaponName, attributeName }
        ) {
            let singleMonster = state.encounter[monsterId];

            singleMonster['additional' + attributeName] = singleMonster[
                'additional' + attributeName
            ].filter(singleWeapon => {
                return singleWeapon.name != weaponName;
            });
            Vue.set(state.encounter, monsterId, singleMonster);
        },
        removeFromEncounter(state, monsterId) {
            state.encounter = Object.keys(state.encounter).reduce(
                (newObj, singleMonsterKey) => {
                    if (singleMonsterKey === monsterId) {
                        return newObj;
                    }
                    newObj[singleMonsterKey] =
                        state.encounter[singleMonsterKey];
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
            state.encounter = {};
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
            }
        }
    }
});

const template = `
    <main>
        <div class="container main-container">
            <div class="tabs">
              <ul>
                <li><router-link to="/monsters">Monsters</router-link></li>
                <li><router-link to="/spells">Spells</router-link></li>
                <li><router-link to="/weapons">Weapons</router-link></li>
                <li><router-link to="/encounterTable">Encounter Table <span v-if="Object.keys($store.state.encounter).length">({{ Object.keys($store.state.encounter).length }})</span></router-link></li>
                <li><router-link to="/encounter">Encounters <span v-if="Object.keys($store.state.encounter).length">({{ Object.keys($store.state.encounter).length }})</span></router-link></li>
                <li><router-link to="/party">Party <span v-if="$store.state.party.length">({{ $store.state.party.length }})</span></router-link></li>
                <li><router-link to="/misc">Misc</router-link></li>
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
