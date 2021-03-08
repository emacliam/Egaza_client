<template>
    <main class="min-h-screen">
        <div class="bg-gray-50 overflow-x-hidden min-h-screen">
            <div class="px-1 py-8">
                <div class="flex justify-between container mx-auto">
                    <div class="w-full lg:w-8/12">
                        <div
                            class="flex flex-col items-center justify-between w-full text-center border-b border-gray-300 py-4"
                        >
                            <form action="" autocomplete="off">
                                <input
                                    type="text"
                                    class="w-full py-2 pl-4 pr-10 text-sm bg-gray-100 border border-gray-400 appearance-none rounded-tg placeholder-gray-400 focus:bg-white focus:outline-none focus:text-gray-900 focus:shadow-outline-blue"
                                    style="border-radius: 25px"
                                    placeholder="Search"
                                    autocomplete="new-password"
                                    autofill="off"
                                    value=""
                                    v-model="search"
                                    id="search"
                                />
                            </form>

                            <h1
                                class="text-xl font-bold text-gray-700 md:text-2xl mt-4 m-auto"
                            >
                                My Listings
                            </h1>
                        </div>

                        <div class="mt-6">
                            <div
                                v-if="loading"
                                class=" md:pr-6 md:pl-8 px-2 min-h-screen flex-1"
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
                                                class="h-4 bg-gray-400 rounded w-4"
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                v-else
                                class="max-w-4xl flex space-x-4 px-2 py-2 m-1 mt-8 bg-white border border-gray-200 rounded-lg shadow text-sm"
                                v-for="listing in filteredListings"
                                :key="listing._id"
                            >
                                <div>
                                    <img
                                        class="w-24 h-24 rounded  "
                                        :src="listing.image"
                                    />
                                </div>

                                <div class="flex-1">
                                    <div
                                        class="flex justify-between items-center"
                                    >
                                        <span
                                            class="font-light  text-gray-600"
                                            >{{ listing.dateCreated }}</span
                                        >
                                    </div>
                                    <a
                                        href="#"
                                        class="text-lg text-gray-700 sm:w-full overflow-ellipsis truncate ... w-32 font-bold "
                                        >{{ listing.name }}</a
                                    >
                                    <p
                                        class="mt-2 text-gray-600 sm:w-full truncate overflow-ellipsis  ... w-24"
                                    >
                                        {{ listing.description.slice(0, 50) }}
                                    </p>

                                    <div
                                        class="flex justify-between items-center"
                                    >
                                        <button
                                            @click="tog(listing._id)"
                                            class="text-blue-700 hover:underline text-sm font-bold"
                                        >
                                            more
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        class="-mx-8 w-4/12 hidden lg:block mt-16 h-48 rounded-l-lg"
                        style="backgroundColor:#6A12D1"
                    >
                        <div class="px-8 mt-6">
                            <div
                                class="flex flex-col bg-white max-w-sm px-6 py-4 mx-auto rounded-lg shadow-md"
                            >
                                <ul class="-mx-4">
                                    <li class="flex items-center">
                                        <div
                                            class="space-x-3 flex items-center"
                                        >
                                            <div
                                                class="text-gray-700 font-bold mx-1 "
                                            >
                                                You Created
                                            </div>
                                            <span
                                                class="text-blue-700 text-lg font-light hover:underline"
                                            >
                                                {{ Listings.length }}
                                                Listings</span
                                            >
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="mt-2 px-8">
                            <!-- component -->
                            <section class="h-50">
                                <div class="container mx-auto">
                                    <!-- <input
                                        class="w-full h-16  px-3 border-gray-400 rounded-lg mb-1 focus:outline-none focus:shadow-outline text-xl px-8 shadow-lg"
                                        placeholder="Search..."
                                        type="text"

                                    /> -->
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- side bar start -->
        <!-- This example requires Tailwind CSS v2.0+ -->
        <div v-if="open" class="fixed inset-0 overflow-hidden">
            <div class="absolute inset-0 overflow-hidden">
                <!--
      Background overlay, show/hide based on slide-over state.

      Entering: "ease-in-out duration-500"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in-out duration-500"
        From: "opacity-100"
        To: "opacity-0"
    -->
                <div
                    class="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                    aria-hidden="true"
                ></div>
                <section
                    class="absolute inset-y-0 right-0 pl-10 max-w-full flex"
                    aria-labelledby="slide-over-heading"
                >
                    <!--
        Slide-over panel, show/hide based on slide-over state.

        Entering: "transform transition ease-in-out duration-500 sm:duration-700"
          From: "translate-x-full"
          To: "translate-x-0"
        Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
          From: "translate-x-0"
          To: "translate-x-full"
      -->
                    <div class="relative w-screen max-w-lg">
                        <!--
          Close button, show/hide based on slide-over state.

          Entering: "ease-in-out duration-500"
            From: "opacity-0"
            To: "opacity-100"
          Leaving: "ease-in-out duration-500"
            From: "opacity-100"
            To: "opacity-0"
        -->
                        <div
                            class="absolute mt-12 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4"
                        >
                            <button
                                @click="tog(Listing._id)"
                                class="rounded-md text-gray-300 bg-red-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                            >
                                <span class="sr-only">Close panel</span>
                                <!-- Heroicon name: outline/x -->
                                <svg
                                    class="h-6 w-6"
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
                        <div
                            class="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll"
                        >
                            <div class="px-4 sm:px-6 mt-10">
                                <h2
                                    id="slide-over-heading"
                                    class="text-lg font-medium text-gray-900"
                                >
                                    Panel title
                                </h2>
                            </div>
                            <div class="mt-6 relative flex-1 px-2 sm:px-2">
                                <!--  content -->
                                <div class="absolute inset-0 px-2 sm:px-2">
                                    <div
                                        class="min-h-screen border-2 border-dashed border-gray-200 rounded"
                                        aria-hidden="true"
                                    >
                                        <div
                                            class="bg-white shadow overflow-hidden sm:rounded-lg max-w-screen"
                                        >
                                            <div class="px-4 py-5 sm:px-6">
                                                <h3
                                                    class="text-lg leading-6 font-medium text-gray-900"
                                                >
                                                    Listing Information
                                                </h3>
                                                <p
                                                    class="mt-1 max-w-2xl text-sm text-gray-500"
                                                >
                                                    Details
                                                </p>
                                            </div>
                                            <div
                                                class="border-t border-gray-200 max-w-screen"
                                            >
                                                <dl>
                                                    <div
                                                        class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                                                    >
                                                        <dt
                                                            class="text-sm font-medium text-gray-500"
                                                        >
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
                                                        <dt
                                                            class="text-sm font-medium text-gray-500"
                                                        >
                                                            Category
                                                        </dt>
                                                        <dd
                                                            class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 overflow-wrap break-words"
                                                        >
                                                            {{
                                                                Listing.category
                                                            }}
                                                        </dd>
                                                    </div>
                                                    <div
                                                        class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                                                    >
                                                        <dt
                                                            class="text-sm font-medium text-gray-500"
                                                        >
                                                            Currency
                                                        </dt>
                                                        <dd
                                                            class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                                                        >
                                                            {{
                                                                Listing.currency
                                                            }}
                                                        </dd>
                                                    </div>
                                                    <div
                                                        class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                                                    >
                                                        <dt
                                                            class="text-sm font-medium text-gray-500"
                                                        >
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
                                                        <dt
                                                            class="text-sm font-medium text-gray-500"
                                                        >
                                                            Condition
                                                        </dt>
                                                        <dd
                                                            class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                                                        >
                                                            {{
                                                                Listing.condition
                                                            }}
                                                        </dd>
                                                    </div>
                                                    <div
                                                        class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 flex-col"
                                                    >
                                                        <dt
                                                            class="text-sm font-medium text-gray-500"
                                                        >
                                                            Description
                                                        </dt>
                                                        <dd
                                                            class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2  overflow-wrap break-words  "
                                                        >
                                                            {{
                                                                Listing.description
                                                            }}
                                                        </dd>
                                                    </div>
                                                    <div
                                                        class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                                                    >
                                                        <dt
                                                            class="text-sm font-medium text-gray-500"
                                                        >
                                                            Image
                                                        </dt>
                                                        <dd
                                                            class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                                                        >
                                                            <ul
                                                                class="rounded-md divide-y divide-gray-200"
                                                            >
                                                                <img
                                                                    v-if="
                                                                        !showPreview
                                                                    "
                                                                    :src="
                                                                        Listing.image
                                                                    "
                                                                    alt=""
                                                                    class="h-48 rounded w-full cover"
                                                                />
                                                                <div
                                                                    class="w-full h-full"
                                                                    v-if="
                                                                        showPreview
                                                                    "
                                                                >
                                                                    <span
                                                                        >This is
                                                                        a
                                                                        preview
                                                                        select
                                                                        "Upload"
                                                                        to
                                                                        Upload
                                                                        it</span
                                                                    >
                                                                    <img
                                                                        v-bind:src="
                                                                            imagePreview
                                                                        "
                                                                        v-show="
                                                                            showPreview
                                                                        "
                                                                        class=" h-48 rounded w-full cover"
                                                                    />
                                                                    <button
                                                                        @click="
                                                                            updateImage(
                                                                                Listing._id
                                                                            )
                                                                        "
                                                                        class="group mt-4 relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                                    >
                                                                        <div
                                                                            v-if="
                                                                                imageLoading
                                                                            "
                                                                            class="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 "
                                                                        >
                                                                            <div
                                                                                style="border-top-color:transparent"
                                                                                class="border-solid animate-spin  rounded-full border-blue-400 border-4 h-8 w-8"
                                                                            ></div>
                                                                        </div>
                                                                        Update
                                                                    </button>
                                                                </div>
                                                            </ul>
                                                        </dd>
                                                        <div
                                                            class="flex flex-col items-center mt-4"
                                                        >
                                                            <label
                                                                class="w-48 text-xs h-8 m-auto  text-center items-center bg-teal-600 rounded-lg text-blue  flex itema-center justify-center border border-teal-600 cursor-pointer "
                                                            >
                                                                <span
                                                                    >select
                                                                    image to
                                                                    update</span
                                                                >
                                                                <input
                                                                    type="file"
                                                                    class="hidden"
                                                                    id="file"
                                                                    ref="file"
                                                                    v-on:change="
                                                                        handleFileUpload()
                                                                    "
                                                                />
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div
                                                        class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                                                    >
                                                        <dt
                                                            class="text-sm font-medium text-gray-500"
                                                        >
                                                            Gallery Images
                                                        </dt>
                                                        <dd
                                                            class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                                                        >
                                                            <ul
                                                                class="rounded-md"
                                                            >
                                                                <div
                                                                    class="text-sm text-center"
                                                                >
                                                                    <button
                                                                        class="flex flex-shrink-0 m-auto focus:outline-none block flex items-center justify-center"
                                                                        type="button"
                                                                    >
                                                                        <ImageModal
                                                                            :parent="
                                                                                parentComponent
                                                                            "
                                                                            :id="
                                                                                Listing._id
                                                                            "
                                                                            :length="
                                                                                ListingGallery
                                                                            "
                                                                        />
                                                                    </button>
                                                                </div>
                                                                <div
                                                                    class="text-center p-2"
                                                                    v-if="
                                                                        ListingGallery.length ===
                                                                            0
                                                                    "
                                                                >
                                                                    No Gallery
                                                                    Images Yet
                                                                </div>
                                                                <div
                                                                    class="text-sm text-center"
                                                                    v-for="image in ListingGallery"
                                                                    :key="image"
                                                                >
                                                                    <div
                                                                        class=""
                                                                    >
                                                                        <ul
                                                                            class="border mt-4 border-gray-200 rounded-md divide-y divide-gray-200"
                                                                        >
                                                                            <img
                                                                                :src="
                                                                                    image
                                                                                "
                                                                                alt=""
                                                                                class="h-48 rounded w-full cover"
                                                                            />
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </ul>
                                                        </dd>
                                                    </div>
                                                    <div
                                                        class="flex gap-0.5 mt-4"
                                                    >
                                                        <MyListingsModal
                                                            class="mt-4 mb-16 m-auto"
                                                            :ID="Listing._id"
                                                            :name="Listing.name"
                                                            :description="
                                                                Listing.description
                                                            "
                                                            :price="
                                                                Listing.price
                                                            "
                                                            :category="
                                                                Listing.category
                                                            "
                                                            :currency="
                                                                Listing.currency
                                                            "
                                                            :condition="
                                                                Listing.condition
                                                            "
                                                            :imageUrl="
                                                                Listing.image
                                                            "
                                                        />
                                                    </div>
                                                </dl>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- /End replace -->
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>

        <!-- sidebar end -->
    </main>
