import Vue from 'vue'
import App from './App.vue'

import Vuex from 'vuex';
Vue.use(Vuex);

import VueRouter from "vue-router";
Vue.use(VueRouter);

import { routes} from './routes/index';
const router = new VueRouter({
  routes,
  mode: 'history'
})

import {storage} from './store/index';
const store = new Vuex.Store(storage);

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
Vue.use(Vuetify, {
  iconfont: 'mdi'
});
const vuetify =  new Vuetify();

new Vue({
  el: '#app',
  router,
  store,
  vuetify,
  render: h => h(App)
})
