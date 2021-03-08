<template>
  <main>
    <div id="app" class="web-camera-container">
      <div class="camera-button">
        <button
          type="button"
          class="button is-rounded"
          :class="{
            'is-primary': !isCameraOpen,
            'is-danger': isCameraOpen,
          }"
          @click="toggleCamera"
        >
          <span
            v-if="!isCameraOpen"
            class="text-white p-2 rounded bg-blue-600 text-bold text-lg animate-pulse"
            >Open Camera</span
          >
          <span
            v-else
            class="text-white p-2 rounded bg-red-600 text-bold text-lg animate-pulse"
            >Close Camera</span
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

      <div
        v-if="isCameraOpen"
        v-show="!isLoading"
        class="camera-box"
        :class="{ flash: isShotPhoto }"
      >
        <div class="camera-shutter" :class="{ flash: isShotPhoto }"></div>

        <video
          v-show="!isPhotoTaken"
          ref="camera"
          :width="450"
          :height="337.5"
          autoplay
        ></video>

        <canvas
          v-show="isPhotoTaken"
          id="photoTaken"
          ref="canvas"
          :width="450"
          :height="337.5"
        ></canvas>
      </div>

      <div v-if="isCameraOpen && !isLoading" class="camera-shoot">
        <button type="button" class="button" @click="takePhoto">
          <img
            src="https://img.icons8.com/material-outlined/50/000000/camera--v2.png"
          />
        </button>
      </div>

      <div v-if="isPhotoTaken && isCameraOpen" class="camera-download">
        <a
          id="downloadPhoto"
          download="my-photo.jpg"
          class="button"
          role="button"
          @click="setupCropper()"
        >
          Crop Image
        </a>
        <a class="button" role="button">
          Retake
        </a>
      </div>

      <div v-if="objectUrl" class="flex items-center space-x-8">
        <div class="text-center rounded-full">
          <div class="overline">
            Original image
          </div>
          <div class="image-container">
            <img class="image-preview" ref="source" :src="objectUrl" />
            <div class="flex justify-center space-x-4">
              <button icon="icon" small="small" @click="resetCropper">
                <img class="w-8 h-8" :src="`${publicPath}Icons/reset.svg`" />
              </button>
              <div class="mx-2"></div>
              <button icon="icon" small="small" @click="rotateLeft">
                <img
                  class="w-8 h-8"
                  :src="`${publicPath}Icons/rotate-left.svg`"
                />
              </button>
              <button icon="icon" small="small" @click="rotateRight">
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
          <button color="mt-12 " :disabled="!objectUrl">
            <span class="rounded border py-1 px-4  bg-blue-700 text-white "
              >Upload</span
            >
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Cropper from 'cropperjs';
import debounce from 'lodash/debounce';
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
      link: '#',
      publicPath: process.env.BASE_URL,
    };
  },

  methods: {
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
      context.drawImage(this.$refs.camera, 0, 0, 450, 337.5);
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
body {
  display: flex;
  justify-content: center;
}

.web-camera-container {
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 500px;

  .camera-button {
    margin-bottom: 2rem;
  }

  .camera-box {
    .camera-shutter {
      opacity: 0;
      width: 450px;
      height: 337.5px;
      background-color: #fff;
      position: absolute;

      &.flash {
        opacity: 1;
      }
    }
  }

  .camera-shoot {
    margin: 1rem 0;

    button {
      height: 60px;
      width: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 100%;

      img {
        height: 35px;
        object-fit: cover;
      }
    }
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
        background: #999;
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
}
</style>
