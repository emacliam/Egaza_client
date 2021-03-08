<template>
  <main class="text-gray-black leading-loose font-normal relative">
    <!-- style="background-color:#F9F9F9" -->
    <div
      class="h-full w-full bg-gray-50 overflow-hidden antialiased text-gray-800"
    >
      <div
        class="w-full h-24 border-b border-gray-20 text-center font-bold text-gray-600 text-xl justify-center flex flex-col"
      >
        Adding a Listing
      </div>
      <div
        class="mt-8 flex sm:items-start m-auto w-full mb-48 flex-col items-center sm:flex-row space-y-4"
      >
        <!-- first side -->
        <div class="mx-2 flex-1 svelte-1l8159u  ">
          <div class="w-3/4 m-auto">
            <span class="text-xs font-bold my-2">Listing Image</span>
            <p class="text-xs">Note: Images Only</p>
            <div class="flex flex-col items-center mt-4">
              <label
                class="w-48 h-8  text-center items-center bg-teal-600 rounded-lg text-blue font-bold tracking-wide uppercase border border-teal-600 cursor-pointer "
              >
                <span>Image</span>
                <input
                  type="file"
                  class="hidden"
                  id="file"
                  ref="file"
                  v-on:change="handleFileUpload()"
                />
              </label>
              <img
                v-bind:src="imagePreview"
                v-show="showPreview"
                class=" border object-cover mt-12 rounded border-blue-600 ml-4"
              />
            </div>
          </div>
        </div>
        <!-- second side -->
        <div class=" space-y-8  flex flex-col m-auto sm:w-7/12 sm:border-l">
          <div class="m-auto w-3/4">
            <div class="my-8">
              <label
                for="country"
                class="block text-sm font-medium text-gray-700 my-8"
                >Product Name</label
              >
              <input
                id="Name"
                name="name"
                type="name"
                v-model="name"
                autocomplete="name"
                required
                class="appearance-none rounded-none relative block w-full px-3 py-2 border-b border-gray-300 placeholder-gray-500 text-gray-900 bg-gray-50 focus:bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Name"
              />
            </div>
            <div class="my-8">
              <label
                for="price"
                class="block text-sm font-medium text-gray-700 my-8"
                >Price(use .(dot) as a separator not ,(comma))</label
              >
              <div class="mt-1 relative rounded-md ">
                <div
                  class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                >
                  <span class="text-gray-500 sm:text-sm">
                    $
                  </span>
                </div>
                <input
                  type="text"
                  name="price"
                  id="price"
                  v-model="price"
                  required
                  class=" py-2 block w-full pl-7 pr-12 border-gray-300  bg-gray-50 focus:bg-white  border-b  placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="0.00"
                />
                <div class="absolute inset-y-0 right-0 flex items-center">
                  <label for="currency" class="sr-only">Currency</label>
                  <select
                    id="currency"
                    name="currency"
                    v-model="currency"
                    required
                    class="focus:ring-indigo-500  focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
                  >
                    <option value="USD">USD</option>
                    <option value="ZWD">ZWD</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="my-8">
              <label
                for="country"
                class="block text-sm font-medium text-gray-700 my-8"
                >Category</label
              >
              <input
                id="category"
                name="category"
                type="category"
                v-model="category"
                autocomplete="category"
                required
                class="appearance-none bg-gray-50 focus:bg-white relative block w-full px-3 py-2 border-b border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="category"
              />
            </div>
            <div class="col-span-6 sm:col-span-3 my-8">
              <label
                for="country"
                class="block text-sm font-medium text-gray-700 my-8"
                >Condition</label
              >
              <select
                id="country"
                name="country"
                autocomplete="country"
                v-model="condition"
                required
                class="mt-1 block bg-gray-50 focus:bg-white w-full py-2 px-3 border-b border-gray-300 bg-white  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="NEW">NEW</option>
                <option value="LIKE NEW - USED">LIKE NEW - USED</option>
                <option value="RENEWED">RENEWED</option>
                <option value="VERY GOOD">VERY GOOD</option>
                <option value="GOOD">GOOD</option>
                <option value="GOOD - USED">GOOD - USED</option>
                <option value="ACCEPTABLE - USED">ACCEPTABLE - USED</option>
                <option value="GOOD USED">GOOD USED</option>
              </select>
            </div>
            <div class="my-8">
              <label
                for="country"
                class="block text-sm font-medium text-gray-700 my-8"
                >Description</label
              >
              <textarea
                name="description"
                v-model="description"
                placeholder="description"
                class="appearance-none bg-gray-50 focus:bg-whiterelative block w-full px-3 py-2 border-b border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                required
                id=""
                cols="30"
                rows="5"
              ></textarea>
            </div>
            <div
              class="px-4 py-3 bg-gray-50 text-right flex items-center sm:px-6"
            >
              <div
                v-if="errors"
                class="bg-red-600 w-full fixed  top-16 z-50 rounded"
              >
                <div class="mx-auto py-3 sm:px-6 lg:px-8 text-xs">
                  <div class="flex items-center justify-between flex-wrap">
                    <div class="w-0 flex-1 flex items-center space-x-3">
                      <button
                        @click="cancelNotification()"
                        type="button"
                        class="-mr-1 flex rounded-md hover:bg-indigo-500 focus:outline-none sm:-mr-1"
                      >
                        <span class="sr-only">Dismiss</span>
                        <!-- Heroicon name: outline/x -->
                        <svg
                          class="h-3 w-3 text-white"
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
                      <p class="ml-1 font-medium text-white truncate">
                        <span class="md:hidden">
                          {{ errors }}
                        </span>
                        <span class="hidden md:inline">
                          {{ errors }}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <button
                @click="send()"
                class="inline-flex w-full block justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-show="axiosLoading"
      class="camera-loading fixed top-0 h-screen w-screen"
    >
      <ul class="loader-circle">
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </main>
</template>

