import { inject, injectable } from "inversify";
import { ITaskRepository } from "../interface/ItaskRepository";
import { CreateTaskDTO } from "../dto/createTask.dto";
import { identifiers } from "@app/infra/inversify/identifiers";
import { ApiError } from "@app/shared/errors/ApiError";

@injectable()
export class TaskService {
    constructor(
        @inject(identifiers.TaskRepository) private readonly taskRepository: ITaskRepository,
    ) {}

    async createTask(taskData: CreateTaskDTO): Promise<string> {
        this.validateTaskData(taskData);
        const taskId = await this.taskRepository.createTask(taskData);
        return taskId;
    }

    private validateTaskData(taskData: CreateTaskDTO): void {
        if (!taskData.title || taskData.title.trim().length === 0) {
            throw ApiError.badRequest("Title is required");
        }
        if (taskData.title.length < 3 || taskData.title.length > 100) {
            throw ApiError.badRequest("Title must be between 3 and 100 characters");
        }
    }
}