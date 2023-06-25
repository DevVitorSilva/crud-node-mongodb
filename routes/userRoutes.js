import { Router } from "express";
import { User } from "../models/UserModel.js";

const routes = Router();

routes.get("/people", (req, res) => {
    const user = new User({name: "John Doe"})
    user.save().then((doc) => {
        console.log(doc)
    }).catch((err) => {
        console.log(`user no saved: ${err}`)
    })
    res.status(200).json({ message: "Hello from express" });
});

export{
    routes
}