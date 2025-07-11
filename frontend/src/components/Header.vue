<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <nav class="bg-white border-gray-200 dark:bg-gray-900 w-full fixed top-0">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <NuxtLink :to="{ path: '/', hash: '#home'}" class="flex items-center space-x-3 rtl:space-x-reverse">
        <HeaderLogo />
      </NuxtLink>
      <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <!-- eslint-disable-next-line @intlify/vue-i18n/no-raw-text -->
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
      </button>
      <div id="navbar-default" class="hidden w-full md:block md:w-auto">
        <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <NuxtLink :to="{ path: '/', hash: '#features'}" class="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">
              {{ $t('components.Header.features') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink :to="{ path: '/', hash: '#community'}" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
              {{ $t('components.Header.community') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink :to="{ path: '/pricing'}" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
              {{ $t('components.Header.pricing') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink :to="{ path: '/try', hash: '#try'}">
              <!-- eslint-disable-line @intlify/vue-i18n/no-raw-text -->
              Button CTA: Try now
            </NuxtLink>
          </li>
          <li>
            <NuxtLink :to="{ path: '/try', hash: '#trial'}">
              <!-- eslint-disable-line @intlify/vue-i18n/no-raw-text -->
              Button CTA: Book Trial
            </NuxtLink>
          </li>
          <li>
            <a v-for="av in availableLocales" :key="av.code" :href="switchLocalePath(locale.code)" @click.prevent.stop="setLocale(av.code)">
              {{ av.code.toUpperCase() }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
const { locale, locales, setLocale } = useI18n()
const switchLocalePath = () => useSwitchLocalePath()

const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value)
})

</script>