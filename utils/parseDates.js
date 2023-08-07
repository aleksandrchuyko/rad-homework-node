"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseDates = void 0;
const parseDates = (str) => {
    const matches = [];
    const res = str.match(/[1-3]?[0-9]\/[1]?[0-9]\/\d{4}/g);
    if (res) {
        res.forEach((element) => {
            matches.push(element.toString());
        });
    }
    return matches;
};
exports.parseDates = parseDates;
//# sourceMappingURL=parseDates.js.map