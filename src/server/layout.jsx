const React = require('react');
const ReactDown = require('react-dom');

function Layout({ children }) {
  return (
    <html>
      <head></head>
      <body>
        {children}
      </body>
    </html>
  )
}

module.exports = Layout;