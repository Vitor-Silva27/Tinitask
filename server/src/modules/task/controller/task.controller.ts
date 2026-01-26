import { inject, injectable } from "inversify";
import { ITaskService } from "@app/modules/task/interface/ITaskService";
import { identifiers } from "@app/infra/inversify/identifiers";
import { ITaskController } from "../interface/ITaskController";
import { Request, Response } from "express";
import { validate as isUUID } from 'uuid';

@injectable()
export class TaskController implements ITaskController {

    constructor(
        @inject(identifiers.TaskService) private readonly taskService: ITaskService,
    ) { }

    async createTask(req: Request, res: Response): Promise<Response<any, Record<string, any>>> {
        const taskData = req.body;
        const taskId = await this.taskService.createTask(taskData);
        return res.status(201).json({ taskId });
    }

    async getTaskById(req: Request<{ id: string }>, res: Response): Promise<Response<any, Record<string, any>>> {
        const taskId = req.params.id;
        if (!isUUID(taskId)) {
            return res.status(400).json({ message: "Invalid task ID" });
        }
        const task = await this.taskService.getTaskById(taskId);
        return res.status(200).json(task);
    }

    async getAllTasks(req: Request, res: Response): Promise<Response<any, Record<string, any>>> {
        const tasks = await this.taskService.getAllTasks();
        return res.status(200).json(tasks);
    }

    async updateTask(req: Request<{ id: string }>, res: Response): Promise<Response<any, Record<string, any>>> {
        const taskId = req.params.id;
        const taskData = req.body;
        if (!isUUID(taskId)) {
            return res.status(400).json({ message: "Invalid task ID" });
        }
        await this.taskService.updateTask(taskId, taskData);
        return res.status(200).json({ message: "Task updated successfully" });
    }

    async deleteTask(req: Request<{ id: string }>, res: Response): Promise<Response<any, Record<string, any>>> {
        const taskId = req.params.id;
        if (!isUUID(taskId)) {
            return res.status(400).json({ message: "Invalid task ID" });
        }
        await this.taskService.deleteTask(taskId);
        return res.status(200).json({ message: "Task deleted successfully" });
    }

}