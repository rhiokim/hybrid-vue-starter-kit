var nano = require('nano')('http://a:1@localhost:5984')

var views = require('./views/docs')
var metas = require('./docs/meta')

// var Conn = require('./conn');

var dbname = 'haroonote$_account_new'

// var conn = new Conn(dbname);

nano.db.destroy(dbname, function (err, body) {
  if (!err || err.errid == 'non_200') {
    nano.db.create(dbname, function (err, body) {
      if (!err) {
        var db = nano.use(dbname)
        console.log('database %s created!', dbname)

        nano.db.replicate('haroopad', dbname, function (err, body) {
          if (!err) {
            console.log('haroopad -> %s replicated', dbname)
          }
        })

        Object.keys(views).forEach(function (key) {
          db.insert(views[key], key, function (err, body) {
            if (!err) {
              console.log('created view %s', key)
            }
          })
        })

        // Object.keys(tags).forEach(function(key) {
        //   db.insert(tags[key], key, function(err, body) {
        //     if (!err) {
        //       console.log('created view %s', key);
        //     }
        //   });
        // });

        // Object.keys(metas).forEach(function(key) {
        //   db.insert(metas[key], key, function(err, body) {
        //     if (!err) {
        //       console.log('create db %s', key);
        //     }
        //   });
        // });
      } else {
        console.log(err)
      }
    })
  }
})
