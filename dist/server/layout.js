"use strict";

var React = require('react');
var ReactDom = require('react-dom');
var Navbar = require('./_components/navbar/navbar');
function Layout(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement("html", null, /*#__PURE__*/React.createElement("head", null), /*#__PURE__*/React.createElement("body", {
    style: {
      margin: 0,
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement(Navbar, null), children));
}
module.exports = Layout;