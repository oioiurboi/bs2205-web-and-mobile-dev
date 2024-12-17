const React = require('react');
const ReactDown = require('react-dom');
const Lazy = require('./lazy');

function Page() {
  const [increment, setIncrement] = React.useState(0);

  return (
    <html>
      <head>
        <script
          defer
          src="/client/page.js"
        />
      </head>
      <body>
        Hello World!
        <Lazy/>
      </body>
    </html>
  )
}

module.exports = Page;