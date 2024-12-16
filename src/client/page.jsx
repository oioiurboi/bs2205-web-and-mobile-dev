const { createContext } = require("react");
const { hydrateRoot } = require("react-dom/client");
const { Page } = require("../../dist/server/page");

hydrateRoot(document, createContext(Page));