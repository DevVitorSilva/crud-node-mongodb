import e, { Router } from "express";
import { User } from "../models/UserModel.js";

const routes = Router();

routes.get("/people", async (req, res) => {
    try {
        const allNames = await User.find({});
        res.status(200).json({ allNames });
    } catch (err) {
        console.log(`getAllNames error: ${err}`);
        res.status(500).json({ message: "Internal error server" });
    }
    
    
});

routes.post("/register", e.json(), async (req, res) => {
    const { name } = req.body;
    const user = new User({name});

    if(!name){
        return res.status(400).json({ message: "Insira o nome" });
    }

    try {
        await user.save()
        res.status(201).json({user});
    } catch (err) {
        console.log(`UserSaved error: ${err}`);
        res.status(500).json({ message: "Internal server error" });
    }   
});

export{
    routes
}