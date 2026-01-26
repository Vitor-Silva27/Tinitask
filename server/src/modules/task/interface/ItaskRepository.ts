import { CreateTaskDTO } from "../dto/createTask.dto.js";
import { Task } from "../entity/task.entity.js";

export interface ITaskRepository {
    createTask(task: CreateTaskDTO): Promise<string>;
    getTaskById(taskId: string): Promise<Task | null>;
    getAllTasks(): Promise<Task[]>;
    updateTask(taskId: string, taskData: Partial<CreateTaskDTO>): Promise<void>;
    deleteTask(taskId: string): Promise<void>;
}