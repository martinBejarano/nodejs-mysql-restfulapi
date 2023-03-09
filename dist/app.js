import express from 'express';
import router from './routes/employees.routes.js';
const app = express();
// CRUD
app.use(router);
// Not find
app.use((req, res) => {
    res.status(404).send('Endpoint not found');
});
export default app;
