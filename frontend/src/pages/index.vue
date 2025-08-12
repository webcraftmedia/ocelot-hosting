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
                <Feature :img="ImgFeatureChat" :headline="$t('pages.index.features.features.chat.headline')" :text="$t('pages.index.features.features.chat.text')"/>
                <Feature :img="ImgFeatureMap" :headline="$t('pages.index.features.features.map.headline')" :text="$t('pages.index.features.features.map.text')"/>
                <Feature :img="ImgFeatureGroups" :headline="$t('pages.index.features.features.groups.headline')" :text="$t('pages.index.features.features.groups.text')"/>
                <Feature :img="ImgFeatureEvents" :headline="$t('pages.index.features.features.events.headline')" :text="$t('pages.index.features.features.events.text')"/>
                <Feature :img="ImgFeaturePosts" :headline="$t('pages.index.features.features.posts.headline')" :text="$t('pages.index.features.features.posts.text')"/>
                <Feature :img="ImgFeatureProfile" :headline="$t('pages.index.features.features.profile.headline')" :text="$t('pages.index.features.features.profile.text')"/>
                <Feature :img="ImgFeatureFollowers" :headline="$t('pages.index.features.features.followers.headline')" :text="$t('pages.index.features.features.followers.text')"/>
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

        <Section id="community">
            <h2>{{ $t('pages.index.community.headline') }}</h2>
            <p>{{ $t('pages.index.community.subtitle') }}</p>
        
            

            <div id="animation-carousel" class="relative w-full" data-carousel="static">
                <!-- Carousel wrapper -->
                <div class="relative h-120 overflow-hidden rounded-lg">
                    <!-- Item 1 -->
                    <div class="duration-200 ease-linear" data-carousel-item>
                        <div class="max-w-screen-xl mx-auto text-center h-100">
                            <figure class="max-w-screen-md mx-auto">
                                <svg class="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600 mt-10" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
                                </svg> 
                                <blockquote>
                                    <p class="text-2xl font-medium text-gray-900 dark:text-white">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
                                </blockquote>
                                <figcaption class="flex items-center justify-center mt-6 space-x-3">
                                    <img class="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture">
                                    <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                        <div class="pr-3 font-medium text-gray-900 dark:text-white">Micheal Gough</div>
                                        <div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">CEO at Google</div>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    <!-- Item 2 -->
                    <div class="hidden duration-200 ease-linear" data-carousel-item>
                        <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                            <figure class="max-w-screen-md mx-auto">
                                <svg class="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
                                </svg> 
                                <blockquote>
                                    <p class="text-2xl font-medium text-gray-900 dark:text-white">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
                                </blockquote>
                                <figcaption class="flex items-center justify-center mt-6 space-x-3">
                                    <img class="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture">
                                    <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                        <div class="pr-3 font-medium text-gray-900 dark:text-white">Micheal Gough</div>
                                        <div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">CEO at Google</div>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    <!-- Item 3 -->
                    <div class="hidden duration-200 ease-linear" data-carousel-item="active">
                        <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                            <figure class="max-w-screen-md mx-auto">
                                <svg class="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
                                </svg> 
                                <blockquote>
                                    <p class="text-2xl font-medium text-gray-900 dark:text-white">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
                                </blockquote>
                                <figcaption class="flex items-center justify-center mt-6 space-x-3">
                                    <img class="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture">
                                    <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                        <div class="pr-3 font-medium text-gray-900 dark:text-white">Micheal Gough</div>
                                        <div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">CEO at Google</div>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    <!-- Item 4 -->
                    <div class="hidden duration-200 ease-linear" data-carousel-item>
                        <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                            <figure class="max-w-screen-md mx-auto">
                                <svg class="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
                                </svg> 
                                <blockquote>
                                    <p class="text-2xl font-medium text-gray-900 dark:text-white">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
                                </blockquote>
                                <figcaption class="flex items-center justify-center mt-6 space-x-3">
                                    <img class="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture">
                                    <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                        <div class="pr-3 font-medium text-gray-900 dark:text-white">Micheal Gough</div>
                                        <div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">CEO at Google</div>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    <!-- Item 5 -->
                    <div class="hidden duration-200 ease-linear" data-carousel-item>
                        <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                            <figure class="max-w-screen-md mx-auto">
                                <svg class="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
                                </svg> 
                                <blockquote>
                                    <p class="text-2xl font-medium text-gray-900 dark:text-white">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
                                </blockquote>
                                <figcaption class="flex items-center justify-center mt-6 space-x-3">
                                    <img class="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture">
                                    <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                        <div class="pr-3 font-medium text-gray-900 dark:text-white">Micheal Gough</div>
                                        <div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">CEO at Google</div>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
                <!-- Slider controls -->
                <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                    <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                        </svg>
                        <span class="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                    <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                        </svg>
                        <span class="sr-only">Next</span>
                    </span>
                </button>
            </div>
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
import ImgFeatureChat from '~/../assets/chat.png'
import ImgFeatureMap from '~/../assets/map.png'
import ImgFeatureGroups from '~/../assets/group-profile.png'
import ImgFeatureEvents from '~/../assets/events.png'
import ImgFeaturePosts from '~/../assets/post.png'
import ImgFeatureProfile from '~/../assets/user-profile.png'
import ImgFeatureFollowers from '~/../assets/followers.png'
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