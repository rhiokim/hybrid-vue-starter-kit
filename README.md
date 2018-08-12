# Project

## Structure Diagram

```
electron -> app -> PouchDB
                          \ (sync)
                           CouchDB
                          / OAuth (2.0)
browser -> web(nuxt.js)
                       \
                        firbase (Auth, Notification and Etc)
```

## TODO

* [ ] [CouchDB Configuration for Clustering](http://docs.couchdb.org/en/stable/config/cluster.html)

## License