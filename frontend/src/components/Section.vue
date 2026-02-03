<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section :id="props.id" class="w-full">
    <div class="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-16">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps({
  id: { type: String, required: true },
})
</script>
