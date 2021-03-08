<template>
  <div
    class="h-full max-w-full flex overflow-hidden antialiased text-gray-800 "
    style="background-color:#F9F9F9"
  >
    <!-- main content -->
    <main
      class="flex-grow flex min-h-0 flex-col lg:flex-row max-w-full border "
    >
      <!-- section update to tickets -->
      <section
        class=" lg:ml-4 flex lg:max-h-full flex-col m-auto lg:m-0 p-4 w-screen lg:w-3/12 flex-none border-l border-r bg-white min-h-0 overflow-auto"
      >
        <div
          class="lg:w-full max-w-screen relative flex flex-col items-center justify-center"
        >
          <img
            class="h-16 w-16 rounded-full mx-auto shadow-2xl border-4 border-white"
            :src="userImage"
            alt="Profile"
          />
          <div
            class=" flex flex-col  items-start justify-start m-1 text-sm text-gray-600 w-full"
          >
            <p class="pt-2 text-lg font-semibold w-full text-center">
              {{ userName }}
            </p>
            <p class="w-full text-center">{{ userEmail }}</p>
          </div>
        </div>
        <div class="lg:border-b">
          <!-- First list item -->
          <div class="pb-4 text-center w-1/2 mx-auto">
            <div class="mt-5">
              <AccountModal />
            </div>
            <div
              class="border rounded py-2 mt-2 px-4 text-xs font-semibold text-gray-70"
            >
              <Logout />
            </div>
          </div>
        </div>
      </section>
      <section class="w-full">
        <Edit_Profile />
      </section>
      <!-- section content -->
    </main>
  </div>
</template>

<script>
import AccountModal from '@/components/AccountModal.vue';
import Edit_Profile from '@/components/Profile/Edit_Profile.vue';
import Logout from '@/components/Logout.vue';
import axios from '@/axios';
export default {
  name: 'Account',
  components: {
    Edit_Profile,
    Logout,

    AccountModal,
  },
  methods: {
    toggle() {
      this.show == true;
    },
  },
  data() {
    return {
      publicPath: process.env.BASE_URL,
      show: false,
    };
  },
  computed: {
    userEmail() {
      return this.$store.state.auth.email;
    },
    userImage() {
      return this.$store.state.auth.image;
    },
    userName() {
      return (
        this.$store.state.auth.firstName + ' ' + this.$store.state.auth.lastName
      );
    },
    showE() {
      return this.show;
    },
  },
};
</script>

<style scoped>
/* can be configured in tailwind.config.js */
.group:hover .group-hover\:block {
  display: block;
}
</style>
