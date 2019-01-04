import app from './app.js';
import monsterShortStat from './monster-short-stat.js';
import monsterCardStat from './monster-card-stat.js';
import monsters from './monsters.js';
import oline from './oline.js';
Vue.use(VueResource);

Vue.component('monsterShortStat', monsterShortStat);
Vue.component('monsterCardStat', monsterCardStat);
Vue.component('monstersTable', monsters);
Vue.component('oline', oline);

new Vue(app);
