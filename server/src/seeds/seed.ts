import db from '../config/connection.js';
import { Word } from '../models/index.js';
import cleanDB from './cleanDB.js';

async function seedDatabase() {
  try {
    // Dynamically import the JSON data
    const wordData = (await import('./wordSeeds.json')).default;

    // Connect to the database
    await db();

    // Clean existing data in the database
    await cleanDB();

    // Insert the data into the Word model
    await Word.insertMany(wordData);

    console.log('Seeding completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

// Run the seeding function
seedDatabase();