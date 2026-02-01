<template>
  <div>
    <Section id="try">
      <h1>{{ $t('pages.try.staging.headline') }}</h1>
      <p class="subtitle">{{ $t('pages.try.staging.subtitle') }}</p>

      <div class="credentials-card">
        <dl>
          <div class="credential-row">
            <dt>{{ $t('pages.try.staging.url-label') }}</dt>
            <dd>
              <a
                :href="$t('pages.try.staging.url')"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ $t('pages.try.staging.url') }}
              </a>
            </dd>
          </div>
          <div class="credential-row">
            <dt>{{ $t('pages.try.staging.email-label') }}</dt>
            <dd>{{ $t('pages.try.staging.email') }}</dd>
          </div>
          <div class="credential-row">
            <dt>{{ $t('pages.try.staging.password-label') }}</dt>
            <dd>{{ $t('pages.try.staging.password') }}</dd>
          </div>
        </dl>

        <div class="cta">
          <a
            :href="$t('pages.try.staging.url')"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button type="primary" :text="$t('pages.try.staging.cta')" />
          </a>
        </div>
      </div>
    </Section>

    <Section id="demo">
      <h2>{{ $t('pages.try.demo.headline') }}</h2>
      <p>{{ $t('pages.try.demo.subtitle') }}</p>
      <div class="cta">
        <a :href="$t('pages.try.demo.mailto')">
          <Button type="inverted" :text="$t('pages.try.demo.cta')" />
        </a>
      </div>
    </Section>
  </div>
</template>

<style scoped>
@reference "tailwindcss";

#try {
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
    @apply max-w-2xl;
    @apply mx-auto;
    @apply pb-10;
  }

  .credentials-card {
    @apply bg-white;
    @apply border;
    @apply border-slate-200;
    @apply p-8;
    @apply max-w-lg;
    @apply mx-auto;
    @apply dark:bg-gray-800;
    @apply dark:border-gray-700;

    dl {
      @apply space-y-4;
      @apply mb-8;

      .credential-row {
        @apply flex;
        @apply justify-between;
        @apply items-center;

        dt {
          @apply text-sm;
          @apply font-semibold;
          @apply uppercase;
          @apply tracking-wide;
          @apply text-gray-500;
          @apply dark:text-gray-400;
        }

        dd {
          @apply text-base;
          @apply font-mono;
          @apply text-gray-900;
          @apply dark:text-white;

          a {
            @apply text-teal-700;
            @apply hover:underline;
            @apply dark:text-teal-400;
          }
        }
      }
    }

    .cta {
      @apply text-center;
    }
  }
}

#demo {
  @apply bg-teal-800;
  @apply text-white;
  @apply text-center;
  @apply py-20;
  @apply px-8;

  h2 {
    @apply text-5xl;
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
