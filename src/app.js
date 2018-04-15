import monsters from './monsters.js';
import spells from './spells.js';
import weapons from './weapons.js';
import encounter from './encounter.js';
import monstersData from '../data/monsters.js';
import spellsData from '../data/spells.js';
import weaponsData from '../data/weapons.js';

const routes = [
    { path: '/' },
    { path: '/monsters', component: monsters },
    { path: '/spells', component: spells },
    { path: '/weapons', component: weapons },
    { path: '/encounter', component: encounter }
];

const router = new VueRouter({ routes });

const encounterPersist = store => {
  store.subscribe((mutation, state) => {
    if (mutation.type === 'saveEncounter' || mutation.type === 'removeEncounter') {
        localStorage.setItem('savedEncounter', JSON.stringify(state.savedEncounters));
    }
  })
}

const store = new Vuex.Store({
    plugins: [encounterPersist],
    state: {
        monstersData,
        spellsData,
        weaponsData,
        encounter: [],
        savedEncounters: JSON.parse(localStorage.getItem('savedEncounter')) || {}
    },
    mutations: {
        addToEncounter(state, monster) {
            var md5hash = cryptofoo.hash(
                'md5',
                monster.name + new Date().getTime()
            );
            state.encounter = state.encounter.concat([
                Object.assign({ id: md5hash }, monster)
            ]);
        },
        removeFromEncounter(state, id) {
            state.encounter = state.encounter.filter(singleMonster => {
                return singleMonster.id !== id;
            });
        },
        saveEncounter(state, encounter) {
            state.savedEncounters[encounter.name] = encounter;
        },
        removeEncounter(state, name) {
            const savedEncounters = Object.keys(state.savedEncounters).reduce((newObj, singleKey) => {
                if (singleKey === name) {
                    return newObj;
                }

                newObj = Object.assign({}, newObj, { [singleKey]: state.savedEncounters[singleKey]});
                return newObj;
            }, {});
            state.savedEncounters = savedEncounters;
        },
        loadEncounter(state, name) {
            state.encounter = JSON.parse(state.savedEncounters[name].data);
        },
        importEncounter(state, encounterData) {
            state.encounter = JSON.parse(encounterData);
        }
    }
});

const template = `
    <div class="container main-container">
        <div class="tabs">
          <ul>
            <li><router-link to="/monsters">Monsters</router-link></li>
            <li><router-link to="/spells">Spells</router-link></li>
            <li><router-link to="/weapons">Weapons</router-link></li>
            <li><router-link to="/encounter">Encounters</router-link></li>
            <li><router-link to="/party">Party</router-link></li>
            <li><router-link to="/misc">Misc</router-link></li>
          </ul>
        </div>
        <router-view />
    </div>
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
