"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const sharp_1 = __importDefault(require("sharp"));
const routes = express_1.default.Router();
routes.use(express_1.default.static("public"));
routes.get("/", (req, res) => {
    const imgName = req.query.name;
    const imgWidth = req.query.width;
    const imgHeight = req.query.height;
    const newImgName = `${imgName}_${imgWidth}_${imgHeight}.jpg`;
    fs_1.default.access(`./public/thumbnails/${newImgName}`, (err) => {
        if (err) {
            fs_1.default.access(`./public/images/${imgName}.jpg`, (err) => {
                if (err) {
                    res.send("file does not exist");
                }
                else {
                    fs_1.default.readFile(`./public/images/${imgName}.jpg`, (err, data) => {
                        if (err)
                            throw err;
                        (0, sharp_1.default)(data).resize(parseInt(imgWidth), parseInt(imgHeight)).toFile(`./public/thumbnails/${newImgName}`);
                        res.send(`<img src="/thumbnails/${newImgName}" />`);
                    });
                }
            });
        }
        else {
            res.send(`<img src="/thumbnails/${newImgName}" />`);
        }
    });
});
exports.default = routes;
