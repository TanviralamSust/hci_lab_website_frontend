import axios from "axios";
import Vue from 'vue'
import Vuex from 'vuex';
Vue.use(Vuex)

const storage = {
    state : {
        notices: [],
        projects: [],
        members:[],
        achievements:[],
        token: localStorage.getItem("user-token") || "",
        status: "",
        hasLoadedOnce: false,
        refreshToken: localStorage.getItem("refresh-token") || "",
    },
    getters : {
        getProjects(state) {
            return state.projects;
        },
        getMembers(state) {
          return state.members;
        },
        getAchievements(state) {
          return state.achievements;
        },
        getNotices(state) {
          return state.notices;
        },
        isAuthenticated(state) {
          return !!state.token;
        }
    },
    mutations: {
        addNotices(state, payload) {
            state.notices=payload;
        },
        addProjects(state, payload) {
            state.projects= payload;
        },
        addMembers(state, payload) {
          state.members = payload;
        },
        addAchievements(state, payload) {
          state.achievements = payload;
        },
        loginUser(state, payload) {
          state.token = payload.token;
          state.refreshToken = payload.refreshToken;
          state.status = "success";
        },
        loginError(state, payload) {
          state.status = "error";
        },
        logoutUser(state, payload) {
          state.token = "";
          state.refreshToken = "";
          state.status = "";
          localStorage.clear();
        }
    },
    actions: {
        addProjects(context, payload) {
            context.commit('addProjects', payload);
        },
        addNotices(context, payload) {
            context.commit('addNotices', payload);
        },
        addMembers(context, payload) {
          context.commit('addMembers', payload);
        },
        addAchievements(context, payload) {
          context.commit('addAchievements', payload);
        },
        loginUser(context, payload) {
          return new Promise((resolve, reject) => {
            axios.post('http://localhost:9001/login', payload)
              .then(resp => {
                localStorage.setItem("user-token", resp.data.token);
                localStorage.setItem("refresh-token", resp.data.refreshToken);
                context.commit('loginUser', resp.data);
                // dispatch(USER_REQUEST);
                resolve(resp);
              })
              .catch(err => {
                console.log(err);
                context.commit('loginError', err);
                localStorage.removeItem("user-token");
                localStorage.removeItem("refresh-token");
                reject(err);
              });
          });
        },
        logoutUser(context, payload) {
          context.commit('logoutUser')
        }
    }

};

export default new Vuex.Store(storage);
