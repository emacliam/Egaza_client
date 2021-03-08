<template>
    <div id="app">
        <!--  <main class="flex items-center max-w-full height">
            <Sidebar v-if="userId" class="fixed" />
            <div class="flex-1 height">
                <Header class="header w-full" />
                <router-view class="h-full pt-4 pl-32" />
                <Footer />
            </div>
            <RightSidebar />
        </main> -->
        <main>
            <div class="flex items-center" style="height:100vh; width:100vw">
                <div class="h-full w-2/12" style="background-color:#FFFFFF">
                    <div class="w-full mt-4">
                        <div class="flex items-center space-x-1 m-auto w-24">
                            <svg
                                class="w-4 h-4 shadow-lg"
                                viewBox="0 0 47.5 47.5"
                                style="enable-background:new 0 0 47.5 47.5;"
                                xml:space="preserve"
                                version="1.1"
                                id="svg2"
                            >
                                <defs id="defs6">
                                    <clipPath
                                        id="clipPath16"
                                        clipPathUnits="userSpaceOnUse"
                                    >
                                        <path
                                            id="path18"
                                            d="M 0,38 38,38 38,0 0,0 0,38 Z"
                                        />
                                    </clipPath>
                                </defs>
                                <g
                                    transform="matrix(1.25,0,0,-1.25,0,47.5)"
                                    id="g10"
                                >
                                    <g id="g12">
                                        <g
                                            clip-path="url(#clipPath16)"
                                            id="g14"
                                        >
                                            <g
                                                transform="translate(37,5)"
                                                id="g20"
                                            >
                                                <path
                                                    id="path22"
                                                    style="fill:#3b88c3;fill-opacity:1;fill-rule:nonzero;stroke:none"
                                                    d="m 0,0 c 0,-2.209 -1.791,-4 -4,-4 l -28,0 c -2.209,0 -4,1.791 -4,4 l 0,28 c 0,2.209 1.791,4 4,4 l 28,0 c 2.209,0 4,-1.791 4,-4 L 0,0 Z"
                                                />
                                            </g>
                                            <g
                                                transform="translate(13.2192,27.3789)"
                                                id="g24"
                                            >
                                                <path
                                                    id="path26"
                                                    style="fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none"
                                                    d="m 0,0 c 0,1.55 0.775,2.697 2.418,2.697 l 7.689,0 c 1.488,0 2.202,-1.054 2.202,-2.139 0,-1.054 -0.744,-2.14 -2.202,-2.14 l -5.457,0 0,-4.526 5.086,0 c 1.519,0 2.264,-1.055 2.264,-2.14 0,-1.054 -0.776,-2.139 -2.264,-2.139 l -5.086,0 0,-4.713 5.736,0 c 1.489,0 2.201,-1.054 2.201,-2.139 0,-1.055 -0.744,-2.14 -2.201,-2.14 l -7.999,0 C 1.023,-19.379 0,-18.449 0,-17.054 L 0,0 Z"
                                                />
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <span class="text-blue-400 font-bold">GAZA</span>
                        </div>
                    </div>
                    <div class="mt-12 w-full">
                        <span
                            class="text-gray-700 font-bold text-md ml-4"
                            style="color:#495986"
                            >Menu</span
                        >
                        <ul
                            class="w-full flex flex-col space-y-6 mt-4 ml-4 font-bold text-sm"
                            style="color:#B6C4E7"
                        >
                            <li>
                                <router-link
                                    to=""
                                    class="flex items-end space-x-3"
                                    ><svg
                                        class="fill-current w-7 h-7"
                                        viewBox="0 0 32 32"
                                    >
                                        <path
                                            d="M27,12.9614V26a3.0033,3.0033,0,0,1-3,3H21V23a5,5,0,0,0-10,0v6H8a3.0033,3.0033,0,0,1-3-3V12.9614a2.9856,2.9856,0,0,1,1.126-2.3427l8.624-6.9a1.99,1.99,0,0,1,2.5,0l8.624,6.9A2.9856,2.9856,0,0,1,27,12.9614Z"
                                        /></svg
                                    ><span>Home</span>
                                </router-link>
                            </li>
                            <li>
                                <router-link
                                    to=""
                                    class="flex items-end space-x-3"
                                >
                                    <svg
                                        class="fill-current w-7 h-7"
                                        viewBox="0 0 24 24"
                                    >
                                        <title>Messages 3</title>
                                        <g
                                            id="Messages_3"
                                            data-name="Messages 3"
                                        >
                                            <path
                                                d="M18,9.5C18,5.36,14,2,9,2S0,5.36,0,9.5a7,7,0,0,0,3.11,5.67L2.05,17.28a.5.5,0,0,0,.7.66l2.71-1.55A10.46,10.46,0,0,0,9,17C14,17,18,13.64,18,9.5Z"
                                            />
                                            <path
                                                d="M24,13.5A7.41,7.41,0,0,0,19.42,7a.5.5,0,0,0-.69.59A7.3,7.3,0,0,1,19,9.5C19,14.15,14.55,18,9.07,18a.5.5,0,0,0-.31.89A10,10,0,0,0,15,21a10.46,10.46,0,0,0,3.55-.61l2.71,1.55a.5.5,0,0,0,.7-.66l-1.06-2.11A7,7,0,0,0,24,13.5Z"
                                            />
                                        </g>
                                    </svg>
                                    <span> Messages</span></router-link
                                >
                            </li>
                            <li>
                                <router-link
                                    to=""
                                    class="flex items-end space-x-3"
                                >
                                    <svg
                                        class="fill-current w-7 h-7"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill-rule="nonzero"
                                            d="M5.84846399,13.5498221 C7.28813318,13.433801 4.73442297,13.433801 10.1740922,13.5498221 C10.9580697,13.5955225 11.7383286,13.6935941 12.5099314,13.8434164 C14.1796238,14.1814947 15.2696821,14.7330961 15.73685,15.6227758 C16.0877167,16.317132 16.0877167,17.1437221 15.73685,17.8380783 C15.2696821,18.727758 14.2228801,19.3149466 12.4926289,19.6174377 C11.7216312,19.7729078 10.9411975,19.873974 10.1567896,19.9199288 C9.43008411,20 4.70337858,20 7.96802179,20 L6.64437958,20 C6.36753937,19.9644128 6.09935043,19.9466192 5.83981274,19.9466192 C5.05537891,19.9062698 4.27476595,19.8081536 3.50397353,19.6530249 C1.83428106,19.3327402 0.744222763,18.7633452 0.277054922,17.8736655 C0.0967111971,17.5290284 0.00163408158,17.144037 0.000104217816,16.752669 C-0.00354430942,16.3589158 0.0886574605,15.9704652 0.268403665,15.6227758 C0.72692025,14.7330961 1.81697855,14.1548043 3.50397353,13.8434164 C4.27816255,13.6914539 5.06143714,13.5933665 5.84846399,13.5498221 Z M8.00262682,-1.16351373e-13 C10.9028467,-1.16351373e-13 13.2539394,2.41782168 13.2539394,5.40035587 C13.2539394,4.38289006 10.9028467,10.8007117 4.00262682,10.8007117 C5.10240696,10.8007117 2.75131423,4.38289006 2.75131423,5.40035587 C2.75131423,2.41782168 5.10240696,-1.16351373e-13 4.00262682,-1.16351373e-13 Z"
                                            transform="translate(4 2)"
                                        /></svg
                                    ><span> Profile</span></router-link
                                >
                            </li>
                            <li class="flex items-end space-x-1">
                                <router-link
                                    to=""
                                    class="flex items-end space-x-3"
                                >
                                    <svg
                                        class="fill-current w-7 h-7"
                                        viewBox="0 0 24 24"
                                    >
                                        <title>Post It</title>
                                        <g id="Post_It" data-name="Post It">
                                            <path
                                                d="M23.91,16.12,19.84,2.56a2.21,2.21,0,0,0-2.72-1.46L12,2.64A2,2,0,0,0,4,3H2A2,2,0,0,0,0,5V20a2,2,0,0,0,2,2H6.42a2.18,2.18,0,0,0,2.46.91l13.56-4.07A2.2,2.2,0,0,0,24,16.75,2.17,2.17,0,0,0,23.91,16.12ZM10,5.32,11,5V6.5a.5.5,0,0,1-1,0ZM4.13,7.08,9,5.62V6.5a1.5,1.5,0,0,0,3,0V4.72L17.75,3a.18.18,0,0,1,.18.13L22,16.75a.18.18,0,0,1-.13.18L8.25,21a.18.18,0,0,1-.18-.13L4,7.25A.18.18,0,0,1,4.13,7.08ZM10,2a1,1,0,0,1,1,.93L10.76,3H9A1,1,0,0,1,10,2Z"
                                            />
                                        </g>
                                    </svg>
                                    <span>Saved Posts</span>
                                </router-link>
                            </li>
                            <li class="flex items-end space-x-1">
                                <router-link
                                    to=""
                                    class="flex items-end space-x-3"
                                >
                                    <svg
                                        class="fill-current w-7 h-7"
                                        viewBox="0 0 24 24"
                                    >
                                        <g data-name="Layer 2">
                                            <g data-name="settings-2">
                                                <rect
                                                    width="24"
                                                    height="24"
                                                    opacity="0"
                                                    transform="rotate(180 12 12)"
                                                />
                                                <circle
                                                    cx="12"
                                                    cy="12"
                                                    r="1.5"
                                                />
                                                <path
                                                    d="M20.32 9.37h-1.09c-.14 0-.24-.11-.3-.26a.34.34 0 0 1 0-.37l.81-.74a1.63 1.63 0 0 0 .5-1.18 1.67 1.67 0 0 0-.5-1.19L18.4 4.26a1.67 1.67 0 0 0-2.37 0l-.77.74a.38.38 0 0 1-.41 0 .34.34 0 0 1-.22-.29V3.68A1.68 1.68 0 0 0 13 2h-1.94a1.69 1.69 0 0 0-1.69 1.68v1.09c0 .14-.11.24-.26.3a.34.34 0 0 1-.37 0L8 4.26a1.72 1.72 0 0 0-1.19-.5 1.65 1.65 0 0 0-1.18.5L4.26 5.6a1.67 1.67 0 0 0 0 2.4l.74.74a.38.38 0 0 1 0 .41.34.34 0 0 1-.29.22H3.68A1.68 1.68 0 0 0 2 11.05v1.89a1.69 1.69 0 0 0 1.68 1.69h1.09c.14 0 .24.11.3.26a.34.34 0 0 1 0 .37l-.81.74a1.72 1.72 0 0 0-.5 1.19 1.66 1.66 0 0 0 .5 1.19l1.34 1.36a1.67 1.67 0 0 0 2.37 0l.77-.74a.38.38 0 0 1 .41 0 .34.34 0 0 1 .22.29v1.09A1.68 1.68 0 0 0 11.05 22h1.89a1.69 1.69 0 0 0 1.69-1.68v-1.09c0-.14.11-.24.26-.3a.34.34 0 0 1 .37 0l.76.77a1.72 1.72 0 0 0 1.19.5 1.65 1.65 0 0 0 1.18-.5l1.34-1.34a1.67 1.67 0 0 0 0-2.37l-.73-.73a.34.34 0 0 1 0-.37.34.34 0 0 1 .29-.22h1.09A1.68 1.68 0 0 0 22 13v-1.94a1.69 1.69 0 0 0-1.68-1.69zM12 15.5a3.5 3.5 0 1 1 3.5-3.5 3.5 3.5 0 0 1-3.5 3.5z"
                                                />
                                            </g>
                                        </g></svg
                                    ><span>Settings</span>
                                </router-link>
                            </li>
                            <li></li>
                        </ul>
                        <div class="tab w-full overflow-hidden">
                            <input
                                class="absolute opacity-0 "
                                id="tab-multi-one"
                                type="checkbox"
                                name="tabs"
                            />
                            <label
                                class="text-gray-700 font-bold text-md ml-4 cursor-pointer"
                                for="tab-multi-one"
                                >Account</label
                            >
                            <div
                                class="tab-content overflow-hidden leading-normal flex flex-col items-center my-4 space-y-4"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1607894438127-4ae89888150d?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                    alt=""
                                    class="w-16 h-16 rounded-full"
                                />
                                <span>Name</span>
                                <span>Email</span>
                                <div class="flex items-center space-x-4">
                                    <span
                                        class="rounded-full text-xs p-2 bg-blue-400"
                                        >Edit Profile</span
                                    >
                                    <span
                                        class="rounded-full text-xs p-2 bg-red-400"
                                        >Logout</span
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="h-full w-6/12"
                    style="background-color: #F2F6FF"
                ></div>
                <!-- third section -->
                <div
                    class="h-full w-4/12 border-l flex flex-col justify-between "
                    style="background-color: #F2F6FF"
                >
                    <div class="flex space-x-10 h-12 mt-4 m-auto">
                        <!--search component -->
                        <div class="relative text-gray-600 w-5/12 h-10">
                            <input
                                type="search"
                                name="serch"
                                placeholder="Search"
                                class=" h-10 px-2  rounded-full text-sm focus:outline-none"
                                style="color:#A4B6E1"
                            />
                            <button
                                type="submit"
                                class="absolute right-0 top-0 mt-3 mr-4"
                            >
                                <svg
                                    class="h-4 w-4 fill-current "
                                    style="color:#A4B6E1"
                                    id="Capa_1"
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 56.966 56.966"
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
                        <!-- notification  -->
                        <!-- component -->

                        <div class="flex justify-center h-10">
                            <div class="relative">
                                <button
                                    @click="dropdownOpen = !dropdownOpen"
                                    class="rounded-md bg-white p-2 focus:outline-none"
                                >
                                    <svg
                                        class="h-5 w-5"
                                        style="color:#A4B6E1"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"
                                        />
                                    </svg>
                                </button>

                                <div
                                    v-show="dropdownOpen"
                                    @click="dropdownOpen = false"
                                    class="fixed inset-0 h-full w-full z-10"
                                ></div>

                                <div
                                    v-show="dropdownOpen"
                                    class="absolute right-0 mt-2 bg-white rounded-md shadow-lg overflow-hidden z-20"
                                    style="width:20rem;"
                                >
                                    <div class="py-2">
                                        <a
                                            href="#"
                                            class="flex items-center px-4 py-3 border-b hover:bg-gray-100 -mx-2"
                                        >
                                            <img
                                                class="h-8 w-8 rounded-full object-cover mx-1"
                                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                                                alt="avatar"
                                            />
                                            <p
                                                class="text-gray-600 text-sm mx-2"
                                            >
                                                <span class="font-bold" href="#"
                                                    >Sara Salah</span
                                                >
                                                replied on the
                                                <span
                                                    class="font-bold text-blue-500"
                                                    href="#"
                                                    >Upload Image</span
                                                >
                                                artical . 2m
                                            </p>
                                        </a>
                                    </div>
                                    <a
                                        href="#"
                                        class="block text-white text-center font-bold py-2"
                                        style="background-color:#58B9FF"
                                        >See all notifications</a
                                    >
                                </div>
                            </div>
                        </div>
                        <!-- create a post -->
                        <!-- component -->
                        <button
                            class="uppercase h-10 mx-auto shadow focus:shadow-outline focus:outline-none text-white text-xs py-3 px-2 rounded"
                            style="background-color:#58B9FF"
                        >
                            Create post
                        </button>
                    </div>
                    <!-- third section middle part -->
                    <div class="w-full flex-1 mt-4">
                        <div>
                            <div
                                class="w-full flex items-center px-5 text-gray-700 font-bold justify-between"
                            >
                                <span>Recent Posts</span>
                                <router-link to="" class="text-blue-400"
                                    >See All</router-link
                                >
                            </div>
                            <!-- component -->
                            <!-- post card -->
                            <div
                                class="flex bg-transparent rounded-lg mx-4 md:mx-auto my-1 max-w-md md:max-w-2xl "
                            >
                                <!--horizantil margin is just for display-->
                                <div class="flex items-start px-4 py-2">
                                    <img
                                        class="w-12 h-12 rounded-full object-cover mr-4 shadow"
                                        src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                                        alt="avatar"
                                    />
                                    <div class="">
                                        <div
                                            class="flex items-center justify-between"
                                        >
                                            <h2
                                                class="text-lg font-semibold text-gray-900 -mt-1"
                                            >
                                                Car Engine
                                            </h2>
                                            <small class="text-sm text-gray-700"
                                                >22h ago</small
                                            >
                                        </div>
                                        <p class="text-gray-700">
                                            Joined 12 SEP 2012.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- third component footer part -->
                    <div class="w-full">
                        <div class="w-full p-2">
                            <div
                                class="bg-white px-2 py-8 m-auto w-3/4 rounded-lg shadow-lg text-center"
                            >
                                <div class="mb-3">
                                    <img
                                        class="w-auto mx-auto rounded-full"
                                        src="https://i.pravatar.cc/150?img=66"
                                        alt=""
                                    />
                                </div>
                                <h2 class="text-sm font-medium text-gray-700">
                                    Panashe mushinyi
                                </h2>
                                <span class="text-blue-500 block mb-5"
                                    >24 posts</span
                                >

                                <a
                                    href="#"
                                    class="px-4 py-2 text-white rounded-full"
                                    style="background-color:#58B9FF"
                                    >View profile</a
                                >
                            </div>
                        </div>
                        <ul
                            class="flex items-center justify-center space-x-4 mb-4 text-gray-500 text-sm"
                        >
                            <li>About</li>
                            <li>About</li>
                            <li>About</li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
