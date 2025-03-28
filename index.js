const express = require('express');
const app = express();

const statusCodes = {
    200: "OK - The request was successful.",
    201: "Created - The resource was successfully created.",
    400: "Bad Request - The server could not understand the request.",
    401: "Unauthorized - Authentication is required.",
    403: "Forbidden - Access is denied.",
    404: "Not Found - The resource could not be found.",
    500: "Internal Server Error - Something went wrong on the server."
};

// GET endpoint to return status code descriptions
app.get('/status', (req, res) => {
    const code = parseInt(req.query.code); // Get the code from query params
    if (statusCodes[code]) {
        res.status(code).json({ code, message: statusCodes[code] });
    } else {
        res.status(400).json({ error: "Invalid status code. Please use a valid HTTP status code." });
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
