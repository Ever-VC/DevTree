import { Router } from "express";
import { body } from "express-validator";
import { createAcount, login } from "./handlers";
import { handleInputErrors } from "./middleware/validation";

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
        .withMessage('E-mail no valido.'),
    body('password')
        .isLength({min: 8})
        .withMessage('El password no es valido, debe contener como minimo 8 caracteres.'),
    handleInputErrors,
    createAcount
);

router.post('/auth/login',
    body('email')
        .isEmail()
        .withMessage('E-mail no valido.'),
    body('password')
        .notEmpty()
        .withMessage('El password es obligatorio.'),
    handleInputErrors,
    login
);

export default router;
