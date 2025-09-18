import { config } from 'dotenv';


config({path:`.env.${process.env.NODE_ENV ||'development' }.local`});

export const {
    PORT,
    NODE_ENV,
    DB_URL,
    JWT_SECRET,
    JW_EXPIRES_IN,
    ARCJET_ENV,
    ARCJET_KEY,
} = process.env;