</template>

<script>
import axios from "@/axios";
import MyListingsModal from "@/components/MyListingsModal.vue";
import ImageModal from "@/components/ImageModal.vue";
import { ContentLoader, FacebookLoader } from "vue-content-loader";
import { mapActions } from "vuex";
export default {
    components: {
        MyListingsModal,
        ImageModal
    },
    data() {
        return {
            Listings: [],
            Listing: {},
            GalleryImages: [],
            search: "",
            open: false,
            loading: false,
            parentComponent: "mylistings",
            listingloading: false,
            selectedFile: null,
            fileName: "",
            file: "",
            showPreview: false,
            imagePreview: "",
            imageLoading: false
        };
    },
    mounted() {
        this.getListings();
    },
    computed: {
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
        ListingGallery() {
            return this.$store.state.listings.gallery;
        }
    },
    methods: {
        ...mapActions(["ListingStore"]),
        tog(id) {
            this.open = !this.open;
            console.log(this.open);
            this.getListing(id);
        },
        async getListings() {
            this.loading = true;
            await axios
                .get("/api/Listing/listings")
                .then(async response => {
                    console.log(response.data.Listings);
                    this.Listings = await response.data.Listings;
                    /* this.GalleryImages = response.data.gallery; */
                    setTimeout(() => {
                        this.loading = false;
                    }, 1000);
                })
                .catch(error => {
                    this.loading = false;
                    console.log(error);
                });
        },
        async getListing(id) {
            this.listingloading = true;
            await axios
                .get(`/api/Listing/listing/${id}`)
                .then(async response => {
                    this.Listing = await response.data.Listing;
                    if (response.data.success) {
                        const res = await this.ListingStore({
                            userData: {
                                gallery: response.data.Listing.gallery
                            }
                        });
                        if (res.success) {
                            setTimeout(() => {
                                this.listingloading = false;
                            }, 2000);
                        } else {
                            this.listingloading = false;
                        }
                    }
                })
                .catch(error => {
                    console.log(error);
                    this.listingloading = false;
                });
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
                "load",
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
        },
        async updateImage(id) {
            this.imageLoading = true;
            const data = new FormData();
            data.append("image", this.selectedFile, this.selectedFile.name);
            let response = await axios.put(
                `/api/Listing/image_update/${id}`,
                data
            );
            console.log(response);
            if (response.data.success) {
                this.imageLoading = false;
                this.$router.go(this.$router.currentRoute);
            } else {
                this.imageLoading = false;
                this.$toasted.error("something went wrong").goAway(2000);
            }
        }
    }
};
</script>

<style scoped>
#hashLink {
    display: none;
}

#hashLink:target {
    display: block;
}
.navbar {
    transition: all 330ms ease-out;
}

.navbar-open {
    transform: translateX(0%);
}
.navbar-close {
    transform: translateX(-100%);
}
</style>
