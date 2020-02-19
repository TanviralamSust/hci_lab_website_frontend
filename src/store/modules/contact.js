import axios from "axios";

const contactModule = {
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
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
  }
};

export default contactModule;
