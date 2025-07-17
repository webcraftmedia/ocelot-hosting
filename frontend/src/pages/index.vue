<template>
    <div>
        <Section id="home" class="h-screen pt-15 bg-indigo-300 p-20">
            <div class="grid grid-cols-2 gap-4">
                <div class="p-10">
                    <h1 class="text-6xl pb-4">{{ $t('pages.index.home.headline') }}</h1>
                    <p class="text-4xl">{{ $t('pages.index.home.subtitle') }}</p>
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
                    <img src="~/../assets/newsfeed.png" />
                </div>
            </div>
        </Section>

        <Section id="features" class="bg-green-300">
            <h2>{{ $t('pages.index.features.headline') }}</h2>
            <p>{{ $t('pages.index.features.subtitle') }}</p>
            <!-- eslint-disable-line @intlify/vue-i18n/no-raw-text -->
            Two column page with features each with a picture and some text. The Image has a hover effect.
            See: https://spline.design/
            <div class="grid grid-cols-2 gap-4">
                <div>
                    {{ $t('pages.index.features.features.newsfeed') }}
                </div>
                <div>
                    {{ $t('pages.index.features.features.chat') }}
                </div>
                <div>
                    {{ $t('pages.index.features.features.map') }}
                </div>
                <div>
                    {{ $t('pages.index.features.features.groups') }}
                </div>
                <div>
                    {{ $t('pages.index.features.features.events') }}
                </div>
                <div>
                    {{ $t('pages.index.features.features.posts') }}
                </div>
                <div>
                    {{ $t('pages.index.features.features.profile') }}
                </div>
                <div>
                    {{ $t('pages.index.features.features.followers') }}
                </div>
            </div>
        </Section>

        <Section id="more" class="bg-pink-300">
            <h2>{{ $t('pages.index.more.headline') }}</h2>
            <p>{{ $t('pages.index.more.subtitle') }}</p>
            <!-- eslint-disable-line @intlify/vue-i18n/no-raw-text -->
            The more section does not include images, maybe just icons, but longer descriptions. Here we describe things that are relevant for the administrator/owner
            <div class="grid grid-cols-2 gap-4">
                <div>
                    {{ $t('pages.index.more.features.notifications') }}
                </div>
                <div>
                    {{ $t('pages.index.more.features.promote') }}
                </div>
                <div>
                    {{ $t('pages.index.more.features.moderation') }}
                </div>
                <div>
                    {{ $t('pages.index.more.features.invite-modes') }}
                </div>
                <div>
                    {{ $t('pages.index.more.features.connect') }}
                </div>
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