<script>
import axios from '@/axios';
import router from '@/router/index';
export default {
  components: {},
  data() {
    return {
      publicPath: process.env.BASE_URL,
      name: '',
      price: '',
      category: '',
      currency: '',
      condition: '',
      description: '',
      selectedFile: null,
      fileName: '',
      file: '',
      showPreview: false,
      imagePreview: '',
      axiosLoading: false,
      errors: '',
    };
  },

  methods: {
    async cancelNotification() {
      this.errors = null;
    },
    async send() {
      this.axiosLoading = true;
      if (
        !this.name ||
        !this.category ||
        !this.description ||
        !this.price ||
        !this.condition
      ) {
        this.errors = null;
        this.errors = 'Empty field detected';
        this.axiosLoading = false;
        return;
      }
      if (!this.currency) {
        this.errors = null;
        this.errors = 'Please select currency';
        this.axiosLoading = false;
        return;
      }

      if (this.price) {
        this.price = parseFloat(this.price);
      }
      if (!this.selectedFile) {
        this.errors = null;
        this.errors = 'Please Insert image';
        this.axiosLoading = false;
        return;
      }
      if (this.name.length < 2) {
        this.errors = null;
        this.errors = 'Product name must be greater than 2';
        this.axiosLoading = false;
        return;
      }

      const data = new FormData();
      data.append('name', this.name);
      data.append('price', this.price);
      data.append('description', this.description);
      data.append('category', this.category);
      data.append('currency', this.currency);
      data.append('condition', this.condition);
      data.append('image', this.selectedFile, this.selectedFile.name);
      console.log(data);
      let response = await axios.post('/api/Listing/add', data);
      console.log(response);
      if (response.data.success) {
        this.axiosLoading = false;
        console.log('added');
        this.$toasted.success('Listing added').goAway(2000);
        router.push('mylistings');
      } else {
        this.axiosLoading = false;
        this.$toasted.error('something went wrong').goAway(2000);
      }
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
    },
  },
};
</script>
<style lang="scss">
.camera-loading {
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
