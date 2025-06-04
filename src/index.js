import dotenv from 'dotenv';
dotenv.config();
import { setupServer } from './server.js';
import { initMongoConnection } from './db/initMongoConnection.js';
import { initMongoDB } from './db/initMongoDB.js';
import { createDirIfNotExists } from './utils/createDirIfNotExists.js';
import { TEMP_UPLOAD_DIR, UPLOAD_DIR } from './constants/index.js';
const startApp = async () => {
  try {
    await initMongoConnection();
    setupServer();
  } catch (err) {
    console.error('Не вдалося запустити додаток:', err);
    process.exit(1);
  }
};

startApp();

export const SORT_ORDER = {
  ASC: 'asc',
  DESC: 'desc',
};
export const FIFTEEN_MINUTES = 15 * 60 * 1000;
export const THIRTY_DAYS = 30 * 24 * 60 * 60 * 1000;
const bootstrap = async () => {
  await initMongoDB();
  await createDirIfNotExists(TEMP_UPLOAD_DIR);
  await createDirIfNotExists(UPLOAD_DIR);
  setupServer();
};

void bootstrap();
