const { createElement } = require("react");
const { hydrateRoot } = require("react-dom/client");
const Page = require("../../server/property/page");

hydrateRoot(document, createElement(Page));