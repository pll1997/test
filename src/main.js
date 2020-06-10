import Vue from 'vue';
import App from './App';
import { router } from './router';
import Components from '@/config/components';
Vue.use(Components);
import { Tabbar, TabbarItem } from 'vant';
Vue.use(Tabbar).use(TabbarItem);

new Vue({
  router,
  el: '#app',
  render: h => h(App)
});
