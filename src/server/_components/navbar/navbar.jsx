const React = require('react');
const ReactDom = require('react-dom');

function Navbar() {
  return (
    <div className='navbar'>
      <link rel="stylesheet" href="_components/navbar/style.css" />
      <a href="/" className='logo'>houzen</a>
      <a href='/'>Buy</a>
      <a href='/sell'>Sell</a>
      <a href='/'>Rent</a>
    </div>
  )
}

module.exports = Navbar;