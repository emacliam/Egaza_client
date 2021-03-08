<template>
    <div>
        <div class="flex flex-col space-y-2 text-xs">
            <div class="flex items-center space-x-4">
                <button
                    @click="showModal(false)"
                    class="border border-gray-300 focus:outline-none transition  uppercase px-8 py-3"
                >
                    <span class="leading-normal px-1 py-1 text-xs">Edit</span>
                </button>
                <button
                    @click="showModal(true)"
                    class=" border border-gray-300 focus:outline-none transition uppercase px-8 py-3"
                >
                    <span class="leading-normal px-1 py-1 text-xs">Delete</span>
                </button>
            </div>
        </div>
        <!-- delete account modal -->
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
                            v-show="btntype"
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
                                            class="py-1 sm:max-w-xl sm:mx-auto"
                                        >
                                            <div
                                                class="bg-white min-w-1xl flex flex-col rounded shadow-lg"
                                            >
                                                <div
                                                    class="text-center w-full py-2"
                                                >
                                                    <h2
                                                        class="text-gray-600 text-3xl font-semibold"
                                                    >
                                                        Deleting Listing
                                                    </h2>
                                                </div>
                                                <div
                                                    class="w-full flex flex-col items-center"
                                                >
                                                    <!-- forms here -->
                                                    <p
                                                        class="my-4 text-xs text-red-700 animate-pulse"
                                                    >
                                                        Are you sure to delete
                                                        your listing?
                                                    </p>
                                                    <span
                                                        class="my-4 text-gray-600"
                                                    >
                                                        Please provide your
                                                        password.
                                                    </span>
                                                    <fieldset
                                                        :disabled="loading"
                                                        class=""
                                                    >
                                                        <div>
                                                            <label
                                                                for="password"
                                                                class="sr-only"
                                                                >Password</label
                                                            >
                                                            <div
                                                                class="flex  overflow-hidden"
                                                            >
                                                                <input
                                                                    id="password"
                                                                    name="password"
                                                                    :type="
                                                                        passwordType
                                                                    "
                                                                    v-model="
                                                                        password
                                                                    "
                                                                    autocomplete="current-password"
                                                                    required
                                                                    class="appearance-none border border-gray-500 rounded-md relative block w-full px-3 py-2  placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                                                    placeholder="Password"
                                                                />
                                                                <span
                                                                    @click="
                                                                        togglePasswordType()
                                                                    "
                                                                    class="p-2 text-xs font-bold cursor-pointer"
                                                                >
                                                                    <span
                                                                        class="text-blue-600"
                                                                        v-show="
                                                                            passwordType ===
                                                                                'password'
                                                                        "
                                                                        >Show</span
                                                                    ><span
                                                                        class="text-red-600"
                                                                        v-show="
                                                                            passwordType ===
                                                                                'text'
                                                                        "
                                                                        >Hide</span
                                                                    ></span
                                                                >
                                                            </div>
                                                        </div>
                                                        <button
                                                            @click="
                                                                deletelisting(
                                                                    ID
                                                                )
                                                            "
                                                            class="group mt-4 relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                        >
                                                            <div
                                                                v-if="loading"
                                                                class="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 "
                                                            >
                                                                <div
                                                                    style="border-top-color:transparent"
                                                                    class="border-solid animate-spin  rounded-full border-blue-400 border-4 h-8 w-8"
                                                                ></div>
                                                            </div>
                                                            Delete
                                                        </button>
                                                    </fieldset>
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
                                                <div
                                                    class="mt-2 text-sm w-full "
                                                    v-if="errors"
                                                >
                                                    <span
                                                        class="flex space-x-2 m-auto w-64"
                                                        ><p
                                                            class="text-red-600 text-lg"
                                                        >
                                                            &#8226;
                                                        </p>
                                                        <span
                                                            class="text-red-500"
                                                        >
                                                            {{ errors }}
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </transition>
                        </main>
                        <!--     for change password     -->
                        <main
                            v-show="!btntype"
                            class="flex flex-col items-center justify-center h-full w-full"
                        >
                            <transition name="fade-up-down">
                                <div
                                    v-show="show_modal"
                                    class="modal-wrapper inline-block flex items-center z-30 md:w-1/2"
                                >
                                    <div
                                        class="modal w-full mx-auto xl:max-w-2xl lg:max-w-2xl   hscreen flex-row  relative "
                                    >
                                        <div
                                            class="py-1 sm:max-w-xl sm:mx-auto"
                                        >
                                            <div
                                                v-if="state == 0"
                                                class="bg-white min-w-1xl flex flex-col rounded shadow-lg overflow-y-scroll"
                                            >
                                                <div
                                                    class="text-center w-full py-2"
                                                >
                                                    <h2
                                                        class="text-gray-600 text-3xl font-semibold"
                                                    >
                                                        Updating Listing
                                                    </h2>
                                                </div>
                                                <div
                                                    class="w-full flex flex-col items-center"
                                                >
                                                    <!-- forms here -->
                                                    <p
                                                        class="my-2 text-xs text-red-700 animate-pulse"
                                                    >
                                                        Are you sure you want to
                                                        update your listing
                                                    </p>
                                                    <span
                                                        class="my-2 text-gray-600"
                                                    >
                                                        Lets make sure its you.
                                                    </span>

                                                    <fieldset
                                                        :disabled="loading"
                                                        class=""
                                                    >
                                                        <div>
                                                            <label
                                                                for="password"
                                                                class="sr-only"
                                                                >Password</label
                                                            >
                                                            <div
                                                                class="flex  overflow-hidden"
                                                            >
                                                                <input
                                                                    id="password"
                                                                    name="password"
                                                                    :type="
                                                                        passwordType
                                                                    "
                                                                    v-model="
                                                                        password
                                                                    "
                                                                    autocomplete="current-password"
                                                                    required
                                                                    class="appearance-none border border-gray-500 rounded-md relative block w-full px-3 py-2  placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                                                    placeholder="Password"
                                                                />
                                                                <span
                                                                    @click="
                                                                        togglePasswordType()
                                                                    "
                                                                    class="p-2 text-xs font-bold cursor-pointer"
                                                                >
                                                                    <span
                                                                        class="text-blue-600"
                                                                        v-show="
                                                                            passwordType ===
                                                                                'password'
                                                                        "
                                                                        >Show</span
                                                                    ><span
                                                                        class="text-red-600"
                                                                        v-show="
                                                                            passwordType ===
                                                                                'text'
                                                                        "
                                                                        >Hide</span
                                                                    ></span
                                                                >
                                                            </div>
                                                        </div>

                                                        <button
                                                            @click="
                                                                checkingPassword(
                                                                    ID
                                                                )
                                                            "
                                                            class="group mt-4 relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                        >
                                                            <span
                                                                class="absolute left-0 inset-y-0 flex items-center pl-3"
                                                            >
                                                            </span>
                                                            Verify
                                                        </button>
                                                    </fieldset>
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
                                                <div
                                                    class="mt-2 text-sm w-full "
                                                    v-if="errors"
                                                >
                                                    <span
                                                        class="flex space-x-2 m-auto w-64"
                                                        ><p
                                                            class="text-red-600 text-lg"
                                                        >
                                                            &#8226;
                                                        </p>
                                                        <span
                                                            class="text-red-500"
                                                        >
                                                            {{ errors }}
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>

                                            <div
                                                class="space-y-6 bg-white py-2 px-6 rounded"
                                                v-if="state == 1"
                                            >
                                                <fieldset
                                                    :disabled="loading"
                                                    class=""
                                                >
                                                    <div
                                                        class="rounded-md shadow-sm -space-y-px"
                                                    >
                                                        <div
                                                            class="overflow-hidden rounded-t-md "
                                                        >
                                                            <div
                                                                class=" my-1 overflow-hidden  "
                                                            >
                                                                <label
                                                                    for="code w-full border flex items-center"
                                                                    class=""
                                                                >
                                                                    <button
                                                                        @click="
                                                                            showModal()
                                                                        "
                                                                        class="rounded-md text-gray-500 hover:text-white bg-red-300 focus:outline-none focus:ring-2 focus:ring-white"
                                                                    >
                                                                        <span
                                                                            class="sr-only"
                                                                            >Close
                                                                            panel</span
                                                                        >
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
                                                                    <div>
                                                                        Name
                                                                    </div>
                                                                </label>
                                                                <input
                                                                    name="Name"
                                                                    type="Name"
                                                                    v-model="
                                                                        name
                                                                    "
                                                                    autocomplete="Name"
                                                                    required
                                                                    class=" border-b border-gray-500 bg-white focus:bg-gray-100  appearance-none relative block w-full px-3 py-2  placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                                                    :placeholder="
                                                                        name
                                                                    "
                                                                />
                                                            </div>
                                                            <div class="">
                                                                <label
                                                                    for="price"
                                                                    class="block text-sm font-medium text-gray-700"
                                                                    >Price(use
                                                                    .(dot) as a
                                                                    separator
                                                                    not
                                                                    ,(comma))</label
                                                                >
                                                                <div
                                                                    class="mt-1 relative rounded-md "
                                                                >
                                                                    <div
                                                                        class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                                                                    >
                                                                        <span
                                                                            class="text-gray-500 sm:text-sm"
                                                                        >
                                                                            $
                                                                        </span>
                                                                    </div>
                                                                    <input
                                                                        type="text"
                                                                        name="price"
                                                                        id="price"
                                                                        v-model="
                                                                            price
                                                                        "
                                                                        required
                                                                        class=" py-2 block w-full pl-7 pr-12 border-gray-300  bg-white focus:bg-gray-100  border-b  placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                                                        :placeholder="
                                                                            price
                                                                        "
                                                                    />
                                                                    <div
                                                                        class="absolute inset-y-0 right-0 flex items-center"
                                                                    >
                                                                        <label
                                                                            for="currency"
                                                                            class="sr-only"
                                                                            >Currency</label
                                                                        >
                                                                        <select
                                                                            id="currency"
                                                                            name="currency"
                                                                            v-model="
                                                                                currency
                                                                            "
                                                                            required
                                                                            class="focus:ring-indigo-500  focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
                                                                        >
                                                                            <option
                                                                                value="USD"
                                                                                >USD</option
                                                                            >
                                                                            <option
                                                                                value="ZWD"
                                                                                >ZWD</option
                                                                            >
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                class=" my-1 overflow-hidden  "
                                                            >
                                                                <label
                                                                    for="Category"
                                                                    class=""
                                                                    >Category</label
                                                                >
                                                                <input
                                                                    name="Category"
                                                                    type="Category"
                                                                    v-model="
                                                                        category
                                                                    "
                                                                    autocomplete="Category"
                                                                    required
                                                                    class="appearance-none border-b bg-white focus:bg-gray-100  border-gray-300 relative block w-full px-3 py-2  placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                                                    :placeholder="
                                                                        category
                                                                    "
                                                                />
                                                            </div>
                                                            <div
                                                                class="col-span-6 sm:col-span-3"
                                                            >
                                                                <label
                                                                    for="country"
                                                                    class="block text-sm font-medium text-gray-700"
                                                                    >Condition</label
                                                                >
                                                                <select
                                                                    id="country"
                                                                    name="country"
                                                                    autocomplete="country"
                                                                    v-model="
                                                                        condition
                                                                    "
                                                                    required
                                                                    class="mt-1 block bg-white focus:bg-gray-100 w-full py-2 px-3 border-b border-gray-300 bg-white  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                                >
                                                                    <option
                                                                        value="NEW"
                                                                        >NEW</option
                                                                    >
                                                                    <option
                                                                        value="LIKE NEW - USED"
                                                                        >LIKE
                                                                        NEW -
                                                                        USED</option
                                                                    >
                                                                    <option
                                                                        value="RENEWED"
                                                                        >RENEWED</option
                                                                    >
                                                                    <option
                                                                        value="VERY GOOD"
                                                                        >VERY
                                                                        GOOD</option
                                                                    >
                                                                    <option
                                                                        value="GOOD"
                                                                        >GOOD</option
                                                                    >
                                                                    <option
                                                                        value="GOOD - USED"
                                                                        >GOOD -
                                                                        USED</option
                                                                    >
                                                                    <option
                                                                        value="ACCEPTABLE - USED"
                                                                        >ACCEPTABLE
                                                                        -
                                                                        USED</option
                                                                    >
                                                                    <option
                                                                        value="GOOD USED"
                                                                        >GOOD
                                                                        USED</option
                                                                    >
                                                                </select>
                                                            </div>

                                                            <div
                                                                class="my-1 overflow-hidden  "
                                                            >
                                                                <label
                                                                    for="Description"
                                                                    class=""
                                                                    >Description</label
                                                                >
                                                                <textarea
                                                                    id=""
                                                                    cols="30"
                                                                    rows="3"
                                                                    name="Description"
                                                                    type="Description"
                                                                    v-model="
                                                                        description
                                                                    "
                                                                    autocomplete="Description"
                                                                    required
                                                                    class="a resize-none ppearance-none border-b border-gray-300 bg-white focus:bg-gray-100 relative block w-full px-3 py-2  placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                                                    :placeholder="
                                                                        description
                                                                    "
                                                                ></textarea>
                                                            </div>
                                                        </div>
                                                        <div
                                                            class="mt-2 text-sm w-full "
                                                            v-if="errors"
                                                        >
                                                            <span
                                                                class="flex space-x-2 m-auto w-64"
                                                                ><p
                                                                    class="text-red-600 text-lg"
                                                                >
                                                                    &#8226;
                                                                </p>
                                                                <span
                                                                    class="text-red-500"
                                                                >
                                                                    {{ errors }}
                                                                </span>
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <button
                                                                @click="
                                                                    update(ID)
                                                                "
                                                                class="group mt-4 relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                            >
                                                                <div
                                                                    v-if="
                                                                        loading
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
                                                            <div v-if="success">
                                                                {{ success }}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </fieldset>
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
    </div>
