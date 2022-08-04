import express from "express";

const app = express();
const port = 8000;

app.get("/", (req, res) => {
  return res.json({ hello: "world" });
});
console.log("running on", port);
app.listen(port);
