const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static('Public'));

// Load the JSON data
const jsonData = require('./data/data.json');

// API endpoint to serve JSON data
app.get('/api/data', (req, res) => {
  res.json(jsonData);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});