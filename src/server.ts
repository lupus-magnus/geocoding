import express from "express";

// import { LoggerService } from "@services/LoggerService";

const app = express();
const port = 8000;

app.get("/distances", (req, res) => {
  //   LoggerService.execute();
  return res.json({ hello: "world" });
});

console.log("running on", port);
app.listen(port);
