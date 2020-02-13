export const storage = {
    state : {
        notices: [],
        projects: [],
        members:[],
        achievements:[],
    },
    getters : {
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
    },
    mutations: {
        addNotices(state, payload) {
            state.notices=payload;
        },
        addProjects(state, payload) {
            state.projects= payload;
        },
        addMembers(state, payload) {
          state.members = payload;
        },
        addAchievements(state, payload) {
          state.achievements = payload;
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
        }
    }

};
