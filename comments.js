// Create web server
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

// Set up the server to serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});