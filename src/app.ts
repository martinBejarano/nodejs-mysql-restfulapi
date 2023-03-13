import express, { Express } from 'express';
import router from './routes/employees.routes.js';
import cors from 'cors';

const app: Express = express();

// CORS
app.use(cors);

// CRUD
app.use(router)

// Not find
app.use((req,res)=>{
    res.status(404).send('Endpoint not found')
})

export default app;