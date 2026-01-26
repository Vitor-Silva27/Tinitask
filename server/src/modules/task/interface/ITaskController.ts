export interface ITaskController {
    createTask(request: any, response: any): Promise<any>;
}