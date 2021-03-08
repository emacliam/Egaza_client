<template>
    <main class="m-8  max-w-full" style="height:100vh">
        <div>
            <div
                class="flex items-center justify-between rounded-lg h-16 bg-gray-400 w-full p-8"
            >
                <div class="flex items-center space-x-8">
                    <span>logo</span>
                    <router-link to="" class="font-bold">Home</router-link>
                </div>
                <div class="flex items-center space-x-2">
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            enable-background="new 0 0 100 100"
                            viewBox="0 0 100 100"
                            class="w-6 h-6"
                        >
                            <path
                                d="M50,42c-4.41,0-8,3.59-8,8s3.59,8,8,8s8-3.59,8-8S54.41,42,50,42z M50,54c-2.21,0-4-1.79-4-4c0-2.21,1.79-4,4-4
	c2.21,0,4,1.79,4,4C54,52.21,52.21,54,50,54z M93,52c1.1,0,2-0.9,2-2s-0.9-2-2-2h-4.05c-0.11-2.07-0.38-4.1-0.79-6.07l3.92-1.04
	c1.07-0.28,1.7-1.38,1.42-2.45c-0.28-1.07-1.38-1.7-2.45-1.42l-3.92,1.04c-0.6-1.85-1.33-3.64-2.18-5.36l3.54-1.99
	c0.96-0.54,1.31-1.76,0.77-2.72c-0.54-0.96-1.76-1.31-2.72-0.77l-3.55,1.99c-1.2-1.89-2.54-3.68-4.04-5.33l2.88-2.88
	c0.78-0.78,0.78-2.05,0-2.83c-0.78-0.78-2.05-0.78-2.83,0l-2.88,2.88c-1.65-1.49-3.44-2.84-5.33-4.04l1.99-3.55
	c0.54-0.96,0.2-2.18-0.77-2.72c-0.96-0.54-2.18-0.2-2.72,0.77l-1.99,3.54c-1.72-0.86-3.51-1.59-5.36-2.18l1.04-3.92
	c0.28-1.07-0.35-2.16-1.42-2.45c-1.07-0.28-2.16,0.35-2.45,1.42l-1.04,3.92c-1.97-0.42-4-0.69-6.07-0.79V7c0-1.1-0.9-2-2-2
	s-2,0.9-2,2v4.05c-2.07,0.11-4.1,0.38-6.07,0.79l-1.04-3.92c-0.28-1.07-1.38-1.7-2.45-1.42c-1.07,0.28-1.7,1.38-1.42,2.45l1.04,3.92
	c-1.85,0.6-3.64,1.33-5.36,2.18l-1.99-3.54c-0.54-0.96-1.76-1.31-2.72-0.77c-0.96,0.54-1.31,1.76-0.77,2.72l1.99,3.55
	c-1.89,1.2-3.68,2.54-5.33,4.04l-2.88-2.88c-0.78-0.78-2.05-0.78-2.83,0c-0.78,0.78-0.78,2.05,0,2.83l2.88,2.88
	c-1.49,1.65-2.84,3.44-4.04,5.33l-3.55-1.99c-0.96-0.54-2.18-0.2-2.72,0.77c-0.54,0.96-0.2,2.18,0.77,2.72l3.54,1.99
	c-0.85,1.72-1.59,3.51-2.18,5.36l-3.92-1.04c-1.06-0.28-2.16,0.35-2.45,1.42c-0.28,1.07,0.35,2.16,1.42,2.45l3.92,1.04
	c-0.42,1.97-0.69,4-0.79,6.07H7c-1.1,0-2,0.9-2,2s0.9,2,2,2h4.05c0.11,2.07,0.38,4.1,0.79,6.07l-3.92,1.04
	c-1.07,0.28-1.7,1.38-1.42,2.45c0.24,0.9,1.05,1.49,1.93,1.49c0.17,0,0.34-0.02,0.52-0.07l3.92-1.04c0.6,1.85,1.33,3.64,2.18,5.36
	l-3.54,1.99c-0.96,0.54-1.31,1.76-0.77,2.72c0.37,0.65,1.05,1.02,1.75,1.02c0.33,0,0.67-0.08,0.98-0.26l3.55-1.99
	c1.2,1.89,2.54,3.68,4.04,5.33l-2.88,2.88c-0.78,0.78-0.78,2.05,0,2.83c0.39,0.39,0.9,0.59,1.41,0.59s1.02-0.2,1.41-0.59l2.88-2.88
	c1.65,1.49,3.44,2.84,5.33,4.04l-1.99,3.55c-0.54,0.96-0.2,2.18,0.77,2.72c0.31,0.17,0.65,0.26,0.98,0.26c0.7,0,1.38-0.37,1.75-1.02
	l1.99-3.54c1.72,0.85,3.51,1.59,5.36,2.18l-1.04,3.92c-0.28,1.07,0.35,2.16,1.42,2.45c0.17,0.05,0.34,0.07,0.52,0.07
	c0.88,0,1.69-0.59,1.93-1.49l1.04-3.92c1.97,0.42,4,0.69,6.07,0.79V93c0,1.1,0.9,2,2,2s2-0.9,2-2v-4.05
	c2.07-0.11,4.1-0.38,6.07-0.79l1.04,3.92c0.24,0.9,1.05,1.49,1.93,1.49c0.17,0,0.34-0.02,0.51-0.07c1.07-0.28,1.7-1.38,1.42-2.45
	l-1.04-3.92c1.85-0.6,3.64-1.33,5.36-2.18l1.99,3.54c0.37,0.65,1.05,1.02,1.75,1.02c0.33,0,0.67-0.08,0.98-0.26
	c0.96-0.54,1.31-1.76,0.77-2.72l-1.99-3.55c1.89-1.2,3.68-2.54,5.33-4.04l2.88,2.88c0.39,0.39,0.9,0.59,1.41,0.59
	s1.02-0.2,1.41-0.59c0.78-0.78,0.78-2.05,0-2.83l-2.88-2.88c1.49-1.65,2.84-3.44,4.04-5.33l3.55,1.99c0.31,0.17,0.64,0.26,0.98,0.26
	c0.7,0,1.38-0.37,1.75-1.02c0.54-0.96,0.2-2.18-0.77-2.72l-3.54-1.99c0.86-1.72,1.59-3.51,2.18-5.36l3.92,1.04
	c0.17,0.05,0.34,0.07,0.51,0.07c0.88,0,1.69-0.59,1.93-1.49c0.28-1.07-0.35-2.16-1.42-2.45l-3.92-1.04c0.42-1.97,0.69-4,0.79-6.07
	H93z M50,85c-12.35,0-23.22-6.43-29.45-16.12l16.73-9.2C40.21,63.51,44.82,66,50,66s9.79-2.49,12.71-6.33l16.73,9.2
	C73.22,78.57,62.35,85,50,85z M15,50c0-18.63,14.63-33.9,33-34.94v19.08C40.12,35.13,34,41.86,34,50c0,2.21,0.45,4.31,1.26,6.22
	L18.58,65.4C16.29,60.75,15,55.52,15,50z M50,62c-6.62,0-12-5.38-12-12c0-6.62,5.38-12,12-12c6.62,0,12,5.38,12,12
	C62,56.62,56.62,62,50,62z M64.74,56.22C65.55,54.31,66,52.21,66,50c0-8.14-6.12-14.87-14-15.86V15.06C70.37,16.1,85,31.37,85,50
	c0,5.52-1.29,10.75-3.58,15.4L64.74,56.22z"
                            />
                        </svg>
                    </div>
                    <div>
                        <svg viewBox="0 0 1024 1024" class="h-6 w-6">
                            <path
                                fill="#593A25"
                                d="M821.3 810H202.7c-23.5 0-45.7-11.1-60.9-30.4-15-18.9-21-43.4-16.6-67.2 0.5-2.6 1.4-5.2 2.6-7.6l143.1-281.3c0-0.1 0.1-0.1 0.1-0.2 10.2-19.8 15.7-42.1 15.7-64.3v-53.2c-0.2-17 2.6-33.7 8.2-49.7 0-0.1 0-0.1 0.1-0.1 7.1-19.9 24-58.6 57.1-93.1 19.1-20 41.1-35.7 65.2-46.9 28.7-13.3 60.7-20 94.9-20s66.2 6.7 94.9 20c24.1 11.1 46 26.9 65.2 46.9 33.2 34.6 50 73.2 57.1 93.1 0 0.1 0.1 0.1 0.1 0.2 5.5 16 8.3 32.6 8.1 49.6V359c0 22.9 5.4 45.8 15.7 66.3l143 279.5c1.2 2.4 2.1 5 2.6 7.6 4.4 23.7-1.6 48.1-16.5 67-14.5 19.1-36.6 30.3-60.6 30.6h-0.5z m-641.5-84.1c-0.4 6.8 1.7 13.6 5.9 19l0.1 0.1c4.5 5.7 10.6 9 16.9 9H821c6.6-0.1 12.8-3.4 16.8-8.6 0.1-0.2 0.3-0.4 0.4-0.6 4.3-5.4 6.4-12.1 5.9-18.9L703.3 450.7c0-0.1-0.1-0.1-0.1-0.2-14.2-28.3-21.7-59.9-21.7-91.6v-53.3-0.3c0.1-10.5-1.6-20.8-5-30.7C666.2 245.7 624 152 512 152c-111.8 0-154.1 93.8-164.4 122.7-3.5 9.9-5.1 20.2-5 30.7V359c0 31.2-7.6 62.3-21.9 90L179.8 725.9z"
                            />
                            <path
                                fill="#FFB612"
                                d="M614.5 928h-205c-15.5 0-28-12.5-28-28s12.5-28 28-28h204.9c15.5 0 28 12.5 28 28s-12.5 28-27.9 28z"
                            />
                        </svg>
                    </div>
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            class="h-6 w-6"
                        >
                            <title>Messages 3</title>
                            <g id="Messages_3" data-name="Messages 3">
                                <path
                                    d="M9,2.5C4.31,2.5.5,5.63.5,9.5A6.63,6.63,0,0,0,3.75,15L2.5,17.5l2.91-1.66A10,10,0,0,0,9,16.5c4.69,0,8.5-3.13,8.5-7S13.69,2.5,9,2.5Z"
                                    style="fill:none;stroke:#303c42;stroke-linecap:round;stroke-linejoin:round"
                                />
                                <path
                                    d="M16.71,6.64c3.87.65,6.79,3.48,6.79,6.86A6.63,6.63,0,0,1,20.25,19l1.25,2.5-2.91-1.66A10,10,0,0,1,15,20.5a8.73,8.73,0,0,1-7.77-4.16"
                                    style="fill:none;stroke:#303c42;stroke-linecap:round;stroke-linejoin:round"
                                />
                            </g>
                        </svg>
                    </div>
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            xml:space="preserve"
                            width="43.3492mm"
                            height="43.3492mm"
                            version="1.1"
                            viewBox="0 0 4335 4335"
                            shape-rendering="geometricPrecision"
                            text-rendering="geometricPrecision"
                            image-rendering="optimizeQuality"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            class="w-6 h-6"
                        >
                            <g id="Layer_x0020_1">
                                <path
                                    class="fil0"
                                    d="M2155 4191c1116 0 2021-905 2021-2021S3271 149 2155 149 134 1054 134 2170s905 2021 2021 2021z"
                                    fill="#6D97B5"
                                />
                                <path
                                    class="fil1"
                                    d="M2156 1207h14c308 9 555 304 555 667s-247 659-555 667h-15c-351 0-569-345-569-668 0-363 247-659 555-667h15zM914 3737s417-823 719-963c247-114 800-114 1046 0 302 139 719 963 719 963-411 335-929 423-1173 446v8s-25 0-69-3c-44 3-69 3-69 3v-8c-244-23-762-111-1173-446z"
                                    fill="#E6E6E6"
                                />
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
            <!-- Bottom container -->
            <div class="mt-24">
                <div class="flex border p-2 items-center justify-between">
                    <span class="mr-2">
                        <input
                            type="text"
                            placeholder="Search"
                            class="w-full border-2 px-2 py-1 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-gray-300 focus:bg-gray-100"
                        />
                    </span>
                    <div class="flex space-x-4">
                        <span>All</span>
                        <span>Lastest</span>
                    </div>
                    <div class="flex space-x-4">
                        <div
                            class=" text-sm text-gray-500 leading-none border-2 border-gray-200 inline-flex"
                        >
                            <button
                                class="inline-flex items-center transition-colors duration-300 ease-in focus:outline-none hover:text-blue-400 focus:text-blue-400 rounded-l-full px-4 py-2 active"
                                id="grid"
                            >
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
                            </button>
                            <button
                                class="inline-flex items-center transition-colors duration-300 ease-in focus:outline-none hover:text-blue-400 focus:text-blue-400 rounded-r-full px-4 py-2"
                                id="list"
                            >
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
                                    <line x1="8" y1="6" x2="21" y2="6"></line>
                                    <line x1="8" y1="12" x2="21" y2="12"></line>
                                    <line x1="8" y1="18" x2="21" y2="18"></line>
                                    <line x1="3" y1="6" x2="3.01" y2="6"></line>
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
                            </button>
                        </div>
                    </div>
                </div>
                <!-- feed input -->
                <div class="py-4  h-screen">
                    <!-- floating button -->
                    <button
                        class="rounded-lg h-12 my-4 p-1 border bg-red-300 shadow-lg"
                    >
                        Create Your Listing
                    </button>
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
            </div>
        </div>
    </main>
</template>

<script>
export default {};
</script>

<style></style>
