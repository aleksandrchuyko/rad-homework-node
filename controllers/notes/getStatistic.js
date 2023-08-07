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
exports.getStatistic = void 0;
const { Note } = require('../../models/notes/note');
const getStatistic = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const categoriesList = ['Task', 'Idea', 'Random Thought'];
    const queries = [];
    categoriesList.forEach((item) => {
        const active = Note.aggregate([
            {
                $match: {
                    category: {
                        $eq: item,
                    },
                    active: {
                        $eq: true,
                    },
                },
            },
            {
                $count: 'active',
            },
        ]).exec();
        const archived = Note.aggregate([
            {
                $match: {
                    category: {
                        $eq: item,
                    },
                    active: {
                        $eq: false,
                    },
                },
            },
            {
                $count: 'archived',
            },
        ]).exec();
        queries.push(active, archived);
    });
    Promise.all(queries).then((stats) => {
        const result = categoriesList.map((category) => {
            let nextStat = stats.shift()[0];
            const active = (nextStat === null || nextStat === void 0 ? void 0 : nextStat.active) ? nextStat.active : 0;
            nextStat = stats.shift()[0];
            const archived = (nextStat === null || nextStat === void 0 ? void 0 : nextStat.archived) ? nextStat.archived : 0;
            return {
                name: category,
                active,
                archived,
            };
        });
        res.status(200).json(result);
    });
});
exports.getStatistic = getStatistic;
//# sourceMappingURL=getStatistic.js.map