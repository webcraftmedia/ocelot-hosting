<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <button type="button" :class="props.type">
        {{ props.text }}
    </button>
</template>

<script setup>
const props = defineProps({
    type: {type: String, default: 'primary', validator: (value) => ['primary', 'secondary'].includes(value)},
    text: {type: String, required: true}
})
</script>

<style scoped>
    @reference "tailwindcss";

    button {
        @apply py-2.5;
        @apply px-5;
        @apply me-2;
        @apply font-medium;
        @apply text-sm;
        @apply rounded-lg;

        &.primary {
            @apply text-white;
            @apply bg-blue-700
            ;
            @apply hover:bg-blue-800;
            
            @apply focus:ring-4;
            @apply focus:ring-blue-300;
            @apply focus:outline-none;
            
            @apply dark:bg-blue-600;
            @apply dark:hover:bg-blue-700;
            @apply dark:focus:ring-blue-800;
        }

        &.secondary {
            @apply text-gray-900;
            @apply bg-white;
            
            @apply border;
            @apply border-gray-200;
            
            @apply hover:bg-gray-100;
            @apply hover:text-blue-700;
            
            @apply focus:z-10;
            @apply focus:ring-4;
            @apply focus:ring-gray-100;
            @apply focus:outline-none;

            @apply dark:focus:ring-gray-700;
            @apply dark:bg-gray-800;
            @apply dark:text-gray-400;
            @apply dark:border-gray-600;
            @apply dark:hover:text-white;
            @apply dark:hover:bg-gray-700;
        }
    }
</style>