<template>
  <div class="logo-container">
    <LogoSmall class="logo-small" />
    <Logo class="logo-full" />
  </div>
</template>

<script setup lang="ts">
import Logo from '~/../assets/logo.svg'
import LogoSmall from '~/../assets/logo-small.svg'
</script>

<style scoped>
@reference "tailwindcss";

.logo-container {
  @apply relative;
  @apply transition-all duration-500;
  height: 40px;
  width: 127px;

  @media (min-width: 768px) {
    width: 40px;
  }

  @media (min-width: 1024px) {
    width: 127px;
  }
}

.logo-small,
.logo-full {
  @apply absolute top-0 left-0;
  @apply transition-opacity duration-500;
  width: unset;
  height: 40px;
}

.logo-small {
  @apply opacity-0 md:opacity-100 lg:opacity-0;
}

.logo-full {
  @apply opacity-100 md:opacity-0 lg:opacity-100;
}
</style>
