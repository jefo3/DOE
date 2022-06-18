"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var UserController_1 = __importDefault(require("../controllers/UserController"));
var users = express_1.Router();
var userController = new UserController_1.default();
users.post('/', userController.create);
users.put('/:id', userController.update);
users.delete('/:id', userController.delete);
users.get('/', userController.list);
exports.default = users;
