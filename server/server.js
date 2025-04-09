// server/server.js
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello from Server!'));

app.listen(6000, () => {
  console.log('Server running on port 6000');
});
