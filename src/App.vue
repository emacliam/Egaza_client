<template>
    <main
        class="overflow-hidden flex flex-col w-full"
        id="App"
        style="backgroundColor:#Fff"
    >
        <Header class="header z-50" v-if="userId" />
        <div>
            <div
                class="h-10 w-full border-b border-gray-300"
                v-if="userId"
            ></div>
            <keep-alive v-bind:include="['dashboard', 'account']" v-if="userId">
                <router-view class="router"></router-view>
            </keep-alive>
            <!-- otherwise don't keep anything alive -->
            <router-view v-else class="router"></router-view>
            <Helpmodal />
        </div>
        <Footer class="footer" />
    </main>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import Helpmodal from "./components/Helpchatmodal";

export default {
    components: {
        Header,
        Helpmodal,
        Footer
    },
    data() {
        return {
            name: "",
            routes: ["Home", "Login", "Register", "PasswordReset"],
            exists: null
        };
    },
    mounted() {
        this.name = this.$route.name;
        this.exists = this.routes.some(item => item === this.name);
    },
    computed: {
        userId() {
            return this.$store.state.auth.userId;
        },
        user() {
            return this.$store.state.auth.firstName;
        },
        loading() {
            return this.$store.state.loading.load;
        }
    }
};
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Roboto+Condensed");

main {
    font-family: "Roboto", sans-serif;
}
#app {
    font-family: "Roboto", sans-serif;
}
.header {
    width: 100vw;
}
</style>
