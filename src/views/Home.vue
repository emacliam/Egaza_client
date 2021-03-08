<template>
  <div
    class="h-screen w-full overflow-y-scroll "
    style="backgroundColor:#F0F3F4"
  >
    <template v-if="userId">
      <div class="cont w-full h-screen">
        <div class="m-auto w-64 flex flex-col justify-center  pt-4 text-center">
          <p class="text-gray-600 text-4xl  pt-52 ">
            Welcome Back
            <span class="capitalize">"{{ user }}"</span>
          </p>

          <a
            class="mt-8 text-blue-600 font-bold  h-12 rounded flex items-center justify-between px-4"
            href="/dashboard"
            v-if="!loading"
            style="backgroundColor:#DEEAFA"
            ><span> Dashboard</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              viewBox="0 0 512 512"
              class="fill-current w-8 h-8"
            >
              <g data-name="&lt;Group&gt;">
                <polygon
                  points="278.249 356.849 292.391 370.991 407.382 256 292.391 141.009 278.249 155.151 369.098 246 105 246 105 266 369.098 266 278.249 356.849"
                  data-name="&lt;Path&gt;"
                />
              </g>
            </svg>
          </a>
        </div>
        <div class="loader" v-if="loading"></div>
      </div>
    </template>
    <template v-else>
      <div class="cont w-full min-h-screen ">
        <!-- This example requires Tailwind CSS v2.0+ -->
        <div class="relative bg-white overflow-hidden min-h-screen">
          <div class="max-w-7xl mx-auto">
            <div
              class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"
            >
              <svg
                class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                fill="currentColor"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <polygon points="50,0 100,0 50,100 0,100" />
              </svg>

              <div class="relative pt-6 px-4 sm:px-6 lg:px-8">
                <nav
                  class="relative flex items-center justify-between sm:h-10 lg:justify-start"
                  aria-label="Global"
                >
                  <div
                    class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0"
                  >
                    <div
                      class="flex items-center justify-between w-full md:w-auto"
                    >
                      <span class="font-bold text-xl">EGAZA</span>
                      <a href="/">
                        <Logo />
                      </a>
                      <div class="-mr-2 flex items-center md:hidden">
                        <button
                          @click="OpenCloseMenu"
                          type="button"
                          class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                          aria-expanded="false"
                        >
                          <span class="sr-only">Open main menu</span>
                          <!-- Heroicon name: outline/menu -->
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
                              d="M4 6h16M4 12h16M4 18h16"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                    <a
                      href="#"
                      class="font-medium text-gray-500 hover:text-gray-900"
                      >Company</a
                    >

                    <a
                      href="#"
                      class="font-medium text-indigo-600 hover:text-indigo-500"
                      >Log in</a
                    >
                  </div>
                </nav>
              </div>

              <!--
        Mobile menu, show/hide based on menu open state.

        Entering: "duration-150 ease-out"
          From: "opacity-0 scale-95"
          To: "opacity-100 scale-100"
        Leaving: "duration-100 ease-in"
          From: "opacity-100 scale-100"
          To: "opacity-0 scale-95"
      -->
              <div
                class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                v-if="menu"
              >
                <div
                  class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden"
                >
                  <div class="px-5 pt-4 flex items-center justify-between">
                    <div>
                      <Logo />
                    </div>
                    <div class="-mr-2">
                      <button
                        @click="OpenCloseMenu"
                        type="button"
                        class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                      >
                        <span class="sr-only">Close main menu</span>
                        <!-- Heroicon name: outline/x -->
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
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div class="px-2 pt-2 pb-3 space-y-1">
                    <a
                      href="#"
                      class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      >Company</a
                    >
                  </div>
                  <a
                    href="/login"
                    class="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
                  >
                    Log in
                  </a>
                </div>
              </div>

              <main
                class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
              >
                <div class="sm:text-center lg:text-left py-8">
                  <h1
                    class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
                  >
                    <span class="block xl:inline">WELCOME TO</span>
                    <span class="block text-indigo-600 xl:inline"> EGAZA</span>
                  </h1>
                  <p
                    class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                  >
                    <!--  With EGAZA .... -->
                  </p>
                  <div
                    class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
                  >
                    <div
                      class="m-auto w-64 flex flex-col justify-center  pt-4 text-center"
                    >
                      <a
                        class="mt-8 text-blue-600 font-bold w-64  h-12 rounded flex items-center justify-between px-4"
                        href="/login"
                        style="backgroundColor:#DEEAFA"
                        ><span> Continue to Signin</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          data-name="Layer 1"
                          viewBox="0 0 512 512"
                          class="fill-current w-8 h-8"
                        >
                          <g data-name="&lt;Group&gt;">
                            <polygon
                              points="278.249 356.849 292.391 370.991 407.382 256 292.391 141.009 278.249 155.151 369.098 246 105 246 105 266 369.098 266 278.249 356.849"
                              data-name="&lt;Path&gt;"
                            />
                          </g>
                        </svg>
                      </a>
                      <a
                        class="mt-8 text-blue-600 font-bold w-64  h-12 rounded flex items-center justify-between px-4"
                        href="/register"
                        style="backgroundColor:#DEEAFA"
                        ><span> Continue to Signup</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          data-name="Layer 1"
                          viewBox="0 0 512 512"
                          class="fill-current w-8 h-8"
                        >
                          <g data-name="&lt;Group&gt;">
                            <polygon
                              points="278.249 356.849 292.391 370.991 407.382 256 292.391 141.009 278.249 155.151 369.098 246 105 246 105 266 369.098 266 278.249 356.849"
                              data-name="&lt;Path&gt;"
                            />
                          </g>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
          <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img
              class="h-56 w-full object-cover hidden md:block  lg:block md:h-96 lg:w-full lg:h-full"
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
              alt=""
            />
          </div>
        </div>
        <div class="loader" v-if="loading"></div>
      </div>
    </template>
  </div>
</template>

<script>
import Logo from '@/components/Logo.vue';
export default {
  name: 'Home',
  components: { Logo },
  computed: {
    userId() {
      return this.$store.state.auth.userId;
    },
    user() {
      return this.$store.state.auth.firstName;
    },
  },
  mounted() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 6000);
  },
  data() {
    return {
      loading: false,
      menu: false,
      publicPath: process.env.BASE_URL,
    };
  },
  methods: {
    OpenCloseMenu() {
      if (this.menu) {
        this.menu = false;
      } else {
        this.menu = true;
      }
    },
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
  background-size: 100px;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 10000000;
  opacity: 0.9;
  filter: alpha(opacity=40);
}
.not-loader {
  /* not-Loader Div Class */
  position: absolute;
  top: 50px;
  right: 50px;
  bottom: 50px;
  left: 50px;
}
</style>
