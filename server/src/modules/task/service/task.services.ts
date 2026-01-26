import { inject, injectable } from "inversify";
import { ITaskRepository } from "../interface/ItaskRepository";
import { CreateTaskDTO } from "../dto/createTask.dto";
import { identifiers } from "@app/infra/inversify/identifiers";

@injectable()
export class TaskService {
    constructor(
        @inject(identifiers.TaskRepository) private readonly taskRepository: ITaskRepository,
    ) {}

    async createTask(taskData: CreateTaskDTO): Promise<string> {
        const taskId = await this.taskRepository.createTask(taskData);
        return taskId;
    }
    
}