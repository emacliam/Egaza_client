<template>
  <main>
    <main class="text-gray-black leading-loose font-normal">
      <body class="antialiased h-full">
        <div
          class="h-full w-full flex overflow-hidden antialiased text-gray-800 "
          style="background-color:#F9F9F9"
        >
          <!-- main content -->
          <main class="flex-grow flex min-h-0">
            <!-- section update to tickets -->
            <section
              class=" ml-4 flex flex-col p-4 w-3/12 max-w-sm flex-none border-l border-r bg-white min-h-0 overflow-auto"
            >
              <div
                tabindex="0"
                class="cursor-pointer items-center flex flex-col border rounded-md p-3 bg-white space-y-4 text-gray-700 mb-2 hover:border-blue-500 focus:outline-none focus:border-green-500"
              >
                <span class="flex-none pt-1 pr-2">
                  <img
                    class=" h-48 w-48 pt-1 pr-2 rounded-full outline-none "
                    src="https://images.unsplash.com/photo-1610129304523-f02f02e3c436?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  />
                </span>
                <div class="mt-8 flex flex-col items-center ">
                  <span class="text-xs font-bold">Profile image</span>

                  <span class="leading-normal px-1 py-1 text-xs"
                    ><ImageModal
                  /></span>
                </div>
                <div class="font-semibold text-md">
                  {{ userName }}
                </div>
              </div>
              <div>
                <AccountModal />
              </div>
            </section>

            <!-- section content -->
            <section
              aria-label="main content"
              class="flex min-h-0 flex-col flex-auto relative"
            >
              <!-- content navigation -->

              <div class="pr-6 pl-6 flex">
                <!-- right side -->
                <form
                  action="
                                "
                  class="mt-8 flex justify-between w-3/4 mb-48 space-x-64"
                >
                  <!-- first side -->
                  <div class=" space-y-8 flex flex-col w-1/2">
                    <div class="">
                      <label for="email-address" class="text-xs font-bold my-2"
                        >Email address</label
                      >
                      <input
                        id="email-address"
                        name="email"
                        type="email"
                        v-model="email"
                        autocomplete="email"
                        required
                        class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Email address"
                      />
                    </div>
                    <div>
                      <label for="firstname" class="text-xs font-bold my-2"
                        >Fullame</label
                      >
                      <input
                        id="firstname"
                        name="firstname"
                        type="firstname"
                        v-model="firstName"
                        autocomplete="firstname"
                        required
                        class="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Firstname"
                      />
                    </div>
                    <div>
                      <label for="lastname" class="text-xs font-bold my-2"
                        >lastname</label
                      >
                      <input
                        id="lastname"
                        name="lastname"
                        type="lastname"
                        v-model="lastName"
                        autocomplete="lastname"
                        required
                        class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="lastname"
                      />
                    </div>
                    <div>
                      <label for="company" class="text-xs font-bold my-2"
                        >company</label
                      >
                      <input
                        id="company"
                        name="company"
                        type="company"
                        v-model="company"
                        autocomplete="company"
                        required
                        class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="company"
                      />
                    </div>
                    <div>
                      <label for="companyUrl" class="text-xs font-bold my-2"
                        >companyUrl</label
                      >
                      <input
                        id="companyUrl"
                        name="companyUrl"
                        type="companyUrl"
                        v-model="companyUrl"
                        autocomplete="companyUrl"
                        required
                        class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="companyUrl"
                      />
                    </div>
                    <div>
                      <label for="lastname" class="text-xs font-bold my-2"
                        >lastname</label
                      >
                      <input
                        id="lastname"
                        name="lastname"
                        type="lastname"
                        v-model="lastName"
                        autocomplete="lastname"
                        required
                        class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="lastname"
                      />
                    </div>
                    <div>
                      <label for="title" class="text-xs font-bold my-2"
                        >title</label
                      >
                      <input
                        id="title"
                        name="title"
                        type="title"
                        v-model="title"
                        autocomplete="title"
                        required
                        class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="title"
                      />
                    </div>
                    <div>
                      <label for="location" class="text-xs font-bold my-2"
                        >location</label
                      >
                      <input
                        id="location"
                        name="location"
                        type="location"
                        v-model="location"
                        autocomplete="location"
                        required
                        class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="location"
                      />
                    </div>
                  </div>
                  <!-- 2nd side -->
                  <div class=" space-y-8 flex flex-col w-1/2">
                    <div class="">
                      <label
                        for="Extra email-address"
                        class="text-xs font-bold my-2"
                        >Email address 2 (optional)</label
                      >
                      <div class="flex items-start space-x-2">
                        <input
                          id="email-address"
                          name="email2"
                          type="email2"
                          v-model="email2"
                          autocomplete="email2"
                          required
                          class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          placeholder="Email address"
                        />
                        <img
                          class="w-8 h-8"
                          :src="`${publicPath}Icons/email.svg`"
                        />
                      </div>
                    </div>
                    <div>
                      <label for="Facebook link" class="text-xs font-bold my-2"
                        >Facebook link</label
                      >
                      <div class="flex items-start space-x-2">
                        <input
                          id="Facebook link"
                          name="Facebook link"
                          type="Facebook link"
                          v-model="facebook"
                          autocomplete="Facebook link"
                          required
                          class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          placeholder="Facebook link"
                        />
                        <img
                          class="w-8 h-8"
                          :src="`${publicPath}Icons/facebook.svg`"
                        />
                      </div>
                    </div>
                    <div>
                      <label for="twitter" class="text-xs font-bold my-2"
                        >twitter</label
                      >
                      <div class="flex items-start space-x-2">
                        <input
                          id="twitter"
                          name="twitter"
                          type="twitter"
                          v-model="twitter"
                          autocomplete="twitter"
                          required
                          class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          placeholder="twitter"
                        />
                        <img
                          class="w-8 h-8"
                          :src="`${publicPath}Icons/twitter(1).svg`"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        for="whatsapp Number"
                        class="text-xs font-bold my-2"
                        >whatsapp Number</label
                      >
                      <div class="flex items-start space-x-2">
                        <input
                          id="whatsapp Number"
                          name="whatsapp Number"
                          type="whatsapp Number"
                          v-model="whatsappNumber"
                          autocomplete="whatsapp Number"
                          required
                          class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          placeholder="whatsapp Number"
                        />
                        <img
                          class="w-8 h-8"
                          :src="`${publicPath}Icons/whatsapp.svg`"
                        />
                      </div>
                    </div>
                    <div>
                      <label for="cell Number" class="text-xs font-bold my-2"
                        >cell Number</label
                      >
                      <div class="flex items-start space-x-2">
                        <input
                          id="cell Number"
                          name="cell Number"
                          type="cell Number"
                          v-model="cellNumber"
                          autocomplete="cell Number"
                          required
                          class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          placeholder="cell Number"
                        />
                        <img
                          class="w-8 h-8"
                          :src="`${publicPath}Icons/phone.svg`"
                        />
                      </div>
                    </div>
                    <div class="flex items-end">
                      <div class="flex-col flex">
                        <label for="Bio" class="text-xs font-bold my-2"
                          >Bio:</label
                        >
                        <div class="flex items-start space-x-2">
                          <textarea
                            id="Bio"
                            name="Bio"
                            type="Bio"
                            v-model="bio"
                            autocomplete="Bio"
                            required
                            class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Bio"
                            cols="30"
                            rows="10"
                          ></textarea>
                          <img
                            class="w-8 h-8"
                            :src="`${publicPath}Icons/about-me.svg`"
                          />
                        </div>
                      </div>
                    </div>

                    <div class="flex items-center space-x-4">
                      <button
                        class="cursor-pointer my-2 border px-3 py-1 hover:bg-blue-500 text-blue-700  hover:text-white border-blue-500 rounded"
                      >
                        <span class="leading-normal px-1 py-1 text-xs"
                          >Discard</span
                        ></button
                      ><button
                        class="cursor-pointer my-2 border px-3 py-1 hover:bg-blue-500 text-blue-700  hover:text-white border-blue-500 rounded"
                      >
                        <span class="leading-normal px-1 py-1 text-xs"
                          >Save</span
                        >
                      </button>
                    </div>
                    <!-- Image -->
                  </div>
                </form>
              </div>
            </section>
          </main>
        </div>
      </body>
    </main>
  </main>
</template>

<script>
export default {
  name: 'Image',

  data() {
    return {
      publicPath: process.env.BASE_URL,
    };
  },

  methods: {},
};
</script>

<style scoped></style>
