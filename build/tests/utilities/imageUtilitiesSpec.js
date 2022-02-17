"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const imageUtilities_1 = __importDefault(require("../../utilities/imageUtilities"));
describe("the image utilities", () => {
    it('should return img tag', () => {
        const tag = imageUtilities_1.default.imgInHtml("AnyName");
        expect(tag).toContain("img");
    });
});
