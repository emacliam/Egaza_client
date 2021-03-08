<template>
  <main>
    <div>
      <div class="md:grid md:grid-cols-3 md:gap-6 p-6">
        <div class="md:col-span-1">
          <div class="px-4 sm:px-0">
            <h3 class="text-lg font-medium leading-6 text-gray-900">
              Profile
            </h3>
            <p class="mt-1 text-sm text-gray-600">
              This information will be displayed publicly so be careful what you
              share.
            </p>
          </div>
        </div>
        <div class="mt-5 md:mt-0 md:col-span-2">
          <fieldset :disabled="loading">
            <div class="shadow sm:rounded-md sm:overflow-hidden">
              <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                <div class="grid grid-cols-3 gap-6">
                  <div class="col-span-3 sm:col-span-2">
                    <label
                      for="company"
                      class="block text-sm font-medium text-gray-700"
                    >
                      CompanyName
                    </label>
                    <div class="mt-1 flex rounded-md shadow-sm">
                      <input
                        type="text"
                        name="company"
                        id="company"
                        v-model="company"
                        class="focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none flex-1 block w-full rounded-none rounded-md sm:text-sm border p-1 border-gray-300"
                        :placeholder="User.company || 'Matsimba'"
                      />
                    </div>
                  </div>
                </div>
                <div class="grid grid-cols-3 gap-6">
                  <div class="col-span-3 sm:col-span-2">
                    <label
                      for="company_website"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Website/CompanyUrl
                    </label>
                    <div class="mt-1 flex rounded-md shadow-sm">
                      <span
                        class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm"
                      >
                        ...
                      </span>
                      <input
                        type="text"
                        name="company_website"
                        id="company_website"
                        v-model="companyUrl"
                        class="focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none flex-1 block w-full rounded-none rounded-r-md sm:text-sm border p-1 border-gray-300"
                        :placeholder="
                          User.companyUrl || '(www|http|https).example.com'
                        "
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    for="about"
                    class="block text-sm font-medium text-gray-700"
                  >
                    About
                  </label>
                  <div class="mt-1">
                    <textarea
                      id="about"
                      name="about"
                      rows="3"
                      v-model="bio"
                      class="shadow-sm p-2 border focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                      :placeholder="User.bio || 'you@example.com'"
                    ></textarea>
                  </div>
                  <p class="mt-2 text-sm text-gray-500">
                    Brief description for your profile. URLs are not
                    hyperlinked.
                  </p>
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700">
                    Photo ( Camera might not Open/Not for Mobile-> upload below)
                  </label>
                  <div class="mt-1 flex items-center">
                    <span
                      class="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100"
                    >
                      <svg
                        class="h-full w-full text-gray-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      </svg>
                    </span>
                    <div
                      class="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <CameraModal />
                    </div>
                  </div>
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700">
                    photo ( Upload from computer )
                  </label>
                  <div
                    class="mt-1 flex flex-col items-center justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"
                  >
                    <div class="space-y-1 text-center">
                      <div
                        class="flex flex-col items-center py-2 justify-center space-y-2 rounded text-sm text-gray-600"
                      >
                        <svg
                          class="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <div
                          class="bg-white text-sm leading-4 font-medium text-gray-700  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          <div class=" w-full">
                            <div>
                              <div class="flex justify-between">
                                <label
                                  class="relative cursor-pointer w-52 my-2 border py-1  text-blue-700 m-auto  border-blue-500 rounded"
                                >
                                  <input
                                    type="file"
                                    ref="file"
                                    v-on:change="handleFileUpload()"
                                    name="image"
                                    id=""
                                    class="my-4 focus:outline-none w-24"
                                    accept="image/png, image/jpeg"
                                    label="File"
                                    placeholder="Select a file"
                                    :show-size="3072"
                                  />
                                  <div
                                    class="w-48 m-auto absolute p-2 inset-0 pointer-event-none bg-gray-50 my-4"
                                  >
                                    Upload Image
                                  </div>
                                </label>
                              </div>
                              <div
                                v-if="objectUrl"
                                class="flex md:flex-col flex-col items-center space-x-8"
                              >
                                <div class="text-center rounded-full">
                                  <div class="overline">
                                    Original image
                                  </div>
                                  <div class="image-container">
                                    <img
                                      class="image-preview"
                                      ref="source"
                                      :src="objectUrl"
                                    />
                                  </div>
                                  <div class="flex justify-center space-x-8">
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
                                        :src="
                                          `${publicPath}Icons/rotate-left.svg`
                                        "
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
                                        :src="
                                          `${publicPath}Icons/rotate-right.svg`
                                        "
                                      />
                                    </button>
                                  </div>
                                </div>
                                <div class="text-center ">
                                  <div
                                    class="image-container border border-gray-300 relative"
                                  >
                                    <img
                                      class="image-preview"
                                      :src="previewCropped"
                                    />
                                    <!--  <div
                                                                            v-show="
                                                                                axiosLoading
                                                                            "
                                                                            class="camera-loading"
                                                                        >
                                                                            <ul
                                                                                class="loader-circle"
                                                                            >
                                                                                <li></li>
                                                                                <li></li>
                                                                                <li></li>
                                                                            </ul>
                                                                        </div> -->
                                  </div>
                                </div>
                              </div>
                              <button
                                class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                v-bind:class="objectUrl ? 'block' : 'hidden'"
                                :disabled="!objectUrl"
                                @click="upload()"
                              >
                                <span class="text-white ">Upload</span>
                                <div
                                  v-if="axiosLoading"
                                  class="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 "
                                >
                                  <div
                                    style="border-top-color:transparent"
                                    class="border-solid animate-spin  rounded-full border-blue-400 border-4 h-8 w-8"
                                  ></div>
                                </div>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p class="text-xs text-gray-500">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <div
                  v-if="errors"
                  :class="
                    error_type == 'success' ? 'bg-green-600' : 'bg-red-600'
                  "
                  class="w-full fixed  top-16 z-50 rounded"
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
                  @click="send"
                  class="relative  inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <div
                    v-if="loading"
                    :class="loading ? 'cursor-wait' : 'cursor-pointer'"
                    class="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 "
                  >
                    <div
                      style="border-top-color:transparent"
                      class="border-solid animate-spin  rounded-full border-blue-400 border-4 h-8 w-8"
                    ></div>
                  </div>
                  Save
                </button>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>

    <div class="hidden sm:block" aria-hidden="true">
      <div class="py-5">
        <div class="border-t border-gray-200"></div>
      </div>
    </div>

    <div class="mt-10 sm:mt-0">
      <div class="md:grid md:grid-cols-3 md:gap-6 p-6">
        <div class="md:col-span-1">
          <div class="px-4 sm:px-0">
            <h3 class="text-lg font-medium leading-6 text-gray-900">
              Personal Information
            </h3>
            <p class="mt-1 text-sm text-gray-600">
              You can use a permanent address where you can receive mail.
            </p>
          </div>
        </div>
        <div class="mt-5 md:mt-0 md:col-span-2">
          <fieldset :disabled="loading">
            <div class="shadow overflow-hidden sm:rounded-md">
              <div class="px-4 py-5 bg-white sm:p-6">
                <div class="grid grid-cols-6 gap-6">
                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="first_name"
                      class="block text-sm font-medium text-gray-700"
                      >First name</label
                    >
                    <input
                      type="text"
                      name="first_name"
                      id="first_name"
                      v-model="firstName"
                      autocomplete="given-name"
                      :placeholder="User.firstName || 'Firstname'"
                      class="mt-1 focus:outline-none p-2 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="last_name"
                      class="block text-sm font-medium text-gray-700"
                      >Last name</label
                    >
                    <input
                      type="text"
                      name="last_name"
                      id="last_name"
                      v-model="lastName"
                      autocomplete="family-name"
                      :placeholder="User.lastName || 'lastname'"
                      class="mt-1 focus:outline-none p-2 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div class="col-span-6 sm:col-span-4">
                    <label
                      for="email_address"
                      class="block text-sm font-medium text-gray-700"
                      >Email address</label
                    >
                    <label
                      for="email_address"
                      class="block text-xs font-medium text-gray-700"
                      >Changing will require verification!!</label
                    >
                    <div class="flex items-center space-x-2">
                      <input
                        type="text"
                        name="email_address"
                        id="email_address"
                        v-model="email"
                        autocomplete="email"
                        :placeholder="User.email || 'Email address'"
                        class="mt-1 focus:outline-none p-2 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                      <div class="w-10 h-10 relative">
                        <div
                          v-if="changeemailloading"
                          class="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 "
                        >
                          <div
                            style="border-top-color:transparent"
                            class="border-solid animate-spin  rounded-full border-blue-400 border-4 h-8 w-8"
                          ></div>
                        </div>
                      </div>
                    </div>
                    <span
                      @click="change_email"
                      :class="changeemailloading ? 'cursor-wait' : ''"
                      class="cursor-pointer inline-flex items-center px-3 py-1 mt-1 rounded-md bg-blue-800 text-white text-sm"
                    >
                      change Email
                    </span>
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="country"
                      class="block text-sm font-medium text-gray-700"
                      >Title</label
                    >
                    <select
                      id="country"
                      name="country"
                      autocomplete="country"
                      v-model="title"
                      class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      <option value="" disabled selected hidden>{{
                        User.title || 'title'
                      }}</option>
                      <option value="Mr">Mr</option>
                      <option value="Mrs">Mrs</option>
                      <option value="Miss">Miss</option>
                    </select>
                  </div>

                  <div class="col-span-6">
                    <label
                      for="street_address"
                      class="block text-sm font-medium text-gray-700"
                      >Street address/Location</label
                    >
                    <input
                      type="text"
                      name="street_address"
                      id="street_address"
                      autocomplete="street-address"
                      v-model="location"
                      :placeholder="User.location || 'location'"
                      class="mt-1 focus:outline-none p-2 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
              </div>
              <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  @click="send"
                  class="relative inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <div
                    v-if="loading"
                    :class="loading ? 'cursor-wait' : 'cursor-pointer'"
                    class="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 "
                  >
                    <div
                      style="border-top-color:transparent"
                      class="border-solid animate-spin  rounded-full border-blue-400 border-4 h-8 w-8"
                    ></div>
                  </div>
                  Save
                </button>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>

    <div class="hidden sm:block" aria-hidden="true">
      <div class="py-5">
        <div class="border-t border-gray-200"></div>
      </div>
    </div>

    <div class="mt-10 sm:mt-0 mb-48">
      <div class="md:grid md:grid-cols-3 md:gap-6 p-6">
        <div class="md:col-span-1">
          <div class="px-4 sm:px-0">
            <h3 class="text-lg font-medium leading-6 text-gray-900">
              Social
            </h3>
            <p class="mt-1 text-sm text-gray-600">
              Decide which communications you'd like to receive and how.
            </p>
          </div>
        </div>
        <div class="mt-5 md:mt-0 md:col-span-2">
          <fieldset :disabled="loading">
            <div class="shadow overflow-hidden sm:rounded-md">
              <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                <fieldset>
                  <div class="col-span-6 sm:col-span-4">
                    <label
                      for="email_address"
                      class="block text-sm font-medium text-gray-700"
                      >Second Email address</label
                    >
                    <input
                      type="text"
                      name="email_address"
                      id="email_address"
                      autocomplete="email"
                      v-model="Secondemail"
                      :placeholder="User.Secondemail || 'Email address'"
                      class="mt-1 focus:outline-none p-2 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                    <div class="col-span-6 sm:col-span-6 lg:col-span-2 mt-4">
                      <label
                        for="twitter"
                        class="block text-sm font-medium text-gray-700"
                        >Twitter Handle</label
                      >
                      <input
                        type="text"
                        name="twitter"
                        id="twitter"
                        v-model="twitter"
                        :placeholder="User.twitter || 'twitter'"
                        class="mt-1 focus:outline-none p-2 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div class="col-span-6 sm:col-span-3 lg:col-span-2 mt-4">
                      <label
                        for="facebook"
                        class="block text-sm font-medium text-gray-700"
                        >Facebook Handle</label
                      >
                      <input
                        type="text"
                        name="facebook"
                        id="facebook"
                        v-model="facebook"
                        :placeholder="User.facebook || 'Facebook link'"
                        class="mt-1 focus:outline-none p-2 border  focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div class="col-span-6 sm:col-span-3 lg:col-span-2 mt-4">
                      <label
                        for="whatsapp"
                        class="block text-sm font-medium text-gray-700"
                        >Whatsapp Number</label
                      >
                      <input
                        type="text"
                        name="whatsapp"
                        id="whatsapp"
                        autocomplete="whatsapp"
                        v-model="whatsapp"
                        :placeholder="User.whatsapp || '+....... / 07......'"
                        class="mt-1 focus:outline-none p-2 border  focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div class="col-span-6 sm:col-span-3 lg:col-span-2 mt-4">
                      <label
                        for="cell"
                        class="block text-sm font-medium text-gray-700"
                        >Cell</label
                      >
                      <input
                        type="text"
                        name="cell"
                        id="cell"
                        autocomplete="cell"
                        v-model="cell"
                        :placeholder="User.cell || '+....... / 07......'"
                        class="mt-1 focus:outline-none p-2 border  focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </fieldset>
              </div>
              <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  @click="send"
                  class=" relative inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <div
                    v-if="loading"
                    :class="loading ? 'cursor-wait' : 'cursor-pointer'"
                    class="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 "
                  >
                    <div
                      style="border-top-color:transparent"
                      class="border-solid animate-spin  rounded-full border-blue-400 border-4 h-8 w-8"
                    ></div>
                  </div>
                  Save
                </button>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapActions } from 'vuex';
