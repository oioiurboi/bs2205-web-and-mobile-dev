const React = require('react');
const ReactDom = require('react-dom');

const Navbar = require('./_components/navbar/navbar');

function Layout({ children }) {
  return (
    <html>
      <head>
        <link rel="stylesheet" href="global.css"/>
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