import { CreateTaskDTO } from "../dto/createTask.dto";
import { ITaskRepository } from "../interface/ItaskRepository";
import { ITaskService } from "../interface/ITaskService";
import { TaskService } from "./task.services";

const taskRepositoryMock: jest.Mocked<ITaskRepository> = {
  createTask: jest.fn(),
};

describe("TaskService", () => {
  let service: ITaskService;

  beforeEach(() => {
    service = new TaskService(taskRepositoryMock);
  });

  it("should create a task and return its id", async () => {
    const dto: CreateTaskDTO = {
      title: "Test Task",
      description: "This is a test task",
    };

    taskRepositoryMock.createTask.mockResolvedValue("task-id-123");

    const result = await service.createTask(dto);

    expect(taskRepositoryMock.createTask).toHaveBeenCalledTimes(1);
    expect(taskRepositoryMock.createTask).toHaveBeenCalledWith(dto);
    expect(result).toBe("task-id-123");
  });
});