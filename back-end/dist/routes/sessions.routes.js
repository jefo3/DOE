"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var SessionController_1 = __importDefault(require("../controllers/SessionController"));
var sessions = express_1.Router();
var sessionsController = new SessionController_1.default();
sessions.post('/', sessionsController.create);
exports.default = sessions;
