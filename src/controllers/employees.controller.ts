import { Request, Response } from 'express';
import { pool } from '../db.js';
import { OkPacket, RowDataPacket } from 'mysql2';
import { FieldPacket } from 'mysql';


async function getEmployees(req: Request, res: Response): Promise<void> {
    try {
        const [employees]: Array<object> = await pool.query('SELECT * FROM employee');

        res.send(employees);
    } catch {
        console.log('Database Error');
        res.status(505).send('505 Error');
    }
}

async function getEmployee(req: Request, res: Response): Promise<void> {
    try {
        const [employees]: [any, FieldPacket[]] = await pool.query('SELECT * FROM employee WHERE id=?', [req.params.id]);

        if (employees.length <= 0) {
            res.status(404).send(`User with ID:${req.params.id} can't be find`); return;
        }

        res.send(employees);
    } catch {
        console.log('Database Error');
        res.status(505).send('505 Error');
    }
}

async function createEmployee(req: Request, res: Response): Promise<void> {
    try {
        const { name, salary }: { name: string, salary: number } = req.body;
        const rows: [any, FieldPacket[]] = await pool.query('INSERT INTO employee(name, salary) VALUES (? , ?)', [name, salary]);

        if (rows[0].affectedRows <= 0) {
            res.status(404).send('Bad request'); return;
        }

        res.send(`Employee has been succesfully created: ${JSON.stringify({ name, salary })}`);
    } catch {
        console.log('Database Error');
        res.status(505).send('505 Error');
    }
}

async function updateEmployee(req: Request, res: Response): Promise<void> {
    try {
        const id: string = req.params.id;
        const { name, salary }: { name: string, salary: number } = req.body;

        const rows: [any, FieldPacket[]] = await pool.query(
            `UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?`,
            [name, salary, id]
        );

        if (rows[0].affectedRows <= 0) {
            res.status(404).send('Bad request'); return;
        }

        res.send(`Employee with ID:${id} has been succesfully updated`);
    } catch {
        console.log('Database Error');
        res.status(505).send('505 Error');
    }
}

async function deleteEmployee(req: Request, res: Response): Promise<void> {
    try {
        const id: string = req.params.id;
        const rows: [any, FieldPacket[]] = await pool.query('DELETE FROM employee WHERE id=?', [id]);

        if (rows[0].affectedRows <= 0) {
            res.status(404).send('Bad request'); return;
        }

        res.send(`Employee with ID:${id} has been succesfully deleted`);
    } catch {
        console.log('Database Error');
        res.status(505).send('505 Error');
    }
}

export { getEmployees, getEmployee, createEmployee, updateEmployee, deleteEmployee }