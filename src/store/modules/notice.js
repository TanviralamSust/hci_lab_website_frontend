import axios from "axios";

const noticeModule = {
  state: {
    notices: [],
  },
  getters: {
    getNotices(state) {
      return state.notices;
    },
    getLatestNotices(state) {
      return  state.notices.slice(0, 3);
    }
  },
  mutations: {
    createNotice(state,payload) {
      state.notices.push(payload);
    },
    fetchNotices(state, payload) {
      state.notices = payload
    }
  },
  actions: {
    createNotice(context, payload) {
      let bodyFormData = new FormData();
      bodyFormData.set('title', payload.title);
      bodyFormData.set('organization', payload.organization);
      bodyFormData.set('organiser', payload.organiser);
      bodyFormData.set('deadline', payload.deadline);
      bodyFormData.set('description', payload.description);
      bodyFormData.append('noteFile', payload.noteFile);
      console.log(JSON.stringify(this.notice));

      let config = {headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': 'Bearer '+ localStorage.getItem("user-token"),
        }
      };

      return  axios.post('http://localhost:9001/notes',
        bodyFormData, config)
        .then(response => {
        context.commit('createNotice', response.data);
        return response;
      });

    },

    fetchNotices(context) {
      axios.get('http://localhost:9001/notes').then(response => {
        console.log(JSON.stringify(response.data)+"  222222222222222");
        context.commit('fetchNotices', response.data);
      }).catch(function (err) {
        console.log(err);
      });
    },
    onDeleteNotices(context, payload) {
      let config = {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem("user-token"),
        }
      };
      return axios.delete('http://localhost:9001/notes/'+payload, config)
        .then(response=>{
          return response;
        }).catch(err=>{
          return err;
        })
    },
  }
};

export default noticeModule;
