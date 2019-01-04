# base
FROM node:lts-alpine as base
WORKDIR /app
ENV NODE_DISABLE_COLORS=1

COPY package.json ./
COPY package-lock.json ./

RUN npm install

# build
FROM base AS build
WORKDIR /app
ENV CI=1
ENV NODE_DISABLE_COLORS=1

ARG env=$env

COPY . ./
COPY $env .env

RUN npm run lint
RUN npm run build

# release
FROM node:lts-alpine AS release
LABEL maintainer="rhio.kim@gmail.com"
WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
RUN npm install --only=production

COPY --from=build /app/.nuxt .nuxt
COPY --from=build /app/.env .env
COPY server server
COPY nuxt.config.js /app/nuxt.config.js

ENV NODE_ENV 'production'

EXPOSE 3000

CMD ["npm", "start"]
