import { CorsOptions } from "cors";

export const corsConfig: CorsOptions = {
    origin: function(origin, callback) {
        if (origin === process.env.FRONTEND_URL || origin === process.env.FRONTEND_URL_LOCAL) {
            callback(null, true);
        } else {
            callback(new Error('Error de CORS'));
        }
    }
};