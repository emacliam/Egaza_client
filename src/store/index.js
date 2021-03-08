import Vue from "vue";
import Vuex from "vuex";
import auth from "@/store/modules/auth";
import jobs from "@/store/modules/jobs";
import listings from "@/store/modules/listings";
import loading from "@/store/modules/loading";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        auth,
        listings,
        loading,
        jobs
    }
});
