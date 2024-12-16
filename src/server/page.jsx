const Lazy = require('./lazy');

const React = require('react');
const ReactDown = require('react-dom');

function Page() {
  return (
    <html>
      <head></head>
      <body>
        Hello World!
        <div>
          <React.Suspense fallback={null}>
            <Lazy.Lazy />
          </React.Suspense>
        </div>
      </body>
    </html>
  )
}

module.exports = { Page }