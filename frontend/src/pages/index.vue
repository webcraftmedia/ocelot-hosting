<template>
  <div>
    <Section id="home">
      <div class="grid grid-cols-2 gap-4">
        <div class="p-10 pl-0">
          <h1>{{ $t('pages.index.home.headline') }}</h1>
          <p>{{ $t('pages.index.home.subtitle') }}</p>
          <div>
            <NuxtLink :to="{ path: '/', hash: '#try' }">
              <Button type="primary" :text="$t('cta.try')" />
            </NuxtLink>
            <NuxtLink :to="{ path: '/try', hash: '#demo' }">
              <Button type="secondary" :text="$t('cta.book')" />
            </NuxtLink>
          </div>
        </div>
        <div>
          <img :src="ImgFeatureNewsfeed" />
        </div>
      </div>
    </Section>

    <Section id="features">
      <h2>{{ $t('pages.index.features.headline') }}</h2>
      <p>{{ $t('pages.index.features.subtitle') }}</p>
      <div class="grid grid-cols-2 gap-4">
        <Feature
          :img="ImgFeatureNewsfeed"
          :headline="$t('pages.index.features.features.newsfeed.headline')"
          :text="$t('pages.index.features.features.newsfeed.text')"
        />
        <Feature
          :img="ImgFeatureChat"
          :headline="$t('pages.index.features.features.chat.headline')"
          :text="$t('pages.index.features.features.chat.text')"
        />
        <Feature
          :img="ImgFeatureMap"
          :headline="$t('pages.index.features.features.map.headline')"
          :text="$t('pages.index.features.features.map.text')"
        />
        <Feature
          :img="ImgFeatureGroups"
          :headline="$t('pages.index.features.features.groups.headline')"
          :text="$t('pages.index.features.features.groups.text')"
        />
        <Feature
          :img="ImgFeatureEvents"
          :headline="$t('pages.index.features.features.events.headline')"
          :text="$t('pages.index.features.features.events.text')"
        />
        <Feature
          :img="ImgFeaturePosts"
          :headline="$t('pages.index.features.features.posts.headline')"
          :text="$t('pages.index.features.features.posts.text')"
        />
        <Feature
          :img="ImgFeatureProfile"
          :headline="$t('pages.index.features.features.profile.headline')"
          :text="$t('pages.index.features.features.profile.text')"
        />
        <Feature
          :img="ImgFeatureFollowers"
          :headline="$t('pages.index.features.features.followers.headline')"
          :text="$t('pages.index.features.features.followers.text')"
        />
      </div>
    </Section>

    <Section id="more">
      <h2>{{ $t('pages.index.more.headline') }}</h2>
      <p>{{ $t('pages.index.more.subtitle') }}</p>
      <div class="grid grid-cols-3 gap-4">
        <Feature
          icon="flowbite:bell-active-outline"
          :headline="$t('pages.index.more.features.notifications.headline')"
          :text="$t('pages.index.more.features.notifications.text')"
        />
        <Feature
          icon="flowbite:rocket-solid"
          :headline="$t('pages.index.more.features.promote.headline')"
          :text="$t('pages.index.more.features.promote.text')"
        />
        <Feature
          icon="flowbite:person-chalkboard-solid"
          :headline="$t('pages.index.more.features.moderation.headline')"
          :text="$t('pages.index.more.features.moderation.text')"
        />
        <Feature
          icon="flowbite:lock-solid"
          :headline="$t('pages.index.more.features.invite-modes.headline')"
          :text="$t('pages.index.more.features.invite-modes.text')"
        />
        <Feature
          icon="flowbite:heart-outline"
          :headline="$t('pages.index.more.features.connect.headline')"
          :text="$t('pages.index.more.features.connect.text')"
        />
        <Feature
          icon="flowbite:badge-check-outline"
          :headline="$t('pages.index.more.features.badges.headline')"
          :text="$t('pages.index.more.features.badges.text')"
        />
      </div>
    </Section>

    <Section id="community">
      <h2>{{ $t('pages.index.community.headline') }}</h2>
      <p>{{ $t('pages.index.community.subtitle') }}</p>

      <p class="quote-svg">
        <svg viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
            fill="currentColor"
          />
        </svg>
      </p>

      <Carousel v-bind="carouselConfig" class="carousel">
        <Slide key="testimonial-1">
          <Testimonial
            :quote="$t('pages.index.testimonials.ulf.quote')"
            :image="ImgPersonUlf"
            :name="$t('pages.index.testimonials.ulf.name')"
            :position="$t('pages.index.testimonials.ulf.position')"
            url="https://wir.social"
          />
        </Slide>

        <Slide key="testimonial-2">
          <Testimonial
            :quote="$t('pages.index.testimonials.heimo.quote')"
            :image="ImgPersonHeimo"
            :name="$t('pages.index.testimonials.heimo.name')"
            :position="$t('pages.index.testimonials.heimo.position')"
            url="https://changemedia.club"
          />
        </Slide>

        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
    </Section>

    <Section id="try" class="bg-yellow-300">
      <!-- eslint-disable-line @intlify/vue-i18n/no-raw-text -->
      Text: Try the latest ocelot.social version for free on the staging environment or contact us
      to start your 14-day trial CTA: Try for free CTA: Book Trial
    </Section>

    <Section id="pricing" class="bg-orange-300">
      <!-- eslint-disable-line @intlify/vue-i18n/no-raw-text -->
      ### Pricing Section text:
    </Section>
  </div>
