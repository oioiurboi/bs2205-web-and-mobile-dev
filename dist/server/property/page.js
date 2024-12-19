"use strict";

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var React = require('react');
var ReactDom = require('react-dom');
var Layout = require('../layout');
function Page() {
  // Id-From-Query Hook
  var _React$useState = React.useState(),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    id = _React$useState2[0],
    setId = _React$useState2[1];
  React.useEffect(function () {
    var query = new URLSearchParams(window.location.search);
    setId(query.get('id'));
  }, []);

  // Fetch-Property-By-Id Hook
  var _React$useState3 = React.useState(),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    property = _React$useState4[0],
    setProperty = _React$useState4[1];
  React.useEffect(function () {
    if (!id) {
      return;
    }
    var p = fetch("/api/get-property-by-id?id=".concat(id)).then(function (res) {
      return res.json();
    })
    /*Have to do this because the minifier
    was having some weird issue with the
    async function, so I couldn't just
    await `fetch`.*/.then(function (res) {
      setProperty(res);
    });
  }, [id]);
  return /*#__PURE__*/React.createElement(Layout, null, /*#__PURE__*/React.createElement("script", {
    defer: true,
    src: "/property/page.js"
  }), !property ? id : JSON.stringify(property, null, 2));
}
module.exports = Page;