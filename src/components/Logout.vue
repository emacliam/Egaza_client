<template>
  <span @click="onLogout" class="font-bold text-red-400 cursor-pointer"
    >Sign Out</span
  >
</template>

<script>
import { mapActions } from 'vuex';
import axios from '@/axios';
export default {
  name: 'Logout',
  methods: {
    ...mapActions(['Checkpass']),
    async onLogout() {
      localStorage.clear();
      const response = await axios.get('/api/auth/logout');

      if (response.data.success) {
        this.$store.commit('setUserId', null);
        this.$store.commit('setUserRole', null);
        this.$store.commit('setUserStatus', null);
        let data = 0;
        const res = await this.Checkpass({
          data,
        });
        this.$router.push({ path: '/login' });
      }
    },
  },
};
</script>

<style scoped></style>
