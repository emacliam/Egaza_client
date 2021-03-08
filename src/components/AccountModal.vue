<template>
    <div>
        <div class="flex flex-col space-y-2 text-sm">
            <button
                class="text-gray-700 border rounded py-2 mt-2 px-4 focus:outline-none"
                @click="showModal(true)"
            >
                Delete account
            </button>
            <button
                class="text-gray-700 border rounded py-2 mt-2 px-4 focus:outline-none"
                @click="showModal(false)"
            >
                Change Password
            </button>
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
                                                        Deleting Account
                                                    </h2>
                                                </div>
                                                <div
                                                    class="w-full flex flex-col items-center"
                                                >
                                                    <!-- forms here -->
                                                    <p
                                                        class="text-xs text-red-700 animate-pulse"
                                                    >
                                                        Are you sure to delete
                                                        your account?
                                                    </p>
                                                    <span
                                                        class="my-2 text-gray-600"
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
                                                                class="flex rounded border border-gray-400 overflow-hidden"
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
                                                                    class="appearance-none  rounded-none relative block w-full px-3 py-2  placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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
                                                        <div class="mt-4">
                                                            <button
                                                                @click="
                                                                    deleteAccount
                                                                "
                                                                class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                            >
                                                                <span
                                                                    class="absolute left-0 inset-y-0 flex items-center pl-3"
                                                                >
                                                                    <img
                                                                        class="w-6 h-6 "
                                                                        :src="
                                                                            `${publicPath}Icons/delete.svg`
                                                                        "
                                                                    />
                                                                </span>
                                                                <div
                                                                    v-if="
                                                                        loading
                                                                    "
                                                                    :class="
                                                                        loading
                                                                            ? 'cursor-wait'
                                                                            : 'cursor-pointer'
                                                                    "
                                                                    class="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 "
                                                                >
                                                                    <div
                                                                        style="border-top-color:transparent"
                                                                        class="border-solid animate-spin  rounded-full border-blue-400 border-4 h-8 w-8"
                                                                    ></div>
                                                                </div>
                                                                Delete
                                                            </button>
                                                        </div>
                                                    </fieldset>
                                                </div>
                                                <div
                                                    class="h-20 flex items-center justify-center"
                                                >
                                                    <button
                                                        @click="showModal()"
                                                        class="text-blue-600 focus:outline-none"
                                                    >
                                                        Maybe later
                                                    </button>
                                                </div>
                                                <div
                                                    class="mt-2 text-sm w-full "
                                                    v-if="errors"
                                                >
                                                    <span
                                                        class="flex space-x-2 items-center m-auto w-64"
                                                        ><p class="text-lg">
                                                            &#8226;
                                                        </p>
                                                        <span class="">
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
                                                        Changing Password
                                                    </h2>
                                                </div>
                                                <div
                                                    class="w-full flex flex-col items-center"
                                                >
                                                    <!-- forms here -->
                                                    <p
                                                        class=" mb-2 text-xs text-red-700 animate-pulse"
                                                    >
                                                        Are you sure to change
                                                        your password?
                                                    </p>
                                                    <div
                                                        class="loader"
                                                        v-if="loading"
                                                    ></div>
                                                    <fieldset
                                                        :disabled="loading"
                                                        class="space-y-2"
                                                    >
                                                        <div>
                                                            <label
                                                                for="password"
                                                                class="sr-only"
                                                                >Current
                                                                Password</label
                                                            >
                                                            <div
                                                                class="flex rounded border border-gray-400 overflow-hidden"
                                                            >
                                                                <input
                                                                    id="password"
                                                                    name="password"
                                                                    :type="
                                                                        passwordType
                                                                    "
                                                                    v-model="
                                                                        oldpassword
                                                                    "
                                                                    autocomplete="current-password"
                                                                    required
                                                                    class="appearance-none rounded-none relative block w-full px-3 py-2  placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                                                    placeholder="Current Password"
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
                                                        <!-- new password -->
                                                        <div>
                                                            <label
                                                                for="password"
                                                                class="sr-only"
                                                                >New
                                                                Password</label
                                                            >
                                                            <div
                                                                class="flex rounded border border-gray-400 overflow-hidden"
                                                            >
                                                                <input
                                                                    id="password"
                                                                    name="password"
                                                                    :type="
                                                                        passwordType1
                                                                    "
                                                                    v-model="
                                                                        newpassword
                                                                    "
                                                                    autocomplete="new-password"
                                                                    required
                                                                    class="appearance-none rounded-none relative block w-full px-3 py-2  placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                                                    placeholder="New Password"
                                                                />
                                                                <span
                                                                    @click="
                                                                        togglePasswordType1()
                                                                    "
                                                                    class="p-2 text-xs font-bold cursor-pointer"
                                                                >
                                                                    <span
                                                                        class="text-blue-600"
                                                                        v-show="
                                                                            passwordType1 ===
                                                                                'password'
                                                                        "
                                                                        >Show</span
                                                                    ><span
                                                                        class="text-red-600"
                                                                        v-show="
                                                                            passwordType1 ===
                                                                                'text'
                                                                        "
                                                                        >Hide</span
                                                                    ></span
                                                                >
                                                            </div>
                                                        </div>
                                                        <!-- confirm newpassword -->
                                                        <div>
                                                            <label
                                                                for="password"
                                                                class="sr-only"
                                                                >Confirm
                                                                Password</label
                                                            >
                                                            <div
                                                                class="flex rounded border border-gray-400 overflow-hidden"
                                                            >
                                                                <input
                                                                    id="password"
                                                                    name="password"
                                                                    :type="
                                                                        passwordType2
                                                                    "
                                                                    v-model="
                                                                        newpassword2
                                                                    "
                                                                    autocomplete="new-password"
                                                                    required
                                                                    class="appearance-none rounded-none relative block w-full px-3 py-2  placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                                                    placeholder="Confirm Password"
                                                                />
                                                                <span
                                                                    @click="
                                                                        togglePasswordType2()
                                                                    "
                                                                    class="p-2 text-xs font-bold cursor-pointer"
                                                                >
                                                                    <span
                                                                        class="text-blue-600"
                                                                        v-show="
                                                                            passwordType2 ===
                                                                                'password'
                                                                        "
                                                                        >Show</span
                                                                    ><span
                                                                        class="text-red-600"
                                                                        v-show="
                                                                            passwordType2 ===
                                                                                'text'
                                                                        "
                                                                        >Hide</span
                                                                    ></span
                                                                >
                                                            </div>
                                                        </div>
                                                        <div class="mt-6">
                                                            <button
                                                                @click="
                                                                    ChangePassword
                                                                "
                                                                class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                            >
                                                                <span
                                                                    class="absolute left-0 inset-y-0 flex items-center pl-3"
                                                                >
                                                                    <img
                                                                        class="w-6 h-6 "
                                                                        :src="
                                                                            `${publicPath}Icons/edit.svg`
                                                                        "
                                                                    />
                                                                </span>
                                                                <div
                                                                    v-if="
                                                                        loading
                                                                    "
                                                                    :class="
                                                                        loading
                                                                            ? 'cursor-wait'
                                                                            : 'cursor-pointer'
                                                                    "
                                                                    class="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 "
                                                                >
                                                                    <div
                                                                        style="border-top-color:transparent"
                                                                        class="border-solid animate-spin  rounded-full border-blue-400 border-4 h-8 w-8"
                                                                    ></div>
                                                                </div>
                                                                Change Password
                                                            </button>
                                                        </div>
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
                                                        class="flex space-x-2 items-center m-auto w-64"
                                                        ><p class="text-lg">
                                                            &#8226;
                                                        </p>
                                                        <span class="">
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
                    </div>
                </transition>
            </div>
        </body>
    </div>
