"use strict";

var _require = require("react"),
  createContext = _require.createContext;
var _require2 = require("react-dom/client"),
  hydrateRoot = _require2.hydrateRoot;
var _require3 = require("../../dist/server/page"),
  Page = _require3.Page;
hydrateRoot(document, createContext(Page));