import express, { Router } from 'express';
import { getEmployees, getEmployee, createEmployee, updateEmployee, deleteEmployee } from '../controllers/employees.controller.js';
let router = Router();
// CRUD
router.use(express.json());
router.get('/employees', (req, res) => {
    getEmployees(req, res);
});
router.get('/employees/:id', (req, res) => {
    getEmployee(req, res);
});
router.post('/employees', (req, res) => {
    if (!Object.prototype.hasOwnProperty.call(req.body, 'name') || !Object.prototype.hasOwnProperty.call(req.body, 'name')) {
        res.status(404).send('Bad request');
        return;
    }
    createEmployee(req, res);
});
router.put('/employees/:id', (req, res) => {
    updateEmployee(req, res);
});
router.delete('/employees/:id', (req, res) => {
    deleteEmployee(req, res);
});
export default router;
