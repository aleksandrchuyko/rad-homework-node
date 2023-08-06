import { Request, Response } from 'express';
const { Note } = require('../../models/notes/note');

const getAll = async (req: Request, res: Response) => {
  const result = await Note.find({}, '-updatedAt');
  res.status(200).json(result);
};

module.exports = getAll;
