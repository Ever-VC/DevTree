import { Router } from "express";
import { createAcount } from "./handlers";

const router = Router();

// Autenticación y registro
router.post('/auth/register', createAcount);

export default router;
