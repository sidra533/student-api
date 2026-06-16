const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to Student API');
});

app.get('/student', (req, res) => {
  res.json({
    id: 1,
    name: "Sidra Jalal",
    department: "IT"
  });
});

app.get('/about', (req, res) => {
  res.json({
    course: "Full-Stack Application",
    week: 4,
    topic: "Backend Fundamentals"
  });
});

app.get('/skills', (req, res) => {
  res.json(["HTML", "CSS", "JavaScript", "Node.js"]);
});

app.get('/students', (req, res) => {
  res.json([
    { id: 1, name: "Ali" },
    { id: 2, name: "Sara" },
    { id: 3, name: "Ahmed" }
  ]);
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});