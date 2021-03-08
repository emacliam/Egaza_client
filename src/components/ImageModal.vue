<template>
  <div>
    <button
      v-if="length.length < 5"
      v-on:click="toggleModal()"
      class="text-blue-700 text-xs focus:outline-none"
    >
      <img class="w-8 h-8" :src="`${publicPath}Icons/upload.svg`" />
    </button>

    <div
      v-if="showModal"
      class="   overflow-x-hidden overflow-y-none fixed inset-0 z-50 outline-none focus:outline-none left-5 top-20"
    >
      <div class="relative w-auto z-100 min-w-sm max-w-2xl flex">
        <!--content-->
        <div
          class="border-0 z-100  text-black rounded relative flex flex-col w-full bg-gray-50 border border-gray-300 outline-none focus:outline-none"
        >
          <!--body-->
          <div class=" w-full px-6">
            <div>
              <div class="flex justify-between">
                <label
                  class="cursor-pointer my-2 border px-3 py-1 hover:bg-blue-500 text-blue-700  hover:text-white border-blue-500 rounded"
                >
                  <span>select image from your computer</span>
                  <input
                    type="file"
                    ref="file"
                    v-on:change="handleFileUpload()"
                    name="image"
                    id=""
                    class="my-4 hidden "
                    accept="image/png, image/jpeg"
                    label="File"
                    placeholder="Select a file"
                    :show-size="1024"
                  />
                </label>
                <button
                  v-on:click="toggleModal()"
                  class="text-red-500 focus:outline-none"
                >
                  Close
                </button>
              </div>
              <div v-if="objectUrl" class="flex items-center space-x-8">
                <div class="text-center rounded-full">
                  <div class="overline">
                    Original image
                  </div>
                  <div class="image-container">
                    <img class="image-preview" ref="source" :src="objectUrl" />
                  </div>
                  <div class="flex justify-center space-x-4">
                    <button
                      class="focus:outline-none"
                      icon="icon"
                      small="small"
                      @click="resetCropper"
                    >
                      <img
                        class="w-8 h-8"
                        :src="`${publicPath}Icons/reset.svg`"
                      />
                    </button>
                    <div class="mx-2"></div>
                    <button
                      class="focus:outline-none"
                      icon="icon"
                      small="small"
                      @click="rotateLeft"
                    >
                      <img
                        class="w-8 h-8"
                        :src="`${publicPath}Icons/rotate-left.svg`"
                      />
                    </button>
                    <button
                      class="focus:outline-none"
                      icon="icon"
                      small="small"
                      @click="rotateRight"
                    >
                      <img
                        class="w-8 h-8"
                        :src="`${publicPath}Icons/rotate-right.svg`"
                      />
                    </button>
                  </div>
                </div>
                <div class="text-center ">
                  <div class="image-container ">
                    <img class="image-preview" :src="previewCropped" />
                  </div>
                  <button
                    class="border rounded focus:outline-none"
                    :disabled="!objectUrl"
                    @click="upload(parent, id)"
                  >
                    <span class="py-1 px-4  bg-blue-700 text-white "
                      >Upload</span
                    >
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-show="axiosLoading" class="camera-loading">
          <ul class="loader-circle">
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Cropper from 'cropperjs';
import debounce from 'lodash/debounce';
import axios from '@/axios';
import { mapActions } from 'vuex';
export default {
  name: 'modal',
  components: {},
  props: {
    parent: String,
    id: String,
    length: Array,
  },
  data() {
    return {
      showModal: false,
      cropper: null,
      objectUrl: null,
      previewCropped: null,
      selectedFile: null,
      debouncedUpdatePreview: debounce(this.updatePreview, 257),
      publicPath: process.env.BASE_URL,
      axiosLoading: false,
      file: null,
      data: null,
      fileName: null,
    };
  },
  methods: {
    ...mapActions(['userUpdate', 'ListingStore', 'length']),
    toggleModal: function() {
      this.showModal = !this.showModal;
    },

    resetCropper() {
      this.cropper.reset();
    },
    rotateLeft() {
      this.cropper.rotate(-90);
    },
    rotateRight() {
      this.cropper.rotate(90);
    },
    handleFileUpload() {
      this.selectedFile = event.target.files[0];
      this.fileName = event.target.files[0].name;
      /*
          Set the local file variable to what the user has selected.
        */
      this.selectedFile = this.$refs.file.files[0];

      /*
          Initialize a File Reader object
        */
      let reader = new FileReader();

      /*
          Add an event listener to the reader that when the file
          has been loaded, we flag the show preview as true and set the
          image to be what was read from the reader.
        */
      reader.addEventListener(
        'load',
        function() {
          this.showPreview = true;
          this.imagePreview = reader.result;
        }.bind(this),
        false
      );

      /*
          Check to see if the file is not empty.
        */
      if (this.selectedFile) {
        /*
            Ensure the file is an image file.
          */
        if (/\.(jpe?g|png|gif)$/i.test(this.selectedFile.name)) {
          /*
              Fire the readAsDataURL method which will read the file in and
              upon completion fire a 'load' event which we will listen to and
              display the image in the preview.
            */
          reader.readAsDataURL(this.selectedFile);
        }
      }
      this.setupCropper(this.selectedFile);
    },
    setupCropper(selectedFile) {
      if (this.cropper) {
        this.cropper.destroy();
      }

      if (this.objectUrl) {
        window.URL.revokeObjectURL(this.objectUrl);
      }

      if (!selectedFile) {
        this.cropper = null;
        this.objectUrl = null;
        this.previewCropped = null;
        return;
      }

      this.objectUrl = window.URL.createObjectURL(selectedFile);
      this.$nextTick(this.setupCropperInstance);
    },
    setupCropperInstance() {
      this.cropper = new Cropper(this.$refs.source, {
        aspectRatio: 1,
        crop: this.debouncedUpdatePreview,
      });
    },
    updatePreview(event) {
      const canvas = this.cropper.getCroppedCanvas();
      this.previewCropped = canvas.toDataURL('image/png', 1);

      function dataURLtoFile(dataurl, filename) {
        var arr = dataurl.split(','),
          mime = arr[0].match(/:(.*?);/)[1],
          bstr = atob(arr[1]),
          n = bstr.length,
          u8arr = new Uint8Array(n);

        while (n--) {
          u8arr[n] = bstr.charCodeAt(n);
        }

        return new File([u8arr], filename, { type: mime });
      }
      this.file = dataURLtoFile(this.previewCropped, this.fileName);
    },
    async upload(parent, id) {
      this.axiosLoading = true;
      try {
        const formData = new FormData();
        formData.append('image', this.file);
        if (parent === 'mylistings') {
          let response = await axios.post(
            `/api/listing/postGallery/${id}`,
            formData
          );

          if (response.data.success) {
            const res = await this.ListingStore({
              userData: {
                gallery: response.data.listing.gallery,
              },
            });
            if (res) {
              this.axiosLoading = false;
              this.showModal = false;
            } else {
              this.axiosLoading = false;
              this.showModal = false;
              console.log('error');
            }
          }
        } else {
          let response = await axios.post('/api/auth/postImage', formData);

          if (response.data.success) {
            const res = await this.userUpdate({
              userData: {
                firstName: response.data.user.firstName,
                lastName: response.data.user.lastName,
                email: response.data.user.email,
                image: response.data.user.image,
              },
            });
            if (res) {
              this.axiosLoading = false;
              this.$router.go(this.$router.currentRoute);
            } else {
              this.axiosLoading = false;
              this.$router.go(this.$router.currentRoute);
              console.log('error');
            }
          }
        }
      } catch (e) {
        this.axiosLoading = false;
        this.showModal = false;
        console.log(e);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.image-container {
  display: inline-block;
}

.image-preview {
  display: block;
  max-height: 229px;
  max-width: 100%;
}
.camera-loading {
  overflow: hidden;
  height: 100%;
  position: absolute;
  width: 100%;
  min-height: 150px;
  margin: 3rem 0 0 -1.2rem;

  ul {
    height: 100%;
    position: absolute;
    width: 100%;
    z-index: 999999;
    margin: 0;
  }

  .loader-circle {
    display: block;
    height: 14px;
    margin: 0 auto;
    top: 50%;
    left: 100%;
    transform: translateY(-50%);
    transform: translateX(-50%);
    position: absolute;
    width: 100%;
    padding: 0;

    li {
      display: block;
      float: left;
      width: 10px;
      height: 10px;
      line-height: 10px;
      padding: 0;
      position: relative;
      margin: 0 0 0 4px;
      background: blue;
      animation: preload 1s infinite;
      top: -50%;
      border-radius: 100%;

      &:nth-child(2) {
        animation-delay: 0.2s;
      }

      &:nth-child(3) {
        animation-delay: 0.4s;
      }
    }
  }
}

@keyframes preload {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
}
</style>
