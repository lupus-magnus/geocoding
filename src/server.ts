import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import { DistancesController } from "@controllers/DistancesController";

const app = express();

app.get("/distances", DistancesController.get);

export { app };
