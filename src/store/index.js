export const storage = {
    state : {
        notices: [],
        projects: [],
    },
    getters : {
        getNotices(state) {
            return state.notice;
        },
        getProjects(state) {
            return state.projects;
        }
    },
    mutations: {
        addNotice(state, payload) {
            state.notices.push(payload);
        },
        addProject(state, payload) {
            state.projects.push(payload);
        }
    },
    actions: {
        addProject(context, payload) {
            context.commit('addProject', projects);
        },
        addNotice(context, payload) {
            context.commit('addNotice', payload);
        }
    }

}