import { Request, Response } from 'express';

import { Note } from '../../models/notes/note';

export const setMockCollection = async (req: Request, res: Response) => {
  const notesInitialState = [
    {
      content: "It's time to return the books to the library",
      category: 'Random Thought',
      active: false,
      dates: [],
    },
    {
      content: "I need ketchup, it's time to go to the store",
      category: 'Task',
      active: true,
      dates: [],
    },
    {
      content: 'Who painted the fence?',
      category: 'Random Thought',
      active: true,
      dates: [],
    },
    {
      content: 'Sport - is life...',
      category: 'Idea',
      active: true,
      dates: [],
    },
    {
      content:
        "I'm gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2021",
      category: 'Task',
      active: true,
      dates: ['3/5/2021', '5/5/2021'],
    },
    {
      content: "Isn't it time to visit grandmother in the village?",
      category: 'Random Thought',
      active: true,
      dates: [],
    },
    {
      content: 'It would be wonderful to start my own business',
      category: 'Idea',
      active: true,
      dates: [],
    },
    {
      content: 'My smartphone needs an OS update. Maybe at 12/7/2023',
      category: 'Task',
      active: true,
      dates: ['12/7/2023'],
    },
  ];
  await Note.deleteMany({});

  notesInitialState.forEach((item) => Note.create(item));

  res.status(201).json('Ok');
};
