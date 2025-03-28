require('dotenv').config(); // Load environment variables from .env

const express = require('express');
const app = express();

// Retrieve environment variables
const PORT = process.env.PORT || 3000;
const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;

console.log(`Database Host: ${DB_HOST}`);
console.log(`Database User: ${DB_USER}`);

app.get('/', (req, res) => {
    res.send(`Server is running on port ${PORT}`);
});

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
