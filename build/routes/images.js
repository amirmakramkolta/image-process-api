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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const imageUtilities_1 = __importDefault(require("./../utilities/imageUtilities"));
const routes = express_1.default.Router();
routes.use(express_1.default.static('public'));
routes.get('/get-image', (req, res) => {
    const imgName = req.query.name;
    const imgWidth = req.query.width;
    const imgHeight = req.query.height;
    if (imgHeight == null || imgWidth == null || imgName == null) {
        res.status(400);
        res.send('Their is attribute(s) in query is missing');
    }
    else if (isNaN(parseInt(imgHeight)) ||
        isNaN(parseInt(imgWidth)) ||
        parseInt(imgWidth) <= 0 ||
        parseInt(imgHeight) <= 0) {
        res.status(400);
        res.send('you typed attribute(s) wrong');
    }
    else {
        const newImgName = `${imgName}_${imgWidth}_${imgHeight}.jpg`;
        fs_1.default.access(`./public/thumbnails/${newImgName}`, (err) => __awaiter(void 0, void 0, void 0, function* () {
            if (err) {
                fs_1.default.access(`./public/images/${imgName}.jpg`, (err) => {
                    if (err) {
                        res.status(404);
                        res.send('file does not exist');
                    }
                    else {
                        fs_1.default.readFile(`./public/images/${imgName}.jpg`, (err, data) => __awaiter(void 0, void 0, void 0, function* () {
                            if (err) {
                                console.log(err);
                            }
                            imageUtilities_1.default
                                .createResisedImage(data, parseInt(imgWidth), parseInt(imgHeight), `./public/thumbnails/${newImgName}`)
                                .then((data) => {
                                console.log(data);
                            });
                            res.status(200);
                            setTimeout(() => __awaiter(void 0, void 0, void 0, function* () {
                                const tag = yield imageUtilities_1.default.imgInHtml(newImgName);
                                res.send(tag);
                            }), 1000);
                        }));
                    }
                });
            }
            else {
                res.status(200);
                const tag = yield imageUtilities_1.default.imgInHtml(newImgName);
                res.send(tag);
            }
        }));
    }
});
exports.default = routes;
