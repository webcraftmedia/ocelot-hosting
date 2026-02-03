<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <nav
    :class="{ '-translate-y-full': !isHeaderVisible && !isMenuOpen }"
    class="bg-white dark:bg-gray-900 w-full fixed top-0 z-50 shadow-[0_1px_3px_rgba(0,0,0,0.05)] transition-transform duration-300 md:translate-y-0"
  >
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
      <NuxtLink
        :to="{ path: '/', hash: '#home' }"
        class="flex items-center space-x-3 rtl:space-x-reverse"
      >
        <HeaderLogo />
      </NuxtLink>
      <button
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        :aria-expanded="isMenuOpen"
        @click="isMenuOpen = !isMenuOpen"
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
      <div id="navbar-default" :class="{ hidden: !isMenuOpen }" class="w-full md:block md:w-auto">
        <ul
          class="font-medium flex flex-col p-4 md:p-0 mt-2 md:flex-row md:space-x-4 lg:space-x-8 rtl:space-x-reverse md:mt-0 md:bg-white dark:bg-gray-900 justify-center items-center"
        >
          <li>
            <NuxtLink
              :to="{ path: '/', hash: '#features' }"
              :class="[
                'block py-2 px-3 md:p-0',
                isActive('features')
                  ? 'text-teal-700 dark:text-teal-400'
                  : 'text-gray-900 dark:text-white md:hover:text-teal-700 md:dark:hover:text-teal-400',
              ]"
              @click="isMenuOpen = false"
            >
              {{ $t('components.Header.features') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              :to="{ path: '/', hash: '#community' }"
              :class="[
                'block py-2 px-3 md:p-0',
                isActive('community')
                  ? 'text-teal-700 dark:text-teal-400'
                  : 'text-gray-900 dark:text-white md:hover:text-teal-700 md:dark:hover:text-teal-400',
              ]"
              @click="isMenuOpen = false"
            >
              {{ $t('components.Header.community') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              :to="{ path: '/pricing' }"
              :class="[
                'block py-2 px-3 md:p-0',
                isActive('pricing')
                  ? 'text-teal-700 dark:text-teal-400'
                  : 'text-gray-900 dark:text-white md:hover:text-teal-700 md:dark:hover:text-teal-400',
              ]"
              @click="isMenuOpen = false"
            >
              {{ $t('components.Header.pricing') }}
            </NuxtLink>
          </li>
          <li class="md:hidden">
            <NuxtLink
              :to="{ path: '/try', hash: '#try' }"
              class="block py-2 px-3 text-teal-700 font-semibold dark:text-teal-400"
              @click="isMenuOpen = false"
            >
              {{ $t('cta.try') }}
            </NuxtLink>
          </li>
          <li class="md:hidden">
            <NuxtLink
              :to="{ path: '/try', hash: '#demo' }"
              class="block py-2 px-3 text-teal-700 font-semibold dark:text-teal-400"
              @click="isMenuOpen = false"
            >
              {{ $t('cta.book') }}
            </NuxtLink>
          </li>
          <li class="hidden md:flex gap-2 nav-buttons">
            <NuxtLink :to="{ path: '/try', hash: '#try' }">
              <Button type="primary" :text="$t('cta.try')" />
            </NuxtLink>
            <NuxtLink :to="{ path: '/try', hash: '#demo' }">
              <Button type="secondary" :text="$t('cta.book')" />
            </NuxtLink>
          </li>
          <li class="py-2 md:py-0">
            <a
              v-for="av in availableLocales"
              :key="av.code"
              class="cursor-pointer"
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
                <span>{{ av.name }}</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const isMenuOpen = ref(false)
const isHeaderVisible = ref(true)
const lastScrollY = ref(0)
const activeSection = ref<string | null>(null)

const { locale, locales, setLocale } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const route = useRoute()

const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value)
})

const isActive = (section: string) => {
  if (section === 'pricing') {
    return route.path === '/pricing'
  }
  if (route.path !== '/') return false
  if (section === 'features') {
    return activeSection.value === 'features' || activeSection.value === 'more'
  }
  return activeSection.value === section
}

const handleScroll = () => {
  const currentScrollY = window.scrollY
  isHeaderVisible.value = currentScrollY < lastScrollY.value || currentScrollY < 50
  lastScrollY.value = currentScrollY

  // Update active section based on scroll position
  const sections = ['community', 'more', 'features', 'home']
  for (const id of sections) {
    const element = document.getElementById(id)
    if (element) {
      const rect = element.getBoundingClientRect()
      if (rect.top <= 100 && rect.bottom > 100) {
        activeSection.value = id
        return
      }
    }
  }
  activeSection.value = null
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

/* v8 ignore start - coverage bug with Vue SFC event handlers */
const handleLanguageSwitch = (targetLocale: string) => {
  isMenuOpen.value = false

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
/* v8 ignore stop */
</script>

<style scoped>
@reference "tailwindcss";

.nav-buttons :deep(button) {
  @apply md:px-3 lg:px-6;
}
</style>
