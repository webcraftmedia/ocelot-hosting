<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <nav class="bg-white border-gray-200 dark:bg-gray-900 w-full fixed top-0">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
      <NuxtLink
        :to="{ path: '/', hash: '#home' }"
        class="flex items-center space-x-3 rtl:space-x-reverse"
      >
        <HeaderLogo />
      </NuxtLink>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span class="sr-only">{{ $t('components.Header.open-menu') }}</span>
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div id="navbar-default" class="hidden w-full md:block md:w-auto">
        <ul
          class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 justify-center items-center"
        >
          <li>
            <NuxtLink
              :to="{ path: '/', hash: '#features' }"
              class="block py-2 px-3 text-white bg-teal-700 rounded-sm md:bg-transparent md:text-teal-700 md:p-0 dark:text-white md:dark:text-teal-400"
              aria-current="page"
            >
              {{ $t('components.Header.features') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              :to="{ path: '/', hash: '#community' }"
              class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-teal-700 md:p-0 dark:text-white md:dark:hover:text-teal-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              {{ $t('components.Header.community') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              :to="{ path: '/pricing' }"
              class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-teal-700 md:p-0 dark:text-white md:dark:hover:text-teal-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              {{ $t('components.Header.pricing') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink :to="{ path: '/try', hash: '#try' }">
              <Button type="primary" :text="$t('cta.try')" />
            </NuxtLink>
            <NuxtLink :to="{ path: '/try', hash: '#demo' }">
              <Button type="secondary" :text="$t('cta.book')" />
            </NuxtLink>
          </li>
          <li>
            <a
              v-for="av in availableLocales"
              :key="av.code"
              @click.prevent="handleLanguageSwitch(av.code)"
            >
              <div class="inline-flex items-center">
                <svg
                  v-if="av.code === 'en'"
                  class="w-5 h-5 rounded-full me-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 3900 3900"
                >
                  <path fill="#b22234" d="M0 0h7410v3900H0z" />
                  <path
                    d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0"
                    stroke="#fff"
                    stroke-width="300"
                  />
                  <path fill="#3c3b6e" d="M0 0h2964v2100H0z" />
                  <g fill="#fff">
                    <g id="d">
                      <g id="c">
                        <g id="e">
                          <g id="b">
                            <path
                              id="a"
                              d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z"
                            />
                            <use xlink:href="#a" y="420" />
                            <use xlink:href="#a" y="840" />
                            <use xlink:href="#a" y="1260" />
                          </g>
                          <use xlink:href="#a" y="1680" />
                        </g>
                        <use xlink:href="#b" x="247" y="210" />
                      </g>
                      <use xlink:href="#c" x="494" />
                    </g>
                    <use xlink:href="#d" x="988" />
                    <use xlink:href="#c" x="1976" />
                    <use xlink:href="#e" x="2470" />
                  </g>
                </svg>
                <svg
                  v-if="av.code === 'de'"
                  class="h-3.5 w-3.5 rounded-full me-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path fill="#ffce00" d="M0 341.3h512V512H0z" />
                  <path d="M0 0h512v170.7H0z" />
                  <path fill="#d00" d="M0 170.7h512v170.6H0z" />
                </svg>
                {{ av.name }}
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const { locale, locales, setLocale } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value)
})

const handleLanguageSwitch = (targetLocale: string) => {
  // In development mode: just switch locale without domain change
  if (process.env.NODE_ENV !== 'production') {
    setLocale(targetLocale)
    return
  }

  // In production mode: switch domain
  const targetUrl = switchLocalePath(targetLocale)
  if (targetUrl) {
    window.location.href = targetUrl
  }
}
</script>
