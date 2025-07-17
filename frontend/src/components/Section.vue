<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section :id="props.id" class="mx-auto flex flex-col justify-center items-center text-5xl" :class="props.class">
    <div class="md:container md:mx-auto">
      <slot />
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
    id: {type: String, required: true},
    class: {type: String, default: '', required: false}
})
</script>