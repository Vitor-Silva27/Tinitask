import { CreateTaskDTO } from "../dto/createTask.dto";

export interface ITaskService {
    createTask(taskData: CreateTaskDTO): Promise<string>;
}