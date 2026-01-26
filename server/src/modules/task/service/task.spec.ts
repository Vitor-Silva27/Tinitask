import { CreateTaskDTO } from "../dto/createTask.dto";
import { ITaskRepository } from "../interface/ItaskRepository";
import { ITaskService } from "../interface/ITaskService";
import { TaskService } from "./task.services";

const taskRepositoryMock: jest.Mocked<ITaskRepository> = {
  createTask: jest.fn(),
  getTaskById: jest.fn(),
};

describe("TaskService", () => {
  let service: ITaskService;

  beforeEach(() => {
    service = new TaskService(taskRepositoryMock);
  });

  describe("createTask", () => {

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

    it("should not create a task with missing title", async () => {
      const dto: CreateTaskDTO = {
        title: "",
        description: "This is a test task without a title",
      };
      await expect(service.createTask(dto)).rejects.toMatchObject({
        message: "Title is required",
        statusCode: 400,
      });
    });

    it("should not create a task with a title shorter than 3 or longer than 100 characters", async () => {
      const shortTitleDto: CreateTaskDTO = {
        title: "Hi",
      };
      const longTitleDto: CreateTaskDTO = {
        title: "A".repeat(101),
      };
      await expect(service.createTask(shortTitleDto)).rejects.toMatchObject({
        message: "Title must be between 3 and 100 characters",
        statusCode: 400,
      });
      await expect(service.createTask(longTitleDto)).rejects.toMatchObject({
        message: "Title must be between 3 and 100 characters",
        statusCode: 400,
      });
    });

    it("should create a task with all optional fields", async () => {
      const dto: CreateTaskDTO = {
        title: "Complete Task",
        description: "This task has all optional fields filled",
        dueDate: new Date(Date.now() + (1000 * 60 * 60 * 24)),
        priority: "high",
      };
      taskRepositoryMock.createTask.mockResolvedValue("task-id-456");
      const result = await service.createTask(dto);
      expect(taskRepositoryMock.createTask).toHaveBeenCalledWith(dto);
      expect(result).toBe("task-id-456");
    });

    it("should not create a task with past due date", async () => {
      const dto: CreateTaskDTO = {
        title: "Past Due Task",
        dueDate: new Date(Date.now() - (1000 * 60 * 60 * 24))
      };
      await expect(service.createTask(dto)).rejects.toMatchObject({
        message: "Due date cannot be in the past",
        statusCode: 400,
      });
    });

    it("should not create a task with invalid priority", async () => {
      const dto: CreateTaskDTO = {
        title: "Invalid Priority Task",
        priority: "urgent" as any,
      };
      await expect(service.createTask(dto)).rejects.toMatchObject({
        message: "Priority must be 'low', 'medium', or 'high'",
        statusCode: 400,
      });
    });
  })

  describe("getTaskById", () => {
    it("should return a task by its id", async () => {
      const mockTask = {
        id: "task-id-789",
        title: "Fetched Task",
        description: "This task was fetched by ID",
      } as any;

      taskRepositoryMock.getTaskById.mockResolvedValue(mockTask);
      const result = await service.getTaskById("task-id-789");

      expect(taskRepositoryMock.getTaskById).toHaveBeenCalledTimes(1);
      expect(taskRepositoryMock.getTaskById).toHaveBeenCalledWith("task-id-789");
      expect(result).toBe(mockTask);
    });

    it('should throw not found error if task does not exist', async () => {
      taskRepositoryMock.getTaskById.mockResolvedValue(null);

      await expect(
        service.getTaskById('non-existent-id')
      ).rejects.toMatchObject({
        message: 'Task not found',
        statusCode: 400,
      });
    });

  });


});