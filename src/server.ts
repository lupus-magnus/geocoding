import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import { DistancesController } from "@controllers/DistancesController";

const app = express();
const port = 8000;

app.get("/distances", DistancesController.get);

console.log("running on", port);
app.listen(port);
