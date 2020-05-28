import axios from "axios";

const achievementModule = {
  state: {
    achievements: [],
    basicUrl:"https://hci-lab-sust-api.herokuapp.com/",
    localUrl:"http://localhost:9001/"
  },
  getters: {
    getAchievements(state) {
      return state.achievements;
    },
  },
  mutations: {
    createAchievement(state, payload) {
      state.achievements.push(payload);
    },
    fetchAchievements(state, payload) {
      state.achievements = payload;
    },
  },
  actions: {

    createAchievement(context, payload) {
      let bodyFormData = new FormData();
      bodyFormData.set('title', payload.title);
      bodyFormData.set('description', payload.description);
      bodyFormData.append('achievmentImage', payload.achievementImage);

      let config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': 'Bearer ' + localStorage.getItem("user-token"),
        }
      };
      return  axios.post(this.basicUrl+'achievments', bodyFormData, config).then(response => {
        context.commit('createAchievement', response.data);
        return response;
      });
    },
    fetchAchievements(context) {
      axios.get(this.basicUrl+'achievments').then(response => {
        console.log(response.data);
        context.commit('fetchAchievements', response.data);
      }).catch(function (err) {
        console.log(err)

      });
    },
    onDeleteAchievement(context, payload) {
      let config = {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem("user-token"),
        }
      };
      return axios.delete(this.basicUrl+'achievments/'+payload, config)
        .then(response=>{
          return response;
        }).catch(err=>{
          return err;
        })
    },
  }
};

export default achievementModule;
