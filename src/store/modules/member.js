import axios from "axios";

const memberModule = {
  state: {
    members: [],
  },
  getters: {
    getMembers(state) {
      return state.members;
    },
  },
  mutations: {
    addMembers(state, payload) {
      state.members = payload;
    },
    createMember(state, payload) {
      console.log(payload);
    },
    fetchMembers(state, payload) {
      state.members = payload;
    },
  },
  actions: {
    addMembers(context, payload) {
      context.commit('addMembers', payload);
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
  }
};

export default memberModule;
