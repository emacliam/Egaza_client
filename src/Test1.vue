<template>
    <div class="flex items-center py-2" style="height:100vh; width:100vw">
        <div class="w-2/12 h-full border-r-2 flex flex-col items-center">
            <div class="w-full mt-4">
                <div class="flex items-center space-x-1 m-auto w-24 ">
                    <svg
                        class="w-10 h-10 shadow-lg border border-blue-400"
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
                        <g transform="matrix(1.25,0,0,-1.25,0,47.5)" id="g10">
                            <g id="g12">
                                <g clip-path="url(#clipPath16)" id="g14">
                                    <g transform="translate(37,5)" id="g20">
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
                    <span
                        class="text-blue-400 font-bold text-xl"
                        style="color:#347AE2"
                        >GAZA</span
                    >
                </div>
            </div>
            <div class="mt-12 w-full">
                <span
                    class="text-gray-700 font-bold text-md ml-8"
                    style="color:#495986"
                    >Menu</span
                >
                <ul
                    class="w-full flex flex-col space-y-6 mt-4 font-bold text-sm"
                    style="color:#8999BC"
                >
                    <li>
                        <router-link
                            to="/"
                            class="flex items-end space-x-3 ml-8"
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
                            to="/messages"
                            class="flex items-end space-x-3 ml-8"
                        >
                            <svg
                                class="fill-current w-7 h-7"
                                viewBox="0 0 24 24"
                            >
                                <title>Messages 3</title>
                                <g id="Messages_3" data-name="Messages 3">
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
                            to="/savedPosts"
                            class="flex items-end space-x-3  ml-8"
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
                    <li>
                        <router-link
                            to="/settings"
                            class="flex items-end space-x-3  ml-8"
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
                                        <circle cx="12" cy="12" r="1.5" />
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
                <div
                    class="text-xs text-gray-400 font-bold ml-4 mt-48
            "
                >
                    <div class="flex items-center space-x-2 mb-2">
                        <img src="@/assets/Logo.jpg" alt="" class="w-10 h-10" />
                        <span>Matsimba Tech.</span>
                    </div>

                    <span class="flex items-center space-x-2"
                        ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-2 w-2"
                            id="Copyright"
                            viewBox="0 0 24 24"
                        >
                            <title>Copyright</title>
                            <path
                                d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10,10,0,0,1,12,22Z"
                                style="fill:#303c42"
                            />
                            <path
                                d="M12,9a3.07,3.07,0,0,1,2.23,1,.51.51,0,0,0,.67,0l.8-.57a.49.49,0,0,0,.1-.72A5,5,0,1,0,12,17a5.07,5.07,0,0,0,3.81-1.72.49.49,0,0,0-.1-.72l-.8-.57a.51.51,0,0,0-.67,0A3.07,3.07,0,0,1,12,15a3,3,0,1,1,0-6Z"
                                style="fill:#303c42"
                            />
                        </svg>
                        <span> All rights reserved</span>
                    </span>
                </div>
            </div>
        </div>
        <div class="w-7/12 h-full"></div>
        <!-- third part  -->
        <div
            @click="hidden = !hidden"
            :class="hidden ? 'left' : 'right-0'"
            class="rounded-full h-12 w-12 absolute"
            style="top:50%; color:#347AE2;"
        >
            <svg
                v-show="hidden"
                class="h-8 w-8 fill-current animate-ping ease-in duration-300 cursor-pointer"
                x="0px"
                y="0px"
                width="64px"
                height="64px"
                viewBox="0 0 64 64"
                xml:space="preserve"
            >
                <path
                    d="M45 31.293l-17.146-17-1.488 1.414L42.623 32 26.312 48.293l1.551 1.414 17.137-17z"
                />
            </svg>
            <svg
                v-show="!hidden"
                class="h-8 w-8 fill-current animate-ping ease-in duration-300 cursor-pointer"
                x="0px"
                y="0px"
                width="64px"
                height="64px"
                viewBox="0 0 64 64"
                xml:space="preserve"
            >
                <path
                    d="M36.146 14.293L19 31.293v1.414l17.146 17 1.488-1.414L21.377 32l16.238-16.293z"
                />
            </svg>
        </div>
        <div class="w-3/12 h-full border-l-2" v-show="hidden">
            <div class="w-full h-12 flex justify-between items-center px-8">
                <div class="flex justify-center h-10">
                    <div class="relative">
                        <button
                            @click="dropdownOpen = !dropdownOpen"
                            class="rounded-md p-2 focus:outline-none shadow-lg"
                        >
                            <svg
                                class="h-5 w-5"
                                style="color:#347AE2"
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
                                    <p class="text-gray-600 text-sm mx-2">
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
                                style="background-color:#347AE2"
                                >See all notifications</a
                            >
                        </div>
                    </div>
                </div>

                <!-- post comment -->
                <button
                    class="uppercase h-10 shadow focus:shadow-outline focus:outline-none text-white text-xs py-3 px-2 rounded shadow-lg"
                    style="background-color:#347AE2"
                >
                    Create post
                </button>
            </div>
            <div class="w-full p-2">
                <div class="px-2 py-8 m-auto w-3/4 rounded-lg text-center">
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
                    <span class="text-blue-500 block mb-5">24 posts</span>

                    <a
                        href="#"
                        class="px-4 py-2 text-white rounded-full"
                        style="background-color:#347AE2"
                        >View profile</a
                    >
                </div>
            </div>
            <div>
                <div
                    class="w-full flex items-center px-5 text-gray-700 font-bold justify-between"
                >
                    <span>Recent Posts</span>
                    <a href="" class="text-blue-400">See All</a>
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
                            <div class="flex items-center justify-between">
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
                                12 dec 2020.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
            dropdownOpen: false,
            hidden: false
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
.router-link-exact-active {
    border-right: 4px solid #3b7fe2;
    color: #3b7fe2;
}
.left {
    left: 73%;
}
</style>
