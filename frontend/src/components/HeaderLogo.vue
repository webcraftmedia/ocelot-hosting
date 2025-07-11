<template>
    <Logo class="logo" />
    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">{{ $t('components.HeaderLogo.title') }}</span>
</template>

<script setup>
import Logo from '~/../assets/logo.svg'
</script>

<style scoped>
.logo {
    width: unset;
    height: 32px;
}
</style>