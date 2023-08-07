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
exports.removeNote = void 0;
const note_1 = require("../../models/notes/note");
const utils_1 = require("../../utils");
const removeNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { noteId } = req.params;
    const result = yield note_1.Note.findByIdAndRemove(noteId);
    console.log(result);
    if (!result) {
        throw (0, utils_1.RequestError)(404, 'Not found');
    }
    res.status(201).json(result);
});
exports.removeNote = removeNote;
//# sourceMappingURL=removeNote.js.map