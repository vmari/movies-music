import * as dotenv from 'dotenv';

dotenv.config({path: '.env'});

export interface IConfig {
    port: number;
    debugLogging: boolean;
    jwtSecret: string;
    database: {
        host: string,
        port: number,
        username: string,
        password: string,
        database: string
    };
}

const config: IConfig = {
    port: +process.env.PORT || 3000,
    debugLogging: process.env.NODE_ENV == 'development',
    jwtSecret: process.env.JWT_SECRET,
    database: {
        host: process.env.POSTGRES_HOST,
        port: +process.env.POSTGRES_PORT,
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB
    }
};

export { config };
