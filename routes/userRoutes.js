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
        return res.status(400).json({ message: "Enter the name" });
    }

    try {
        await user.save()
        res.status(201).json({user});
        
    } catch (err) {
        console.log(`UserSaved error: ${ err }`);
        res.status(500).json({ message: "Internal server error" });
    }   
});

routes.put("/update", e.json(), async (req, res) => {
    const { id, name } = req.body;
    
    try {
        if(!id){
            return res.status(400).json({message: "Enter the id"});
        }else if(!name){
            return res.status(400).json({message: "Enter the name"});
        }
        
        await User.findOneAndUpdate({ _id: id }, { name: name });

        const updateUser = await User.findById(id);

        res.status(200).json({updateUser});

    } catch (err) {
        console.log(`Update user error => ${err}`);
        res.status(500).json({ mesage: "Internal server error" });
        
    }

});

routes.delete("/delete", e.json(), async (req, res) => {
    const { id } = req.body;

    if(!id){
        return res.status(400).json({message: "Enter the id"});
    }

    try {
        const userDelete = await User.findByIdAndDelete(id);
        res.status(200).json({ userDelete });
        
    } catch (err) {
        console.log(`Delete user error => ${err}`);
        res.status(500).json({ message: "Internal server error" });
    }
    
});

export{
    routes
}