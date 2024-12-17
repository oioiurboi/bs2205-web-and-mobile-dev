const React = require('react');
const ReactDown = require('react-dom');
const Navbar = require('./_components/navbar/navbar');

function Layout({ children }) {
  return (
    <html>
      <head>
      </head>
      <body style={{
        margin: 0,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}

module.exports = Layout;