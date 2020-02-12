export const storage = {
    state : {
        notices: [],
        projects: [],
        members:[],
    },
    getters : {
        getNotices(state) {
            return state.notices;
        },
        getProjects(state) {
            return state.projects;
        },
        getMembers(state) {
          return state.members;
        }
    },
    mutations: {
        addNotice(state, payload) {
            state.notices.push(payload);
        },
        addProject(state, payload) {
            state.projects= payload;
        },
        addMembers(state, payload) {
          state.members = payload;
        }
    },
    actions: {
        addProject(context, payload) {
            context.commit('addProject', payload);
        },
        addNotice(context, payload) {
            context.commit('addNotice', payload);
        },
        addMembers(context, payload) {
          context.commit('addMembers', payload);
        }
    }

}
