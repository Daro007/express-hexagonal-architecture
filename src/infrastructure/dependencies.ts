import { CreateTodo } from "../application/create-to-do";
import { TodoController } from "./to-do-controller";

export const createTodo = new CreateTodo();
export const todoController = new TodoController(createTodo);
