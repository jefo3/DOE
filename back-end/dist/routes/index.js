"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var users_routes_1 = __importDefault(require("./users.routes"));
var donates_routes_1 = __importDefault(require("./donates.routes"));
var sessions_routes_1 = __importDefault(require("./sessions.routes"));
var tags_routes_1 = __importDefault(require("./tags.routes"));
var routes = express_1.Router();
routes.use('/users', users_routes_1.default);
routes.use('/donates', donates_routes_1.default);
routes.use('/sessions', sessions_routes_1.default);
routes.use('/tags', tags_routes_1.default);
exports.default = routes;
