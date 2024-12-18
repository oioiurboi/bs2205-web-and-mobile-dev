"use strict";

var React = require("react");
var ReactDom = require("react-dom");
function Searchbar() {
  return /*#__PURE__*/React.createElement("div", {
    className: "searchbar-wrapper"
  }, /*#__PURE__*/React.createElement("link", {
    rel: "stylesheet",
    href: "_components/searchbar/style.css"
  }), /*#__PURE__*/React.createElement("input", {
    className: "searchbar",
    placeholder: "Address, School, Town, City..."
  }), /*#__PURE__*/React.createElement("button", {
    className: "searchbar-go"
  }, "Go"));
}
module.exports = Searchbar;