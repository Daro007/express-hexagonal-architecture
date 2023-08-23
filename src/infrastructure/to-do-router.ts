import express from "express";

import { todoController } from "./dependencies";

const todoRouter = express.Router();

todoRouter.post("/:id", todoController.run.bind(todoController));

export { todoRouter };
