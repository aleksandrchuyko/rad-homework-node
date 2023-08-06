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

module.exports = parseDates;
