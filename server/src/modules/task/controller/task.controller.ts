import { inject, injectable } from "inversify";
import { ITaskService } from "@app/modules/task/interface/ITaskService";
import { identifiers } from "@app/infra/inversify/identifiers";

@injectable()
export class TaskController {

    constructor(
        @inject(identifiers.TaskService) private readonly taskService: ITaskService,
    ) {}
    
    async createTask(req: any, res: any): Promise<void> {
        const taskData = req.body;
        const taskId = await this.taskService.createTask(taskData);
        res.status(201).json({ taskId });
    }

}