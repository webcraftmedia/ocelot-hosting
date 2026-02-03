<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <footer class="bg-white border-t border-gray-100 dark:bg-gray-800 dark:border-gray-700">
    <div
      class="w-full mx-auto max-w-screen-xl px-6 py-6 flex flex-col items-center gap-4 md:flex-row md:justify-between md:py-4"
    >
      <ul
        class="flex flex-wrap justify-center gap-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:order-2"
      >
        <li>
          <NuxtLink
            :to="{ path: 'https://www.webcraft-media.de/#!impressum' }"
            external
            class="hover:underline"
          >
            {{ $t('components.Footer.imprint') }}
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            :to="{ path: 'https://www.webcraft-media.de/#!datenschutz' }"
            external
            class="hover:underline"
          >
            {{ $t('components.Footer.privacy-policy') }}
          </NuxtLink>
        </li>
        <li>
          <NuxtLink :to="{ path: '/try', hash: '#demo' }" class="hover:underline">
            {{ $t('components.Footer.contact') }}
          </NuxtLink>
        </li>
      </ul>
      <span class="text-sm text-gray-500 text-center dark:text-gray-400 md:order-1"
        >{{ $t('components.Footer.copyright') }}
        <a href="https://www.webcraft-media.de/" class="hover:underline">{{
          $t('components.Footer.copyright-holder')
        }}</a
        >{{ $t('components.Footer.copyright-text') }}
      </span>
    </div>
  </footer>
</template>
