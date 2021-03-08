import axios from "@/axios";
import router from "@/router/index";
const state = {
    gallery: localStorage.getItem("gallery") || [],
    checkpassword: localStorage.getItem("checkpassword") || 0
};

const getters = {
    gallery: state => state.gallery,
    checkpassword: state => state.checkpassword
};

const actions = {
    async ListingStore({ commit }, data) {
        if (data) {
            localStorage.setItem("gallery", data.userData.gallery);
            commit("setListingGallery", data.userData.gallery);
            return { success: true };
        } else {
            return { data: data, success: false };
        }
    },
    async Checkpass({ commit }, input) {
        const check = input.data;
        if (input) {
            localStorage.setItem("checkpassword", check);
            commit("setCheckpass", check);
            return { success: true };
        } else {
            return { success: false };
        }
    }
};

const mutations = {
    setListingGallery: (state, gallery) => {
        state.gallery = gallery;
    },
    setCheckpass: (state, data) => {
        state.checkpassword = data;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
