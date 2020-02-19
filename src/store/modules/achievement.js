import axios from "axios";

const achievementModule = {
  state: {
    achievements: [],
  },
  getters: {
    getAchievements(state) {
      return state.achievements;
    },
  },
  mutations: {
    addAchievements(state, payload) {
      state.achievements = payload;
    },
    createAchievement(state, payload) {
      state.achievements = payload;
    },
    fetchAchievements(state, payload) {
      state.achievements = payload;
    },
  },
  actions: {
    addAchievements(context, payload) {
      context.commit('addAchievements', payload);
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
  }
};

export default achievementModule;
