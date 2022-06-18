"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var TagController_1 = __importDefault(require("../controllers/TagController"));
var tags = express_1.Router();
var tagController = new TagController_1.default();
tags.post('/', tagController.create);
tags.put('/:id', tagController.update);
tags.delete('/:id', tagController.delete);
tags.get('/', tagController.list);
exports.default = tags;
