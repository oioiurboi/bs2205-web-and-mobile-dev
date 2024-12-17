const React = require('react');
const ReactDom = require('react-dom');

function Navbar() {
  return (
    <div className='navbar'>
      <link rel="stylesheet" href="_components/navbar/style.css" />
      <button className='logo'>houzen</button>
      <button>Buy</button>
      <button>Sell</button>
      <button>Rent</button>
    </div>
  )
}

module.exports = Navbar;