</template>

<script>
import { mapActions } from "vuex";
import axios from "@/axios";
export default {
    name: "MyListingModal",
    props: [
        "ID",
        "name",
        "category",
        "price",
        "description",
        "currency",
        "condition",
        "imageUrl"
    ],
    computed: {
        state() {
            return this.$store.state.listings.checkpassword;
        }
    },
    methods: {
        ...mapActions(["Checkpass"]),
        async deletelisting(ID) {
            try {
                console.log(this.password);
                this.loading = true;
                this.showOverlay = true;
                this.errors = null;
                let data = {
                    password: this.password
                };

                const response = await axios.post(
                    `/api/Listing/delete-listing/${ID}`,
                    data
                );
                this.showOverlay = false;

                if (!response.data.success) {
                    this.errors = response.data.error;
                    this.loading = false;
                } else {
                    this.loading = false;
                    this.show_modal = false;
                    this.$router.go(this.$router.currentRoute);
                }
            } catch (e) {
                this.loading = false;
                console.log(e);
            }
        },
        async checkingPassword(ID) {
            try {
                console.log(this.password);
                this.loading = true;
                this.showOverlay = true;
                this.errors = null;
                let data = {
                    password: this.password
                };

                const response = await axios.post(
                    `/api/auth/checkingpassword/${ID}`,
                    data
                );
                this.showOverlay = false;

                if (!response.data.success) {
                    let data = 0;
                    this.errors = response.data.error;
                    this.loading = false;
                    const res = await this.Checkpass({
                        data
                    });
                } else {
                    let data = 1;
                    const res = await this.Checkpass({
                        data
                    });
                    this.loading = false;
                    /* this.$router.go(this.$router.currentRoute); */
                }
            } catch (e) {
                this.loading = false;
                console.log(e);
            }
        },
        /* change password */
        async update(id) {
            if (
                !this.name ||
                !this.category ||
                !this.description ||
                !this.price ||
                !this.condition
            ) {
                this.errors = null;
                this.errors = "Empty field detected";
                this.loading = false;
                return;
            }
            if (!this.currency) {
                this.errors = null;
                this.errors = "Please select currency";
                this.loading = false;
                return;
            }

            if (this.price) {
                this.price = parseFloat(this.price);
            }
            if (this.name.length < 2) {
                this.errors = null;
                this.errors = "Product name must be greater than 2";
                this.loading = false;
                return;
            }
            try {
                console.log(id);
                this.loading = true;
                let data = {
                    name: this.name,
                    price: this.price,
                    currency: this.currency,
                    condition: this.condition,
                    description: this.description,
                    category: this.category
                };
                console.log(data);
                let response = await axios.put(
                    `/api/Listing/update/${id}`,
                    data
                );
                console.log(response);
                if (response.success) {
                    this.loading = false;
                    this.$toast.success("Changes saved").goAway(2000);
                } else {
                    this.loading = false;
                    this.$router.go(this.$router.currentRoute);
                    this.$toast.error("something went wrong").goAway(2000);
                }
            } catch (e) {
                this.loading = false;
                console.log(e);
            }
        },
        async ChangePassword(e) {
            /*   this.loading = true;
            e.preventDefault();
            this.showOverlay = true;
            this.errors = null;

            const response = await axios.post("/api/auth/changepassword", {
                oldpassword: this.oldpassword,
                newpassword: this.newpassword,
                newpassword2: this.newpassword2
            });
            this.showOverlay = false;

            if (!response.data.success) {
                this.errors = response.data.error;
                this.loading = false;
            } else {
                this.loading = false;
                this.show_modal = false;
                this.$router.go({ path: "/login" });
            } */
        },
        togglePasswordType() {
            this.passwordType === "text"
                ? (this.passwordType = "password")
                : (this.passwordType = "text");
        },
        togglePasswordType1() {
            this.passwordType1 === "text"
                ? (this.passwordType1 = "password")
                : (this.passwordType1 = "text");
        },
        togglePasswordType2() {
            this.passwordType2 === "text"
                ? (this.passwordType2 = "password")
                : (this.passwordType2 = "text");
        },
        showModal(btntype) {
            this.btntype = btntype;
            if (this.show_modal) {
                //stop screen scrolling
                this.show_modal = false;
            } else {
                this.show_modal = true;
            }
        }
    },
    data() {
        return {
            password: "",
            passwordType: "password",
            showOverlay: false,
            errors: null,
            show_modal: false,
            loading: false,
            btntype: ""
        };
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
