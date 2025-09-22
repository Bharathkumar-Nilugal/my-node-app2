const express = require('express');
const app = express();
app.get('/', (req, res) => res.json({ ok: true, message: "Hello from my-node-app" }));
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on ${port}`));
module.exports = app; // exported for tests

