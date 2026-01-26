import { IDatabaseProvider } from "@app/infra/database/IDatabaseProvider";
import { CreateTaskDTO } from "../dto/createTask.dto";
import { ITaskRepository } from "../interface/ItaskRepository";
import { inject, injectable } from "inversify";
import {Task} from '@app/modules/task/entity/task.entity'
import { identifiers } from "@app/infra/inversify/identifiers";

@injectable()
export class TaskRepository implements ITaskRepository {

    constructor(
    @inject(identifiers.Provider) private readonly typeormProvider: IDatabaseProvider,
  ) {}

    async createTask(task: CreateTaskDTO): Promise<string> {
        const taskRepository = this.typeormProvider.getRepository(Task);
        const newTask = await taskRepository.save({
            title: task.title,
            description: task.description,
            dueDate: task.dueDate
        });
        return newTask.id;
    }
}