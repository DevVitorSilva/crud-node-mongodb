import e from "express";
import { routes } from "./routes/user.js";
import dotEnv from "dotenv";

dotEnv.config();

const app = e();
const PORT = process.env.PORT || 9000;

app.use("/api/v1", routes)

app.listen(PORT, () => {
    console.log(`Server running: http://localhost:${PORT}/api/v1`)
})