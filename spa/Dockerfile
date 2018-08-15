# base
FROM node:8.9 as base
WORKDIR /app

COPY package.json ./
RUN npm install

# build
FROM base as build
WORKDIR /app
ENV CONTINUOUS_INTEGRATION=1
ENV NODE_ENV=production

ARG env=$env

COPY babel.config.js babel.config.js
COPY vue.config.js vue.config.js
COPY tsconfig.json tsconfig.json
COPY public public
COPY src src
COPY $env .env

# RUN npm test
RUN npm run build

# release
FROM nginx:alpine
ARG http_auth=false
COPY nginx /etc/nginx
COPY --from=build /app/dist /usr/share/nginx/html
RUN if [ "$http_auth" == "true" ]; \
    then mv /etc/nginx/default-auth.conf /etc/nginx/conf.d/default.conf; \
    else mv /etc/nginx/default.conf /etc/nginx/conf.d; \
    fi