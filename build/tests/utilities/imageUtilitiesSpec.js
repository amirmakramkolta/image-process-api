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
const imageUtilities_1 = __importDefault(require("../../utilities/imageUtilities"));
const fs_1 = __importDefault(require("fs"));
describe('the image utilities', () => {
    it('should return img tag', () => __awaiter(void 0, void 0, void 0, function* () {
        const tag = yield imageUtilities_1.default.imgInHtml('AnyName');
        expect(tag).toContain('img');
    }));
    it('should returns the new dimension of the photo after resizing', () => __awaiter(void 0, void 0, void 0, function* () {
        fs_1.default.readFile('./public/images/santamonica.jpg', (err, data) => __awaiter(void 0, void 0, void 0, function* () {
            const width = 100;
            const height = 100;
            const ImageName = 'santamonica';
            const newImgName = `${ImageName}_${width}_${height}.jpg`;
            const info = yield imageUtilities_1.default.createResisedImage(data, 100, 100, `./public/thumbnails/${newImgName}`);
            expect(info.width).toEqual(width);
            expect(info.height).toEqual(height);
        }));
    }));
});
