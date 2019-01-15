var nano = require('nano')('http://haroo:haroo@localhost:5984')
var Q = require('q')

function haroo (db) {
  this.db = nano.use(db)
}

haroo.prototype.insert = function (id, doc) {
  var db = this.db
  return Q.Promise(function (resolve, reject, notify) {
    db.insert(doc, id, function (err, body) {
      if (err) {
        reject(err)
        return
      }

      resolve(body)
    })
  })
}

module.exports = haroo
