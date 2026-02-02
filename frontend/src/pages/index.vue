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
          <NuxtImg src="/img/newsfeed.png" alt="Newsfeed" />
        </div>
      </div>
    </Section>

    <Section id="features">
      <h2>{{ $t('pages.index.features.headline') }}</h2>
      <p>{{ $t('pages.index.features.subtitle') }}</p>
      <div class="grid grid-cols-2 gap-4">
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
  @apply h-screen;
  @apply pt-15;
  @apply p-20;

  p {
    @apply text-xl;
    @apply text-gray-600;
    @apply dark:text-gray-400;
    @apply pb-8;
  }
}

#features,
#more,
#community {
  @apply p-15;
  @apply text-center;

  h2 {
    @apply text-4xl;
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
}

#community {
  @apply bg-white;

  .testimonials {
    @apply grid;
    @apply grid-cols-1;
    @apply md:grid-cols-2;
    @apply gap-8;
    @apply max-w-screen-xl;
    @apply mx-auto;
    @apply pt-4;
  }
}

#try {
  @apply bg-teal-800;
  @apply text-white;
  @apply text-center;
  @apply p-20;

  h2 {
    @apply text-white;
    @apply pb-4;
  }

  p {
    @apply text-teal-100;
    @apply text-xl;
    @apply max-w-2xl;
    @apply mx-auto;
  }

  .try-cta {
    @apply flex;
    @apply justify-center;
    @apply gap-4;
    @apply pt-4;
  }
}

h1 {
  @apply text-6xl;
  @apply font-bold;
  @apply pb-4;
}
</style>
