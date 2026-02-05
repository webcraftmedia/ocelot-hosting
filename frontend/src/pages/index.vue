<template>
  <div>
    <Section id="home">
      <div class="hero">
        <div class="hero-text">
          <h1>{{ $t('pages.index.home.headline') }}</h1>
          <p>{{ $t('pages.index.home.subtitle') }}</p>
          <div class="hero-cta">
            <NuxtLink :to="{ path: '/try', hash: '#try' }">
              <Button type="primary" :text="$t('cta.try')" />
            </NuxtLink>
            <NuxtLink to="#features">
              <Button type="secondary" :text="$t('cta.toFeatures')" />
            </NuxtLink>
          </div>
        </div>
        <div class="hero-image">
          <NuxtImg src="/img/newsfeed.png" alt="Newsfeed" />
        </div>
      </div>
    </Section>

    <Section id="features">
      <h2>{{ $t('pages.index.features.headline') }}</h2>
      <p>{{ $t('pages.index.features.subtitle') }}</p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Feature
          img="/img/newsfeed.png"
          :headline="$t('pages.index.features.features.newsfeed.headline')"
          :text="$t('pages.index.features.features.newsfeed.text')"
        />
        <Feature
          img="/img/chat.png"
          :headline="$t('pages.index.features.features.chat.headline')"
          :text="$t('pages.index.features.features.chat.text')"
        />
        <Feature
          img="/img/map.png"
          :headline="$t('pages.index.features.features.map.headline')"
          :text="$t('pages.index.features.features.map.text')"
        />
        <Feature
          img="/img/group-profile.png"
          :headline="$t('pages.index.features.features.groups.headline')"
          :text="$t('pages.index.features.features.groups.text')"
        />
        <Feature
          img="/img/events.png"
          :headline="$t('pages.index.features.features.events.headline')"
          :text="$t('pages.index.features.features.events.text')"
        />
        <Feature
          img="/img/post.png"
          :headline="$t('pages.index.features.features.posts.headline')"
          :text="$t('pages.index.features.features.posts.text')"
        />
        <Feature
          img="/img/user-profile.png"
          :headline="$t('pages.index.features.features.profile.headline')"
          :text="$t('pages.index.features.features.profile.text')"
        />
        <Feature
          img="/img/followers.png"
          :headline="$t('pages.index.features.features.followers.headline')"
          :text="$t('pages.index.features.features.followers.text')"
        />
      </div>
    </Section>

    <Section id="more">
      <h2>{{ $t('pages.index.more.headline') }}</h2>
      <p>{{ $t('pages.index.more.subtitle') }}</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
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
      <div class="more-link">
        <NuxtLink to="https://ocelot.social/features/" target="_blank">
          <Button type="secondary" :text="$t('pages.index.more.link')" />
        </NuxtLink>
      </div>
    </Section>

    <Section id="community">
      <h2>{{ $t('pages.index.community.headline') }}</h2>
      <p>{{ $t('pages.index.community.subtitle') }}</p>

      <div class="testimonials">
        <Testimonial
          :quote="$t('pages.index.testimonials.ulf.quote')"
          image="/img/person/ulf.jpg"
          :name="$t('pages.index.testimonials.ulf.name')"
          :position="$t('pages.index.testimonials.ulf.position')"
          url="https://wir.social"
        />
        <Testimonial
          :quote="$t('pages.index.testimonials.heimo.quote')"
          image="/img/person/heimo.jpg"
          :name="$t('pages.index.testimonials.heimo.name')"
          :position="$t('pages.index.testimonials.heimo.position')"
          url="https://changemedia.club"
        />
      </div>
    </Section>

    <Section id="try">
      <h2>{{ $t('pages.index.try.headline') }}</h2>
      <p>{{ $t('pages.index.try.subtitle') }}</p>
      <div class="try-cta">
        <NuxtLink :to="{ path: '/try', hash: '#try' }">
          <Button type="inverted" :text="$t('cta.try')" />
        </NuxtLink>
        <NuxtLink :to="{ path: '/try', hash: '#demo' }">
          <Button type="outline" :text="$t('cta.book')" />
        </NuxtLink>
      </div>
    </Section>
  </div>
</template>

<style scoped>
@reference "tailwindcss";

#home {
  @apply bg-slate-50;
  @apply min-h-screen;
  @apply flex;
  @apply items-center;
  @apply pt-20;

  .hero {
    @apply grid;
    @apply grid-cols-1;
    @apply md:grid-cols-2;
    @apply gap-8;
    @apply md:gap-12;
    @apply items-center;
    @apply w-full;
  }

  .hero-text {
    p {
      @apply text-xl;
      @apply text-gray-600;
      @apply dark:text-gray-400;
      @apply pb-8;
      @apply leading-relaxed;
    }

    .hero-cta {
      @apply flex;
      @apply gap-4;
    }
  }

  .hero-image {
    @apply flex;
    @apply justify-center;

    img {
      @apply rounded-lg;
      @apply border;
      @apply border-gray-200;
      @apply shadow-lg;
      @apply max-w-full;
      @apply dark:border-gray-700;
    }
  }
}

#features,
#more,
#community {
  @apply py-10;
  @apply md:py-16;
  @apply text-center;

  h2 {
    @apply text-2xl;
    @apply md:text-4xl;
    @apply font-bold;
    @apply pb-2;
  }

  p {
    @apply text-lg;
    @apply text-gray-500;
    @apply dark:text-gray-400;
    @apply pb-8;
    @apply max-w-2xl;
    @apply mx-auto;
  }
}

#features {
  @apply bg-white;
}

#more {
  @apply bg-slate-50;

  .more-link {
    @apply pt-8;
    @apply text-center;
  }
}

#community {
  @apply bg-white;

  .testimonials {
    @apply grid;
    @apply grid-cols-1;
    @apply md:grid-cols-2;
    @apply gap-8;
    @apply pt-4;
  }
}

#try {
  @apply bg-teal-800;
  @apply text-white;
  @apply text-center;
  @apply py-20;

  h2 {
    @apply text-2xl;
    @apply md:text-4xl;
    @apply font-bold;
    @apply text-white;
    @apply pb-4;
  }

  p {
    @apply text-xl;
    @apply text-teal-100;
    @apply max-w-2xl;
    @apply mx-auto;
    @apply pb-8;
  }

  .try-cta {
    @apply flex;
    @apply justify-center;
    @apply gap-4;
  }
}

h1 {
  @apply text-3xl;
  @apply md:text-6xl;
  @apply font-bold;
  @apply pb-4;
}
</style>
