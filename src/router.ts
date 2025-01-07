import { Router } from "express";
import { body } from "express-validator";
import { createAcount } from "./handlers";

const router = Router();

// Autenticación y registro
router.post('/auth/register', 
    body('handle')
        .notEmpty()
        .withMessage('El handle es requerido.'),
    body('name')
        .notEmpty()
        .withMessage('El nombre de usuario es requerido.'),
    body('email')
        .isEmail()
        .withMessage('El email no es álido.'),
    body('password')
        .isLength({min: 8})
        .withMessage('El password no es valido, debe contener como minimo {8} caracteres.'),
    createAcount
);

export default router;
