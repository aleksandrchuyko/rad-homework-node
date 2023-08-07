"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const notesRouter = require('./routes/api/notes');
dotenv_1.default.config({ path: __dirname + '/.env' });
const newApp = (0, express_1.default)();
const formatsLogger = newApp.get('env') === 'development' ? 'dev' : 'short';
newApp.use((0, morgan_1.default)(formatsLogger));
newApp.use((0, cors_1.default)());
newApp.use(express_1.default.json());
newApp.use('/api/notes', notesRouter);
newApp.use((req, res) => {
    res.status(404).json({ message: 'Not found' });
});
newApp.use((err, req, res, next) => {
    var _a, _b;
    res.status((_a = err.code) !== null && _a !== void 0 ? _a : 500).json((_b = err.message) !== null && _b !== void 0 ? _b : 'server error');
});
module.exports = newApp;
//# sourceMappingURL=app.js.map