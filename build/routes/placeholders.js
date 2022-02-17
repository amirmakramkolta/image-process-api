"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const placeholderUtilities_1 = __importDefault(require("../utilities/placeholderUtilities"));
const route = express_1.default.Router();
route.get('/get-placeholder', (req, res) => {
    const placeholderWidth = req.query.width;
    const placeholderHeight = req.query.height;
    if (placeholderHeight == null || placeholderWidth == null) {
        res.status(400);
        res.send('Their is attribute(s) in query is missing');
    }
    else if (isNaN(parseInt(placeholderWidth)) ||
        isNaN(parseInt(placeholderHeight))) {
        res.status(400);
        res.send('you typed attribute(s) wrong');
    }
    else {
        res.status(200);
        res.send(placeholderUtilities_1.default.placeholderInHtml(placeholderWidth, placeholderHeight));
    }
});
exports.default = route;
