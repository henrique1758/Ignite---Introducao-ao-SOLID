/* eslint-disable prettier/prettier */
/* eslint-disable import-helpers/order-imports */
/* eslint-disable prettier/prettier */
import express from "express";
import { usersRoutes } from "./routes/users.routes";

const app = express();

app.use(express.json());

app.use("/users", usersRoutes);

export { app };

