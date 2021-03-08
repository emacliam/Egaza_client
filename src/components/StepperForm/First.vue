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
                                >Company Or Personal</label
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
