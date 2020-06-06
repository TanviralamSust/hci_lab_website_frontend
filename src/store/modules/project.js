import axios from "axios";

const projectModule = {
  state: {
    projects: [],
    basicUrl:"https://sust-hci-lab-api.herokuapp.com/",
    localUrl:"http://localhost:9001/"
  },
  getters: {
    getProjects(state) {
      return state.projects;
    },
  },
  mutations: {
    createProject(state, payload) {
      state.projects.push(payload);
    },
    getProjects(state, payload) {
      state.projects = payload;
    },
  },
  actions: {
    createProject(context, payload) {
      let bodyFormData = new FormData();
      bodyFormData.set('title', payload.title);
      bodyFormData.set('coordinators', payload.coordinators);
      bodyFormData.set('description', payload.description);
      bodyFormData.set('duration', payload.duration);
      bodyFormData.append('projectImage', payload.projectImage);


      let config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': 'Bearer ' + localStorage.getItem("user-token"),
        }
      };
      let self = this;
      // if(payload.count<5) {
      return  axios.post(this.basicUrl+'projects', bodyFormData, config).then(response => {
        context.commit('createProject', response.data);
        return response;
      });
      // }else {
      //   console.log(payload.count+" :---------");
      // }

    },
    getProjects(context) {
      axios.get(this.basicUrl+'projects').then(response => {
        console.log(response.data);
        context.commit('getProjects', response.data);
      }).catch(function (err) {
        console.log(err)

      });
    },
    onDeleteProject(context, paload) {
      let config = {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem("user-token"),
        }
      };
        return axios.delete(this.basicUrl+'projects/'+paload, config)
          .then(response=>{
            return response;
          }).catch(err=>{
            return err;
        })
    },
  }
};

export default projectModule;
