import express, { Router, Request, Response } from 'express';
import { getEmployees, getEmployee, createEmployee, updateEmployee, deleteEmployee } from '../controllers/employees.controller.js';

let router: Router = Router()

// CRUD
router.use(express.json())

router.get('/employees', (req: Request, res: Response) => {
    getEmployees(req, res)
});

router.get('/employees/:id', (req: Request, res: Response) => {
    getEmployee(req, res)
});

router.post('/employees', (req: Request, res: Response) => {
    if(!Object.prototype.hasOwnProperty.call(req.body, 'name') || !Object.prototype.hasOwnProperty.call(req.body, 'name')){
        res.status(404).send('Bad request'); return;
    }
    createEmployee(req, res);
});

router.put('/employees/:id', (req: Request, res: Response) => {
    updateEmployee(req, res)
});

router.delete('/employees/:id', (req: Request, res: Response) => {
    deleteEmployee(req,res)
});

export default router;