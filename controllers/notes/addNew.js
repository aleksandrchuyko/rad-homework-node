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
Object.defineProperty(exports, "__esModule", { value: true });
exports.addNew = void 0;
const note_1 = require("../../models/notes/note");
const index_1 = require("../../utils/index");
const addNew = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const note = Object.assign(Object.assign({}, req.body), { dates: (0, index_1.parseDates)(req.body.content) });
    const result = yield note_1.Note.create(note);
    res.status(201).json(result);
});
exports.addNew = addNew;
//# sourceMappingURL=addNew.js.map