<template>
  <div>
    <section id="home" class="h-screen mx-auto bg-indigo-300 flex flex-col justify-center items-center text-5xl">
        <div class="md:container md:mx-auto">
            <div class="grid grid-cols-2 gap-4">
                <div>
                    <h1>{{ $t('pages.index.home.headline') }}</h1>
                    <p>{{ $t('pages.index.home.subtitle') }}</p>
                    <!-- eslint-disable-line @intlify/vue-i18n/no-raw-text -->
                    - CTA1: Try Now -> scroll to Try Section
                    - CTA2: Book Trial -> Scroll to Try Section
                </div>
                <div>
                    <!-- eslint-disable-line @intlify/vue-i18n/no-raw-text -->
                    For now we display an image, but in the future we should show a video of interacting with the Plattform

                    - Image: Ocelot Newsfeed
                </div>
            </div>

        </div>
    </section>

    <section id="features" class="mx-auto bg-green-300 flex flex-col justify-center items-center text-5xl">
        <div class="md:container md:mx-auto">
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
        </div>
    </section>

    <section class="mx-auto bg-pink-300 flex flex-col justify-center items-center text-5xl">
        <div class="md:container md:mx-auto">
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
        </div>
    </section>

    <section id="community" class="mx-auto bg-blue-300 flex flex-col justify-center items-center text-5xl">
        <div class="md:container md:mx-auto">
            <h2>{{ $t('pages.index.community.headline') }}</h2>
            <p>{{ $t('pages.index.community.subtitle') }}</p>
            <!-- eslint-disable-line @intlify/vue-i18n/no-raw-text -->
            testimonials
        </div>
    </section>

    <section id="try" class="mx-auto bg-yellow-300 flex flex-col justify-center items-center text-5xl">
        <div class="md:container md:mx-auto">
            <!-- eslint-disable-line @intlify/vue-i18n/no-raw-text -->
            Text: Try the latest ocelot.social version for free on the staging environment or contact us to start your 14-day trial

            CTA: Try for free
            CTA: Book Trial
        </div>
    </section>

    <section id="pricing" class="mx-auto bg-orange-300 flex flex-col justify-center items-center text-5xl">
        <div class="md:container md:mx-auto">
            <!-- eslint-disable-line @intlify/vue-i18n/no-raw-text -->
            ### Pricing Section
            text: 
        </div>
    </section>
    </div>
</template>