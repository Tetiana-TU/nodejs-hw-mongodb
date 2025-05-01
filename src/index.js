import { setupServer } from './server.js';
import { initMongoConnection } from './db/initMongoConnection.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
setupServer();
initMongoConnection();

const { MONGODB_USER, MONGODB_PASSWORD, MONGODB_URL, MONGODB_DB } = process.env;

const fullMongoUrl = `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_URL}/${MONGODB_DB}?retryWrites=true&w=majority`;

mongoose
  .connect(fullMongoUrl)
  .then(() => console.log('Mongo connection successfully established!'))
  .catch((err) => console.error('Mongo connection error:', err));
