import { config } from 'dotenv';
config();

export default {
    api: {
        endpoint: process.env.ENDPOINT,
        username: process.env.USERNAME,
        password: process.env.PASSWORD,
    },
}