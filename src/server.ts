import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import swaggerUi from "swagger-ui-express";

import swaggerFile from "./swagger.json";
import { DistancesController } from "@controllers/DistancesController";

const app = express();

app.use(express.json());
app.get("/distances", DistancesController.get);
app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerFile));

export { app };
