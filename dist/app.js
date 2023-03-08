import express from 'express';
import router from './routes/employees.routes.js';
const app = express();
// CRUD
app.use(router);
export default app;
