<template>
    <div
        class="h-full w-full flex overflow-hidden antialiased text-gray-800 "
        style="background-color:#F9F9F9"
    >
        <!-- main content -->
        <main class="flex-grow flex min-h-0 lg:flex-row flex-col-reverse">
            <!-- section update to tickets -->
            <section
                class=" lg:ml-4 text-center flex flex-col p-2  lg:w-3/12 max-w-full flex-none sm:border-t border-l border-r bg-white min-h-0 overflow-auto"
            >
                <span class="text-lg font-bold text-gray-600">Posted By</span>
                <div class=" mt-20 container mx-auto">
                    <div>
                        <div class="bg-white relative">
                            <div class="flex justify-center">
                                <img
                                    :src="Listing.owner.image"
                                    alt=""
                                    class="rounded-full mx-auto absolute -top-20 w-16 h-16 shadow-2xl border-4 border-white"
                                />
                            </div>

                            <div class="">
                                <h1
                                    class="font-bold text-center text-3xl text-gray-900"
                                >
                                    {{ Listing.owner.firstName }}
                                </h1>
                                <div
                                    class="text-center text-sm text-gray-400 font-medium"
                                >
                                    <p
                                        class="font-bold text-gray-600 mt-2 text-base"
                                    >
                                        Bio:
                                    </p>
                                    {{ Listing.owner.bio }}
                                </div>
                                <p>
                                    <span> </span>
                                </p>
                                <div class="my-5">
                                    <a
                                        href="#"
                                        class="text-indigo-200 block text-center font-medium leading-6 px-6 py-3 bg-indigo-600"
                                        >Connect with
                                        <span class="font-bold"
                                            >@
                                            {{ Listing.owner.firstName }}</span
                                        ></a
                                    >
                                </div>
                                <div
                                    class="flex justify-evenly flex-wrap my-5 mb-48 lg:mb-8"
                                >
                                    <dd
                                        class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 w-full px-2"
                                    >
                                        <ul
                                            class="border border-gray-200 rounded-md divide-y divide-gray-200 w-full "
                                        >
                                            <li
                                                class="pl-3 pr-4 py-3 flex items-center justify-between text-sm"
                                            >
                                                <div
                                                    class="w-0 flex-1 flex items-center"
                                                >
                                                    <img
                                                        class="w-8 h-8"
                                                        :src="
                                                            `${publicPath}Icons/facebook.svg`
                                                        "
                                                    />
                                                    <span
                                                        class="ml-2 flex-1 w-0 truncate"
                                                    >
                                                        {{
                                                            Listing.owner
                                                                .facebook
                                                        }}
                                                    </span>
                                                </div>
                                            </li>
                                            <li
                                                class="pl-3 pr-4 py-3 flex items-center justify-between text-sm"
                                            >
                                                <div
                                                    class="w-0 flex-1 flex items-center"
                                                >
                                                    <!-- Heroicon name: solid/paper-clip -->
                                                    <img
                                                        class="w-8 h-8"
                                                        :src="
                                                            `${publicPath}Icons/twitter(1).svg`
                                                        "
                                                    />
                                                    <span
                                                        class="ml-2 flex-1 w-0 truncate"
                                                    >
                                                        {{
                                                            Listing.owner
                                                                .twitter
                                                        }}
                                                    </span>
                                                </div>
                                            </li>
                                            <li
                                                class="pl-3 pr-4 py-3 flex items-center justify-between text-sm"
                                            >
                                                <div
                                                    class="w-0 flex-1 flex items-center"
                                                >
                                                    <!-- Heroicon name: solid/paper-clip -->
                                                    <img
                                                        class="w-8 h-8"
                                                        :src="
                                                            `${publicPath}Icons/whatsapp.svg`
                                                        "
                                                    />
                                                    <span
                                                        class="ml-2 flex-1 w-0 truncate"
                                                    >
                                                        {{
                                                            Listing.owner
                                                                .whatsapp
                                                        }}
                                                    </span>
                                                </div>
                                            </li>
                                            <li
                                                class="pl-3 pr-4 py-3 flex items-center justify-between text-sm"
                                            >
                                                <div
                                                    class="w-0 flex-1 flex items-center"
                                                >
                                                    <!-- Heroicon name: solid/paper-clip -->
                                                    <svg
                                                        class="flex-shrink-0 h-5 w-5 text-gray-400"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                        aria-hidden="true"
                                                    >
                                                        <path
                                                            fill-rule="evenodd"
                                                            d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                                                            clip-rule="evenodd"
                                                        />
                                                    </svg>
                                                    <span
                                                        class="ml-2 flex-1 w-0 truncate"
                                                        ><p>
                                                            {{
                                                                Listing.owner
                                                                    .Secondemail
                                                            }}
                                                        </p>
                                                    </span>
                                                </div>
                                            </li>
                                            <li
                                                class="pl-3 pr-4 py-3 flex items-center justify-between text-sm"
                                            >
                                                <div
                                                    class="w-0 flex-1 flex items-center"
                                                >
                                                    <!-- Heroicon name: solid/paper-clip -->
                                                    <svg
                                                        class="flex-shrink-0 h-5 w-5 text-gray-400"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                        aria-hidden="true"
                                                    >
                                                        <path
                                                            fill-rule="evenodd"
                                                            d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                                                            clip-rule="evenodd"
                                                        />
                                                    </svg>
                                                    <span
                                                        class="ml-2 flex-1 w-0 truncate"
                                                        ><p>
                                                            {{
                                                                Listing.owner
                                                                    .email
                                                            }}
                                                        </p>
                                                    </span>
                                                </div>
                                            </li>
                                            <li
                                                class="pl-3 pr-4 py-3 w-full flex items-center justify-between text-sm"
                                            >
                                                <div
                                                    class="w-0 flex-1 flex items-center"
                                                >
                                                    <!-- Heroicon name: solid/paper-clip -->
                                                    <img
                                                        class="w-8 h-8"
                                                        :src="
                                                            `${publicPath}Icons/phone.svg`
                                                        "
                                                    />
                                                    <span
                                                        class="ml-2 flex-1 w-0 truncate"
                                                    >
                                                        {{ Listing.owner.cell }}
                                                    </span>
                                                </div>
                                            </li>
                                        </ul>
                                    </dd>
                                </div>

                                <div class="w-full hidden lg:block ">
                                    <h3
                                        class=" text-gray-600 text-left flex space-x-2  px-4 m-auto"
                                    >
                                        <p class="font-bold">
                                            {{ Listing.owner.firstName }}'s
                                        </p>
                                        <p class>Recent posts:</p>
                                    </h3>
                                    <button
                                        class="text-sm focus:outline-none mb-48 mt-4 font-bold text-blue-600 text-center border rounded-full border-gray-600 px-2 py-1 mb-1"
                                        v-show="!loaded"
                                        @click="
                                            getListingBySameOwner(
                                                Listing.owner._id
                                            )
                                        "
                                    >
                                        load
                                    </button>

                                    <div class="mt-5 w-full cont mb-48">
                                        <div
                                            class="loader"
                                            v-if="loading"
                                        ></div>
                                        <div
                                            v-show="error"
                                            class="text-gray-500 text-sm "
                                        >
                                            {{ error }}
                                        </div>
                                        <div
                                            v-for="item in PostsBySameOwner"
                                            :key="item._id"
                                        >
                                            <a
                                                :href="`${item._id}`"
                                                class="w-full flex items-center space-x-8 border-t-2 border-gray-100 font-medium text-gray-600 py-4 px-4 w-full block hover:bg-gray-100 transition duration-150"
                                                replace
                                            >
                                                <img
                                                    :src="item.image"
                                                    alt=""
                                                    class="rounded-full h-10 w-10 shadow-md inline-block mr-2"
                                                />
                                                <div
                                                    class="item-center flex flex-col"
                                                >
                                                    <span>{{ item.name }}</span>
                                                    <span class="font-bold"
                                                        >Price:
                                                        {{ item.price }}</span
                                                    >
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- section content -->
            <section class="max-w-full flex-1">
                <!-- This example requires Tailwind CSS v2.0+ -->
                <div class="bg-white shadow overflow-hidden max-w-screen">
                    <div class="px-4 py-5 sm:px-6">
                        <h3 class="text-lg leading-6 font-medium text-gray-900">
                            Listing Information
                        </h3>
                        <p class="mt-1 max-w-2xl text-sm text-gray-500">
                            Details
                        </p>
                    </div>
                    <div class="border-t border-gray-200 ">
                        <dl>
                            <div
                                class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                            >
                                <dt class="text-sm font-medium text-gray-500">
                                    Name
                                </dt>
                                <dd
                                    class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 overflow-wrap break-words"
                                >
                                    {{ Listing.name }}
                                </dd>
                            </div>
                            <div
                                class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                            >
                                <dt class="text-sm font-medium text-gray-500">
                                    Category
                                </dt>
                                <dd
                                    class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 overflow-wrap break-words"
                                >
                                    {{ Listing.category }}
                                </dd>
                            </div>
                            <div
                                class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                            >
                                <dt class="text-sm font-medium text-gray-500">
                                    Currency
                                </dt>
                                <dd
                                    class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                                >
                                    {{ Listing.currency }}
                                </dd>
                            </div>
                            <div
                                class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                            >
                                <dt class="text-sm font-medium text-gray-500">
                                    Price
                                </dt>
                                <dd
                                    class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                                >
                                    ${{ Listing.price }}
                                </dd>
                            </div>
                            <div
                                class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                            >
                                <dt class="text-sm font-medium text-gray-500">
                                    Condition
                                </dt>
                                <dd
                                    class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                                >
                                    {{ Listing.condition }}
                                </dd>
                            </div>
                            <div
                                class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                            >
                                <dt class="text-sm font-medium text-gray-500">
                                    Description
                                </dt>
                                <dd
                                    class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 overflow-wrap break-words w-64 sm:w-full"
                                >
                                    {{ Listing.description }}
                                </dd>
                            </div>
                            <div
                                class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                            >
                                <dt class="text-sm font-medium text-gray-500">
                                    Image
                                </dt>
                                <dd
                                    class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                                >
                                    <ul
                                        class="border w-3/4 border-gray-200 rounded-md divide-y divide-gray-200"
                                    >
                                        <img
                                            :src="Listing.image"
                                            alt=""
                                            class="rounded w-full cover"
                                            style="height:20rem"
                                        />
                                    </ul>
                                </dd>
                            </div>
                            <div
                                class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 pb-24"
                            >
                                <dt class="text-sm font-medium text-gray-500">
                                    Gallery Images
                                </dt>
                                <dd
                                    class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                                >
                                    <ul class="rounded-md">
                                        <div class="text-sm text-center">
                                            <button
                                                class="flex flex-shrink-0 m-auto focus:outline-none block flex items-center justify-center"
                                                type="button"
                                            >
                                                <ImageModal
                                                    :parent="parentComponent"
                                                    :id="Listing._id"
                                                    :length="ListingGallery"
                                                />
                                            </button>
                                        </div>
                                        <div
                                            class="text-center p-2"
                                            v-if="Listing.gallery.length === 0"
                                        >
                                            No Gallery Images Yet
                                        </div>
                                        <div
                                            class="text-sm text-center"
                                            v-for="image in Listing.gallery"
                                            :key="image"
                                        >
                                            <div class="">
                                                <ul
                                                    class="border w-3/4 mt-4 border-gray-200 rounded-md divide-y divide-gray-200"
                                                >
                                                    <img
                                                        :src="image"
                                                        alt=""
                                                        class="rounded w-full cover"
                                                        style="height:20rem"
                                                    />
                                                </ul>
                                            </div>
                                        </div>
                                    </ul>
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </section>
        </main>
    </div>
