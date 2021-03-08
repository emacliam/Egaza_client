<template>
    <main class="text-gray-black leading-loose font-normal ">
        <!-- Notification Below -->
        <!-- completed on v-if is working differently from that on v-bind:class -->
        <!--  v-bind:class="completed ? 'sr-only' : ''" -->
        <div class="bg-indigo-600" v-if="!complete">
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
                                Account not Complete
                            </span>
                            <span class="hidden md:inline">
                                Your Account is not complete.
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
                            Account
                        </a>
                    </div>
                    <div class="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                        <button
                            @click="cancelNotification()"
                            type="button"
                            class="-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
                        >
                            <span class="sr-only">Dismiss</span>
                            <!-- Heroicon name: outline/x -->
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
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- desktop -->
        <body class="antialiased h-full">
            <div
                class="h-full w-full flex overflow-hidden antialiased text-gray-800 "
                style="background-color:#F3F4F6"
            >
                <!-- main content -->
                <main class="flex-grow flex min-h-0">
                    <!-- section update to tickets -->
                    <section
                        style="backgroundColor:#6A12D1"
                        class="hidden md:block ml-4 flex flex-col  w-3/12 max-w-sm flex-none border-l border-r min-h-0 overflow-auto"
                    >
                        <div class="p-3 space-y-4 text-gray-700 mb-2 ">
                            <div class="mt-12">
                                <div
                                    v-if="loading"
                                    class="flex flex-col bg-white max-w-sm  mx-auto rounded-lg shadow-md"
                                >
                                    <!--content palceholder start -->
                                    <div
                                        class="border border-blue-300 shadow rounded-lg max-w-sm w-full  py-4"
                                    >
                                        <div
                                            class="animate-pulse  flex flex-col "
                                        >
                                            <div
                                                class="w-full flex items-center space-x-4 px-6"
                                            >
                                                <div
                                                    class="rounded-full bg-gray-400 h-12 w-12"
                                                ></div>
                                                <div
                                                    class="flex-1 space-y-4 py-1"
                                                >
                                                    <div
                                                        class="h-4 bg-gray-400 rounded w-3/4"
                                                    ></div>
                                                </div>
                                            </div>

                                            <div
                                                class="space-y-1 mt-2 w-1/2 px-5"
                                            >
                                                <div
                                                    class="h-4 bg-gray-400 rounded w-5/6"
                                                ></div>
                                                <div
                                                    class="h-4 bg-gray-400 rounded"
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- content placeholder end -->
                                </div>
                                <div
                                    v-else
                                    class="flex flex-col bg-white max-w-sm px-6 py-4 mx-auto rounded-lg shadow-md"
                                >
                                    <ul class="-mx-4">
                                        <li class="flex items-center">
                                            <img
                                                :src="userImage"
                                                alt="avatar"
                                                class="w-10 h-10 object-cover rounded-full mx-4"
                                            />
                                            <p>
                                                <a
                                                    href="#"
                                                    class="text-gray-700 font-bold text-xs mx-1 hover:underline"
                                                    >{{ userName }}</a
                                                >
                                            </p>
                                        </li>
                                        <router-link
                                            to="account"
                                            class="text-blue-600 text-sm ml-3 font-light cursor-pointer"
                                            >View Profile</router-link
                                        >
                                    </ul>
                                    <div
                                        class="flex items-center text-gray-500 font-normal space-x-2"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="fill-current h-4 w-4 text-blue-500"
                                            viewBox="0 0 24 24"
                                        >
                                            <title>Post It</title>
                                            <g id="Post_It" data-name="Post It">
                                                <path
                                                    d="M23.91,16.12,19.84,2.56a2.21,2.21,0,0,0-2.72-1.46L12,2.64A2,2,0,0,0,8,3H2A2,2,0,0,0,0,5V20a2,2,0,0,0,2,2H6.42a2.18,2.18,0,0,0,2.46.91l13.56-4.07A2.2,2.2,0,0,0,24,16.75,2.17,2.17,0,0,0,23.91,16.12ZM10,5.32,11,5V6.5a.5.5,0,0,1-1,0ZM4.13,7.08,9,5.62V6.5a1.5,1.5,0,0,0,3,0V4.72L17.75,3a.18.18,0,0,1,.18.13L22,16.75a.18.18,0,0,1-.13.18L8.25,21a.18.18,0,0,1-.18-.13L4,7.25A.18.18,0,0,1,4.13,7.08ZM10,2a1,1,0,0,1,1,.93L10.76,3H9A1,1,0,0,1,10,2Z"
                                                />
                                            </g>
                                        </svg>
                                        <span class="text-xs items-center flex"
                                            >You have
                                            <p
                                                class="text-blue-700 text-sm mx-2"
                                            >
                                                {{ ListingsNo }}
                                            </p>
                                            Listing/s</span
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- recent posts -->
                        <section>
                            <RecentPosts />
                        </section>
                    </section>

                    <!-- section content -->
                    <section
                        aria-label="main content"
                        class="flex min-h-0 flex-col flex-auto justify-between relative"
                    >
                        <!-- content navigation -->
                        <nav
                            :class="stick ? 'top-0 fixed z-50' : ''"
                            class=" border-b border-l  border-r border-t border-gray-200 shadow z-20 flex justify-between items-start p-2 bg-white  w-full stick m-auto rounded-b-lg"
                            ref="navbar"
                        >
                            <!-- search -->
                            <div
                                class="relative  text-gray-600 md:w-1/2 sm:w-full "
                            >
                                <div
                                    class="relative border border-gray-300 rounded-full px-4"
                                >
                                    <input
                                        style="border-radius:2px"
                                        class=" pr-16 w-full h-10 text-sm focus:border-blue-500 focus:outline-none"
                                        type="search"
                                        name="search"
                                        v-model="search"
                                        placeholder="Search by {Category, Name,Description,Price}"
                                    />
                                    <button
                                        type="submit"
                                        class="absolute right-0 top-0 mt-3 mr-4"
                                    >
                                        <svg
                                            class="text-gray-600 h-4 w-4 fill-current"
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlns:xlink="http://www.w3.org/1999/xlink"
                                            version="1.1"
                                            id="Capa_1"
                                            x="0px"
                                            y="0px"
                                            viewBox="0 0 56.966 56.966"
                                            style="enable-background:new 0 0 56.966 56.966;"
                                            xml:space="preserve"
                                            width="512px"
                                            height="512px"
                                        >
                                            <path
                                                d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <!-- side  nav -->
                            <section
                                aria-labelledby="open-tickets-tabs-label"
                                class="focus:outline-none hidden md:block"
                            >
                                <div class="flex items-center mt-1">
                                    <div class="flex flex-row mb-1 sm:mb-0">
                                        <div class="relative">
                                            <select
                                                class="h-full rounded-l border block appearance-none w-full bg-white border-gray-300 text-gray-300 py-2 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                v-model="property"
                                            >
                                                <option></option>
                                                <option
                                                    @click="Method"
                                                    value="name"
                                                    >Name</option
                                                >
                                                <option
                                                    @click="Method"
                                                    value="price"
                                                    >Price</option
                                                >
                                                <option value="category"
                                                    >Category</option
                                                >
                                            </select>
                                            <div
                                                class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                                            >
                                                <svg
                                                    class="fill-current h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path
                                                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="relative">
                                            <select
                                                class="appearance-none h-full rounded-r border-t sm:border-r-0 border-r border-b block appearance-none w-full bg-white border-gray-300 text-gray-300 py-2 px-4 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500"
                                                v-model="order"
                                            >
                                                <option></option>
                                                <option
                                                    value="asc"
                                                    @click="Method"
                                                    >Asc</option
                                                >
                                                <option
                                                    value="desc"
                                                    @click="Method"
                                                    >Desc</option
                                                >
                                            </select>
                                            <div
                                                class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                                            >
                                                <svg
                                                    class="fill-current h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path
                                                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        style="border-radius:1px"
                                        class="h-10 border border-gray-300 bg-white flex flex-col items-center"
                                    >
                                        <!-- /////grid -->
                                    </div>
                                </div>
                            </section>
                        </nav>
                        <div
                            v-if="loading"
                            class="md:pr-6 md:pl-8 px-2 min-h-screen flex-1 bg-gray-50 mt-4"
                        >
                            <div
                                class="animate-pulse  max-w-11/12 pr-2 pl-1 py-1 bg-white border border-gray-200 rounded-lg shadow  flex space-x-6 mt-6 "
                                v-for="i in 10"
                                :key="i"
                            >
                                <div
                                    class="w-full flex items-center space-x-4 px-1 py-2"
                                >
                                    <div
                                        class="rounded-lg bg-gray-400 w-24 h-24"
                                    ></div>
                                    <div class="flex-1 space-y-2 py-1">
                                        <div
                                            class="h-4 bg-gray-400 rounded w-1/4"
                                        ></div>
                                        <div
                                            class="h-4 bg-gray-400 rounded w-1/2"
                                        ></div>
                                        <div
                                            class="h-4 bg-gray-400 rounded w-full"
                                        ></div>
                                        <div
                                            class="flex items-center justify-between"
                                        >
                                            <div
                                                class="h-4 bg-gray-400 rounded w-4"
                                            ></div>
                                            <div
                                                class=" flex items-center space-x-2"
                                            >
                                                <div
                                                    class="h-4 bg-gray-400 rounded w-4"
                                                ></div>
                                                <div
                                                    class="h-4 bg-gray-400 rounded w-4"
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            v-else
                            class="md:pr-6 md:pl-8 px-2 min-h-screen flex-1 bg-gray-50"
                        >
                            <span class="mb-4 mt-16">All Listings</span>
                            <!-- post card -->
                            <div v-if="Listings.length === 0">
                                No Listings to show
                            </div>
                            <div
                                class="mt-6  text-sm"
                                v-for="listings in filteredListings"
                                :key="listings._id"
                            >
                                <div
                                    class="max-w-11/12 pr-2 pl-2 py-2 bg-white border border-gray-200 rounded-lg shadow  flex space-x-6"
                                >
                                    <div>
                                        <img
                                            class="w-24 h-24 rounded "
                                            :src="listings.image"
                                        />
                                    </div>
                                    <div class="flex-1">
                                        <div
                                            class="flex justify-between items-center"
                                        >
                                            <span
                                                class="font-light text-gray-600"
                                                >{{
                                                    listings.dateCreated
                                                }}</span
                                            >
                                        </div>
                                        <div class="">
                                            <a
                                                href="#"
                                                class="text-lg text-gray-700 truncate font-bold hover:underline"
                                                >{{ listings.name }}</a
                                            >
                                            <p
                                                class="text-gray-600 truncate overflow-ellipsis  ... w-24 sm:w-48"
                                            >
                                                {{ listings.description }}
                                            </p>
                                        </div>
                                        <div
                                            class="flex justify-between items-center"
                                        >
                                            <router-link
                                                :to="`Listing/${listings._id}`"
                                                class="text-blue-500 hover:underline"
                                            >
                                                View
                                            </router-link>
                                            <div>
                                                <div class="flex items-center">
                                                    <img
                                                        :src="
                                                            listings.owner.image
                                                        "
                                                        alt="avatar"
                                                        class="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
                                                    />

                                                    <div class="group relative">
                                                        <button
                                                            aria-controls="add"
                                                            aria-expanded="false"
                                                            aria-haspopup="listbox"
                                                            class="flex items-center h-full px-4 text-sm focus:outline-none"
                                                        >
                                                            <h1
                                                                class="text-gray-700 font-bold hover:underline"
                                                            >
                                                                <img
                                                                    class="w-5 h-5 "
                                                                    :src="
                                                                        `${publicPath}Icons/dots.svg`
                                                                    "
                                                                />
                                                            </h1>
                                                        </button>
                                                        <span
                                                            class="absolute text-sm p-1 bg-white w-48 border rounded-lg px-3 hidden group-hover:block right-0 z-50"
                                                        >
                                                            <div
                                                                class="py-2 flex items-center"
                                                            >
                                                                <a
                                                                    href="#"
                                                                    class="flex flex-col items-center px-1 m-auto"
                                                                >
                                                                    <span
                                                                        class=" font-bold"
                                                                        >Uploaded
                                                                        By</span
                                                                    >
                                                                    <div
                                                                        class="text-gray-600 text-sm mx-2"
                                                                    >
                                                                        <span>{{
                                                                            listings
                                                                                .owner
                                                                                .firstName
                                                                        }}</span>
                                                                        <span></span>
                                                                        <span>{{
                                                                            listings
                                                                                .owner
                                                                                .lastName
                                                                        }}</span>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        </span>
                                                    </div>
                                                    <div class="group relative">
                                                        <span
                                                            aria-controls="add"
                                                            aria-expanded="false"
                                                            aria-haspopup="listbox"
                                                            class="flex items-center h-full text-sm focus:outline-none"
                                                        >
                                                            <h1
                                                                class="text-gray-700 font-bold "
                                                            >
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    fill="none"
                                                                    width="30px"
                                                                    viewBox="0 0 24 24"
                                                                    stroke="currentColor"
                                                                >
                                                                    <path
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        stroke-width="2"
                                                                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                                                                    />
                                                                </svg>
                                                            </h1>
                                                        </span>
                                                        <span
                                                            class="absolute z-0 text-sm bg-white w-12 border rounded-lg hidden group-hover:block right-0"
                                                        >
                                                            <div
                                                                class="py-2 flex items-center"
                                                            >
                                                                <div
                                                                    class="flex flex-col m-auto space-y-2 items-center px-1"
                                                                >
                                                                    <button>
                                                                        <ShareNetwork
                                                                            network="facebook"
                                                                            url="http://192.168.43.91:8080/Listing/601a577c4f7d876ae9cb790c"
                                                                            title="
                                                                                Checkout this Great Listing I found on Egaza
                                                                            "
                                                                            :description="
                                                                                Listings.description
                                                                            "
                                                                            :hashtags="
                                                                                Listings.category
                                                                            "
                                                                        >
                                                                            <img
                                                                                class="w-6 h-6 "
                                                                                :src="
                                                                                    `${publicPath}Icons/facebook2.svg`
                                                                                "
                                                                            />
                                                                        </ShareNetwork>
                                                                    </button>
                                                                    <button>
                                                                        <ShareNetwork
                                                                            network="twitter"
                                                                            url="http://192.168.43.91:8080/Listing/601a577c4f7d876ae9cb790c"
                                                                            title="
                                                                                Checkout this Great Listing I found on Egaza
                                                                            "
                                                                            :description="
                                                                                Listings.description
                                                                            "
                                                                            :hashtags="
                                                                                Listings.category
                                                                            "
                                                                        >
                                                                            <img
                                                                                class="w-6 h-6 "
                                                                                :src="
                                                                                    `${publicPath}Icons/twitter.svg`
                                                                                "
                                                                            />
                                                                        </ShareNetwork>
                                                                    </button>
                                                                    <button>
                                                                        <ShareNetwork
                                                                            network="whatsapp"
                                                                            url="http://192.168.43.91:8080/Listing/601a577c4f7d876ae9cb790c"
                                                                            title="
                                                                                Checkout this Great Listing I found on Egaza
                                                                            "
                                                                            :description="
                                                                                Listings.description
                                                                            "
                                                                            :hashtags="
                                                                                Listings.category
                                                                            "
                                                                            ><img
                                                                                class="w-6 h-6 "
                                                                                :src="
                                                                                    `${publicPath}Icons/whatsapp2.svg`
                                                                                "
                                                                            />
                                                                        </ShareNetwork>
                                                                    </button>
                                                                    <button>
                                                                        <ShareNetwork
                                                                            network="linkedIn"
                                                                            url="http://192.168.43.91:8080/Listing/601a577c4f7d876ae9cb790c"
                                                                            title="
                                                                                Checkout this Great Listing I found on Egaza
                                                                            "
                                                                            :description="
                                                                                Listings.description
                                                                            "
                                                                            :hashtags="
                                                                                Listings.category
                                                                            "
                                                                        >
                                                                            <img
                                                                                class="w-6 h-6 "
                                                                                :src="
                                                                                    `${publicPath}Icons/linkedin.svg`
                                                                                "
                                                                            />
                                                                        </ShareNetwork>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full flex justify-center mt-8 mb-32">
                                <!-- show this only when there is content okay and the content is greater than 10 -->
                                <a
                                    v-show="Listings.length > 10"
                                    href=""
                                    class="p-2 text-xs rounded-full border border-gray-400 hover:border-gray-600"
                                    >Load more</a
                                >
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </body>
    </main>
