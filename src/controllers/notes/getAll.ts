import { Request, Response } from 'express';
import { Note } from '../../models/notes/note';

export const getAll = async (req: Request, res: Response) => {
  const result = await Note.find({}, '-updatedAt');
  res.status(200).json(result);
};

