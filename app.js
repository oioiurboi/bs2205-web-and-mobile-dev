const express = require('express');
const path = require('path');
const { createElement } = require('react');
const { renderToString, renderToPipeableStream } = require('react-dom/server');
const Page = require('./dist/server/page');

const app = express();
const port = 3000;
const distClient = path.join(__dirname, 'dist/client');

app.get('/', (req, res) => {
  // const rawIndexHtml = renderToString(createElement(Page));
  // const htmlWithHydrater
  //   = rawIndexHtml.replace(/<head>/, '$&<script src="/client/page.js"></script>');
  // res.send(htmlWithHydrater);
  const stream = renderToPipeableStream(createElement(Page));
  stream.pipe(res);
});

app.get('/*', (req, res) => {
  res.sendFile(req.url, { root: distClient });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});