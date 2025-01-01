import mongoose from "mongoose";
import colors from 'colors';

export const connect = async () => {
    try {
        const {connection} = await mongoose.connect(process.env.MONGODB_URI);
        const url = `${connection.host}:${connection.port}/${connection.name}`;
        console.log(colors.cyan.bold(`DB Connected at: ${url}`));
    } catch (error) {
        console.log(colors.bgRed.white.bold(error.message));
        process.exit(1);
    }
};
