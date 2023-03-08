import express, { Express } from 'express';
import router from './routes/employees.routes.js'
const app: Express = express();

// CRUD
app.use(router)

export default app;