require('dotenv').config();
const express = require('express');
const app = express();

// Function to get a cheerful message based on the day of the week
const getCheerfulMessage = () => {
    const messages = {
        Monday: "New week, new opportunities! Let's get started! 🚀",
        Tuesday: "Keep going! You're doing great! 💪",
        Wednesday: "Midweek motivation! Almost there! 😊",
        Thursday: "One step closer to the weekend! Stay focused! 🎯",
        Friday: "It's Friday! Finish strong! 🎉",
        Saturday: "Relax and enjoy your weekend! 🍃",
        Sunday: "Recharge for the new week ahead! 🔋"
    };

    const day = new Date().toLocaleString('en-US', { weekday: 'long' });
    return messages[day] || "Have a fantastic day! 😃";
};

// GET endpoint to return a personalized greeting
app.get('/assistant/greet', (req, res) => {
    const name = req.query.name || "Guest";
    const greeting = `Hello, ${name}! 👋`;
    const cheerfulMessage = getCheerfulMessage();

    res.json({ greeting, message: cheerfulMessage });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Virtual Assistant API is running on http://localhost:${PORT}`);
});
