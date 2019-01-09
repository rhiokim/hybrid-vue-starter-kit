# Project

## Structure Diagram

```bash
electron -> app -> PouchDB(leveldb)
                          \ (sync)
                           CouchDB:5984 ----- Solr or ES
                          / OAuth (2.0)
browser -> web(nuxt.js):9001
                       \
                        firbase (Notification and Etc)
                       /
        -> spa(vue, nginx):9000
```

![](./media/offline-first-web-application-architecture.002.jpeg)

* app
  * based on https://github.com/SimulatedGREG/electron-vue
* web(ssr)
  * based on create-nuxt-app
  * pwa - https://github.com/nuxt-community/pwa-module
  * axios - https://github.com/nuxt-community/axios-module
  * auth - https://github.com/nuxt-community/auth-module
  * i18n - https://github.com/nuxt-community/nuxt-i18n
  * sentry - https://github.com/nuxt-community/sentry-module
  * stylus
* spa
  * based on @vue/cli

## Makefile

```bash
make init

make build
make up
make restart
make clean
```

## TODO

* [ ] [CouchDB Configuration for Clustering](http://docs.couchdb.org/en/stable/config/cluster.html)

## License