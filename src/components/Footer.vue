<template>
  <footer id="footer">
    <footer v-if="userId" class=" pb-32 pt-8" style="background-color:#333333">
      <div class="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left">
        <!-- Col-1 -->
        <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          <!-- Col Title -->
          <div class="text-sm uppercase text-gray-400 font-bold mb-6">
            Getting Started
          </div>

          <!-- Links -->
          <a
            href="#"
            class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Documentation
          </a>
          <a
            href="#"
            class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            FAQ
          </a>
          <a
            href="#"
            class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Browser Support
          </a>
        </div>

        <!-- Col-2 -->
        <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          <!-- Col Title -->
          <div class="text-sm uppercase text-gray-400 font-bold mb-6">
            Company
          </div>

          <!-- Links -->
          <a
            href="#"
            class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Advertise with us
          </a>
          <a
            href="#"
            class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Careers
          </a>
        </div>

        <!-- Col-3 -->
        <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          <!-- Col Title -->
          <div class="text-sm uppercase text-gray-400 font-bold mb-6">
            Follow Us
          </div>

          <!-- Links -->
          <a
            href="#"
            class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            GitHub
          </a>
          <a
            href="#"
            class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Discord
          </a>
          <a
            href="#"
            class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Twitter
          </a>
          <a
            href="#"
            class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            YouTube
          </a>
        </div>
        <!-- Col-3 -->
        <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12 text-xs">
          <!-- Links -->
          <Logo class="w-32" />
          <div class="flex items-center space-x-2 my-1 ">
            <a
              href="#"
              class=" block text-gray-300 hover:text-gray-100  font-medium "
            >
              Terms
            </a>
            <a
              href="#"
              class="block text-gray-300 hover:text-gray-100  font-medium "
            >
              Privacy
            </a>
          </div>

          <div class="mt-2 text-gray-300">
            © Copyright 2021-year. All Rights Reserved.
          </div>

          <a
            href="#"
            class="my-3 block text-gray-300 hover:text-blue-600 font-medium duration-700"
          >
            Sitemap
          </a>
        </div>
      </div>
    </footer>
    <footer v-if="!userId"></footer>
  </footer>
</template>

<script>
import Logo from '@/components/Logo.vue';
export default {
  name: 'Footer',
  components: {
    Logo,
  },
  computed: {
    userId() {
      return this.$store.state.auth.userId;
    },
    user() {
      return this.$store.state.auth.userId;
    },
  },
};
</script>

<style></style>