</template>

<script>
import router from "@/router/index";
import axios from "@/axios";
import RecentPosts from "@/components/RecentPosts.vue";
import { ContentLoader, FacebookLoader } from "vue-content-loader";
export default {
    components: {
        RecentPosts
        /*   ContentLoader */
        /*    FacebookLoader */
    },
    data() {
        return {
            stick: false,
            toggle: 0,
            Listings: {},
            ListingsNo: "",
            search: "",
            property: "",
            order: "",
            loading: false,
            completed: null,
            view: {
                atTopOfPage: false,
                lastScrollPosition: 400
            },
            publicPath: process.env.BASE_URL
        };
    },
    mounted() {
        this.getListings();
        this.getMyListings();
    },
    created() {
        this.checkAcc();
    },
    // a beforeMount call to add a listener to the window
    beforeMount() {
        window.addEventListener("scroll", this.handleScroll);
    },
    computed: {
        userId() {
            return this.$store.state.auth.userId;
        },
        userImage() {
            return this.$store.state.auth.image;
        },
        userName() {
            return (
                this.$store.state.auth.firstName +
                " " +
                this.$store.state.auth.lastName
            );
        },
        email() {
            return this.store.state.auth.email;
        },
        filteredListings: function() {
            return this.Listings.filter(item => {
                return (
                    item.name.match(this.search) ||
                    item.description.match(this.search) ||
                    item.category.match(this.search) ||
                    item.price.match(this.search)
                );
            });
        },
        complete() {
            return this.completed;
        }
    },

    methods: {
        // the function to call when the user scrolls, added as a method
        handleScroll() {
            /* const currentScrollPosition =
                window.pageYOffset || document.documentElement.scrollTop;
            console.log(
                currentScrollPosition > Number(this.view.lastScrollPosition)
            );
            if (
                Math.abs(currentScrollPosition > this.view.lastScrollPosition)
            ) {
                this.view.atTopOfPage = true;
            } else {
                this.view.atTopOfPage = true;
            } */

            var element = this.$refs.navbar;
            this.top = element.offsetTop + 130;
            if (document.documentElement.scrollTop > this.top) {
                this.stick = true;
            } else {
                this.stick = false;
            }
        },
        async cancelNotification() {
            this.completed = true;
        },
        async getListings() {
            console.log("entered");
            this.loading = true;
            await axios
                .get("/api/Listing/All_listings")
                .then(response => {
                    console.log(response);
                    this.Listings = response.data.Listings;
                    setTimeout(() => {
                        this.loading = false;
                    }, 2000);
                })
                .catch(error => {
                    this.loading = false;
                    console.log(error);
                });
        },
        async getMyListings() {
            await axios
                .get("/api/Listing/listings")
                .then(response => {
                    this.ListingsNo = response.data.Listings.length;
                })
                .catch(error => {
                    console.log(error);
                });
        },
        async checkAcc() {
            let response = await axios.get("/api/auth/checkProfile");
            if (response.data.complete) {
                this.completed = true;
            } else {
                console.log("is it completed???", response.data.complete);
                this.completed = false;
            }
        },
        GotoListings(id) {
            console.log(id);
            router.push({ name: "Listing", params: { id: id } });
        },
        Sort(property, order) {
            var sort_order = 1;
            if (order === "desc") {
                sort_order = -1;
            }
            return function(a, b) {
                // a should come before b in the sorted order
                if (a[property] < b[property]) {
                    return -1 * sort_order;
                    // a should come after b in the sorted order
                } else if (a[property] > b[property]) {
                    return 1 * sort_order;
                    // a and b are the same
                } else {
                    return 0 * sort_order;
                }
            };
        },
        async Method() {
            this.Listings = this.Listings.sort(
                this.Sort(this.property || "name", this.order || "asc")
            );
        }
    }
};
</script>

<style scoped>
/* can be configured in tailwind.config.js */
.group:hover .group-hover\:block {
    display: block;
}

.focus\:cursor-text:focus {
    cursor: text;
}

.focus\:w-64:focus {
    width: 16rem;
}

input::placeholder {
    color: gray;
    font-size: 1em;
}
</style>
