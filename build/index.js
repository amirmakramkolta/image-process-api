"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const app = (0, express_1.default)();
const port = 3000;
app.get("/", () => {
    var img = fs_1.default.readFile("../images/fjord.jpg", (err, data) => {
        if (err)
            throw err;
        console.log(data);
    });
});
