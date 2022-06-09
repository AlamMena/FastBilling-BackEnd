"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateValidationResponse = void 0;
function GenerateValidationResponse(params) {
    var _a, _b;
    let response = {
        Message: (_a = params === null || params === void 0 ? void 0 : params.Message) !== null && _a !== void 0 ? _a : "An validation error has ocurred",
        Code: (_b = params === null || params === void 0 ? void 0 : params.Code) !== null && _b !== void 0 ? _b : 400
    };
    return response;
}
exports.GenerateValidationResponse = GenerateValidationResponse;
