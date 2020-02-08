import Vue from 'vue'
import App from './App.vue'

import Vuex from 'vuex';
Vue.use(Vuex);

import VueRouter from "vue-router";
Vue.use(VueRouter);

import { routes} from './routes/index'; 
const router = new VueRouter({
  routes
})

import {storage} from './store/index';
const store = new Vuex.store(storage);


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
