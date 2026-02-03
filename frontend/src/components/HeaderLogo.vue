<template>
  <LogoSmall class="logo-small" />
  <Logo class="logo-full" />
</template>

<script setup lang="ts">
import Logo from '~/../assets/logo.svg'
import LogoSmall from '~/../assets/logo-small.svg'
</script>

<style scoped>
@reference "tailwindcss";

.logo-small {
  @apply block lg:hidden;
  width: unset;
  height: 40px;
}

.logo-full {
  @apply hidden lg:block;
  width: unset;
  height: 40px;
}
</style>
