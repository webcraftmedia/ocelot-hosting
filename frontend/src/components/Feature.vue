<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    class="feature"
    :class="{
      'feature--icon': props.icon && !props.img,
      'feature--clickable': props.img,
    }"
    @click="openModal"
  >
    <NuxtImg v-if="props.img" :src="props.img" alt="" />
    <Icon v-if="props.icon" :name="props.icon" />
    <div class="content">
      <h3>{{ props.headline }}</h3>
      <p>{{ props.text }}</p>
    </div>
  </div>

  <Modal v-if="props.img" :open="isOpen" @close="isOpen = false">
    <div class="modal-content">
      <NuxtImg :src="props.img" alt="" class="modal-image" />
      <div class="modal-text">
        <h3>{{ props.headline }}</h3>
        <p>{{ props.text }}</p>
      </div>
    </div>
  </Modal>
</template>

<script setup lang="ts">
const props = defineProps({
  img: { type: String, required: false, default: null },
  icon: { type: String, required: false, default: null },
  headline: { type: String, required: true },
  text: { type: String, required: true },
})

const isOpen = ref(false)

function openModal() {
  if (props.img) {
    isOpen.value = true
  }
}
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
      @apply text-4xl;
      @apply md:text-5xl;
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

  &.feature--clickable {
    @apply cursor-pointer;
    @apply transition-transform;
    @apply duration-200;

    &:hover {
      @apply scale-[1.02];
      @apply shadow-lg;
    }
  }
}

.modal-content {
  .modal-image {
    @apply w-full;
    @apply max-h-[70vh];
    @apply object-contain;
    @apply border-b;
    @apply border-gray-200;
    @apply dark:border-gray-700;
  }

  .modal-text {
    @apply p-6;
    @apply text-center;

    h3 {
      @apply text-xl;
      @apply md:text-2xl;
      @apply font-semibold;
      @apply text-gray-900;
      @apply dark:text-white;
      @apply mb-2;
    }

    p {
      @apply text-base;
      @apply md:text-lg;
      @apply text-gray-600;
      @apply dark:text-gray-400;
    }
  }
}
</style>
