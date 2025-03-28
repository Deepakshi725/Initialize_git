require('dotenv').config(); // Load environment variables

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
const ENVIRONMENT = process.env.ENVIRONMENT || 'development';
const WELCOME_MESSAGE = process.env.WELCOME_MESSAGE;
const PRODUCTION_MESSAGE = process.env.PRODUCTION_MESSAGE;

app.get('/', (req, res) => {
    if (ENVIRONMENT === 'production') {
        res.send(PRODUCTION_MESSAGE);
    } else {
        res.send(WELCOME_MESSAGE);
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT} in ${ENVIRONMENT} mode`);
});

