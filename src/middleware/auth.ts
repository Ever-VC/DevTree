import type { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';
import User, { IUser } from "../models/User";

declare global {
    namespace Express {
        interface Request {
            user?: IUser; // Definimos la propiedad user en la request
        }
    }
}

export const authenticate = async (req: Request, res: Response, next: NextFunction) => {
    const bearer = req.headers.authorization;

    if (!bearer) {
        const error = new Error('No Autorizado');
        return res.status(401).json({error: error.message});
    }

    const [, token] = bearer.split(' '); // Bearer token (elimina Bearer, dejando solo el token)
    
    if (!token) {
        const error = new Error('No Autorizado');
        return res.status(401).json({error: error.message});
    }

    try {
        const result = jwt.verify(token, process.env.JWT_SECRET);
        if (typeof result === 'object' && result.id) {
            const user = await User.findById(result.id).select('-password');
            if (!user) {
                const error = new Error('Usuario no encontrado');
                return res.status(404).json({error: error.message});
            }
            req.user = user; // Guardar el usuario en la request para usarlo en el siguiente middleware
            next(); // Si el usuario existe, continuar con la siguiente función de middleware
        }
    } catch (error) {
        res.status(500).json({error: "token no válido"});
    }

}