"use strict";

var React = require('react');
var ReactDom = require('react-dom');
function Navbar() {
  return /*#__PURE__*/React.createElement("div", {
    className: "navbar"
  }, /*#__PURE__*/React.createElement("link", {
    rel: "stylesheet",
    href: "_components/navbar/style.css"
  }), /*#__PURE__*/React.createElement("button", {
    className: "logo"
  }, "houzen"), /*#__PURE__*/React.createElement("button", null, "Buy"), /*#__PURE__*/React.createElement("button", null, "Sell"), /*#__PURE__*/React.createElement("button", null, "Rent"));
}
module.exports = Navbar;