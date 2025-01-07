import mongoose, { mongo } from "mongoose";

export interface IUser {
    name: String;
    email: String;
    password: String;
};

// Esquema de usuario para la base de datos
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
});


const User = mongoose.model<IUser>('User', userSchema);
export default User;