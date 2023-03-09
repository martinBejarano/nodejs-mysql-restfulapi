# nodejs-mysql-restfulapi
Basic Restful-API, the server is running in https://nodejs-mysql-restfulapi-production.up.railway.app/

GET on '/' fetches all the users in the DB.

GET on '/:id' fetch a user by ID.

POST on '/' with body structure: { name:"example", salary:1000 } creates a new user.

PUT on '/:id' with any of the previous properties, updates the properties of the user by ID. If you dont specify one of the properties, the value will be the one that already has.

DELETE on '/:id' deletes the user by ID.

It's public and running so you can use a API platform to use it if you want.
