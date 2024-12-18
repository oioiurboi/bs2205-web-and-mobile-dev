const React = require("react");
const ReactDom = require("react-dom");

function NumGuard(
  value,
  fallback = null
) {
  if (typeof value === "number") {
    return value;
  } else {
    return fallback;
  }
}

function PropertyCard({
  property
}) {
  const {
    addressFirstLine,
    place,
    postcode,
    price,
    floorFt,
    acres,
    beds,
    baths,
  } = property;

  return (
    <div className="container">
      <link rel="stylesheet" href="_components/property-card/style.css" />
      {/* Placeholder */}
      <img
        src="https://media.rightmove.co.uk/66k/65827/153756641/65827_SLA012396569_IMG_01_0000.jpeg"
      />
      <div className="details">
        <div className="features">
          <span>{`beds ${NumGuard(beds, "")}`}</span>
          <span>{`baths ${NumGuard(baths, "")}`}</span>
          <span>{`sqrft ${NumGuard(floorFt, "")}`}</span>
          <span>{`acres ${NumGuard(acres, "")}`}</span>
        </div>
        <div className="addressFirstLine">{addressFirstLine}</div>
        <div className="place">{place}</div>
        <div className="postcode">{postcode}</div>
        <div className="price">{typeof price === "number" ? `£ ${price.toLocaleString()}` : ""}</div>
      </div>
    </div>
  )
}

module.exports = PropertyCard;