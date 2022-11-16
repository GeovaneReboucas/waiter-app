import { Request, Response } from 'express';

import { Category } from '../../models/Category';

export async function createCategory(req: Request, res: Response) {
  try {
    const { name, icon } = req.body;

    if (!name) {
      return res.status(400).json({
        error: 'Name is required',
      });
    }

    const category = await Category.create({ name, icon });

    res.status(201).json(category);
  } catch {
    res.status(500).json({
      error: 'Internal server error!',
    });
  }
}
