// app.js
const express = require('express');
const bodyParser = require('body-parser');
const validate = require('./validate');
const { userSchema } = require('./schemas');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Route to create a new user with payload validation
app.post('/users', validate(userSchema), (req, res) => {
  const user = req.body;
  // Simulate user creation
  res.status(201).json({ message: 'User created successfully', user });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
