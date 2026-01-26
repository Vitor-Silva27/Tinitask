import { inject, injectable } from "inversify";
import { ITaskRepository } from "../interface/ItaskRepository";
import { CreateTaskDTO } from "../dto/createTask.dto";
import { identifiers } from "@app/infra/inversify/identifiers";
import { ApiError } from "@app/shared/errors/ApiError";
import { Task } from "../entity/task.entity";
import { ITaskService } from "../interface/ITaskService";

@injectable()
export class TaskService implements ITaskService {
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

    async getAllTasks(): Promise<Task[]> {
        const tasks = await this.taskRepository.getAllTasks();
        return tasks;
    }


    async updateTask(taskId: string, taskData: Partial<CreateTaskDTO>): Promise<void> {
        const existingTask = await this.taskRepository.getTaskById(taskId);
        if (!existingTask) {
            throw ApiError.badRequest("Task not found");
        }

        this.validateTaskData({
            title: taskData.title ?? existingTask.title,
            dueDate: taskData.dueDate ?? existingTask.dueDate,
            priority: taskData.priority ?? existingTask.priority,
        } as CreateTaskDTO);

        await this.taskRepository.updateTask(taskId, taskData);
    }

    async deleteTask(taskId: string): Promise<void> {
        const existingTask = await this.taskRepository.getTaskById(taskId);
        if (!existingTask) {
            throw ApiError.badRequest("Task not found");
        }

        await this.taskRepository.deleteTask(taskId);
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