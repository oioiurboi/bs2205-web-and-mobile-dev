const express = require('express');
const path = require('path');
const { createElement } = require('react');
const { renderToString, renderToPipeableStream } = require('react-dom/server');

const app = express();
const port = 3000;
const dist = path.join(__dirname, 'dist');

app.get('/', (req, res) => {
  // const rawIndexHtml = renderToString(createElement(Page));
  // const htmlWithHydrater
  //   = rawIndexHtml.replace(/<head>/, '$&<script src="/client/page.js"></script>');
  const stream = renderToPipeableStream(createElement());
  stream.pipe(res);
  // res.send(htmlWithHydrater);
});

app.get('/*', (req, res) => {
  res.sendFile(req.url, { root: dist });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});