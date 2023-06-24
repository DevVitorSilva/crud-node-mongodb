import { Router } from "express";

const routes = Router();

routes.get("/people", (req, res) => {
    res.status(200).json({ message: "Hello from express" });
});

export{
    routes
}