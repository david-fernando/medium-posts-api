"use strict";
exports.__esModule = true;
var express_1 = require("express");
var cors_1 = require("cors");
var BotController_1 = require("./controllers/BotController");
var routes = express_1["default"].Router();
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
};
var botController = BotController_1["default"]();
routes.get('/', cors_1["default"](corsOptions), botController.index);
exports["default"] = routes;