</template>

<script>
import ImageModal from "../components/ImageModal.vue";
import AccountModal from "@/components/AccountModal.vue";
import axios from "@/axios";
export default {
    name: "Account",
    components: {},
    data() {
        return {
            publicPath: process.env.BASE_URL,
            Listing: {},
            PostsBySameOwner: {},
            loading: false,
            errors: null,
            loaded: false
        };
    },
    mounted() {
        this.getListing();
    },
    methods: {
        async getListing() {
            await axios
                .get(`/api/Listing/listing/${this.$route.params.id}`)
                .then(response => {
                    this.Listing = response.data.Listing;
                })
                .catch(error => {
                    console.log(error);
                });
        },
        async getListingBySameOwner(id) {
            this.loading = true;
            await axios
                .get(`/api/Listing/listingBySameOwner/${id}`)
                .then(response => {
                    this.PostsBySameOwner = response.data.Listings;
                    this.PostsBySameOwner = this.PostsBySameOwner.slice(
                        Math.max(this.PostsBySameOwner.length - 3, 0)
                    );
                    this.loading = false;
                    this.loaded = true;
                })
                .catch(error => {
                    this.loading = false;
                    this.error = "Sorry Loading failed";
                    this.loaded = false;
                    console.log(error);
                });
        }
    }
};
</script>

<style scoped>
.cont {
    /* Components Root Element ID */
    position: relative;
}
.loader {
    /* Loader Div Class */
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: transparent;
    background-image: url("../assets/Loaders/spin2.gif");
    background-size: 50px;
    background-repeat: no-repeat;
    background-position: center;
    z-index: 10000000;
    opacity: 0.4;
    filter: alpha(opacity=40);
}
</style>
