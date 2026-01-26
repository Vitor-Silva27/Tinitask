import { CreateTaskDTO } from "../dto/createTask.dto";
import { Task } from "../entity/task.entity";

export interface ITaskService {
    createTask(taskData: CreateTaskDTO): Promise<string>;
    getTaskById(taskId: string): Promise<any>;
}