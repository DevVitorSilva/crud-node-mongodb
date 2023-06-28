import e, { Router } from "express";
import { people, registerUser, updateUser, deleteUser } from "../controllers/userControllers.js";

const routes = Router();

routes.get("/people", people);

routes.post("/register", e.json(), registerUser);

routes.put("/update", e.json(), updateUser);

routes.delete("/delete", e.json(), deleteUser);

export{
    routes
}