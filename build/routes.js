"use strict";
exports.__esModule = true;
var express_1 = require("express");
var BotController_1 = require("./controllers/BotController");
var routes = express_1["default"].Router();
var botController = BotController_1["default"]();
routes.get('/', botController.index);
exports["default"] = routes;
