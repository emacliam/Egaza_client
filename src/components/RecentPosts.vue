<template>
    <main class="w-full text-xs  ">
        <div class="mt-10 px-3">
            <h1 class="mb-4 text-xl font-bold text-gray-200">
                Recent Posts
            </h1>
            <div
                class="flex flex-col bg-white px-2 py-6 max-w-sm mx-auto rounded-lg shadow-md"
            >
                <div
                    v-if="loading"
                    class="items-center mt-2 justify-between hover:bg-gray-100 py-2 px-1 rounded"
                >
                    <div
                        class="animate-pulse  flex flex-col "
                        v-for="i in 4"
                        :key="i"
                    >
                        <div
                            class="w-full flex items-center space-x-4 px-1 py-2"
                        >
                            <div class="rounded-lg bg-gray-400 h-8 w-8"></div>
                            <div class="flex-1 space-y-4 py-1">
                                <div
                                    class="h-4 bg-gray-400 rounded w-full"
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    v-else
                    class="flex items-center mt-2 justify-between hover:bg-gray-100 py-2 px-1 rounded"
                    v-for="item in Latest5"
                    :key="item._id"
                >
                    <div class="flex items-center space-x-3">
                        <img class="h-8 w-8 rounded-md" :src="item.image" />
                        <span class="...">{{ item.name }}</span>
                    </div>

                    <router-link
                        :to="`Listing/${item._id}`"
                        class="hover:bg-blue-300 rounded-full text-blue-500 hover:text-white"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            data-name="Layer 1"
                            viewBox="0 0 512 512"
                            class="fill-current w-8 h-8  arrow"
                        >
                            <g data-name="&lt;Group&gt;">
                                <polygon
                                    points="278.249 356.849 292.391 370.991 407.382 256 292.391 141.009 278.249 155.151 369.098 246 105 246 105 266 369.098 266 278.249 356.849"
                                    data-name="&lt;Path&gt;"
                                />
                            </g>
                        </svg>
                    </router-link>
                </div>
            </div>
        </div>

        <!--         <div class="w-full flex justify-center mt-8 mb-48">
            <a
                href=""
                class="p-2 text-xs rounded-full border border-gray-400 hover:border-gray-600"
                >Show more</a
            >
        </div> -->
        <!--on show more first we show 5 and on show more we show other 5// or just show 5 only and redirect-->
    </main>
</template>

<script>
import axios from "@/axios";
import { ContentLoader, FacebookLoader } from "vue-content-loader";
export default {
    name: "RecentPosts",
    components: {
        /* ContentLoader */
        /*    FacebookLoader */
    },
    data() {
        return {
            Latest5: {},
            loading: false
        };
    },
    mounted() {
        this.getLatest5();
    },
    methods: {
        async getLatest5() {
            this.loading = true;
            await axios
                .get("/api/Listing/All_listings")
                .then(response => {
                    const Posts = response.data.Listings;
                    this.Latest5 = Posts.slice(Math.max(Posts.length - 5, 0));
                    console.log(this.Latest5.length);
                    setTimeout(() => {
                        this.loading = false;
                    }, 2000);
                })
                .catch(error => {
                    this.loading = false;
                    console.log(error);
                });
        }
    }
};
</script>

<style scoped></style>
