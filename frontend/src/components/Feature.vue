<template>
    <div class="feature">
        <img :src="props.img" alt="">
        <div class="content">
            <h3>{{ props.headline }}</h3>
            <p>{{ props.text }}</p>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    img: {type: String, required: true},
    headline: {type: String, required: true},
    text: {type: String, required: true},
})
</script>

<style scoped>
    @reference "tailwindcss";

    .feature {
        /* @apply max-w-sm; */
        @apply bg-white;
        @apply border;
        @apply border-gray-200;
        @apply rounded-lg;
        @apply shadow-sm;
        @apply dark:bg-gray-800;
        @apply dark:border-gray-700;

        img {
            @apply rounded-t-lg;
        }

        .content {

          @apply p-5;
          @apply border-t-2;
          @apply border-gray-200;

            h3 {
                @apply mb-2;
                @apply text-2xl;
                @apply font-bold;
                @apply tracking-tight;
                @apply text-gray-900;
                @apply dark:text-white;
            }

            p {
                @apply mb-3;
                @apply text-2xl;
                @apply font-normal;
                @apply text-gray-700;
                @apply dark:text-gray-400;
            }
        }
    }
</style>