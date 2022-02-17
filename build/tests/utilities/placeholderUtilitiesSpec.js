"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const placeholderUtilities_1 = __importDefault(require("../../utilities/placeholderUtilities"));
describe("the placeholder utilities", () => {
    it('should have svg tag', () => {
        const tag = placeholderUtilities_1.default.placeholderInHtml("100", "200");
        expect(tag).toContain("svg");
    });
});
