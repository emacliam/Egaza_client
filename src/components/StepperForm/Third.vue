<template>
    <div class="text-center border border-light p-5">
        <p class="h4 mb-4">Social Links</p>

        <input
            type="text"
            id="facebook"
            name="facebook"
            class="form-control mb-4"
            placeholder="Facebook"
        />

        <input
            type="text"
            id="google"
            name="google"
            class="form-control mb-4"
            placeholder="Google"
        />

        <input
            type="text"
            id="twitter"
            name="twitter"
            class="form-control mb-4"
            placeholder="Twitter"
        />

        <input
            type="text"
            id="linkedin"
            name="linkedin"
            class="form-control mb-4"
            placeholder="Linkedin"
        />

        <input
            type="text"
            id="instagram"
            name="instagram"
            class="form-control mb-4"
            placeholder="Instagram"
        />

        <buttons></buttons>
    </div>
</template>

<script>
import Buttons from "./Buttons.vue";

export default {
    components: {
        Buttons
    }
};
</script>
