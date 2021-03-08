<template>
  <header class="max-w-full">
    <div class="flex items-center space-x-4">
      <div v-if="!userId" class="bg-red-300"></div>

      <div v-if="userId" class=" w-full">
        <!-- This example requires Tailwind CSS v2.0+ -->
        <nav class="bg-gray-800">
          <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div class="relative flex items-center justify-between h-16">
              <div
                class="absolute inset-y-0 left-0 flex items-center sm:hidden"
              >
                <!-- Mobile menu button-->
                <button
                  @click="menuShow"
                  type="button"
                  class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span class="sr-only">Open main menu</span>
                  <!-- Icon when menu is closed. -->
                  <!--
            Heroicon name: outline/menu

            Menu open: "hidden", Menu closed: "block"
          -->
                  <svg
                    v-if="menu == false"
                    class="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                  <!-- Icon when menu is open. -->
                  <!--
            Heroicon name: outline/x

            Menu open: "block", Menu closed: "hidden"
          -->
                  <svg
                    v-if="menu == true"
                    class="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div
                class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
              >
                <div class="flex-shrink-0 flex items-center">
                  <Logo class="block lg:hidden h-8 w-auto" />
                  <Logo
                    class="hidden lg:block lg:flex items-center h-8 w-auto"
                  />
                </div>
                <div class="hidden sm:block sm:flex items-center sm:ml-6">
                  <div class="flex space-x-4 cont">
                    <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->

                    <router-link
                      to="/dashboard"
                      class="text-white px-3 py-2 rounded-md text-sm font-medium"
                      >Dashboard</router-link
                    >
                    <router-link
                      to="/mylistings"
                      class="text-white px-3 py-2 rounded-md text-sm font-medium"
                      >My Listings</router-link
                    >
                    <span
                      class="text-gray-300 w-24 px-3 py-2 rounded-md text-sm font-medium"
                    ></span>

                    <a
                      href="/Add"
                      class="shadow-lg bg-blue-600 text-white rounded-md px-6 py-2 text-xs "
                    >
                      Post a Listing
                    </a>
                  </div>
                </div>
              </div>
              <div
                class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
              >
                <button
                  class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <span class="sr-only">View notifications</span>
                  <!-- Heroicon name: outline/bell -->
                  <svg
                    class="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                </button>

                <!-- Profile dropdown -->
                <div class="ml-3 relative">
                  <div>
                    <button
                      @click="hiddenProfile"
                      class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                      id="user-menu"
                      aria-haspopup="true"
                    >
                      <span class="sr-only">Open user menu</span>
                      <img
                        class="h-8 w-8 rounded-full"
                        :src="userImage"
                        alt=""
                      />
                    </button>
                  </div>
                  <!--
            Profile dropdown panel, show/hide based on dropdown state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          -->
                  <div
                    v-bind:class="show === true ? 'block' : 'hidden'"
                    class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu"
                  >
                    <a
                      href="/account"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                      >Your Profile</a
                    >
                    <a
                      href="/settings"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                      >Settings</a
                    >
                    <div
                      @click="onLogout"
                      class="block px-4 py-2 text-sm text-red-700 cursor-pointer hover:bg-gray-100"
                      role="menuitem"
                    >
                      Sign out
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Mobile menu, show/hide based on menu state. -->
          <div
            class="sm:hidden"
            id="mobile-menu"
            v-bind:class="menu === true ? 'block' : 'hidden'"
          >
            <div class="px-2 pt-2 pb-3 space-y-3 cont">
              <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
              <a
                href="/dashboard"
                class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >Dashboard</a
              >
              <a
                href="/mylistings"
                class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >My Listings</a
              >
              <a
                href="/Add"
                class="shadow-lg text-center block bg-blue-600 text-white rounded px-6 py-2 text-base"
              >
                Post a Listing
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
import Logo from '@/components/Logo.vue';
import axios from '@/axios';
export default {
  name: 'Header',
  components: {
    Logo,
  },
  data() {
    return {
      hidden: false,
      NotificationdropdownOpen: false,
      ProfiledropdownOpen: false,
      show: false,
      menu: false,
    };
  },
  methods: {
    hiddenProfile() {
      if (this.show) {
        this.show = false;
      } else {
        this.show = true;
      }
    },
    menuShow() {
      if (this.menu) {
        this.menu = false;
      } else {
        this.menu = true;
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
  computed: {
    userId() {
      return this.$store.state.auth.userId;
    },
    user() {
      return this.$store.state.auth.userId;
    },
    userImage() {
      return this.$store.state.auth.image;
    },
  },
};
</script>

<style scoped>
.cont .router-link-exact-active {
  background-color: #161d2e;
}
.modal-body {
  max-height: 500px;
}
.bg-gray-800-opacity {
  background-color: #2d374850;
}
@media screen and (max-width: 768px) {
  .modal-body {
    max-height: 400px;
  }
}

/* animation for vue transition tag */

.fade-up-down-enter-active {
  transition: all 0.3s ease;
}
.fade-up-down-leave-active {
  transition: all 0.3s ease;
}
.fade-up-down-enter {
  transform: translateY(10%);
  opacity: 0;
}
.fade-up-down-leave-to {
  transform: translateY(10%);
  opacity: 0;
}

.fade-enter-active {
  -webkit-transition: opacity 2s;
  transition: opacity 0.3s;
}
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
/* can be configured in tailwind.config.js */
.group:hover .group-hover\:block {
  display: block;
}

.focus\:cursor-text:focus {
  cursor: text;
}

.focus\:w-64:focus {
  width: 16rem;
}
.header {
  width: 100vw;
  height: 5vw;
}
</style>
