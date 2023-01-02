const express = require('express');

// To initialize express
const app = express();

// To start a server
const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
