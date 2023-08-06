import { Request, Response } from 'express';

const { Note } = require('../../models/notes/note');
const { RequestError } = require('../../utils');

const getById = async (req: Request, res: Response) => {
  const { noteId } = req.params;
  const result = await Note.findOne({ _id: noteId });
  if (!result) {
    throw RequestError(404, 'Not found');
  }
  res.status(200).json(result);
};

module.exports = getById;
