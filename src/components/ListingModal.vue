<template>
  <main>
    <button class="text-blue-700" @click="showModal(false)">
      Change Password
    </button>
    <main
      v-show="!btntype"
      class="flex flex-col items-center justify-center h-full w-full"
    >
      <transition name="fade-up-down">
        <div
          v-show="show_modal"
          class="modal-wrapper inline-block flex items-center z-30"
          style="width:25rem"
        >
          <div
            class="modal w-full mx-auto xl:max-w-2xl lg:max-w-2xl   max-h-screen flex-row  relative"
          >
            <div class="py-3 sm:max-w-xl sm:mx-auto">
              <div class="bg-white min-w-1xl flex flex-col rounded shadow-lg">
                <div class="text-center w-full py-5">
                  <h2 class="text-gray-600 text-3xl font-semibold">
                    Changing Password
                  </h2>
                </div>
                <div class="w-full flex flex-col items-center">
                  <!-- forms here -->
                  <p class="my-4 text-xs text-red-700 animate-pulse">
                    Are you sure to change your account?
                  </p>
                  <span class="my-4 text-gray-600"> </span>
                  <div class="loader" v-if="loading"></div>
                  <fieldset :disabled="loading" class="">
                    <div>
                      <label for="password" class="sr-only"
                        >Current Password</label
                      >
                      <div class="flex rounded border border-gray-300">
                        <input
                          id="password"
                          name="password"
                          :type="passwordType"
                          v-model="oldpassword"
                          autocomplete="current-password"
                          required
                          class="appearance-none rounded-none relative block w-full px-3 py-2  placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          placeholder="Current Password"
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
                    <!-- new password -->
                    <div>
                      <label for="password" class="sr-only">New Password</label>
                      <div class="flex rounded border border-gray-300">
                        <input
                          id="password"
                          name="password"
                          :type="passwordType1"
                          v-model="newpassword"
                          autocomplete="new-password"
                          required
                          class="appearance-none rounded-none relative block w-full px-3 py-2  placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          placeholder="New Password"
                        />
                        <span
                          @click="togglePasswordType1()"
                          class="p-2 text-xs font-bold cursor-pointer"
                        >
                          <span
                            class="text-blue-600"
                            v-show="passwordType1 === 'password'"
                            >Show</span
                          ><span
                            class="text-red-600"
                            v-show="passwordType1 === 'text'"
                            >Hide</span
                          ></span
                        >
                      </div>
                    </div>
                    <!-- confirm newpassword -->
                    <div>
                      <label for="password" class="sr-only"
                        >Confirm Password</label
                      >
                      <div class="flex rounded border border-gray-300">
                        <input
                          id="password"
                          name="password"
                          :type="passwordType2"
                          v-model="newpassword2"
                          autocomplete="new-password"
                          required
                          class="appearance-none rounded-none relative block w-full px-3 py-2  placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          placeholder="Confirm Password"
                        />
                        <span
                          @click="togglePasswordType2()"
                          class="p-2 text-xs font-bold cursor-pointer"
                        >
                          <span
                            class="text-blue-600"
                            v-show="passwordType2 === 'password'"
                            >Show</span
                          ><span
                            class="text-red-600"
                            v-show="passwordType2 === 'text'"
                            >Hide</span
                          ></span
                        >
                      </div>
                    </div>
                    <div class="w-3/4 flex flex-col">
                      <button
                        @click="ChangePassword"
                        class="py-1 my-8 text-lg bg-gradient-to-r from-purple-500 to-indigo-600 text-white"
                      >
                        Change
                      </button>
                    </div>
                  </fieldset>
                </div>
                <div class="h-20 flex items-center justify-center">
                  <button @click="showModal()" class="text-blue-600">
                    Maybe later
                  </button>
                </div>
                <div class="mt-2 text-sm w-full " v-if="errors">
                  <span class="flex space-x-2 m-auto w-64"
                    ><p class="text-red-600 text-lg">
                      &#8226;
                    </p>
                    <span class="text-red-500">
                      {{ errors }}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </main>
  </main>
</template>

<script>
export default {
  methods: {
    showModal(btntype) {
      this.btntype = btntype;
      if (this.show_modal) {
        //stop screen scrolling
        this.show_modal = false;
      } else {
        this.show_modal = true;
      }
    },
  },
  data() {
    return {
      password: '',
      passwordType: 'password',
      passwordType1: 'password',
      passwordType2: 'password',
      showOverlay: false,
      errors: null,
      show_modal: false,
      loading: false,
      btntype: '',
    };
  },
};
</script>

<style></style>
