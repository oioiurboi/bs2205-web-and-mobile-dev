const { hydrateRoot } = require("react-dom/client");
const { createElement } = require("react");
const Page = require("../server/page.jsx");

hydrateRoot(document, createElement(Page));