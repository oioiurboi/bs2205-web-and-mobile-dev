"use strict";

var React = require('react');
var ReactDom = require('react-dom');
function Navbar() {
  return /*#__PURE__*/React.createElement("div", {
    className: "navbar"
  }, /*#__PURE__*/React.createElement("link", {
    rel: "stylesheet",
    href: "_components/navbar/style.css"
  }), /*#__PURE__*/React.createElement("a", {
    href: "/",
    className: "logo"
  }, "houzen"), /*#__PURE__*/React.createElement("a", {
    href: "/"
  }, "Buy"), /*#__PURE__*/React.createElement("a", {
    href: "/sell"
  }, "Sell"), /*#__PURE__*/React.createElement("a", {
    href: "/"
  }, "Rent"));
}
module.exports = Navbar;