const PouchCore = require('pouchdb-core')
const Auth = require('pouchdb-authentication')
const HTTP = require('pouchdb-adapter-http')
const MapReduce = require('pouchdb-mapreduce')

const PouchDB = PouchCore.plugin(HTTP)
  .plugin(Auth)
  .plugin(MapReduce)

const db = new PouchDB('http://127.0.0.1:5984/haroo', { skip_setup: true })

db.signUp('batman', 'brucewayne', (err, response) => {
  console.log(err, response)
  if (err) {
    if (err.name === 'conflict') {
      // "batman" already exists, choose another username
    } else if (err.name === 'forbidden') {
      // invalid username
    } else {
      // HTTP error, cosmic rays, etc.
    }
  }
})

db.signUp(
  'robin',
  'dickgrayson',
  {
    metadata: {
      email: 'robin@boywonder.com',
      birthday: '1932-03-27T00:00:00.000Z',
      likes: ['acrobatics', 'short pants', "sidekickin'"]
    }
  },
  (err, response) => {
    // etc.
  }
)
