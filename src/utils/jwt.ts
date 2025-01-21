import jwt, { JwtPayload} from 'jsonwebtoken';

// Generate a JWT token
export const generateJWT = (payload: JwtPayload) => {
    return jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '30d'});
}