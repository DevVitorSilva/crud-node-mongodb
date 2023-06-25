import { Schema, model } from "mongoose";

const userSchema = Schema(
    {
        name: {
            type: String,
            required: true
        }
    }
);

const User = model("user", userSchema);

export {
    User
}