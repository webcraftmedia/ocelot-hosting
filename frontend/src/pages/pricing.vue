<template>
  <div>
    <Section id="pricing">
      <h1>{{ $t('pages.pricing.headline') }}</h1>
      <p class="subtitle">{{ $t('pages.pricing.subtitle') }}</p>

      <div class="plans">
        <div
          v-for="plan in plans"
          :key="plan.key"
          class="plan"
          :class="{ highlighted: plan.highlighted }"
        >
          <div class="plan-header">
            <h3>{{ plan.name }}</h3>
            <div class="price">
              <span class="amount">{{ plan.price }}</span>
              <span v-if="plan.period" class="period">{{ plan.period }}</span>
            </div>
            <p class="description">{{ plan.description }}</p>
          </div>

          <ul class="feature-list">
            <li v-for="(feature, i) in plan.features" :key="i">
              <Icon name="flowbite:check-outline" class="check-icon" />
              {{ feature }}
            </li>
          </ul>

          <div class="plan-cta">
            <NuxtLink v-if="plan.key === 'free'" :to="{ path: '/try', hash: '#try' }">
              <Button :type="plan.highlighted ? 'inverted' : 'primary'" :text="plan.cta" />
            </NuxtLink>
            <NuxtLink v-else-if="plan.key === 'small'" :to="{ path: '/try', hash: '#demo' }">
              <Button :type="plan.highlighted ? 'inverted' : 'primary'" :text="plan.cta" />
            </NuxtLink>
            <a v-else :href="$t('pages.pricing.contact.mailto')">
              <Button :type="plan.highlighted ? 'inverted' : 'primary'" :text="plan.cta" />
            </a>
          </div>
        </div>
      </div>
    </Section>

    <Section id="services">
      <h2>{{ $t('pages.pricing.services.headline') }}</h2>
      <div class="services-grid">
        <Feature
          icon="flowbite:palette-outline"
          :headline="$t('pages.pricing.services.customization.headline')"
          :text="$t('pages.pricing.services.customization.text')"
        />
        <Feature
          icon="flowbite:code-outline"
          :headline="$t('pages.pricing.services.development.headline')"
          :text="$t('pages.pricing.services.development.text')"
        />
      </div>
    </Section>

    <Section id="contact">
      <h2>{{ $t('pages.pricing.contact.headline') }}</h2>
      <p>{{ $t('pages.pricing.contact.subtitle') }}</p>
      <div class="cta">
        <a :href="$t('pages.pricing.contact.mailto')">
          <Button type="inverted" :text="$t('pages.pricing.contact.cta')" />
        </a>
      </div>
    </Section>
  </div>
</template>

<script setup lang="ts">
const { t, tm } = useI18n()

const planKeys = ['free', 'small', 'large'] as const

/* eslint-disable @intlify/vue-i18n/no-dynamic-keys */
const plans = computed(() =>
  planKeys.map((key) => ({
    key,
    name: t(`pages.pricing.plans.${key}.name`),
    price: t(`pages.pricing.plans.${key}.price`),
    period: t(`pages.pricing.plans.${key}.period`),
    description: t(`pages.pricing.plans.${key}.description`),
    features: tm(`pages.pricing.plans.${key}.features`) as string[],
    cta: t(`pages.pricing.plans.${key}.cta`),
    highlighted: key === 'small',
  })),
)
/* eslint-enable @intlify/vue-i18n/no-dynamic-keys */
</script>

<style scoped>
@reference "tailwindcss";

#pricing {
  @apply bg-slate-50;
  @apply text-center;
  @apply pt-24;
  @apply pb-16;
  @apply px-8;

  h1 {
    @apply text-5xl;
    @apply font-bold;
    @apply pb-4;
  }

  .subtitle {
    @apply text-xl;
    @apply text-gray-600;
    @apply dark:text-gray-400;
    @apply pb-12;
  }

  .plans {
    @apply grid;
    @apply grid-cols-1;
    @apply md:grid-cols-3;
    @apply gap-6;
    @apply max-w-5xl;
    @apply mx-auto;
  }

  .plan {
    @apply bg-white;
    @apply border;
    @apply border-slate-200;
    @apply p-8;
    @apply flex;
    @apply flex-col;
    @apply text-left;
    @apply dark:bg-gray-800;
    @apply dark:border-gray-700;

    &.highlighted {
      @apply bg-teal-800;
      @apply text-white;
      @apply border-teal-800;

      .description {
        @apply text-teal-100;
      }

      .feature-list li {
        @apply text-teal-50;
      }

      .check-icon {
        @apply text-teal-300;
      }
    }

    .plan-header {
      h3 {
        @apply text-lg;
        @apply font-semibold;
        @apply uppercase;
        @apply tracking-wide;
        @apply pb-2;
      }

      .price {
        @apply pb-3;

        .amount {
          @apply text-4xl;
          @apply font-bold;
        }

        .period {
          @apply text-base;
          @apply font-normal;
          @apply opacity-70;
        }
      }

      .description {
        @apply text-sm;
        @apply text-gray-500;
        @apply dark:text-gray-400;
        @apply pb-6;
      }
    }

    .feature-list {
      @apply flex-grow;
      @apply space-y-3;
      @apply pb-8;

      li {
        @apply flex;
        @apply items-center;
        @apply gap-2;
        @apply text-sm;
        @apply text-gray-700;
        @apply dark:text-gray-300;
      }

      .check-icon {
        @apply text-teal-600;
        @apply w-5;
        @apply h-5;
        @apply shrink-0;
      }
    }

    .plan-cta {
      @apply mt-auto;
      @apply text-center;

      button {
        @apply w-full;
      }
    }
  }
}

#services {
  @apply bg-white;
  @apply text-center;
  @apply py-16;
  @apply px-8;

  h2 {
    @apply text-4xl;
    @apply font-bold;
    @apply pb-8;
  }

  .services-grid {
    @apply grid;
    @apply grid-cols-1;
    @apply md:grid-cols-2;
    @apply gap-8;
    @apply max-w-3xl;
    @apply mx-auto;
  }
}

#contact {
  @apply bg-teal-800;
  @apply text-white;
  @apply text-center;
  @apply py-20;
  @apply px-8;

  h2 {
    @apply text-4xl;
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

  .cta {
    @apply pt-2;
  }
}
</style>
