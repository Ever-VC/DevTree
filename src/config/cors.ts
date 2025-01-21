import { CorsOptions } from "cors";

export const corsConfig: CorsOptions = {
    origin: function(origin, callback) {
        const whitelist = [process.env.FRONTEND_URL, process.env.FRONTEND_URL_LOCAL];

        if (process.argv.includes('--api')) {
            whitelist.push(undefined);
        }

        //if (origin === process.env.FRONTEND_URL || origin === process.env.FRONTEND_URL_LOCAL) {
        if (whitelist.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Error de CORS'));
        }
    }
};