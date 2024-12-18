const React = require("react");
const ReactDom = require("react-dom");

function Searchbar() {
  return (
    <div className="searchbar-wrapper">
      <link rel="stylesheet" href="_components/searchbar/style.css"/>
      <input
        className='searchbar'
        placeholder='Address, School, Town, City...'
      />
      <button className="searchbar-go">Go</button>
    </div>
  )
}

module.exports = Searchbar;