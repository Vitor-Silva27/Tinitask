import express from "express";
import { routes } from "./routes";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.get("/", (req, res) => {
    res.send("TiniTask API is running");
});

export { app };