</template>

<script setup lang="ts">
import ImgFeatureNewsfeed from '~/../assets/newsfeed.png'
import ImgFeatureChat from '~/../assets/chat.png'
import ImgFeatureMap from '~/../assets/map.png'
import ImgFeatureGroups from '~/../assets/group-profile.png'
import ImgFeatureEvents from '~/../assets/events.png'
import ImgFeaturePosts from '~/../assets/post.png'
import ImgFeatureProfile from '~/../assets/user-profile.png'
import ImgFeatureFollowers from '~/../assets/followers.png'

import ImgPersonUlf from '~/../assets/person/ulf.jpg'
import ImgPersonHeimo from '~/../assets/person/heimo.jpg'

const { t } = useI18n()

const carouselConfig = computed(() => {
  return {
    autoplay: 3000,
    wrapAround: true,
    i18n: {
      ariaGallery: t('external.vue3-carousel.ariaGallery'),
      ariaNavigateToSlide: t('external.vue3-carousel.ariaNavigateToSlide'),
      ariaNextSlide: t('external.vue3-carousel.ariaNextSlide'),
      ariaPreviousSlide: t('external.vue3-carousel.ariaPreviousSlide'),
      iconArrowDown: t('external.vue3-carousel.iconArrowDown'),
      iconArrowLeft: t('external.vue3-carousel.iconArrowLeft'),
      iconArrowRight: t('external.vue3-carousel.iconArrowRight'),
      iconArrowUp: t('external.vue3-carousel.iconArrowUp'),
      itemXofY: t('external.vue3-carousel.itemXofY'),
    },
  }
})
</script>

<style scoped>
@reference "tailwindcss";

#home {
  @apply bg-indigo-300;
  @apply h-screen;
  @apply pt-15;
  @apply p-20;

  p {
    @apply text-4xl;
  }
}

#features {
  @apply bg-green-300;
  @apply p-15;
}

#more {
  @apply bg-pink-300;
  @apply p-15;
}

#community {
  @apply bg-blue-300;
  @apply p-15;

  .quote-svg {
    @apply pb-0;
    @apply pt-10;

    svg {
      @apply h-12;
      @apply mx-auto;
      @apply mb-3;
      @apply text-gray-400;
      @apply dark:text-gray-600;
    }
  }

  .carousel {
    @apply max-w-screen-xl;
    @apply mx-auto;
    @apply text-center;
    @apply pb-20;
  }
}

h1 {
  @apply text-6xl;
  @apply pb-4;
}

h2 {
  @apply text-6xl;
  @apply pb-4;
}

p {
  @apply text-4xl;
  @apply pb-8;
}
</style>
