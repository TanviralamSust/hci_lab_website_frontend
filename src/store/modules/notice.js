import axios from "axios";

const noticeModule = {
  state: {
    notices: [],
  },
  getters: {
    getNotices(state) {
      return state.notices;
    },
  },
  mutations: {
    addNotices(state, payload) {
      state.notices = payload;
    },
  },
  actions: {
    addNotices(context, payload) {
      context.commit('addNotices', payload);
    },
  }
};

export default noticeModule;
