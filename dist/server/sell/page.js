"use strict";

var React = require('react');
var ReactDown = require('react-dom');
var Layout = require('../layout');
function Page() {
  return /*#__PURE__*/React.createElement(Layout, null, /*#__PURE__*/React.createElement("script", {
    defer: true,
    src: "sell/page.js"
  }), /*#__PURE__*/React.createElement("link", {
    rel: "stylesheet",
    href: "sell/style.css"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "splash"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "tagline"
  }, "Get a quote"), /*#__PURE__*/React.createElement("div", {
    className: "form"
  }, /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "1st Line Address"), /*#__PURE__*/React.createElement("input", null)), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "City"), /*#__PURE__*/React.createElement("input", null)), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Postcode"), /*#__PURE__*/React.createElement("input", null)), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Sqrft"), /*#__PURE__*/React.createElement("input", null)), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Acres"), /*#__PURE__*/React.createElement("input", null)), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Beds"), /*#__PURE__*/React.createElement("input", null)), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Baths"), /*#__PURE__*/React.createElement("input", null)))))));
}
module.exports = Page;