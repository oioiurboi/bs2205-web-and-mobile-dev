const express = require('express');
const path = require('path');

const app = express();
const port = 3000;
const dist = path.join(__dirname, 'dist');

app.get('/', (req, res) => {
  res.sendFile('/index.html', { root:  dist });
});

app.get('/*', (req, res) => {
  res.sendFile(req.url, { root: dist });
})

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});