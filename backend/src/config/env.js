import dotenv from "dotenv";
dotenv.config();

export const ENV = {
    PORT: process.env.PORT || 5000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    DB_URI: process.env.DB_URI,
    JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN,
    CLERK_PUBLISHABLE_KEY: process.env.CLERK_PUBLISHABLE_KEY,
    CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
    JWT_SECRET: process.env.JWT_SECRET,
    ARCJET_KEY: process.env.ARCJET_KEY,
    ARCJET_ENV: process.env.ARCJET_ENV || 'production',
    SERVER_URL: process.env.SERVER_URL || 'http://localhost:5000',
    CLOUDINARY_API_KEY: process.env.CLOUDINAME_API_KEY,
    CLOUDINARY_API_SECRET: process.env.CLOUDINAME_API_SECRET,
    CLOUDINARY_CLOUD_NAME: process.env.CLOUDINAME_CLOUD_NAME,
}