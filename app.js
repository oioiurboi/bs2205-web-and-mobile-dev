const express = require('express');
const path = require('path');
require('dotenv').config();

// React
const { createElement } = require('react');
const { renderToPipeableStream, renderToString } = require('react-dom/server');

// Pages
const Index = require('./dist/server/page');
const Sell = require('./dist/server/sell/page');
const Property = require('./dist/server/property/page');

// Api Handlers
const GetAllProperties = require('./api-handlers/get-all-properties');
const GetPropertyById = require('./api-handlers/get-property-by-id');

const app = express();
const { PORT: SERVER_PORT } = process.env;
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
});

app.get('/api/get-all-properties', async (req, res) => {
  const properties = await GetAllProperties();
  res.send(properties);
});

app.get('/api/get-property-by-id', async (req, res) => {
  const property = await GetPropertyById(req.query.id);
  res.send(property);
});

app.get('/*', (req, res) => {
  res.sendFile(req.url, { root: distClient });
});

// Start
app.listen(SERVER_PORT, () => {
  console.log(`listening on port ${SERVER_PORT}`);
});