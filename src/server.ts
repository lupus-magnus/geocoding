import { DistancesController } from "@controllers/DistancesController";
import express from "express";

const app = express();
const port = 8000;

app.get("/distances", DistancesController.get);

console.log("running on", port);
app.listen(port);
