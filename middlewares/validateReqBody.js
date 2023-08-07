"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateReqBody = void 0;
const utils_1 = require("../utils");
const validateReqBody = (schema) => {
    const wrap = (req, res, next) => {
        const { error } = schema.validate(req.body);
        if (error) {
            next((0, utils_1.RequestError)(400, error.message));
        }
        next();
    };
    return wrap;
};
exports.validateReqBody = validateReqBody;
//# sourceMappingURL=validateReqBody.js.map