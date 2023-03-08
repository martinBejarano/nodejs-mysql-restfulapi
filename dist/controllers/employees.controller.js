var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { pool } from '../db.js';
function getEmployees(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const [employees] = yield pool.query('SELECT * FROM employee');
            res.send(employees);
        }
        catch (_a) {
            console.log('Database Error');
            res.status(505).send('505 Error');
        }
    });
}
function getEmployee(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const [employees] = yield pool.query('SELECT * FROM employee WHERE id=?', [req.params.id]);
            if (employees.length <= 0) {
                res.status(404).send(`User with ID:${req.params.id} can't be find`);
                return;
            }
            res.send(employees);
        }
        catch (_a) {
            console.log('Database Error');
            res.status(505).send('505 Error');
        }
    });
}
function createEmployee(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { name, salary } = req.body;
            const rows = yield pool.query('INSERT INTO employee(name, salary) VALUES (? , ?)', [name, salary]);
            if (rows[0].affectedRows <= 0) {
                res.status(404).send('Bad request');
                return;
            }
            res.send(`Employee has been succesfully created: ${JSON.stringify({ name, salary })}`);
        }
        catch (_a) {
            console.log('Database Error');
            res.status(505).send('505 Error');
        }
    });
}
function updateEmployee(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.id;
            const { name, salary } = req.body;
            const rows = yield pool.query(`UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?`, [name, salary, id]);
            if (rows[0].affectedRows <= 0) {
                res.status(404).send('Bad request');
                return;
            }
            res.send(`Employee with ID:${id} has been succesfully updated`);
        }
        catch (_a) {
            console.log('Database Error');
            res.status(505).send('505 Error');
        }
    });
}
function deleteEmployee(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.id;
            const rows = yield pool.query('DELETE FROM employee WHERE id=?', [id]);
            if (rows[0].affectedRows <= 0) {
                res.status(404).send('Bad request');
                return;
            }
            res.send(`Employee with ID:${id} has been succesfully deleted`);
        }
        catch (_a) {
            console.log('Database Error');
            res.status(505).send('505 Error');
        }
    });
}
export { getEmployees, getEmployee, createEmployee, updateEmployee, deleteEmployee };
