const React = require('react');
const ReactDom = require('react-dom');

function Navbar() {
  return (
    <div className='test'>
      <link rel="stylesheet" href="_components/navbar/style.css" />
      <button>Buy</button>
      <button>Sell</button>
      <button>Rent</button>
    </div>
  )
}

module.exports = Navbar;