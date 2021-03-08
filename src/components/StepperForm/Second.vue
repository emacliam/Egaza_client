<template>
    <main class="text-gray-black leading-loose font-normal">
        <body class="antialiased h-full">
            <div
                class="h-full w-full flex overflow-hidden antialiased text-gray-800 "
                style="background-color:#F9F9F9"
            >
                <form
                    action="
                                "
                    class="mt-8 flex justify-between w-3/4 mb-48 space-x-64"
                >
                    <!-- first side -->
                    <div class=" space-y-8 flex flex-col w-1/2">
                        <div class="">
                            <label
                                for="email-address"
                                class="text-xs font-bold my-2"
                                >Email address</label
                            >
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                v-model="email"
                                autocomplete="email"
                                required
                                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Email address"
                            />
                        </div>
                        <div>
                            <label
                                for="firstname"
                                class="text-xs font-bold my-2"
                                >Fullame</label
                            >
                            <input
                                id="firstname"
                                name="firstname"
                                type="firstname"
                                v-model="firstName"
                                autocomplete="firstname"
                                required
                                class="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Firstname"
                            />
                        </div>
                        <div>
                            <label for="lastname" class="text-xs font-bold my-2"
                                >lastname</label
                            >
                            <input
                                id="lastname"
                                name="lastname"
                                type="lastname"
                                v-model="lastName"
                                autocomplete="lastname"
                                required
                                class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="lastname"
                            />
                        </div>
                        <div>
                            <label for="company" class="text-xs font-bold my-2"
                                >company</label
                            >
                            <input
                                id="company"
                                name="company"
                                type="company"
                                v-model="company"
                                autocomplete="company"
                                required
                                class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="company"
                            />
                        </div>
                        <div>
                            <label
                                for="companyUrl"
                                class="text-xs font-bold my-2"
                                >companyUrl</label
                            >
                            <input
                                id="companyUrl"
                                name="companyUrl"
                                type="companyUrl"
                                v-model="companyUrl"
                                autocomplete="companyUrl"
                                required
                                class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="companyUrl"
                            />
                        </div>
                        <div>
                            <label for="lastname" class="text-xs font-bold my-2"
                                >lastname</label
                            >
                            <input
                                id="lastname"
                                name="lastname"
                                type="lastname"
                                v-model="lastName"
                                autocomplete="lastname"
                                required
                                class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="lastname"
                            />
                        </div>
                        <div>
                            <label for="title" class="text-xs font-bold my-2"
                                >title</label
                            >
                            <input
                                id="title"
                                name="title"
                                type="title"
                                v-model="title"
                                autocomplete="title"
                                required
                                class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="title"
                            />
                        </div>
                        <div>
                            <label for="location" class="text-xs font-bold my-2"
                                >location</label
                            >
                            <input
                                id="location"
                                name="location"
                                type="location"
                                v-model="location"
                                autocomplete="location"
                                required
                                class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="location"
                            />
                        </div>
                    </div>
                </form>
                <buttons></buttons>
            </div>
        </body>
    </main>
</template>

<script>
import Buttons from "./Buttons.vue";

export default {
    components: {
        Buttons
    }
};
</script>
