import axios from "axios";

const authModule = {
  state: {
    token: localStorage.getItem("user-token") || "",
    status: "",
    hasLoadedOnce: false,
    refreshToken: localStorage.getItem("refresh-token") || "",
  },
  getters: {
    isAuthenticated(state) {
      return !!state.token;
    }
  },
  mutations: {
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
    },
    setToken(state, payload) {
      state.token = payload;
    },
  },
  actions: {
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

    sendRefreshToken(context) {
      return new Promise((resolve, reject )=>{
        let body = {
          refreshToken: this.state.refreshToken,
        };
        axios.post('http://localhost:9001/token', body).then(response =>{
          resolve(response);
        }).catch(err=>{
          reject(err);
        })
      })
    },
    setToken(context, payload) {
      context.commit('setToken',payload);
    },
    logoutUser(context, payload) {
      context.commit('logoutUser')
    },
  }
};

export default authModule;
