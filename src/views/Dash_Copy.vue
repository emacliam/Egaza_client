<template>
    <div class="dashboard container ">
        <!-- body  -->
        <div @click="hidden = false" class="my-2">
            <div
                class="flex items-center justify-between mx-4 border rounded shadow-md p-2"
                style="background-color:#f0eeee"
            >
                <div class="h-full flex items-center space-x-8 ml-8 ">
                    <span class=" w-24 text-center pb-1">All</span>
                    <span>Latest</span>
                </div>
                <button
                    class="bg-blue-700 rounded p-2 text-white focus:outline-none"
                    @click="showModal()"
                >
                    Create a Listing
                </button>
            </div>
            <!-- creating listing modal -->
            <body class="relative">
                <div
                    id="app"
                    class="h-full w-full flex items-center justify-center"
                >
                    <transition name="fade">
                        <div v-show="show_modal" class="fixed inset-0 z-30">
                            <!--       background -->
                            <div
                                v-show="show_modal"
                                @click="showModal()"
                                class="bg-filter bg-gray-600 opacity-50 fixed inset-0 w-full h-full z-20"
                            ></div>
                            <!--          -->
                            <main
                                class="flex flex-col items-center justify-center h-full w-full"
                            >
                                <transition name="fade-up-down">
                                    <div
                                        v-show="show_modal"
                                        class="modal-wrapper inline-block flex items-center z-30"
                                        style="width:25rem"
                                    >
                                        <div
                                            class="modal w-full mx-auto xl:max-w-2xl lg:max-w-2xl   max-h-screen flex-row  relative"
                                        >
                                            <div
                                                class="py-3 sm:max-w-xl sm:mx-auto"
                                            >
                                                <div
                                                    class="bg-white min-w-1xl flex flex-col rounded shadow-lg"
                                                >
                                                    <div
                                                        class="text-center w-full py-5"
                                                    >
                                                        <h2
                                                            class="text-gray-600 text-3xl font-semibold"
                                                        >
                                                            Create a Listing
                                                        </h2>
                                                    </div>
                                                    <div
                                                        class="w-full flex flex-col items-center"
                                                    >
                                                        <div
                                                            class=" w-full px-8"
                                                        >
                                                            <label
                                                                class="block text-sm"
                                                                for="name"
                                                                >Name of
                                                                Part</label
                                                            >
                                                            <input
                                                                class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white focus:border focus:border-blue-300 border border-white"
                                                                type="name"
                                                                id="name"
                                                                placeholder="Enter your name"
                                                                aria-label="name"
                                                                required
                                                                v-model="name"
                                                            />
                                                        </div>
                                                        <div
                                                            class=" w-full px-8"
                                                        >
                                                            <label
                                                                class="block text-sm"
                                                                for="name"
                                                                >name</label
                                                            >
                                                            <input
                                                                class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white focus:border focus:border-blue-300 border border-white"
                                                                type="name"
                                                                id="name"
                                                                aria-label="name"
                                                                required
                                                                v-model="name"
                                                            />
                                                        </div>
                                                        <div
                                                            class=" w-full px-8"
                                                        >
                                                            <label
                                                                class="block text-sm"
                                                                for="name"
                                                                >name</label
                                                            >
                                                            <input
                                                                class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white focus:border focus:border-blue-300 border border-white"
                                                                type="name"
                                                                id="name"
                                                                placeholder="Enter your name"
                                                                aria-label="name"
                                                                required
                                                                v-model="name"
                                                            />
                                                        </div>
                                                        <div
                                                            class=" w-full px-8"
                                                        >
                                                            <label
                                                                class="block text-sm"
                                                                for="name"
                                                                >name</label
                                                            >
                                                            <input
                                                                class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white focus:border focus:border-blue-300 border border-white"
                                                                type="name"
                                                                id="name"
                                                                placeholder="Enter your name"
                                                                aria-label="name"
                                                                required
                                                                v-model="name"
                                                            />
                                                        </div>
                                                        <div
                                                            class="w-full px-8"
                                                        >
                                                            <label
                                                                class="block text-sm"
                                                                for="description"
                                                                >Description</label
                                                            >
                                                            <textarea
                                                                class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white focus:border focus:border-blue-300 border border-white"
                                                                type="description"
                                                                id="description"
                                                                placeholder="Enter your description"
                                                                aria-label="description"
                                                                required
                                                                name=""
                                                                cols="19"
                                                                rows="2"
                                                                v-model="
                                                                    description
                                                                "
                                                            ></textarea>
                                                        </div>
                                                        <div
                                                            class="w-3/4 flex flex-col"
                                                        >
                                                            <button
                                                                @click="send()"
                                                                class="py-1 my-8 text-lg bg-gradient-to-r from-purple-500 to-indigo-600 text-white"
                                                            >
                                                                Create
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div
                                                        class="h-20 flex items-center justify-center"
                                                    >
                                                        <button
                                                            @click="showModal()"
                                                            class="text-blue-600"
                                                        >
                                                            Maybe later
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </transition>
                            </main>
                        </div>
                    </transition>
                </div>
            </body>
            <div class="flex items-center max-w-full">
                <!-- feed -->
                <div class="py-4  h-screen w-3/4">
                    <div class="px-4">
                        <div class="block md:flex justify-between md:-mx-2">
                            <div class="w-full lg:w-1/3 md:mx-2 mb-4 md:mb-0">
                                <div
                                    class="bg-white rounded-lg overflow-hidden shadow relative"
                                >
                                    <img
                                        class="h-56 w-full object-cover object-center"
                                        src="https://images.unsplash.com/photo-1457282367193-e3b79e38f207?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1654&q=80"
                                        alt=""
                                    />
                                    <div class="p-4 h-auto md:h-40 lg:h-48">
                                        <a
                                            href="#"
                                            class="block text-blue-500 hover:text-blue-600 font-semibold mb-2 text-lg md:text-base lg:text-lg"
                                        >
                                            Woman standing under blue sky
                                        </a>
                                        <div
                                            class="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm"
                                        >
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit. Quo
                                            quidem blanditiis unde asperiores?
                                            Officia amet perspiciatis ad
                                            quibusdam incidunt eaque, nobis,
                                            eveniet neque porro id commodi
                                            quisquam debitis!
                                        </div>
                                        <div
                                            class="relative mt-2 lg:absolute bottom-0 mb-4 md:hidden lg:block"
                                        >
                                            <a
                                                class="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700"
                                                href="#"
                                                >#something</a
                                            >
                                            <a
                                                class="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700"
                                                href="#"
                                                >#sky</a
                                            >
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full lg:w-1/3 md:mx-2 mb-4 md:mb-0">
                                <div
                                    class="bg-white rounded-lg overflow-hidden shadow relative"
                                >
                                    <img
                                        class="h-56 w-full object-cover object-center"
                                        src="https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                                        alt=""
                                    />
                                    <div class="p-4 h-auto md:h-40 lg:h-48">
                                        <a
                                            href="#"
                                            class="block text-blue-500 hover:text-blue-600 font-semibold mb-2 text-lg md:text-base lg:text-lg"
                                        >
                                            Woman walking on pathway
                                        </a>
                                        <div
                                            class="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm"
                                        >
                                            Lorem ipsum dolor sit, amet
                                            consectetur adipisicing elit. Iure
                                            aut quia alias ullam eveniet sunt!
                                            Ipsa, sunt. Inventore ipsum sit
                                            quasi. Alias quasi officiis
                                            blanditiis!
                                        </div>
                                        <div
                                            class="relative mt-2 lg:absolute bottom-0 mb-4 md:hidden lg:block"
                                        >
                                            <a
                                                class="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700"
                                                href="#"
                                                >#pathway</a
                                            >
                                            <a
                                                class="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700"
                                                href="#"
                                                >#woman</a
                                            >
                                            <a
                                                class="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700"
                                                href="#"
                                                >#walkalone</a
                                            >
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full lg:w-1/3 md:mx-2 mb-4 md:mb-0">
                                <div
                                    class="bg-white rounded-lg overflow-hidden shadow relative"
                                >
                                    <img
                                        class="h-56 w-full object-cover object-center"
                                        src="https://images.unsplash.com/photo-1467238307002-480ffdd260f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                                        alt=""
                                    />
                                    <div class="p-4 h-auto md:h-40 lg:h-48">
                                        <a
                                            href="#"
                                            class="block text-blue-500 hover:text-blue-600 font-semibold mb-2 text-lg md:text-base lg:text-lg"
                                        >
                                            Walking through a forest in the
                                            afternoon
                                        </a>
                                        <div
                                            class="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm"
                                        >
                                            Lorem ipsum dolor sit, amet
                                            consectetur adipisicing elit.
                                            Commodi nemo magni saepe cumque
                                            error quia quae sint ducimus,
                                            maiores doloremque.
                                        </div>
                                        <div
                                            class="relative mt-2 lg:absolute bottom-0 mb-4 md:hidden lg:block"
                                        >
                                            <a
                                                class="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700"
                                                href="#"
                                                >#forest</a
                                            >
                                            <a
                                                class="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700"
                                                href="#"
                                                >#walk</a
                                            >
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- side filters -->
                <div
                    class="flex flex-col border-l-2 border-t-2 rounded p-2 items-start space-y-8 mt-8 w-1/4 h-screen"
                >
                    <span class="mr-2">
                        <input
                            type="text"
                            placeholder="Search"
                            class="w-full border-2 px-2 py-1 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-gray-300 focus:bg-gray-100"
                        />
                    </span>
                    <div class="flex space-x-4">
                        <div
                            class=" text-sm text-gray-500 leading-none border-2 border-gray-200 inline-flex w-52 m-auto p-2"
                        >
                            <div
                                class="flex justify-between w-full items-center"
                            >
                                <div class="flex items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="fill-current w-4 h-4 mr-2"
                                    >
                                        <rect
                                            x="3"
                                            y="3"
                                            width="7"
                                            height="7"
                                        ></rect>
                                        <rect
                                            x="14"
                                            y="3"
                                            width="7"
                                            height="7"
                                        ></rect>
                                        <rect
                                            x="14"
                                            y="14"
                                            width="7"
                                            height="7"
                                        ></rect>
                                        <rect
                                            x="3"
                                            y="14"
                                            width="7"
                                            height="7"
                                        ></rect>
                                    </svg>
                                    <span>Grid</span>
                                </div>
                                <div
                                    class="relative rounded-full border w-12 h-6 transition duration-200 ease-linear"
                                    :class="[
                                        toggle === '1'
                                            ? 'bg-gray-300'
                                            : 'bg-gray-300'
                                    ]"
                                >
                                    <label
                                        for="toggle"
                                        class="absolute left-0 bg-blue-500 mb-2 w-6 h-6 rounded-full transition transform duration-100 ease-linear cursor-pointer"
                                        :class="[
                                            toggle === '1'
                                                ? 'translate-x-full'
                                                : 'translate-x-0 '
                                        ]"
                                    >
                                    </label>
                                    <input
                                        type="checkbox"
                                        id="toggle"
                                        name="toggle"
                                        class="appearance-none w-full h-full active:outline-none focus:outline-none"
                                        @click="
                                            toggle === '0'
                                                ? (toggle = '1')
                                                : (toggle = '0')
                                        "
                                    />
                                </div>
                                <div class="flex items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="fill-current w-4 h-4 mr-2"
                                    >
                                        <line
                                            x1="8"
                                            y1="6"
                                            x2="21"
                                            y2="6"
                                        ></line>
                                        <line
                                            x1="8"
                                            y1="12"
                                            x2="21"
                                            y2="12"
                                        ></line>
                                        <line
                                            x1="8"
                                            y1="18"
                                            x2="21"
                                            y2="18"
                                        ></line>
                                        <line
                                            x1="3"
                                            y1="6"
                                            x2="3.01"
                                            y2="6"
                                        ></line>
                                        <line
                                            x1="3"
                                            y1="12"
                                            x2="3.01"
                                            y2="12"
                                        ></line>
                                        <line
                                            x1="3"
                                            y1="18"
                                            x2="3.01"
                                            y2="18"
                                        ></line>
                                    </svg>
                                    <span>List</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "@/axios";
export default {
    name: "Dashboard",
    methods: {
        async getUserData() {
            const response = await axios.get("/api/user/data");
            this.testData = response.data;
        },
        showModal() {
            if (this.show_modal) {
                //stop screen scrolling
                this.show_modal = false;
            } else {
                this.show_modal = true;
            }
        }
    },
    mounted: function() {
        this.getUserData();
    },
    data() {
        return {
            testData: [],
            error: false,
            show_modal: false,
            toggle: 0
        };
    }
};
</script>
