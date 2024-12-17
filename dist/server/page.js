"use strict";

var React = require('react');
var ReactDown = require('react-dom');
var Layout = require('./layout');
function Page() {
  return /*#__PURE__*/React.createElement(Layout, null, /*#__PURE__*/React.createElement("script", {
    defer: true,
    src: "/page.js"
  }), /*#__PURE__*/React.createElement("link", {
    rel: "stylesheet",
    href: "style.css"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      border: "1px solid black",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "splash"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "tagline"
  }, "Find your zen..."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("input", {
    className: "searchbar",
    placeholder: "Address, School, Town, City..."
  }))))));
}
module.exports = Page;