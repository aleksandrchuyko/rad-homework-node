"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestError = void 0;
const messages = {
    400: 'Bad request',
    401: 'Unauthorized user',
    403: 'Forbidden',
    404: 'Page not found',
    409: 'Conflict',
};
const RequestError = (status, message = messages[status]) => {
    const error = new Error(message);
    error.code = status;
    return error;
};
exports.RequestError = RequestError;
//# sourceMappingURL=RequestError.js.map