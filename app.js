import dotEnv from "dotenv";
import e from "express";
import { routes } from "./routes/userRoutes.js";
import { connectDB } from "./database/connectDB.js";

dotEnv.config();

const app = e();
const PORT = process.env.PORT || 9000;

connectDB();

app.use("/api/v1", routes);

app.listen(PORT, () => {
    console.log(`Server running: http://localhost:${PORT}/api/v1`);
});