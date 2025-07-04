# Ocelot Hosting

This repo is the presenter page for hosting [ocelot.social](https://ocelot.social) as a service (SaaS).

## Domains
- ocelot-hosting.de (default language de)
- ocelot-hosting.com (default language en)

## Technology
- vue3
- nuxt3
- typescript

## Website Structure

### Menu

Right:
- Logo - ocelot + Subtitle SaaS
- Features
- Community
- Pricing

Left:
- Button CTA: Try now
- Button CTA: Book Trial
- Language: DE/EN -> redirects to corresponding domain

### Landing Section

The landing section is a fullscreen section

Left:
- Heading: Your personal Social-Media Plattform
- Sub-Heading: Connect with your customers interactively. Share your content, build and engage with your community.
- CTA1: Try Now -> scroll to Try Section
- CTA2: Book Trial -> Scroll to Try Section

Right:

For now we display an image, but in the future we should show a video of interacting with the Plattform

- Image: Ocelot Newsfeed

### Features Section
Two colum page with features each with a picture and some text. The Image has a hover effect.
See: https://spline.design/

Features:
- Newsfeed: See whats happening in your community
- Chat: Chat with your community
- Map: See where your members are located
- Groups: Organize content and members in Groups
- Events: Shedule events
- Posts: Write to your community
- Profile: Show who you are
- Follower: Follow users you find interesting

### More Section
The more page does not include images, maybe just icons, but longer descriptions. Here we describe things that are relevant for the administrator/owner

- Notifications: Notificate Users via Email and in App based on groups and followers
- Promote: Promote your content and push it to the top
- Moderation: Moderate content
- Invite Modes: Public/invite/admin
- Connect: Join group/Follow user on invite

### Try Section

Text: Try the latest ocelot.social version for free on the staging environment or contact us to start your 14-day trial

CTA: Try for free
CTA: Book Trial

### Pricing Section
text: 

### Footer Section

- Inprint
- Data protection
- Copyright (Webcraft-Media)
- 

### Try Page

Text: ...

Ocelot credentials

CTA -> Try now -> Redirect

### Pricing Page

Pricing Table:
- Test Free
- Trial - 14days for free
- Up to 100 Users -> 100€/Month
- Up to 1000 Users -> 225€/Month
- More -> Get in touch

Additonal Services:
- Customization: Logo & Colors
- Development of Features

Book Trial:
- Form


# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
