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
                            style="backgroundColor:#6A12D1"
                            class=" ml-4 flex flex-col p-4 w-3/12 max-w-sm flex-none border-l border-r bg-white min-h-0 overflow-auto"
                        >
                            <div class="px-8">
                                <div
                                    class="flex flex-col bg-white max-w-sm px-6 py-4 mx-auto rounded-lg shadow-md"
                                >
                                    <span class="flex-none pt-1 pr-2">
                                        <img
                                            class=" h-48 w-48 pt-1 pr-2 rounded-full outline-none "
                                            src="https://images.unsplash.com/photo-1610129304523-f02f02e3c436?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                        />
                                    </span>
                                    <div
                                        class="mt-8 flex flex-col items-center "
                                    >
                                        <span class="text-xs font-bold"
                                            >Profile image</span
                                        >

                                        <span
                                            class="leading-normal px-1 py-1 text-xs"
                                            ><ImageModal v-bind:swish="name"
                                        /></span>
                                    </div>
                                    <div class="font-semibold text-md">
                                        {{ userName }}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <AccountModal />
                            </div>
                        </section>

                        <!-- section content -->
                    </main>
                </div>
            </body>
        </main>
    </main>
</template>

<script>
import ImageModal from "../components/ImageModal.vue";
import AccountModal from "@/components/AccountModal.vue";
import axios from "@/axios";
export default {
    name: "Account",
    components: {
        ImageModal,
        AccountModal
    },
    data() {
        return {
            publicPath: process.env.BASE_URL
        };
    }
};
</script>

<style scoped></style>
