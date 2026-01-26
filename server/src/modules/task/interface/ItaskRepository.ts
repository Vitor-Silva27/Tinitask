import { CreateTaskDTO } from "../dto/createTask.dto.js";

export interface ITaskRepository {
    createTask(task: CreateTaskDTO): Promise<string>;
}