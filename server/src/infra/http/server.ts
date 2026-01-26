import express from "express";
import { routes } from "./routes";
import cors from "cors";
import { errorMiddleware } from "@app/shared/middlewares/error.middleware";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.get("/", (req, res) => {
    res.send("TiniTask API is running");
});

app.use(errorMiddleware);

export { app };