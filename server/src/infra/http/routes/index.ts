import { Router } from "express";
import { taskRouter } from "@app/modules/task/routes/task.routes";

const routes = Router();

routes.use("/task", taskRouter);

export { routes };