import mongoose from 'mongoose';
import { UsersCollection } from '../db/models/user.js';

const MONGO_URL = 'cluster0.0cdoanu.mongodb.net';
const updateRoles = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log('Connected to MongoDB ✅');

    const result = await UsersCollection.updateMany(
      { role: { $exists: false } },
      { $set: { role: 'student' } },
    );

    console.log(
      `🔁 Updated ${result.modifiedCount} users with default role 'student'.`,
    );
  } catch (error) {
    console.error('❌ Failed to update roles:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
};

updateRoles();
