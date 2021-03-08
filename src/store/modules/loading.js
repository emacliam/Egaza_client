const state = {
    load: ""
};

const getters = {
    load: state => state.loading
};

const actions = {
    async Loading({ commit }, data) {
        if (data) {
            commit("setLoading", data);
        }
    }
};

const mutations = {
    setLoading: (state, data) => {
        state.load = data;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
