#!/bin/sh

# Find current directory & configure paths
SCRIPT_PATH=$(realpath $0)
SCRIPT_DIR=$(dirname $SCRIPT_PATH)
PROJECT_ROOT=$SCRIPT_DIR/../..

# assuming you are already on the right branch
git pull -ff

## Frontend
FRONTEND_ROOT=$PROJECT_ROOT/frontend
FRONTEND_SERVICE=ocelot-hosting-frontend

cd $FRONTEND_ROOT

### Stop service
pm2 stop $FRONTEND_SERVICE
pm2 delete $FRONTEND_SERVICE

### Configure
export DOMAIN_DE=https://ocelot-hosting.de
export DOMAIN_EN=https://ocelot-hosting.com

### Build
npm install --omit=dev
npm run build

### Start service
pm2 start 'node .output/server/index.mjs' --name $FRONTEND_SERVICE