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
exports.setMockCollection = void 0;
const note_1 = require("../../models/notes/note");
const setMockCollection = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const notesInitialState = [
        {
            content: "It's time to return the books to the library",
            category: 'Random Thought',
            active: false,
            dates: [],
        },
        {
            content: "I need ketchup, it's time to go to the store",
            category: 'Task',
            active: true,
            dates: [],
        },
        {
            content: 'Who painted the fence?',
            category: 'Random Thought',
            active: true,
            dates: [],
        },
        {
            content: 'Sport - is life...',
            category: 'Idea',
            active: true,
            dates: [],
        },
        {
            content: "I'm gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2021",
            category: 'Task',
            active: true,
            dates: ['3/5/2021', '5/5/2021'],
        },
        {
            content: "Isn't it time to visit grandmother in the village?",
            category: 'Random Thought',
            active: true,
            dates: [],
        },
        {
            content: 'It would be wonderful to start my own business',
            category: 'Idea',
            active: true,
            dates: [],
        },
        {
            content: 'My smartphone needs an OS update. Maybe at 12/7/2023',
            category: 'Task',
            active: true,
            dates: ['12/7/2023'],
        },
    ];
    yield note_1.Note.deleteMany({});
    notesInitialState.forEach((item) => note_1.Note.create(item));
    res.status(201).json('Ok');
});
exports.setMockCollection = setMockCollection;
//# sourceMappingURL=setMockCollection.js.map