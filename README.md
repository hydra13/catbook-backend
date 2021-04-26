# CatBook - Backend 
[![Build Status](https://travis-ci.org/hydra13/catbook-backend.svg?branch=master)](https://travis-ci.org/hydra13/catbook-backend)

This is a simple social network for the HighLoad course.

Backend in Node.js/Express

URL: **[catbook-backend.herokuapp.com](https://catbook-backend.herokuapp.com/)**

## Developing
For starting:
```
git clone https://github.com/hydra13/catbook-backend.git
cd catbook-backend
# before start you should check your db instance is running. See "Database" part.
npm start
```

## Database
In `sql` directory you can find sh-script which will help you to create db's instance on your local machine.

Requirements: `docker >=20.10`

### Init
```
cd sql
sh create-docker-image.sh
```

### Start db
```
docker container start catbookdb
```

### Stop db
```
docker container stop catbookdb
```

## API
* **GET /cats** - get all records
* **GET /cats/:id** - get cat by id
* **POST /cats** - create new cat's record
* **PUT /cats/:id** - change cat's record by id
* **PATCH /cats/:id** - change cat's record by id (same PUT)
* **DELETE /cats/:id** - delete cat's record by id

## Links
- [MySQL + Heroku](https://bezkoder.com/deploy-node-js-app-heroku-cleardb-mysql/)
