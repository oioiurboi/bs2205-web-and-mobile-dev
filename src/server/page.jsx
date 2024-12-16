const React = require('react');
const ReactDown = require('react-dom');
// const { Lazy } = require('./lazy.jsx');

export default function Page() {
  return (
    <html>
      <head>
        {/* <script
          defer
          src='/client/page.js'
        ></script> */}
      </head>
      <body>
        Hello World!
        <div>
          {/* <React.Suspense fallback={null}>
            <Lazy/>
          </React.Suspense> */}
        </div>
      </body>
    </html>
  )
}