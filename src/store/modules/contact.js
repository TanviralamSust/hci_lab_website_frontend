import axios from "axios";

const contactModule = {
  state: {
    basicUrl:"https://hci-lab-sust-api.herokuapp.com/",
    localUrl:"http://localhost:9001/"
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    sendContact(context, payload) {
      return new Promise((resolve, reject) => {
        axios.post(this.basicUrl+'contact',payload).then(response=>{
          console.log(response.data);
          resolve(response.data);
        }).catch(err=>{
          console.log(err);
          reject(err);
        })
      })
    },
  }
};

export default contactModule;
