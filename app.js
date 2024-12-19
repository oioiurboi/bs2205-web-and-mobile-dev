const path = require('path');

const express = require('express');

// React
const { createElement } = require('react');
const { renderToPipeableStream, renderToString } = require('react-dom/server');

// Pages
const Index = require('./dist/server/page');
const Sell = require('./dist/server/sell/page');
const Property = require('./dist/server/property/page');

// Api Handlers
const GetAllProperties = require('./api-handlers/get-all-properties');

const app = express();
const port = 3000;
const distClient = path.join(__dirname, 'dist/client');

/**
 * Routes
 */
app.get('/', (req, res) => {
  const stream = renderToPipeableStream(createElement(Index));
  stream.pipe(res);
});

app.get('/sell', (req, res) => {
  const stream = renderToPipeableStream(createElement(Sell));
  stream.pipe(res);
});

app.get('/property', (req, res) => {
  const stream = renderToPipeableStream(createElement(Property));
  stream.pipe(res);
})

app.get('/api/get-all-properties', async (req, res) => {
  const properties = await GetAllProperties();
  res.send(properties);
})

app.get('/*', (req, res) => {
  res.sendFile(req.url, { root: distClient });
});

// Start
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});