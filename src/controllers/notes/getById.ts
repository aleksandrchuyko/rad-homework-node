import { Request, Response } from 'express';

import { Note } from '../../models/notes/note';
import { RequestError } from '../../utils';

export const getById = async (req: Request, res: Response) => {
  const { noteId } = req.params;
  const result = await Note.findOne({ _id: noteId });
  if (!result) {
    throw RequestError(404, 'Not found');
  }
  res.status(200).json(result);
};
