"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = require("jsonwebtoken");
var auth_1 = __importDefault(require("../config/auth"));
function ensureAuthenticated(request, response, next) {
    // validação do token JWT
    var authHeader = request.headers.authorization;
    if (!authHeader) {
        throw new Error('Token JWT is missing');
    }
    var _a = authHeader.split(' '), _ = _a[0], token = _a[1];
    try {
        var decoded = jsonwebtoken_1.verify(token, auth_1.default.jwt.secret);
        // as tokenPayload força o decoded a ser do tipo tokenPaload
        var sub = decoded.sub;
        request.user = {
            id: sub,
        };
        return next();
    }
    catch (err) {
        throw new Error('token JWT invalid ');
    }
}
exports.default = ensureAuthenticated;
