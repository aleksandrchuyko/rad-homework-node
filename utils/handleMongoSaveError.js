"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleMongoSaveError = void 0;
const handleMongoSaveError = (error, data, next) => {
    const { code, name } = error;
    error.code = name === 'MongoServerError' && code === 11000 ? 409 : 400;
    next();
};
exports.handleMongoSaveError = handleMongoSaveError;
//# sourceMappingURL=handleMongoSaveError.js.map