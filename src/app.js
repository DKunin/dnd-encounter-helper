
import monsters from './monsters.js';
import spells from './spells.js';
import weapons from './weapons.js';
import monstersData from '../data/monsters.js';
import spellsData from '../data/spells.js';
import weaponsData from '../data/weapons.js';

const routes = [
    { path: '/' },
    { path: '/monsters', component: monsters },
    { path: '/spells', component: spells },
    { path: '/weapons', component: weapons }
    // { path: '/settings', component: settings, name: 'settings' }
];

const router = new VueRouter({ routes });

const store = new Vuex.Store({
    state: {
        monstersData,
        spellsData,
        weaponsData
    },
    mutations: {
    }
});

const template = `
    <div class="container main-container">
        <div class="tabs">
          <ul>
            <li><router-link to="/monsters">Monsters</router-link></li>
            <li><router-link to="/spells">Spells</router-link></li>
            <li><router-link to="/weapons">Weapons</router-link></li>
            <li><router-link to="/encounters">Encounters</router-link></li>
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
        return {
        };
    }
};

export default app;
