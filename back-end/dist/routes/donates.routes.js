"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var DonateController_1 = __importDefault(require("../controllers/DonateController"));
var ensureAuthenticated_1 = __importDefault(require("../middlewares/ensureAuthenticated"));
var donates = express_1.Router();
var donateController = new DonateController_1.default();
donates.use(ensureAuthenticated_1.default);
donates.post('/', donateController.create);
donates.get('/', donateController.list);
donates.put('/:id', donateController.update);
donates.delete('/:id', donateController.delete);
donates.get('/feed', donateController.listAll);
donates.get('/feed/success', donateController.listAllSuccessfull);
donates.get('/feed/:tag_id', donateController.filterTag);
exports.default = donates;
