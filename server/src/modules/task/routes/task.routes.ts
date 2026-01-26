import { container } from "@app/infra/inversify/container";
import { Router } from "express";
import { TaskController } from "../controller/task.controller";
import { identifiers } from "@app/infra/inversify/identifiers";

export const taskRouter = Router();
const controller = container.get<TaskController>(identifiers.TaskController);
taskRouter.post("/", controller.createTask.bind(controller));
taskRouter.get("/:id", controller.getTaskById.bind(controller));
taskRouter.get("/", controller.getAllTasks.bind(controller));
taskRouter.patch("/:id", controller.updateTask.bind(controller));
taskRouter.delete("/:id", controller.deleteTask.bind(controller));
