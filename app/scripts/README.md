
**Destroy & Create DB for new account **

* destroy db
* create db
* create _design/views

```bash
$ ./bin.js --db=db_name
```

* login user

```json
_account {
  "email": "test@test.com",
  "haroo_id": "cf484c5dac53257a48de0edf76c1dbf0e",
  "access_token": "621d08ca-1b2c-4e8b-b543-89e85e88fbf2",
  "expired_at": "2422973462420",
  "profile": {
    "nickname": "", "gender": "", "location": "", "website": "","picture":""
  }
}
```

* server

```json
_server {
  "db_host": "localhost:5984"
}
```