import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/styles/index.css";
import Toasted from "vue-toasted";
import CircularCountDownTimer from "vue-circular-count-down-timer";
import VueSocialSharing from "vue-social-sharing";
import Notifications from "vue-notification";
import VueContentPlaceholders from "vue-content-placeholders";
import VueMobileDetection from "vue-mobile-detection";

Vue.use(VueMobileDetection);
Vue.use(VueContentPlaceholders);
Vue.use(Notifications);
Vue.use(VueSocialSharing);
Vue.use(CircularCountDownTimer);
Vue.use(Toasted, {
    action: {
        text: "Cancel",
        onClick: (e, toastObject) => {
            toastObject.goAway(0);
        }
    },
    position: "top-center"
});
Vue.toasted.register("my_app_error", "bla bla", {
    className: "bg-white",
    containerClass: "bg-white"
});
Vue.config.productionTip = false;

new Vue({
    router,
    store,

    render: h => h(App)
}).$mount("#app");
