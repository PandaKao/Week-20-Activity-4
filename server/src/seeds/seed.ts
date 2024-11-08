import db from '../config/connection.js';
import { Word } from '../models/index.js';
import cleanDB from './cleanDB.js';

// Dynamically import the JSON file using the correct syntax
const wordData = await import('./wordSeeds.json', {
  assert: { type: 'json' },
});

async function seedDatabase() {
  try {
    await db();
    await cleanDB();

    // Insert the data into the database
    await Word.insertMany(wordData.default);  // Access the default export

    console.log('Seeding completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();