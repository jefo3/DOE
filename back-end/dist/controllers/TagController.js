"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CreateTagService_1 = __importDefault(require("../services/tag/CreateTagService"));
var UpdateTagService_1 = __importDefault(require("../services/tag/UpdateTagService"));
var DeleteTagService_1 = __importDefault(require("../services/tag/DeleteTagService"));
var ListTagService_1 = __importDefault(require("../services/tag/ListTagService"));
var TagController = /** @class */ (function () {
    function TagController() {
    }
    TagController.prototype.create = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var name_1, tag, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        name_1 = request.body.name;
                        return [4 /*yield*/, new CreateTagService_1.default().execute({
                                name: name_1,
                            })];
                    case 1:
                        tag = _a.sent();
                        return [2 /*return*/, response.json(tag)];
                    case 2:
                        error_1 = _a.sent();
                        return [2 /*return*/, response.status(400).json({ error: error_1.message })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TagController.prototype.update = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var name_2, id, tagUpdate, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        name_2 = request.body.name;
                        id = request.params.id;
                        return [4 /*yield*/, new UpdateTagService_1.default().execute({
                                name: name_2,
                                id: id,
                            })];
                    case 1:
                        tagUpdate = _a.sent();
                        return [2 /*return*/, response.json(tagUpdate)];
                    case 2:
                        error_2 = _a.sent();
                        return [2 /*return*/, response.status(400).json({ error: error_2.message })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TagController.prototype.delete = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, tagDelete, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = request.params.id;
                        return [4 /*yield*/, new DeleteTagService_1.default().execute({
                                id: id,
                            })];
                    case 1:
                        tagDelete = _a.sent();
                        return [2 /*return*/, response.json(tagDelete)];
                    case 2:
                        error_3 = _a.sent();
                        return [2 /*return*/, response.status(400).json({ error: error_3.message })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TagController.prototype.list = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var tags, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, new ListTagService_1.default().execute()];
                    case 1:
                        tags = _a.sent();
                        return [2 /*return*/, response.json(tags)];
                    case 2:
                        error_4 = _a.sent();
                        return [2 /*return*/, response.status(400).json({ error: error_4.message })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return TagController;
}());
exports.default = TagController;
