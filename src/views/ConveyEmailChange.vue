<template>
  <main class="min-h-screen">
    <div class="bg-red-600" v-if="errors">
      <div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between flex-wrap">
          <div class="w-0 flex-1 flex items-center">
            <span class="flex p-2 rounded-lg bg-indigo-800">
              <!-- Heroicon name: outline/speakerphone -->
              <svg
                class="h-6 w-6 text-white"
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
                  d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                />
              </svg>
            </span>
            <p class="ml-3 font-medium text-white truncate">
              <span class="md:hidden">
                {{ errors }}
              </span>
              <span class="hidden md:inline">
                {{ errors }}
              </span>
            </p>
          </div>
          <div
            class="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto"
          >
            <a
              href="/account"
              class="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50"
            >
              Change email again to get another code
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="w-1/2 m-auto mt-48">
      <div>
        <span>make sure this is the email your changed to -</span>
        <span class="font-bold">{{ this.$route.params.email }}</span>
        <span
          >- If not please dont proceed.Go back to your profile page and Change
          again</span
        >
      </div>
      <button
        @click="verify"
        :class="changeemailloading ? 'cursor-wait' : 'cursor-pointer'"
        class="group mt-4 relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <div
          v-if="changeemailloading"
          class="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 "
        >
          <div
            style="border-top-color:transparent"
            class="border-solid animate-spin  rounded-full border-blue-400 border-4 h-8 w-8"
          ></div>
        </div>
        Change
      </button>
    </div>
  </main>
</template>

<script>
import axios from '@/axios';
export default {
  data() {
    return {
      errors: '',
      changeemailloading: false,
    };
  },
  mounted() {},
  methods: {
    async verify() {
      try {
        this.changeemailloading = true;
        await axios
          .get(
            `/api/auth/verification/change_email/${this.$route.params.id}/${this.$route.params.code}/${this.$route.params.email}`
          )
          .then((res) => {
            if (res.data.success) {
              console.log(res);
              this.changeemailloading = false;
              this.$router.replace({
                path: '/login',
                query: {
                  redirect: this.$router.currentRoute.fullPath,
                },
              });
            } else {
              this.changeemailloading = false;
              this.errors = null;
              this.errors = res.data.message;
            }
          });
      } catch (e) {
        console.log(e);
        this.changeemailloading = false;
        this.errors = null;
        this.errors = 'something went wrong try Later';
      }
    },
  },
};
</script>

<style></style>
