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
    QSTASH_CURRENT_SIGNING_KEY,
    QSTASH_NEXT_SIGNING_KEY,
    QSTASH_URL, QSTASH_TOKEN,
    EMAIL_PASSWORD
} = process.env;