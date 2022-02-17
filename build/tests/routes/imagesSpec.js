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
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("./../../index"));
describe('the image endpoint responses', () => {
    it('should return type = text/html from image', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(index_1.default).get('/image/get-image?name=fjord&width=300&height=300');
        expect(response.type).toEqual('text/html');
    }));
    it('should return 200 status from images endpoint', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(index_1.default).get('/image/get-image?name=fjord&width=300&height=300');
        expect(response.status).toEqual(200);
    }));
    it('should return 400 status if one of attributes missing from images endpoint', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(index_1.default).get('/image/get-image?name=fjord&height=300');
        expect(response.statusCode).toEqual(400);
    }));
    it('should return 404 status if image file was wrong from images endpoint', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(index_1.default).get('/image/get-image?name=notExsistImage&width=300&height=300');
        expect(response.statusCode).toEqual(404);
    }));
});
