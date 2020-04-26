import { config } from 'dotenv';
config();

export default {
  application: {
    port: process.env.PORT || 3000,
  },
  api: {
    endpoint: process.env.ENDPOINT,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
  },
};
