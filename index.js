const express = require('express');
const app = express();

app.get('/', (req, res) => res.json({ ok: true, message: "Hello from my-node-app" }));

// Only start the server if this file is run directly
if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`Listening on ${port}`));
}

module.exports = app; // export app only, not the server

