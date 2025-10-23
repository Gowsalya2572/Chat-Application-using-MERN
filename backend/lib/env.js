import "dotenv/config";

export const ENV={
    PORT:process.env.PORT,
    MONGO_URI:process.env.MONGO_URI,
    JWT_SECRET:process.env.JWT_SECRET,
    NODE_ENV:process.env.NODE_ENV,
    CLODINARY_CLOUD_NAME:process.env.CLODINARY_CLOUD_NAME,
    CLODINARY_API_KEY:process.env.CLODINARY_API_KEY,
    CLODINARY_API_SECRET:process.env.CLODINARY_API_SECRET,
};