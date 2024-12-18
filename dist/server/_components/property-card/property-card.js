"use strict";

var React = require("react");
var ReactDom = require("react-dom");
function NumGuard(value) {
  var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  if (typeof value === "number") {
    return value;
  } else {
    return fallback;
  }
}
function PropertyCard(_ref) {
  var property = _ref.property;
  var _id = property._id,
    addressFirstLine = property.addressFirstLine,
    place = property.place,
    postcode = property.postcode,
    price = property.price,
    floorFt = property.floorFt,
    acres = property.acres,
    beds = property.beds,
    baths = property.baths;
  return /*#__PURE__*/React.createElement("div", {
    className: "container",
    onClick: function onClick() {
      location.href = "/property?id=".concat(_id);
    }
  }, /*#__PURE__*/React.createElement("link", {
    rel: "stylesheet",
    href: "_components/property-card/style.css"
  }), /*#__PURE__*/React.createElement("img", {
    src: "https://media.rightmove.co.uk/66k/65827/153756641/65827_SLA012396569_IMG_01_0000.jpeg"
  }), /*#__PURE__*/React.createElement("div", {
    className: "details"
  }, /*#__PURE__*/React.createElement("div", {
    className: "features"
  }, /*#__PURE__*/React.createElement("span", null, "beds ".concat(NumGuard(beds, ""))), /*#__PURE__*/React.createElement("span", null, "baths ".concat(NumGuard(baths, ""))), /*#__PURE__*/React.createElement("span", null, "sqrft ".concat(NumGuard(floorFt, ""))), /*#__PURE__*/React.createElement("span", null, "acres ".concat(NumGuard(acres, "")))), /*#__PURE__*/React.createElement("div", {
    className: "addressFirstLine"
  }, addressFirstLine), /*#__PURE__*/React.createElement("div", {
    className: "place"
  }, place), /*#__PURE__*/React.createElement("div", {
    className: "postcode"
  }, postcode), /*#__PURE__*/React.createElement("div", {
    className: "price"
  }, typeof price === "number" ? "\xA3 ".concat(price.toLocaleString()) : "")));
}
module.exports = PropertyCard;