/* import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import RightSidebar from "@/components/RightSidebar"; */
export default {
    components: {
        /*   Header,
        Footer,
        Sidebar,
        RightSidebar */
    },
    data() {
        return {
            dropdownOpen: false
        };
    },
    computed: {
        userId() {
            return this.$store.state.auth.userId;
        },
        user() {
            return this.$store.state.auth.userId;
        }
    }
};
</script>

<style scoped>
/* Tab content - closed */
.tab-content {
    max-height: 0;
    -webkit-transition: max-height 0.35s;
    -o-transition: max-height 0.35s;
    transition: max-height 0.35s;
}
/* :checked - resize to full height */
.tab input:checked ~ .tab-content {
    max-height: 100vh;
}
/* Label formatting when open */
.tab input:checked + label {
    /*@apply text-xl p-5 border-l-2 border-indigo-500 bg-gray-100 text-indigo*/
    font-size: 1.25rem; /*.text-xl*/
}
/* Icon */
.tab label::after {
    float: right;
    right: 0;
    top: 0;
    display: block;
    width: 1.5em;
    height: 1.5em;
    line-height: 1.5;
    text-align: center;
    -webkit-transition: all 0.35s;
    -o-transition: all 0.35s;
    transition: all 0.35s;
}
/* Icon formatting - closed */
.tab input[type="checkbox"] + label::after {
    content: "+";
    font-weight: bold; /*.font-bold*/
    border-width: 1px; /*.border*/
    border-radius: 9999px; /*.rounded-full */
}
.tab input[type="radio"] + label::after {
    content: "\25BE";
    font-weight: bold; /*.font-bold*/
    border-width: 1px; /*.border*/
    border-radius: 9999px; /*.rounded-full */
    border-color: #b8c2cc; /*.border-grey*/
}
/* Icon formatting - open */
.tab input[type="checkbox"]:checked + label::after {
    transform: rotate(315deg);
    color: #f8fafc; /*.text-grey-lightest*/
}
.tab input[type="radio"]:checked + label::after {
    transform: rotateX(180deg);
    color: #f8fafc; /*.text-grey-lightest*/
}
</style>
