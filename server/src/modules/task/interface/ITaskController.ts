import { Request, Response } from 'express';

export interface ITaskController {
    createTask(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    getTaskById(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    getAllTasks(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    updateTask(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    deleteTask(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}