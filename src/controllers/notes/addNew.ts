import { Request, Response } from 'express';
const { Note } = require('../../models/notes/note');
const { parseDates } = require('../../utils');

const addNew = async (req: Request, res: Response) => {
  const note = { ...req.body, dates: parseDates(req.body.content) };
  const result = await Note.create(note);
  res.status(201).json(result);
};

module.exports = addNew;
