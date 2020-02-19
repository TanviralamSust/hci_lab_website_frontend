import axios from "axios";
import Vue from 'vue'
import Vuex from 'vuex';
Vue.use(Vuex);

const storage = {
  state: {
    notices: [],
    projects: [],
    members: [],
    achievements: [],
    token: localStorage.getItem("user-token") || "",
    status: "",
    hasLoadedOnce: false,
    refreshToken: localStorage.getItem("refresh-token") || "",
  },
  getters: {
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
      state.notices = payload;
    },
    addProjects(state, payload) {
      state.projects = payload;
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
    },
    createProject(state, payload) {
      state.projects.push(payload);
    },
    getProjects(state, payload) {
      state.projects = payload;
    },
    createMember(state, payload) {
      console.log(payload);
    },
    fetchMembers(state, payload) {
      state.members = payload;
    },
    createAchievement(state, payload) {
      state.achievements = payload;
    },
    fetchAchievements(state, payload) {
      state.achievements = payload;
    },
    setToken(state, payload) {
      state.token = payload;
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
    createProject(context, payload) {
      let bodyFormData = new FormData();
      bodyFormData.set('title', payload.title);
      bodyFormData.set('coordinators', payload.coordinators);
      bodyFormData.set('description', payload.description);
      bodyFormData.set('duration', payload.duration);
      bodyFormData.append('projectImage', payload.projectImage);

      console.log(this.state.token+" ==============>token");

      let config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': 'Bearer ' + localStorage.getItem("user-token"),
        }
      };
      let self = this;
        // if(payload.count<5) {
          return  axios.post('http://localhost:9001/projects', bodyFormData, config).then(response => {
            context.commit('createProject', response.data);
            return response;
          })
        // }else {
        //   console.log(payload.count+" :---------");
        // }

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

    //   return new Promise((resolve, reject) => {
    //     axios.post('http://localhost:9001/projects',
    //       bodyFormData,
    //       config
    //     )
    //       .then(function (response) {
    //         //handle success
    //         console.log('1 -- : ' + response.data);
    //         context.commit('createProject', response.data);
    //         resolve(response);
    //       })
    //       .catch(function (err) {
    //         //handle error
    //         new Promise((resolve, reject) => {
    //           if (err.response.status === 401) {
    //             let body = {
    //               refreshToken: self.state.refreshToken,
    //             };
    //             axios.post('http://localhost:9001/token', body)
    //               .then(response => {
    //                 if (response.data.success === true) {
    //                   console.log('2 -- : ');
    //                   localStorage.setItem("user-token", response.data.token);
    //                   let configRef = {
    //                     headers: {
    //                       'Content-Type': 'multipart/form-data',
    //                       'Authorization': 'Bearer ' + response.data.token,
    //                     }
    //                   };
    //                   // resolve(response);
    //                   new Promise((resolve, reject) => {
    //                     axios.post('http://localhost:9001/projects',
    //                       bodyFormData,
    //                       configRef
    //                     ).then(response => {
    //                       console.log('3 -- : ');
    //                       console.log(JSON.stringify(response.data) + 'under refresh-----');
    //                       context.commit('createProject', response.data);
    //                       resolve(response);
    //                     }).catch(err => {
    //                       console.log('4 -- : ');
    //                       console.log(JSON.stringify(err) + '-----ref');
    //                       reject(err);
    //                     })
    //                   }).then(response=> {
    //                     resolve(response);
    //                   }).catch(err=>{
    //                     reject(err);
    //                   })
    //
    //                 } else {
    //                   console.log(5);
    //                   context.commit('logoutUser');
    //                   reject(response.data)
    //                   // return Promise.resolve(response.data);
    //                 }
    //               }).catch(err => {
    //                 console.log(6);
    //                 reject(err)
    //               });
    //           } else {
    //             reject(err.response);
    //           }
    //         }).then(response => {
    //           resolve(response);
    //         }).catch(err => {
    //           reject(err);
    //         })
    //       });
    //   })
    //
    // },
    getProjects(context) {
      axios.get('http://localhost:9001/projects').then(response => {
        console.log(response.data);
        context.commit('getProjects', response.data);
      }).catch(function (err) {
        console.log(err)

      });
    },
    logoutUser(context, payload) {
      context.commit('logoutUser')
    },
    createMember(context, payload) {
      let bodyFormData = new FormData();
      bodyFormData.set('firstName', payload.firstName);
      bodyFormData.set('lastName', payload.lastName);
      bodyFormData.set('email', payload.email);
      bodyFormData.set('researchInterest', payload.researchInterest);
      bodyFormData.set('designation', payload.designation);
      bodyFormData.set('currentWork', payload.currentWork);
      bodyFormData.append('memberImage', payload.memberImage);

      let config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': 'Bearer ' + this.state.token,
        }
      };
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:9001/members',
          bodyFormData,
          config
        )
          .then(function (response) {
            //handle success
            console.log(response.data);
            context.commit('createMember', response.data);
            resolve(response);
          })
          .catch(function (err) {
            //handle error
            console.log(JSON.stringify(err.response));
            if (err.response.status === 401) {
              console.log('handle refresh token error');
            }
            reject(err.response);
          });
      });
    },
    fetchMembers(context) {
      axios.get('http://localhost:9001/members').then(response => {
        console.log(response.data);
        context.commit('fetchMembers', response.data);
      }).catch(function (err) {
        console.log(err)

      });
    },
    createAchievement(context, payload) {
      let bodyFormData = new FormData();
      bodyFormData.set('title', payload.title);
      bodyFormData.set('description', payload.description);
      bodyFormData.append('achievementImage', payload.achievementImage);

      let config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': 'Bearer ' + this.state.token,
        }
      };
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:9001/achievments',
          bodyFormData,
          config
        )
          .then(function (response) {
            //handle success
            console.log(response.data);
            context.commit('createAchievement', response.data);
            resolve(response);
          })
          .catch(function (err) {
            //handle error
            console.log(JSON.stringify(err.response));
            if (err.response.status === 401) {

              console.log('handle refresh token error');
            }
            reject(err.response);
          });
      });
    },
    fetchAchievements(context) {
      axios.get('http://localhost:9001/achievments').then(response => {
        console.log(response.data);
        context.commit('fetchAchievements', response.data);
      }).catch(function (err) {
        console.log(err)

      });
    },
    sendContact(context, payload) {
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:9001/contact',payload).then(response=>{
          console.log(response.data);
          resolve(response.data);
        }).catch(err=>{
            console.log(err);
            reject(err);
        })
      })
    },
    onDeleteProject(context, paload) {
      return new Promise((resolve, reject) => {
        axios.delete()
      })
    }
  }


};

export default new Vuex.Store(storage);
