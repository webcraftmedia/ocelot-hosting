<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="open" class="modal-overlay" @click.self="emit('close')">
        <div class="modal-wrapper">
          <div class="modal-container">
            <slot />
          </div>
          <button class="modal-close" type="button" @click="emit('close')">
            <Icon name="flowbite:close-outline" />
          </button>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
const props = defineProps({
  open: { type: Boolean, required: true },
})

const emit = defineEmits<{
  close: []
}>()

watch(
  () => props.open,
  (isOpen) => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
  },
)

onUnmounted(() => {
  document.body.style.overflow = ''
})
</script>

<style scoped>
@reference "tailwindcss";

.modal-overlay {
  @apply fixed;
  @apply inset-0;
  @apply z-[100];
  @apply flex;
  @apply items-center;
  @apply justify-center;
  @apply bg-black/60;
  @apply p-4;
}

.modal-wrapper {
  @apply relative;
  @apply max-w-4xl;
  @apply max-h-[90vh];
}

.modal-container {
  @apply bg-white;
  @apply dark:bg-gray-800;
  @apply rounded-lg;
  @apply overflow-hidden;
  @apply max-h-[90vh];
  @apply overflow-y-auto;
  @apply shadow-2xl;
}

.modal-close {
  @apply absolute;
  @apply -top-3;
  @apply -right-3;
  @apply w-10;
  @apply h-10;
  @apply flex;
  @apply items-center;
  @apply justify-center;
  @apply rounded-full;
  @apply bg-white;
  @apply dark:bg-gray-700;
  @apply text-gray-600;
  @apply dark:text-gray-300;
  @apply hover:bg-gray-100;
  @apply dark:hover:bg-gray-600;
  @apply hover:text-gray-900;
  @apply dark:hover:text-white;
  @apply transition-colors;
  @apply cursor-pointer;
  @apply shadow-lg;

  .iconify {
    @apply text-xl;
  }
}

.modal-enter-active,
.modal-leave-active {
  @apply transition-opacity;
  @apply duration-200;
}

.modal-enter-from,
.modal-leave-to {
  @apply opacity-0;
}
</style>
