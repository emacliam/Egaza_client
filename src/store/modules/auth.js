import axios from "@/axios";
import router from "@/router/index";
const state = {
    userId: localStorage.getItem("userId") || null,
    userRole: localStorage.getItem("userRole") || null,
    userStatus: localStorage.getItem("userStatus") || null,
    user: localStorage.getItem("user") || null,
    email: localStorage.getItem("email") || null,
    firstName: localStorage.getItem("firstName") || null,
    lastName: localStorage.getItem("lastName") || null,
    image: localStorage.getItem("image") || null,
    /* gall for gallery */
    gallery: localStorage.getItem("gall") || [],
    verified_Profile: localStorage.getItem("verified_Profile") || null
};

const getters = {
    userId: state => state.userId,
    userRole: state => state.userRole,
    userStatus: state => state.userStatus,
    user: state => state.user,
    email: state => state.email,
    firstName: state => state.firstName,
    lastName: state => state.lastName,
    image: state => state.image,
    gall: state => state.gallery,
    verified_Profile: state => state.verified_Profile
};

const actions = {
    async userAuth({ commit }, data) {
        const response = await axios.post(data.url, data.userData);
        if (response.data.success) {
            localStorage.setItem("user", response.data.user);
            localStorage.setItem("email", response.data.email);
            localStorage.setItem("firstName", response.data.firstName);
            localStorage.setItem("lastName", response.data.lastName);
            localStorage.setItem("userId", response.data.userId);
            localStorage.setItem("userRole", response.data.userRole);
            localStorage.setItem("userStatus", response.data.userStatus);
            localStorage.setItem("image", response.data.image);
            localStorage.setItem(
                "verified_Profile",
                response.data.verified_Profile
            );
            commit("setUser", response.data.user);
            commit("setEmail", response.data.email);
            commit("setFirstName", response.data.firstName);
            commit("setLastName", response.data.lastName);
            commit("setUserId", response.data.userId);
            commit("setUserRole", response.data.userRole);
            commit("setUserStatus", response.data.userStatus);
            commit("setUserImage", response.data.image);
            commit("setVerifiedProfile", response.data.verified_Profile);

            // Manage redirect after auth
            let redirectPath = "/dashboard";

            // catch undefined error -> no harm, no display
            router.push({ path: redirectPath }).catch(err => err);

            return { sucess: true };
        } else {
            return response.data;
        }
    },
    async userUpdate({ commit }, data) {
        if (data) {
            localStorage.setItem("email", data.userData.email);
            localStorage.setItem("firstName", data.userData.firstName);
            localStorage.setItem("lastName", data.userData.lastName);
            localStorage.setItem("image", data.userData.image);
            localStorage.setItem("gallery", data.userData.gallery);
            commit("setEmail", data.userData.email);
            commit("setFirstName", data.userData.firstName);
            commit("setLastName", data.userData.lastName);
            commit("setUserImage", data.userData.image);
            commit("setListingGallery", data.userData.gallery);
            return { success: true };
        } else {
            return data;
        }
    },
    async Listing({ commit }, data) {
        if (data) {
            localStorage.setItem("gallery", data.userData.gallery);
            commit("setListingGallery", data.userData.gallery);
            return { success: true };
        } else {
            return data;
        }
    }
};

const mutations = {
    setUserId: (state, userId) => {
        state.userId = userId;
    },
    setUserRole: (state, userRole) => {
        state.userRole = userRole;
    },
    setUserStatus: (state, userStatus) => {
        state.userStatus = userStatus;
    },
    setUser: (state, user) => {
        state.user = user;
    },
    setEmail: (state, email) => {
        state.email = email;
    },
    setFirstName: (state, firstName) => {
        state.firstName = firstName;
    },
    setLastName: (state, lastName) => {
        state.lastName = lastName;
    },
    setUserImage: (state, image) => {
        state.image = image;
    },
    setListingGallery: (state, image) => {
        state.image = image;
    },
    setVerifiedProfile: (state, verified_Profile) => {
        state.verified_Profile = verified_Profile;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
