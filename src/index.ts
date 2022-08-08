import { app } from "./server";

const port = process.env.PORT ?? 8000;

console.log("Server up and running on port", port);
app.listen(port);
