# nodejs-mysql-restfulapi
Basic Restful-API, the server is running in https://nodejs-mysql-restfulapi-production.up.railway.app/

GET on '/employees' fetches all the employees in the DB.

GET on '/employees/:id' fetch a employee by ID.

POST on '/employees' with body structure: { name:"example", salary:1000 } creates a new employee.

PUT on '/employees/:id' with any of the previous properties, updates the properties of the employee by ID. If you dont specify one of the properties, the value will be the one that already has.

DELETE on '/employees/:id' deletes the employee by ID.


It's public and running so you can use a API platform to use it if you want.
