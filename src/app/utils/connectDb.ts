/* eslint-disable no-console */
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import config from '../config';
dotenv.config();

let connection: typeof mongoose | null = null;

export const connectDB = async () => {
  try {
    if (connection) return;

    connection = await mongoose.connect(config.database_url as string);
    console.log('Successfully connected to MongoDB');
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};


