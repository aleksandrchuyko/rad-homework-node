import { Request, Response } from 'express';

const { Note } = require('../../models/notes/note');

const getStatistic = async (req: Request, res: Response) => {
  const categoriesList = ['Task', 'Idea', 'Random Thought'];
  const queries: Promise<[]>[] = [];
  categoriesList.forEach((item) => {
    // const name = category;
    const active = Note.aggregate([
      {
        $match: {
          category: {
            $eq: item,
          },
          active: {
            $eq: true,
          },
        },
      },
      {
        $count: 'active',
      },
    ]).exec();
    const archived = Note.aggregate([
      {
        $match: {
          category: {
            $eq: item,
          },
          active: {
            $eq: false,
          },
        },
      },
      {
        $count: 'archived',
      },
    ]).exec();
    queries.push(active, archived);
  });

  Promise.all(queries).then((stats: any[]) => {
    const result = categoriesList.map((category) => {
      let nextStat = stats.shift()[0];
      const active = nextStat?.active ? nextStat.active : 0;

      nextStat = stats.shift()[0];
      const archived = nextStat?.archived ? nextStat.archived : 0;
      return {
        name: category,
        active,
        archived,
      };
    });

    res.status(200).json(result);
  });
};

module.exports = getStatistic;
