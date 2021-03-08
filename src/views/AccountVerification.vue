<template>
  <div
    class="account-verification container py-5 max-w-full bg-gray-100 h-screen"
  >
    <div
      :show="showOverlay"
      variant="transparent"
      blur="none"
      class="w-1/2 cont space-y-10 flex justify-between flex-col m-auto text-center mt-8 px-4 py-8 h-auto bg-white border-blue-700 border"
    >
      <div class="loader" v-if="loading"></div>
      <div class="space-y-5 flex flex-col">
        <span class="font-bold text-xl">Thank you for signing in</span>
        <span class="text-3xl">Verify your email address</span>
        <span class="text-gray-500 "
          >An activation email was send to your email address please confirm
          that you want to use this email address
          <span class="text--500 cursor-pointer" @click="openEmail"
            >Click to open the email {{ useremail }}</span
          >
        </span>
      </div>
      <div class="flex-col flex space-y-2 ">
        <p>You did not receive an email? Or it Expired</p>
        <fieldset :disabled="loading">
          <button
            class="mt-16 bg-blue-700 p-2 rounded w-4/12 text-sm text-white  m-auto"
            @click="onSubmit"
            :disabled="countDown > 0"
          >
            Send New Activation Email
          </button>
        </fieldset>
      </div>

      <div class="error mt-3" v-if="error">
        <span class="text-red-500"
          >Oh, something went wrong. Please try again later.You can Logout and
          login again</span
        >
        <span class=" text-blue-700 font-bold cursor-pointer" @click="onLogout"
          >LOGOUT</span
        >
      </div>
      <div class="success mt-3" v-if="success">
        <span class="text-red-500"
          >The activation link was sent to your registered email address.
        </span>
      </div>
      <!-- count down -->
      <div class="text-white font-semi-bold">
        <template v-if="countDown > 0">
          <div class="">
            Authorization Code Expires in
            <span class="text-xl text-red-700 font-bold">{{ time }}</span>
          </div>
        </template>
        <template v-else>
          <div>Authorization Code Expired Get another one</div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '@/axios';
export default {
  name: 'AccountVerification',
  methods: {
    async onSubmit(e) {
      this.countDown = 600;
      e.preventDefault();
      this.loading = true;
      this.showOverlay = true;
      this.error = false;
      this.success = false;

      const response = await axios.get(
        '/api/auth/verification/get-activation-email'
      );
      this.showOverlay = false;

      if (!response.data.success) {
        this.error = true;
        this.loading = false;
        this.countDown = '';
      } else {
        this.success = response.data.success;
        this.countDownTimer();
        this.loading = false;
      }
    },
    openEmail(e) {
      window.open(`http://${this.$store.state.auth.email}`, '_blank');
      e.preventDefault();
    },
    countDownTimer() {
      if (this.countDown > 0) {
        setTimeout(() => {
          this.countDown -= 1;
          this.countDownTimer();
        }, 1000);
      }
    },
    async onLogout() {
      localStorage.clear();
      const response = await axios.get('/api/auth/logout');

      if (response.data.success) {
        this.hidden = false;
        this.NotificationdropdownOpen = false;
        this.ProfiledropdownOpen = false;
        this.$store.commit('setUserId', null);
        this.$store.commit('setUserRole', null);
        this.$store.commit('setUserStatus', null);
        this.$router.push({ path: '/login' });
      }
    },
  },
  mounted: function() {},
  computed: {
    userId() {
      return this.$store.state.auth.userId;
    },
    useremail() {
      console.log(this.$store.state.auth);
      return this.$store.state.auth.email;
    },
    time() {
      var m = Math.floor((this.countDown % 3600) / 60);
      var s = Math.floor((this.countDown % 3600) % 60);
      var mDisplay = m > 0 ? m + (m == 1 ? ' minute, ' : ' minutes, ') : '';
      var sDisplay = s > 0 ? s + (s == 1 ? ' second' : ' seconds') : '';
      return mDisplay + sDisplay;
    },
  },
  data() {
    return {
      error: false,
      useEm: '',
      success: false,
      showOverlay: false,
      loading: false,
      countDown: '',
    };
  },
};
</script>

<style scoped>
.cont {
  /* Components Root Element ID */
  position: relative;
}
.loader {
  /* Loader Div Class */
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: transparent;
  background-image: url('../assets/Loaders/spin2.gif');
  background-size: 50px;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 10000000;
  opacity: 0.4;
  filter: alpha(opacity=40);
}
</style>
