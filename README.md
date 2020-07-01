# CatBook - Backend 
[![Build Status](https://travis-ci.org/hydra13/catbook-backend.svg?branch=master)](https://travis-ci.org/hydra13/catbook-backend)

This is a simple social network for the HighLoad course.

Backend in Node.js/Express

For starting:
```
git clone https://github.com/hydra13/catbook-backend.git
cd catbook-backend
npm start
```

## API
* **GET /cats** - get all records
* **GET /cats/:id** - get cat by id
* **POST /cats** - create new cat's record
* **PUT /cats/:id** - change cat's record by id
* **PATCH /cats/:id** - change cat's record by id (same PUT)
* **DELETE /cats/:id** - delete cat's record by id
