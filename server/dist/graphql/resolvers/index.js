"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("./user"));
const resolvers = {
    Query: Object.assign({}, user_1.default.Query),
    Mutation: Object.assign({}, user_1.default.Mutation),
};
exports.default = resolvers;
//# sourceMappingURL=index.js.map