import ImageModal from '../ImageModal.vue';
import Cropper from 'cropperjs';
import debounce from 'lodash/debounce';
import CameraModal from '../CameraModal.vue';
import axios from '@/axios';
export default {
  name: 'Edit_Profile',
  components: {
    CameraModal,
  },
  data() {
    return {
      User: {},
      publicPath: process.env.BASE_URL,
      name: 'panashe',
      firstName: '',
      lastName: '',
      email: '',
      bio: '',
      location: '',
      company: '',
      companyUrl: '',
      title: '',
      twitter: '',
      Secondemail: '',
      facebook: '',
      whatsapp: '',
      cell: '',
      cropper: null,
      objectUrl: null,
      previewCropped: null,
      selectedFile: null,
      debouncedUpdatePreview: debounce(this.updatePreview, 257),
      //axiosLoading ==> i did that for images
      axiosLoading: false,
      loading: false,
      file: null,
      data: null,
      fileName: null,
      errors: null,
      changeemailloading: false,
      error_type: '',
    };
  },
  mounted() {
    this.getUserData();
  },
  computed: {
    userEmail() {
      return this.$store.state.auth.email;
    },
    userImage() {
      return this.$store.state.auth.image;
    },
    userName() {
      return (
        this.$store.state.auth.firstName + ' ' + this.$store.state.auth.lastName
      );
    },
    showE() {
      return this.show;
    },
  },
  methods: {
    ...mapActions(['userUpdate', 'ListingStore', 'length']),
    async cancelNotification() {
      this.errors = null;
    },
    async send(e) {
      this.loading = true;
      try {
        let data = {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          bio: this.bio,
          location: this.location,
          company: this.company,
          companyUrl: this.companyUrl,
          title: this.title,
          twitter: this.twitter,
          Secondemail: this.Secondemail,
          facebook: this.facebook,
          whatsapp: this.whatsapp,
          cell: this.cell,
        };

        if (this.companyUrl) {
          if (
            !this.companyUrl.match(
              /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/
            )
          ) {
            this.errors = null;
            this.errors = 'Url format is Wrong';
            this.loading = false;
            return;
          }
        }
        let response = await axios.put('/api/auth/updateuser', data);
        this.state = response.data.success;
        if (this.state === true) {
          const res = await this.userUpdate({
            userData: {
              firstName: response.data.user.firstName,
              lastName: response.data.user.lastName,
              email: response.data.user.email,
              image: response.data.user.image,
            },
          });
          if (res) {
            this.loading = false;
            this.$router.go(this.$router.currentRoute);
          } else {
            this.errors = null;
            this.errors = 'Some thing went wrong';
            this.loading = false;
            this.$router.go(this.$router.currentRoute);
            console.log('error');
          }
        }
      } catch (e) {
        this.errors = null;
        this.errors = 'Something went wrong';
        this.loading = false;
        this.$router.go(this.$router.currentRoute);
        console.log(e);
      }
    },
    async change_email() {
      this.changeemailloading = true;
      if (!this.email) {
        console.log(this.email);
        this.errors = null;
        this.errors = 'Please provide Email';
        this.changeemailloading = false;
        return;
      }
      if (this.email) {
        if (
          !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
            this.email
          )
        ) {
          this.errors = null;
          this.errors = 'Email format Wrong';
          this.changeemailloading = false;
          return;
        }
      }
      try {
        let data = {
          email: this.email,
        };
        const response = await axios.post('api/auth/change_email', data);
        if (response.data.success) {
          this.errors = null;
          this.error_type = 'success';
          this.errors = 'success check email , expires in 10 minutes';
          this.changeemailloading = false;
        } else {
          this.errors = null;
          this.errors = 'Something went wrong';
          this.changeemailloading = false;
        }
      } catch (e) {
        this.errors = null;
        this.errors = 'Changing email failed';
        this.changeemailloading = false;
        console.log(e);
      }
    },
    async getUserData() {
      try {
        await axios.get('/api/auth/userdata').then((response) => {
          this.User = response.data.User;
        });
      } catch (err) {
        console.log(err);
      }
    },

    ...mapActions(['userUpdate', 'ListingStore', 'length']),
    toggleModal: function() {
      if (this.showModal == true) {
        console.log(this.showModal);
        this.showModal = false;
      } else {
        console.log(this.showModal);
        this.showModal = true;
      }
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
    async upload() {
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
