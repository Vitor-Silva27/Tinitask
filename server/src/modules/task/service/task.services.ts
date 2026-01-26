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
        const taskId = await this.taskRepository.createTask({
            title: taskData.title.trim(),
            description: taskData.description,
            dueDate: taskData.dueDate,
            priority: taskData.priority,
        });
        return taskId;
    }

    async getTaskById(taskId: string): Promise<Task | null> {
        const task = await this.taskRepository.getTaskById(taskId);
        if (!task) {
            throw ApiError.badRequest("Task not found");
        }
        return task;
    }

    private validateTaskData({ title, dueDate, priority }: CreateTaskDTO): void {
        if (!title?.trim()) {
            throw ApiError.badRequest("Title is required");
        }
        if (title.length < 3 || title.length > 100) {
            throw ApiError.badRequest("Title must be between 3 and 100 characters");
        }
        if (priority && !["low", "medium", "high"].includes(priority)) {
            throw ApiError.badRequest("Priority must be 'low', 'medium', or 'high'");
        }
        if (dueDate && dueDate < new Date()) {
            throw ApiError.badRequest("Due date cannot be in the past");
        }
    }
}