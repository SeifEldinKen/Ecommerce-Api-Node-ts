"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// --> create instance
const app = (0, express_1.default)();
const PROT = 3000;
// --> start express
app.listen(PROT, () => {
    console.log(`Server is running on port: ${PROT}`);
});
