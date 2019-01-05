# Project

## Structure Diagram

```txt
electron -> app -> PouchDB(leveldb)
                          \ (sync)
                           CouchDB
                          / OAuth (2.0)
browser -> web(nuxt.js):9001
                       \
                        firbase (Auth, Notification and Etc)
        -> spa(vue, nginx):9000
```

* web(ssr)
  * pwa - https://github.com/nuxt-community/pwa-module
  * axios - https://github.com/nuxt-community/axios-module
  * auth - https://github.com/nuxt-community/auth-module
  * i18n - https://github.com/nuxt-community/nuxt-i18n
  * sentry - https://github.com/nuxt-community/sentry-module
  * stylus

## Makefile

```bash
make build
make up
make restart
make clean
```

## TODO

* [ ] [CouchDB Configuration for Clustering](http://docs.couchdb.org/en/stable/config/cluster.html)

## License