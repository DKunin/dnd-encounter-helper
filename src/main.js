import app from './app.js';
import monsterShortStat from './monster-short-stat.js';
import monsterCardStat from './monster-card-stat.js';
Vue.use(VueResource);

Vue.component('monsterShortStat', monsterShortStat);
Vue.component('monsterCardStat', monsterCardStat);
// Vue.directive('visibilityUpdate', visibilityUpdate);

new Vue(app);
