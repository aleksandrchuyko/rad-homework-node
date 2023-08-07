import { Request, Response } from 'express';
import { Note } from '../../models/notes/note';
import { parseDates } from '../../utils/index';

export const addNew = async (req: Request, res: Response) => {
  const note = { ...req.body, dates: parseDates(req.body.content) };
  const result = await Note.create(note);
  res.status(201).json(result);
};
