<template>
  <main>
    <div class="flex flex-col">
      <div class="mt-4 mb-4">
        <div class="camera-button">
          <button
            type="button"
            class="button is-rounded focus:outline-none"
            :class="{
              'is-primary': !isCameraOpen,
              'is-danger': isCameraOpen,
            }"
            @click="toggleCamera"
          >
            <span
              v-if="!isCameraOpen"
              class="cursor-pointer focus:outline-none my-2 border px-3 py-1 hover:bg-blue-500 text-blue-700  hover:text-white border-blue-500 rounded"
              >Open Camera</span
            >
            <span
              v-else
              class="cursor-pointer focus:outline-none my-2 border px-3 py-1 hover:bg-blue-500 text-blue-700  hover:text-white border-blue-500 rounded"
              ><button @click="stopcamera">
                stop camera
              </button></span
            >
          </button>
        </div>

        <div v-show="isCameraOpen && isLoading" class="camera-loading">
          <ul class="loader-circle">
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div v-show="axiosLoading" class="camera-loading">
          <ul class="loader-circle">
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div class="flex items-center space-x-4 mt-2">
          <div
            v-if="isCameraOpen"
            v-show="!isLoading"
            class="camera-box"
            :class="{ flash: isShotPhoto }"
          >
            <div class="camera-shutter" :class="{ flash: isShotPhoto }"></div>

            <video
              class="rounded-lg"
              v-show="!isPhotoTaken"
              ref="camera"
              :width="200"
              :height="200"
              autoplay
            ></video>

            <canvas
              v-show="isPhotoTaken"
              class="rounded-lg"
              id="photoTaken"
              ref="canvas"
              :width="200"
              :height="200"
            ></canvas>
          </div>

          <div v-if="isCameraOpen && !isLoading" class="camera-shoot">
            <button
              type="button"
              class="button focus:outline-none"
              @click="takePhoto"
            >
              <button
                class="bg-red-400 rounded-lg focus:outline-none px-1 text-white w-12"
              >
                Take
              </button>
            </button>
            <div v-if="isPhotoTaken && isCameraOpen" class="camera-download">
              <a class="button" role="button">
                Close Camera First to Retake
              </a>
            </div>
          </div>
        </div>
      </div>
      <div v-if="objectUrl" class="flex items-center space-x-8">
        <div class="text-center">
          <div class="image-container">
            <img
              class="image-preview rounded-lg"
              ref="source"
              :src="objectUrl"
            />
            <div class="flex justify-center space-x-4">
              <button
                class="focus:outline-none"
                icon="icon"
                small="small"
                @click="resetCropper"
              >
                <img class="w-8 h-8" :src="`${publicPath}Icons/reset.svg`" />
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
        </div>
        <div class="text-center ">
          <div class="image-container ">
            <img class="image-preview" :src="previewCropped" />
          </div>
          <button
            class="focus:outline-none"
            :disabled="!objectUrl"
            @click="upload"
          >
            <span class="rounded border py-1 px-4  bg-blue-700 text-white "
              >Upload</span
            >
            <!--do this.$router.go(this.$router.currentRoute); after upload -->
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Cropper from 'cropperjs';
import debounce from 'lodash/debounce';
import { mapActions } from 'vuex';
import axios from '@/axios';
export default {
  data() {
    return {
      cropper: null,
      objectUrl: null,
      previewCropped: null,
      debouncedUpdatePreview: debounce(this.updatePreview, 257),
      isCameraOpen: false,
      isPhotoTaken: false,
      isShotPhoto: false,
      isLoading: false,
      axiosLoading: false,
      link: '#',
      publicPath: process.env.BASE_URL,
    };
  },

  methods: {
    ...mapActions(['userUpdate']),
    resetCropper() {
      this.cropper.reset();
    },
    rotateLeft() {
      this.cropper.rotate(-90);
    },
    rotateRight() {
      this.cropper.rotate(90);
    },
    toggleCamera() {
      if (this.isCameraOpen) {
        this.isCameraOpen = false;
        this.isPhotoTaken = false;
        this.isShotPhoto = false;
        this.stopCameraStream();
      } else {
        this.isCameraOpen = true;
        this.createCameraElement();
      }
    },
    stopcamera() {
      this.stopCameraStream();
    },

    createCameraElement() {
      this.isLoading = true;

      const constraints = (window.constraints = {
        audio: false,
        video: true,
      });

      navigator.mediaDevices
        .getUserMedia(constraints)
        .then((stream) => {
          this.isLoading = false;
          this.$refs.camera.srcObject = stream;
        })
        .catch((error) => {
          this.isLoading = false;
          alert("May the browser didn't support or there is some errors.");
        });
    },

    stopCameraStream() {
      let tracks = this.$refs.camera.srcObject.getTracks();

      tracks.forEach((track) => {
        track.stop();
      });
    },

    takePhoto() {
      if (!this.isPhotoTaken) {
        this.isShotPhoto = true;

        const FLASH_TIMEOUT = 50;

        setTimeout(() => {
          this.isShotPhoto = false;
          this.setupCropper();
        }, FLASH_TIMEOUT);
      }
      this.isPhotoTaken = !this.isPhotoTaken;

      const context = this.$refs.canvas.getContext('2d');
      context.drawImage(this.$refs.camera, 0, 0, 200, 200);
    },

    dataURLtoFile(dataurl, filename) {
      /*   download.setAttribute("href", canvas); */
      var arr = dataurl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);

      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new File([u8arr], filename, { type: mime });
    },
    setupCropper() {
      const download = document.getElementById('downloadPhoto');
      const canvas = document
        .getElementById('photoTaken')
        .toDataURL('image/jpeg');
      const selectedFile = this.dataURLtoFile(canvas, this.fileName);
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
    async upload(e) {
      this.axiosLoading = true;
      try {
        const formData = new FormData();
        formData.append('image', this.file);
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
      } catch (e) {
        this.axiosLoading = false;
        console.log(e);
      }
    },
  },
  unmounted() {
    this.stopcamera();
  },
};
</script>

<style lang="scss">
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
