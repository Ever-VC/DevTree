import mongoose from "mongoose";

export const connect = async () => {
    try {
        const {connection} = await mongoose.connect(process.env.MONGODB_URI);
        const url = `${connection.host}:${connection.port}/${connection.name}`;
        console.log('DB Connected at: ', url);
    } catch (error) {
        console.log('Error connecting to DB: ', error.message);
        process.exit(1);
    }
};
