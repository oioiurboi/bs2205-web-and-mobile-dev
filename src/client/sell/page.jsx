const { hydrateRoot } = require("react-dom/client");
const { createElement } = require("react");
const Page = require("../../server/sell/page");

hydrateRoot(document, createElement(Page));