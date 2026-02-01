<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <figure>
    <svg class="quote-icon" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
        fill="currentColor"
      />
    </svg>
    <blockquote>
      <p>{{ props.quote }}</p>
    </blockquote>
    <figcaption>
      <img :src="props.image" alt="profile picture" />
      <div class="person">
        <div class="name">{{ props.name }}</div>
        <a
          v-if="props.url"
          :href="props.url"
          target="_blank"
          rel="noopener noreferrer"
          class="position"
          >{{ props.position }}</a
        >
        <div v-else class="position">{{ props.position }}</div>
      </div>
    </figcaption>
  </figure>
</template>

<script setup lang="ts">
const props = defineProps({
  quote: { type: String, required: true },
  image: { type: String, required: true },
  name: { type: String, required: true },
  position: { type: String, required: true },
  url: { type: String, default: undefined },
})
</script>

<style scoped>
@reference "tailwindcss";

figure {
  @apply bg-slate-50;
  @apply border;
  @apply border-slate-200;
  @apply p-8;
  @apply flex;
  @apply flex-col;
  @apply dark:bg-gray-800;
  @apply dark:border-gray-700;

  .quote-icon {
    @apply h-8;
    @apply mb-4;
    @apply text-teal-200;
    @apply dark:text-teal-900;
  }

  blockquote {
    @apply flex-grow;

    p {
      @apply text-lg;
      @apply leading-relaxed;
      @apply text-gray-700;
      @apply dark:text-gray-300;
    }
  }

  figcaption {
    @apply flex;
    @apply items-center;
    @apply mt-auto;
    @apply pt-6;
    @apply space-x-3;

    img {
      @apply w-12;
      @apply h-12;
      @apply rounded-full;
    }

    .person {
      @apply flex;
      @apply flex-col;
      @apply gap-0;

      .name {
        @apply text-sm;
        @apply font-semibold;
        @apply text-gray-900;
        @apply dark:text-white;
        @apply m-0;
        @apply p-0;
        @apply leading-snug;
      }

      .position {
        @apply text-sm;
        @apply text-gray-500;
        @apply dark:text-gray-400;
        @apply m-0;
        @apply p-0;
        @apply leading-snug;
      }
    }
  }
}
</style>
