import { IDatabaseProvider } from "@app/infra/database/IDatabaseProvider";
import { CreateTaskDTO } from "../dto/createTask.dto";
import { ITaskRepository } from "../interface/ItaskRepository";
import { inject, injectable } from "inversify";
import { Task } from '@app/modules/task/entity/task.entity'
import { identifiers } from "@app/infra/inversify/identifiers";

@injectable()
export class TaskRepository implements ITaskRepository {

    constructor(
        @inject(identifiers.Provider) private readonly typeormProvider: IDatabaseProvider,
    ) { }

    async createTask(task: CreateTaskDTO): Promise<string> {
        const taskRepository = this.typeormProvider.getRepository(Task);
        const newTask = await taskRepository.save({
            title: task.title,
            description: task.description,
            dueDate: task.dueDate
        });
        return newTask.id;
    }

    async getTaskById(taskId: string): Promise<Task | null> {
        const taskRepository = this.typeormProvider.getRepository(Task);
        const task = await taskRepository.findOne({ where: { id: taskId } });
        return task;
    }

    async getAllTasks(): Promise<Task[]> {
        const taskRepository = this.typeormProvider.getRepository(Task);
        const tasks = await taskRepository.find();
        return tasks;
    }

    async updateTask(taskId: string, taskData: Partial<CreateTaskDTO>): Promise<void> {
        const taskRepository = this.typeormProvider.getRepository(Task);

        const updateData: Partial<Task> = taskData as Partial<Task>;

        await taskRepository.update(taskId, updateData);
    }

    async deleteTask(taskId: string): Promise<void> {
        const taskRepository = this.typeormProvider.getRepository(Task);
        await taskRepository.delete(taskId);
    }
}