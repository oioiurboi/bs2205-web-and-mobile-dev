const express = require('express');
const path = require('path');
const { createElement } = require('react');
const { renderToString, renderToPipeableStream } = require('react-dom/server');
const Index = require('./dist/server/page');
const Sell = require('./dist/server/sell/page')
const GetAllProperties = require('./api-handlers/get-all-properties');

const app = express();
const port = 3000;
const distClient = path.join(__dirname, 'dist/client');

app.get('/', (req, res) => {
  const stream = renderToPipeableStream(createElement(Index));
  stream.pipe(res);
});

app.get('/sell', (req, res) => {
  const stream = renderToPipeableStream(createElement(Sell));
  stream.pipe(res);
});

app.get('/api/get-all-properties', async (req, res) => {
  const properties = await GetAllProperties();
  res.send(properties);
})

app.get('/*', (req, res) => {
  res.sendFile(req.url, { root: distClient });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});