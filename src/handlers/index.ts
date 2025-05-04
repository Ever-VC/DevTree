import type { Request, Response } from "express";
import { validationResult } from "express-validator";
import slug from "slug";
import User from "../models/User";
import { checkPassword, hashPassword } from "../utils/auth";
import { generateJWT } from "../utils/jwt";

export const createAcount = async(req: Request, res: Response) => {
    const {email, password} = req.body;

    const userExists = await User.findOne({email});

    if(userExists) {
        const error = new Error('El correo ya esta registrado.');
        return res.status(409).json({error: error.message});
    }

    const handle = slug(req.body.handle, '');
    const handleExists = await User.findOne({handle});

    if(handleExists) {
        const error = new Error('El handle ya esta en uso.');
        return res.status(409).json({error: error.message});
    }

    const user = new User(req.body);
    user.password = await hashPassword(password);
    user.handle = handle;

    await user.save();
    res.status(201).send('Registro creado correctamente.');
}

export const login = async(req: Request, res: Response) => {
    // Buscar usuario en la base de datos
    const {email, password} = req.body;

    const user = await User.findOne({email});

    if(!user) {
        const error = new Error('El correo no esta registrado en la base de datos.');
        return res.status(404).json({error: error.message});
    }

    // Comprobar contraseña
    const passwordMatch = await checkPassword(password, user.password); 

    if(!passwordMatch) {
        const error = new Error('El password es incorrecta.');
        return res.status(401).json({error: error.message});
    }

    const token = generateJWT({id: user._id});

    res.status(200).send(token)

}

export const getUser = async(req: Request, res: Response) => {
    res.status(200).json(req.user);
}