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
Two column page with features each with a picture and some text. The Image has a hover effect.
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
The more section does not include images, maybe just icons, but longer descriptions. Here we describe things that are relevant for the administrator/owner

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

## Installation on alpine

```sh
apk add git npm nginx
rc-update add nginx boot
service nginx start
```


nginx config
```
# This is a default site configuration which will simply return 404, preventing
# chance access to any other virtualhost.

server {
    listen 80 default_server;
    listen [::]:80 default_server;

    client_body_buffer_size     10M;
    client_max_body_size        10M;

    location / {
        proxy_http_version 1.1;
        proxy_set_header   Upgrade $http_upgrade;
        proxy_set_header   Connection 'upgrade';
        proxy_set_header   X-Forwarded-For $remote_addr;
        proxy_set_header   X-Real-IP  $remote_addr;
        proxy_set_header   Host $host;
        
        proxy_pass         http://127.0.0.1:3000;
        proxy_redirect     off;

        #access_log $LOG_PATH/nginx-access.hooks.log hooks_log;
        #error_log $LOG_PATH/nginx-error.backend.hook.log warn;
    }

    location /hooks/ {
        proxy_http_version 1.1;
        proxy_set_header   Upgrade $http_upgrade;
        proxy_set_header   Connection 'upgrade';
        proxy_set_header   X-Forwarded-For $remote_addr;
        proxy_set_header   X-Real-IP  $remote_addr;
        proxy_set_header   Host $host;
        
        proxy_pass         http://127.0.0.1:9000/hooks/;
        proxy_redirect     off;

        #access_log $LOG_PATH/nginx-access.hooks.log hooks_log;
        #error_log $LOG_PATH/nginx-error.backend.hook.log warn;
    }
}
```

## Deploy

You can use the webhook template `webhook.conf.template` and the `deploy.sh` script in `.github/webhooks/` for an automatic deployment from a (github) webhook.

For this to work follow these steps (using alpine):

```sh
apk add webhook
cp .github/webhooks/hooks.json.template .github/webhooks/hooks.json
vi .github/webhooks/hooks.json
# adjust content of .github/webhooks/hooks.json
# replace all variables accordingly

# copy webhook service file
cp .github/webhooks/webhook.template /etc/init.d/webhook
vi /etc/init.d/webhook
chmod +x /etc/init.d/webhook
# adjust content of /etc/init.d/webhook
chmod +x /etc/init.d/webhook

service webhook start
rc-update add webhook boot

vi /etc/nginx/http.d/default.conf
# adjust the nginx config
# location /hooks/ {
#     proxy_http_version 1.1;
#     proxy_set_header   Upgrade $http_upgrade;
#     proxy_set_header   Connection 'upgrade';
#     proxy_set_header   X-Forwarded-For $remote_addr;
#     proxy_set_header   X-Real-IP  $remote_addr;
#     proxy_set_header   Host $host;
# 
#     proxy_pass         http://127.0.0.1:9000/hooks/;
#     proxy_redirect     off;
# 
#     #access_log $LOG_PATH/nginx-access.hooks.log hooks_log;
#     #error_log $LOG_PATH/nginx-error.backend.hook.log warn;
# }

# The github payload is quite big sometimes, hence those two lines can prevent an reoccurring error message on nginx
# client_body_buffer_size     10M;
# client_max_body_size        10M;

# for the backend install pm2
npm install pm2 -g

# expose the backend service via nginx
vi /etc/nginx/http.d/default.conf
# location /api/ {
#     proxy_http_version 1.1;
#     proxy_set_header   Upgrade $http_upgrade;
#     proxy_set_header   Connection 'upgrade';
#     proxy_set_header   X-Forwarded-For $remote_addr;
#     proxy_set_header   X-Real-IP  $remote_addr;
#     proxy_set_header   Host $host;
#
#     proxy_pass         http://127.0.0.1:3000/;
#     proxy_redirect     off;
#
#     #access_log $LOG_PATH/nginx-access.api.log hooks_log;
#     #error_log $LOG_PATH/nginx-error.api.log warn;
# }
```

For the github webhook configure the following:

| Field                                                | Value                         |
|------------------------------------------------------|-------------------------------|
| Payload URL                                          | https://it4c.dev/hooks/github |
| Content type                                         | application/json              |
| Secret                                               | A SECRET                      |
| SSL verification                                     | Enable SSL verification       |
| Which events would you like to trigger this webhook? | Send me everything.           |
| Active                                               | [x]                           |
