"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const carController_1 = __importDefault(require("../controller/carController"));
const carRouter = (0, express_1.Router)();
carRouter.get('/', carController_1.default.find);
carRouter.post('/', carController_1.default.add);
carRouter.put('/:id', carController_1.default.update);
carRouter.delete('/:id', carController_1.default.delete);
carRouter.get('/:id', carController_1.default.findById);
exports.default = carRouter;
//# sourceMappingURL=carRouter.js.map