<template>
  <div>
    <button
      :disabled="$isMobile()"
      v-on:click="toggleModal()"
      class="text-blue-700 text-xs focus:outline-none"
    >
      <img class="w-7 mt-1 h-7" :src="`${publicPath}Icons/camera.svg`" />
    </button>

    <div
      v-if="showModal"
      class="   overflow-x-hidden overflow-y-none fixed inset-0 z-50 outline-none focus:outline-none top-5 left-5"
    >
      <div class="relative w-auto z-100 min-w-sm max-w-2xl">
        <!--content-->
        <div
          class="z-100  text-black rounded relative flex flex-col w-full bg-gray-50 border border-gray-300  outline-none focus:outline-none"
        >
          <!--body-->
          <div class=" w-full px-6">
            <div>
              <div class="flex justify-between">
                <button
                  v-on:click="close()"
                  class="text-red-500 focus:outline-none"
                >
                  Close
                </button>
              </div>

              <CameraImage />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CameraImage from './CameraImage';

export default {
  name: 'modal',
  components: {
    CameraImage,
  },
  data() {
    return {
      showModal: false,
      publicPath: process.env.BASE_URL,
    };
  },
  methods: {
    toggleModal: function() {
      this.showModal = true;
    },
    close: function() {
      this.showModal = false;
      this.$router.go(this.$router.currentRoute);
    },
  },
};
</script>

<style scoped>
.image-container {
  display: inline-block;
}

.image-preview {
  display: block;
  max-height: 229px;
  max-width: 100%;
}
</style>
