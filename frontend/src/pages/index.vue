<template>
    <div>
        <Section id="home">
            <div class="grid grid-cols-2 gap-4">
                <div class="p-10 pl-0">
                    <h1>{{ $t('pages.index.home.headline') }}</h1>
                    <p>{{ $t('pages.index.home.subtitle') }}</p>
                    <div>
                        <NuxtLink :to="{ path: '/', hash: '#try'}">
                            <Button type="primary" :text="$t('cta.try')" />
                        </NuxtLink>
                        <NuxtLink :to="{ path: '/try', hash: '#demo'}">
                            <Button type="secondary" :text="$t('cta.book')" />
                        </NuxtLink>
                    </div>
                </div>
                <div>
                    <img :src="ImgFeatureNewsfeed">
                </div>
            </div>
        </Section>

        <Section id="features">
            <h2>{{ $t('pages.index.features.headline') }}</h2>
            <p>{{ $t('pages.index.features.subtitle') }}</p>
            <div class="grid grid-cols-2 gap-4">
                <Feature :img="ImgFeatureNewsfeed" :headline="$t('pages.index.features.features.newsfeed.headline')" :text="$t('pages.index.features.features.newsfeed.text')"/>
                <!--<Feature :img="ImgFeatureChat" :headline="$t('pages.index.features.features.chat.headline')" :text="$t('pages.index.features.features.chat.text')"/>-->
                <Feature :img="ImgFeatureMap" :headline="$t('pages.index.features.features.map.headline')" :text="$t('pages.index.features.features.map.text')"/>
                <Feature :img="ImgFeatureGroups" :headline="$t('pages.index.features.features.groups.headline')" :text="$t('pages.index.features.features.groups.text')"/>
                <!--<Feature :img="ImgFeatureEvents" :headline="$t('pages.index.features.features.events.headline')" :text="$t('pages.index.features.features.events.text')"/>-->
                <Feature :img="ImgFeaturePosts" :headline="$t('pages.index.features.features.posts.headline')" :text="$t('pages.index.features.features.posts.text')"/>
                <Feature :img="ImgFeatureProfile" :headline="$t('pages.index.features.features.profile.headline')" :text="$t('pages.index.features.features.profile.text')"/>
                <!--<Feature :img="ImgFeatureFollowers" :headline="$t('pages.index.features.features.followers.headline')" :text="$t('pages.index.features.features.followers.text')"/>-->
            </div>
        </Section>

        <Section id="more">
            <h2>{{ $t('pages.index.more.headline') }}</h2>
            <p>{{ $t('pages.index.more.subtitle') }}</p>
            <div class="grid grid-cols-3 gap-4">
                <Feature icon="flowbite:bell-active-outline" :headline="$t('pages.index.more.features.notifications.headline')" :text="$t('pages.index.more.features.notifications.text')"/>
                <Feature icon="flowbite:rocket-solid" :headline="$t('pages.index.more.features.promote.headline')" :text="$t('pages.index.more.features.promote.text')"/>
                <Feature icon="flowbite:person-chalkboard-solid" :headline="$t('pages.index.more.features.moderation.headline')" :text="$t('pages.index.more.features.moderation.text')"/>
                <Feature icon="flowbite:lock-solid" :headline="$t('pages.index.more.features.invite-modes.headline')" :text="$t('pages.index.more.features.invite-modes.text')"/>
                <Feature icon="flowbite:heart-outline" :headline="$t('pages.index.more.features.connect.headline')" :text="$t('pages.index.more.features.connect.text')"/>
                <Feature icon="flowbite:badge-check-outline" :headline="$t('pages.index.more.features.badges.headline')" :text="$t('pages.index.more.features.badges.text')"/>
            </div>
        </Section>

        <Section id="community" class="bg-blue-300">
            <h2>{{ $t('pages.index.community.headline') }}</h2>
            <p>{{ $t('pages.index.community.subtitle') }}</p>
            <!-- eslint-disable-line @intlify/vue-i18n/no-raw-text -->
            testimonials
        </Section>

        <Section id="try" class="bg-yellow-300">
            <!-- eslint-disable-line @intlify/vue-i18n/no-raw-text -->
            Text: Try the latest ocelot.social version for free on the staging environment or contact us to start your 14-day trial

            CTA: Try for free
            CTA: Book Trial
        </Section>
            
        <Section id="pricing" class="bg-orange-300">
            <!-- eslint-disable-line @intlify/vue-i18n/no-raw-text -->
            ### Pricing Section
            text: 
        </Section>
    </div>
</template>

<script setup lang="ts">
import ImgFeatureNewsfeed from '~/../assets/newsfeed.png'
// import ImgFeatureChat from '~/../assets/logo.png'
import ImgFeatureMap from '~/../assets/map.png'
import ImgFeatureGroups from '~/../assets/group-profile.png'
// import ImgFeatureEvents from '~/../assets/logo.png'
import ImgFeaturePosts from '~/../assets/post.png'
import ImgFeatureProfile from '~/../assets/user-profile.png'
// import ImgFeatureFollowers from '~/../assets/logo.png'
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

    p {
        @apply text-4xl;
        @apply pb-8;
    }
}

#more {
    @apply bg-pink-300;
    @apply p-15;

    p {
        @apply text-4xl;
        @apply pb-8;
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

</style>