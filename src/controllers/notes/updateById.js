const { Note } = require('../../models/notes/note');
const { RequestError, parseDates } = require('../../utils');

const updateById = async (req, res) => {
  const { noteId } = req.params;
  const note = { ...req.body };
  note.dates = parseDates(note.content);
  const result = await Note.findByIdAndUpdate(noteId, note, {
    new: true,
  });
  if (!result) {
    throw RequestError(404, 'Not found');
  }
  res.status(201).json(result);
};

module.exports = updateById;
