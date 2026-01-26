import 'reflect-metadata';

import { Container } from 'inversify';
import { identifiers } from './identifiers';
import { TaskService } from '@app/modules/task/service/task.services';
import { TaskRepository } from '@app/modules/task/repository/task.repository';
import { TypeormProvider } from '@app/infra/database/typeorm.provider';
import { ITaskService } from '@app/modules/task/interface/ITaskService';
import { ITaskRepository } from '@app/modules/task/interface/ItaskRepository';
import { IDatabaseProvider } from '../database/IDatabaseProvider';
import { TaskController } from '@app/modules/task/controller/task.controller';
import { ITaskController } from '@app/modules/task/interface/ITaskController';


const container = new Container();

container.bind<ITaskController>(identifiers.TaskController).to(TaskController);
container.bind<ITaskService>(identifiers.TaskService).to(TaskService);
container.bind<ITaskRepository>(identifiers.TaskRepository).to(TaskRepository);
container.bind<IDatabaseProvider>(identifiers.Provider).to(TypeormProvider);

export { container };