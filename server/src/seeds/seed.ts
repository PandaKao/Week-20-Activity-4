import db from '../config/connection.js';
import { Word } from '../models/index.js';
import cleanDB from './cleanDB.js';

const wordData = require('./wordSeeds.json'); // Use require to load the JSON file

async function seedDatabase() {
  try {
    await db();
    await cleanDB();
    await Word.insertMany(wordData);
    console.log('Seeding completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();