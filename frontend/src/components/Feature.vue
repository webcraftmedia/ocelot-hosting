<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="feature" :class="{ 'feature--icon': props.icon && !props.img }">
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
  @apply bg-slate-50;
  @apply rounded-lg;
  @apply overflow-hidden;
  @apply pt-0;
  @apply px-0;
  @apply pb-6;
  @apply dark:bg-gray-800;

  img {
    @apply rounded-t-lg;
    @apply border-t;
    @apply border-x;
    @apply border-gray-200;
    @apply dark:border-gray-700;
  }

  .iconify {
    @apply mt-5;
    @apply mb-5;
    @apply w-full;
  }

  .content {
    @apply pt-4;
    @apply px-4;

    h3 {
      @apply mb-1;
      @apply text-lg;
      @apply font-semibold;
      @apply tracking-tight;
      @apply text-gray-900;
      @apply dark:text-white;
    }

    p {
      @apply text-base;
      @apply font-normal;
      @apply text-gray-500;
      @apply dark:text-gray-400;
    }
  }

  &.feature--icon {
    @apply bg-transparent;
    @apply border-0;
    @apply shadow-none;
    @apply rounded-none;
    @apply text-center;

    .iconify {
      @apply text-teal-600;
      @apply text-5xl;
      @apply dark:text-teal-400;
    }

    .content {
      @apply border-t-0;
      @apply p-0;
      @apply pt-2;

      h3 {
        @apply text-xl;
      }

      p {
        @apply text-base;
        @apply mb-0;
      }
    }
  }
}
</style>
