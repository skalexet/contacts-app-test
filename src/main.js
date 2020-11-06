import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue'
import Home from './pages/Home';
import Info from './pages/Info';

Vue.use(VueRouter);

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/info/:id', component: Info },
  ],

  mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

// i could implement routing without vue-router ass well..
// but it's just for prettier routing without page reloading :) 