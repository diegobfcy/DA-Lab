/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = 'ucsm';
const collection = 'alumnos';

// The current database to use.
use(database);

// Create a new collection.
db.createCollection(collection);
// db.alumnos.find().sort({ Edad: 1 });
// db.alumnos.find().sort({ Edad: -1 });

// db.alumnos.countDocuments();
// db.alumnos.find({ Edad: { $eq: 21 } });
// db.alumnos.find({ Edad: { $ne: 21 } });
// db.alumnos.find({ Edad: { $gt: 23 } });
// db.alumnos.find({ Edad: { $gte: 23 } });
// db.alumnos.find({ Edad: { $lt: 21 } });
db.alumnos.find({ Edad: { $lte: 21 } });
