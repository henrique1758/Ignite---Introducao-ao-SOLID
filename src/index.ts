/* eslint-disable prettier/prettier */
/* eslint-disable import-helpers/order-imports */
/* eslint-disable prettier/prettier */
import express from "express";
import swaggerUi from "swagger-ui-express";
import { usersRoutes } from "./routes/users.routes";
import swaggerFileConfig from "./swagger.json";


const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFileConfig))

app.use("/users", usersRoutes);

export { app };

