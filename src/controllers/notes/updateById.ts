import { Request, Response } from 'express';

import { Note } from '../../models/notes/note';
import { RequestError, parseDates } from '../../utils';

export const updateById = async (req: Request, res: Response) => {
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
