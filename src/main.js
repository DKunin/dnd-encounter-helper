import app from './app.js';
import monsterShortStat from './monster-short-stat.js';
import monsterCardStat from './monster-card-stat.js';
import monsterStatBlock from './monster-stat-block.js';
import dialogComponent from './dialog-component.js';
import monsters from './monsters.js';
import oline from './oline.js';
Vue.use(VueResource);

Vue.component('monsterShortStat', monsterShortStat);
Vue.component('monsterCardStat', monsterCardStat);
Vue.component('monstersTable', monsters);
Vue.component('monsterStatBlock', monsterStatBlock);
Vue.component('dialogComponent', dialogComponent);
Vue.component('oline', oline);
Vue.component('virtualList', VirtualList);

new Vue(app);
