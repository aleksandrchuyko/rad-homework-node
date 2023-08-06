import { Request, Response } from 'express';

const { Note } = require('../../models/notes/note');
const { RequestError } = require('../../utils');

const removeNote = async (req: Request, res: Response) => {
  const { noteId } = req.params;
  const result = await Note.findByIdAndRemove(noteId);
  console.log(result);
  if (!result) {
    throw RequestError(404, 'Not found');
  }
  res.status(201).json(result);
};

module.exports = removeNote;
