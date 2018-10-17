import dotenv from 'dotenv';

dotenv.load();
const config = {
  port: process.env.PORT || 8080,
  environment: process.env.NODE_ENV || 'development',
};

export default config;
