import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
import store from "@/store";

import Home from "@/views/Home.vue";
import Dashboard from "@/views/Dashboard.vue";
import Account from "@/views/Account.vue";
import Settings from "@/views/Settings.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import PasswordReset from "@/views/PasswordReset.vue";
import AccountVerification from "@/views/AccountVerification.vue";
import ConveyAccVerification from "@/views/ConveyAccVerification.vue";
import ConveyEmailChange from "@/views/ConveyEmailChange.vue";
import AccountVerificationSuccessful from "@/views/AccountVerificationSuccessful.vue";
import Help from "@/views/Help.vue";
import Messages from "@/views/Messages.vue";
import Mylistings from "@/views/Mylistings.vue";
import Expired from "@/views/Expired.vue";
import textui from "@/views/textui2.vue";
import NotFound from "../views/NotFound.vue";
//form
import AddListing from "../views/AddListing.vue";
import ListingPage from "../views/ListingPage.vue";

//

function lazyLoad(view) {
    return () => import(`@/views/${view}.vue`);
}

const routes = [
    //form
    {
        path: "/Add",
        name: "AddListing",
        component: AddListing,
        meta: {
            public: false
        }
    },
    {
        path: "/Listing/:id",
        name: "ListingPage",
        component: ListingPage,
        props: true,
        meta: {
            public: false
        }
    },

    //

    {
        path: "/",
        name: "Home",
        component: Home,
        meta: {
            public: true
        }
    },
    {
        path: "/help",
        name: "Help",
        component: () =>
            import(/* webpackChunkName: "Help" */ "../views/Help.vue"),
        meta: {
            public: true
        }
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: lazyLoad("Dashboard"),
        meta: {
            public: false
        }
    },
    {
        path: "/account",
        name: "Account",
        component: Account,
        meta: {
            public: false
        }
    },
    {
        path: "/settings",
        name: "Settings",
        component: Settings,
        meta: {
            public: false
        }
    },
    {
        path: "/messages",
        name: "Messages",
        component: lazyLoad("Messages"),
        meta: {
            public: false
        }
    },
    {
        path: "/mylistings",
        name: "Mylistings",
        component: lazyLoad("Mylistings"),
        meta: {
            public: false
        }
    },
    {
        path: "/account/verification",
        name: "AccountVerification",
        component: AccountVerification,
        meta: {
            public: false,
            onlyWhenPending: true
        }
    },
    {
        path: "/account/expiredlink",
        name: "ExpiredLink",
        component: Expired,
        meta: {
            public: false,
            onlyWhenPending: true
        }
    },
    {
        path: "/account/verified",
        name: "AccountVerificationSuccessful",
        component: AccountVerificationSuccessful,
        meta: {
            public: false,
            onlyWhenPending: true
        }
    },
    {
        path: "/account/convey/:id/:code",
        name: "ConveyAccVerification",
        component: ConveyAccVerification,
        props: true,
        meta: {
            public: true
        }
    },
    {
        path: "/email/convey/:id/:code/:email",
        name: "ConveyEmailChange",
        component: ConveyEmailChange,
        props: true,
        meta: {
            public: true
        }
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: {
            public: true,
            onlyWhenLoggedOut: true
        }
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
        meta: {
            public: true,
            onlyWhenLoggedOut: true
        }
    },
    {
        path: "/password-reset",
        name: "PasswordReset",
        component: PasswordReset,
        meta: {
            public: true,
            onlyWhenLoggedOut: true
        }
    },
    {
        path: "/testui",
        name: "textui",
        component: textui,
        meta: {
            public: true
        }
    },
    {
        path: "/:catchAll(.*)",
        name: "Not Found",
        component: NotFound,
        meta: {
            public: true
        }
    }
];

const router = new VueRouter({
    mode: "history",
    routes,
    scrollBehavior(to) {
        if (to.hash) {
            return {
                selector: to.hash,
                behavior: "smooth"
            };
        }
    }
});

// Check auth before entering routes
router.beforeEach((to, from, next) => {
    const isPublic = to.matched.some(record => record.meta.public);
    const onlyWhenLoggedOut = to.matched.some(
        record => record.meta.onlyWhenLoggedOut
    );

    const onlyWhenPending = to.matched.some(
        record => record.meta.onlyWhenPending
    );

    const loggedIn = !!store.getters.userId;
    const userActivated = localStorage.getItem("userStatus") != "pending";

    if (!isPublic && !loggedIn) {
        return next({
            path: "/login",
            query: { redirect: to.fullPath }
        });
    }

    if (!isPublic && !onlyWhenPending && loggedIn && !userActivated) {
        return next("/account/verification");
    }

    if (!isPublic && onlyWhenPending && loggedIn && userActivated) {
        return next("/dashboard");
    }

    if (loggedIn && onlyWhenLoggedOut) {
        return next("/");
    }

    store.commit("setLoading", true);
    next();
});
router.afterEach((to, from) => {
    store.commit("setLoading", false);
});

export default router;
