import { inject, injectable } from "inversify";
import { ITaskRepository } from "../interface/ItaskRepository";
import { CreateTaskDTO } from "../dto/createTask.dto";
import { identifiers } from "@app/infra/inversify/identifiers";
import { ApiError } from "@app/shared/errors/ApiError";
import { Task } from "../entity/task.entity";

@injectable()
export class TaskService {
    constructor(
        @inject(identifiers.TaskRepository) private readonly taskRepository: ITaskRepository,
    ) { }

    async createTask(taskData: CreateTaskDTO): Promise<string> {
        this.validateTaskData(taskData);
        const taskId = await this.taskRepository.createTask(taskData);
        return taskId;
    }

    async getTaskById(taskId: string): Promise<Task | null> {
        const task = await this.taskRepository.getTaskById(taskId);
        if (!task) {
            throw ApiError.badRequest("Task not found");
        }
        return task;
    }

    private validateTaskData(taskData: CreateTaskDTO): void {
        if (!taskData.title || taskData.title.trim().length === 0) {
            throw ApiError.badRequest("Title is required");
        }
        if (taskData.title.length < 3 || taskData.title.length > 100) {
            throw ApiError.badRequest("Title must be between 3 and 100 characters");
        }
        if (taskData.priority && !["low", "medium", "high"].includes(taskData.priority)) {
            throw ApiError.badRequest("Priority must be 'low', 'medium', or 'high'");
        }
        if (taskData.dueDate && taskData.dueDate < new Date()) {
            throw ApiError.badRequest("Due date cannot be in the past");
        }
    }
}