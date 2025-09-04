# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the presenter page for hosting [ocelot.social](https://ocelot.social) as a service (SaaS). The project is a multilingual website supporting German (ocelot-hosting.de) and English (ocelot-hosting.com) domains.

## Technology Stack

- **Frontend**: Vue 3 + Nuxt 4 with TypeScript
- **Styling**: Tailwind CSS with Nuxt UI components
- **Internationalization**: Nuxt i18n with domain-based language routing
- **Testing**: Vitest with Vue Testing Library
- **Linting**: ESLint with Vue/TypeScript support
- **Deployment**: Docker with multi-stage builds

## Development Commands

### Frontend (in `frontend/` directory)
- **Development**: `npm run dev` - Start development server
- **Build**: `npm run build` - Production build
- **Static Generation**: `npm run build:static` - Generate static site
- **Preview**: `npm run preview` - Preview production build
- **Testing**: 
  - `npm run test:unit` - Run unit tests with coverage
  - `npm run test:unit:dev` - Run tests in watch mode
- **Linting**: 
  - `npm run test:lint` - Run all linters
  - `npm run test:lint:eslint` - ESLint only
  - `npm run test:lint:locales` - Validate locale files

### Docker
- **Development**: `docker-compose up` (uses override file)
- **Production**: `docker-compose -f docker-compose.yml up`

## Architecture

### Source Structure
```
frontend/src/
├── components/     # Reusable Vue components (Button, Feature, Header, etc.)
├── layouts/        # Nuxt layout templates (default.vue)
├── pages/          # Nuxt pages (index.vue, pricing.vue, try.vue)
└── __snapshots__/  # Test snapshots
```

### Key Components
- **Header.vue**: Navigation with logo, menu items, and CTAs
- **Footer.vue**: Site footer with links and copyright
- **Feature.vue**: Feature showcase component with hover effects
- **Button.vue**: Standardized CTA buttons
- **Section.vue**: Layout wrapper for page sections

### Internationalization
- **Strategy**: `no_prefix` - URLs don't include language prefix
- **Domain-based routing**: Different domains serve different default languages
- **Locale files**: `frontend/locales/en.json` and `frontend/locales/de.json`
- **Environment variables**: `DOMAIN_EN` and `DOMAIN_DE` for domain configuration

### Testing
- All components have corresponding `.spec.ts` test files
- Tests use Vue Testing Library and snapshot testing
- Coverage reports generated in `frontend/coverage/`

## Locale Management

The project includes a custom locale validation system:
- `frontend/scripts/locales/locales.sh` - Validates locale files
- Ensures translation keys match between language files
- Validates JSON structure and key sorting
- Use `--fix` flag to automatically sort locale files

## Docker Configuration

- **Multi-stage build**: Development and production targets
- **Networks**: External and internal networks for security
- **Port**: Production runs on port 3002
- **Environment**: Production uses `NODE_ENV=production`

## Website Structure

The site follows a landing page structure:
1. **Header/Navigation**: Logo, features menu, pricing, CTAs, language toggle
2. **Landing Section**: Hero with heading, sub-heading, and CTAs
3. **Features Section**: Interactive feature showcase with images
4. **More Section**: Administrative features for platform owners
5. **Try Section**: Free trial and demo CTAs
6. **Pricing Section**: Pricing tiers and trial options
7. **Footer**: Legal links and attribution

## Development Notes

- Source directory is configured as `./src` in `nuxt.config.ts`
- Uses Nuxt 4 compatibility mode
- Icon system uses CSS mode with base layer
- Testing configuration in `vitest.config.ts`
- ESLint config includes Vue i18n plugin for translation validation