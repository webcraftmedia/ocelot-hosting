<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="feature">
    <NuxtImg v-if="props.img" :src="props.img" alt="" />
    <Icon v-if="props.icon" :name="props.icon" />
    <div class="content">
      <h3>{{ props.headline }}</h3>
      <p>{{ props.text }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  img: { type: String, required: false, default: null },
  icon: { type: String, required: false, default: null },
  headline: { type: String, required: true },
  text: { type: String, required: true },
})
</script>

<style scoped>
@reference "tailwindcss";

.feature {
  @apply bg-neutral-50;
  @apply border;
  @apply border-gray-200;
  @apply rounded-lg;
  @apply shadow-sm;
  @apply dark:bg-gray-800;
  @apply dark:border-gray-700;

  img {
    @apply rounded-t-lg;
  }

  .iconify {
    @apply mt-5;
    @apply mb-5;
    @apply w-full;
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
