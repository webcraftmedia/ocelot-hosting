<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <figure>
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
  @apply max-w-screen-md;
  @apply mx-auto;

  blockquote {
    p {
      @apply text-3xl;
      @apply font-medium;
      @apply text-gray-900;
      @apply dark:text-white;
    }
  }

  figcaption {
    @apply flex;
    @apply items-center;
    @apply justify-center;
    @apply mt-10;
    @apply space-x-3;

    img {
      @apply w-10;
      @apply h-10;
      @apply rounded-full;
    }

    .person {
      @apply flex;
      @apply items-center;
      @apply divide-x-2;
      @apply divide-gray-500;
      @apply dark:divide-gray-700;

      .name {
        @apply pr-3;
        @apply text-2xl;
        @apply text-gray-900;
        @apply dark:text-white;
      }

      .position {
        @apply pl-3;
        @apply text-base;
        @apply font-light;
        @apply text-gray-500;
        @apply dark:text-gray-400;
      }
    }
  }
}
</style>
