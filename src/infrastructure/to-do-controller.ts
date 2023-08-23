import { Request, Response } from "express";

import { CreateTodo } from "../application/create-to-do";

export class TodoController {
  constructor(private readonly createTodo: CreateTodo) {}

  async run(req: Request, res: Response) {
    const todoId = req.params.id;

    await this.createTodo.create(todoId);
    res.status(200).send();
  }
}
