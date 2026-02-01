<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <button type="button" :class="props.type">
    {{ props.text }}
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  type: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'inverted', 'outline'].includes(value),
  },
  text: { type: String, required: true },
})
</script>

<style scoped>
@reference "tailwindcss";

button {
  @apply py-2.5;
  @apply px-6;
  @apply me-2;
  @apply font-semibold;
  @apply text-sm;
  @apply uppercase;
  @apply tracking-wide;
  @apply rounded-sm;

  &.primary {
    @apply text-white;
    @apply bg-teal-700;
    @apply hover:bg-teal-800;

    @apply focus:ring-4;
    @apply focus:ring-teal-400;
    @apply focus:outline-none;

    @apply dark:bg-teal-700;
    @apply dark:hover:bg-teal-800;
    @apply dark:focus:ring-teal-800;
  }

  &.inverted {
    @apply text-teal-800;
    @apply bg-white;
    @apply hover:bg-teal-50;

    @apply focus:ring-4;
    @apply focus:ring-teal-400;
    @apply focus:outline-none;
  }

  &.outline {
    @apply text-white;
    @apply bg-transparent;
    @apply border;
    @apply border-white;
    @apply hover:bg-white/10;

    @apply focus:ring-4;
    @apply focus:ring-white/30;
    @apply focus:outline-none;
  }

  &.secondary {
    @apply text-gray-900;
    @apply bg-white;

    @apply border;
    @apply border-gray-200;

    @apply hover:bg-gray-100;
    @apply hover:text-teal-700;

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
