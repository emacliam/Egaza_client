<template>
  <div
    class="account-verification-successful container bg-gray-100 py-5 w-screen h-screen"
  >
    <div class="cont w-full h-screen">
      <div class="m-auto w-64 flex flex-col justify-center  pt-52 text-center">
        <p class="text-black text-md font-bold text-center ">
          Your email has been successfully verified. You will be redirected in a
          moment...
        </p>
        <div class="loader" v-if="loading"></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '@/axios';
export default {
  name: 'AccountVerificationSuccessful',
  methods: {
    async updateUserStatus() {
      this.loading = true;
      const response = await axios.get(
        '/api/auth/verification/update-user-status'
      );
      console.log('success', response.data);
      if (!response.data.success) {
        this.loading = false;
        localStorage.clear();
        const logout = await axios.get('/api/auth/logout');
        if (logout.data.success) {
          console.log('logging out');
          this.$router.push({ path: '/login' });
        }
      } else {
        localStorage.setItem('user', response.data.user);
        localStorage.setItem('email', response.data.email);
        localStorage.setItem('firstName', response.data.firstName);
        localStorage.setItem('lastName', response.data.lastName);
        localStorage.setItem('userId', response.data.userId);
        localStorage.setItem('userRole', response.data.userRole);
        localStorage.setItem('userStatus', response.data.userStatus);
        this.$store.commit('setUserStatus', response.data.userStatus);

        setTimeout(() => {
          this.loading = false;
          this.$router.push({ path: '/dashboard' });
        }, 5000);
      }
    },
  },
  mounted: function() {
    this.updateUserStatus();
  },
  data() {
    return {
      loading: false,
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
  background-image: url('../assets/Loaders/launch.gif');
  background-size: 200px;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 10000000;
  opacity: 0.9;
  filter: alpha(opacity=40);
}
</style>
