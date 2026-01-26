import { TaskController } from "@app/modules/task/controller/task.controller";

export const identifiers = {
  TaskService: Symbol.for('TaskService'),
  TaskRepository: Symbol.for('TaskRepository'),
  Provider: Symbol.for('Provider'),
  TaskController: Symbol.for('TaskController'),
};