</template>

<script>
import axios from "@/axios";
export default {
    name: "AccountModal",
    methods: {
        async deleteAccount(e) {
            try {
                this.loading = true;
                e.preventDefault();
                this.showOverlay = true;
                this.errors = null;

                const response = await axios.post("/api/auth/delete-account", {
                    password: this.password
                });
                this.showOverlay = false;

                if (!response.data.success) {
                    this.errors = response.data.error;
                    this.loading = false;
                } else {
                    this.loading = false;
                    this.show_modal = false;
                    localStorage.clear();
                    this.$store.commit("setUserId", null);
                    this.$store.commit("setUserRole", null);
                    this.$store.commit("setUserStatus", null);
                    this.$store.commit("setUser", null);
                    this.$store.commit("setEmail", null);
                    this.$store.commit("setFirstName", null);
                    this.$store.commit("setLastName", null);
                    this.$router.go({ path: "/login" });
                }
            } catch (e) {
                this.loading = false;
                console.log(e);
            }
        },

        /* change password */

        async ChangePassword(e) {
            try {
                this.loading = true;
                e.preventDefault();
                this.showOverlay = true;
                this.errors = null;
                if (this.newpassword !== this.newpassword2) {
                    this.errors = "passwords do not match";
                    this.loading = false;
                    this.showOverlay = false;
                    return;
                }
                if (
                    !this.oldpassword ||
                    !this.newpassword2 ||
                    !this.newpassword
                ) {
                    this.errors = null;
                    this.errors = "Fill in the fields";
                    this.loading = false;
                    this.showOverlay = false;
                    return;
                }
                if (
                    !this.newpassword.match(
                        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,}$/
                    )
                ) {
                    this.errors = null;
                    this.errors =
                        "Your password must be at least 6 characters long and contain a lowercase letter, an uppercase letter, a numeric digit and a special character.";
                    this.loading = false;
                    this.showOverlay = false;
                    return;
                }
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
                }
            } catch (e) {
                this.loading = false;
                console.log(e);
            }
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
            passwordType1: "password",
            passwordType2: "password",
            showOverlay: false,
            errors: null,
            show_modal: false,
            loading: false,
            btntype: "",
            publicPath: process.env.BASE_URL
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
