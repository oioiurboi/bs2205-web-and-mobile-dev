const Lazy = require('./lazy');

const React = require('react');
const ReactDown = require('react-dom');

function Page() {
  return (
    <html>
      <head>
        <script
          defer
          src='/client/page.js'
        ></script>
      </head>
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