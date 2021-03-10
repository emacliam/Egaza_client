<template>
  <main class="">
    <router-link class="text-blue-400 flex p-2 cursor-pointer" to="/">
      <img class="w-6 h-6 " :src="`${publicPath}Icons/chevronLeft.svg`" />
      <span>HOME</span>
    </router-link>
    <div class="pt-24" style="backgroundColor:#Fff">
      <div class=" max-w-full ">
        <div class=" cont max-w-md w-full space-y-8  m-auto">
          <div>
            <h2 class="mt-6 text-center text-xl font-extrabold text-black">
              Login to your account
            </h2>
            <p class="mt-2 text-center text-sm text-gray-600"></p>
          </div>
          <form class="" action="#" method="POST">
            <fieldset
              :disabled="loading"
              class="mt-8 space-y-6 bg-white py-2 px-6 rounded"
            >
              <input type="hidden" name="remember" value="true" />
              <div class="rounded-md shadow-sm -space-y-px">
                <div class="border border-gray-500 rounded-t overflow-hidden">
                  <label for="email-address" class="sr-only"
                    >Email address</label
                  >
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    v-model="email"
                    autocomplete="email"
                    required
                    class="appearance-none rounded-none relative block w-full px-3 py-2  placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                  />
                </div>
                <div>
                  <label for="password" class="sr-only">Password</label>
                  <div
                    class="flex rounded-b border border-gray-500 overflow-hidden"
                  >
                    <input
                      id="password"
                      name="password"
                      :type="passwordType"
                      v-model="password"
                      autocomplete="current-password"
                      required
                      class="appearance-none rounded-none relative block w-full px-3 py-2  placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Password"
                    />
                    <span
                      @click="togglePasswordType()"
                      class="p-2 text-xs font-bold cursor-pointer"
                    >
                      <span
                        class="text-blue-600"
                        v-show="passwordType === 'password'"
                        >Show</span
                      ><span
                        class="text-red-600"
                        v-show="passwordType === 'text'"
                        >Hide</span
                      ></span
                    >
                  </div>
                </div>
              </div>

              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <input
                    id="remember_me"
                    name="remember_me"
                    type="checkbox"
                    class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounde"
                  />
                  <label
                    for="remember_me"
                    class="ml-2 block text-xs text-gray-900"
                  >
                    Remember me
                  </label>
                </div>

                <div class="text-sm">
                  <a
                    href="/password-reset"
                    class="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>
              <div class="flex items-center text-sm ">
                <span>Dont have an account?</span>
                <a
                  href="/register"
                  class="font-medium text-indigo-600 hover:text-indigo-500"
                  >Create</a
                >
              </div>

              <div>
                <button
                  @click="onSubmit"
                  :class="loading ? 'cursor-wait' : 'cursor-pointer'"
                  class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span
                    class="absolute left-0 inset-y-0 flex items-center pl-3"
                  >
                    <!-- Heroicon name: lock-closed -->
                    <svg
                      class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                  <div
                    v-if="loading"
                    class="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 "
                  >
                    <div
                      style="border-top-color:transparent"
                      class="border-solid animate-spin  rounded-full border-blue-400 border-4 h-8 w-8"
                    ></div>
                  </div>
                  Login
                </button>
              </div>
            </fieldset>
          </form>
          <div class="mt-2 text-sm w-full flex flex-col" v-if="errors">
            <span
              class="flex space-x-2"
              v-for="error in errors"
              :key="error.msg"
              ><p class="text-black text-lg">&#8226;</p>
              <span class="text-black">
                {{ error.msg }}
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import router from '@/router/index';
import { mapActions } from 'vuex';
export default {
  name: 'Login',
  methods: {
    ...mapActions(['userAuth']),
    async onSubmit(e) {
      this.loading = true;
      e.preventDefault();
      const res = await this.userAuth({
        url: '/api/auth/login',
        userData: {
          email: this.email,
          password: this.password,
        },
      });

      if (!res.success) {
        this.errors = res.errors;
        this.loading = false;
      }
    },
    togglePasswordType() {
      this.passwordType === 'text'
        ? (this.passwordType = 'password')
        : (this.passwordType = 'text');
    },
  },
  data() {
    return {
      email: '',
      password: '',
      passwordType: 'password',
      errors: [],
      loading: false,
      publicPath: process.env.BASE_URL,
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
