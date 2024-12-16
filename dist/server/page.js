const Lazy = require('./lazy');
const React = require('react');
const ReactDown = require('react-dom');
function Page() {
  return /*#__PURE__*/React.createElement("html", null, /*#__PURE__*/React.createElement("head", null), /*#__PURE__*/React.createElement("body", null, "Hello World!", /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(React.Suspense, {
    fallback: null
  }, /*#__PURE__*/React.createElement(Lazy.Lazy, null)))));
}
module.exports = {
  Page
};