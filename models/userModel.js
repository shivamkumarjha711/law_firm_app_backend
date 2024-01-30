import { Schema, model } from "mongoose";


const userShema = new Schema({
    fullName: {
        type: "String",
        required: [true, "Name is required"],
        minLength: [5, "Name must be at least 5 character"],
        maxLength: [50, "Name should be less than 50 character"],
        lowercase: true,
        trim: true
    },
    email: {
        type: "String",
        required: [true, "E-mail is required"],
        lowercase: true,
        trim: true,
        unique: true,
    },
    password: {
        type: "String",
        required: [true, "Password is required"],
        minLength: [8, "Password must be at least 8 character"],
        select: false
    },
    avatar: {
        public_id: {
            type: "String"
        },
        secure_url: {
            type: 'String'
        }
    },
    role: {
        type: 'String',
        enum: ['USER', 'ADMIN'],
        default: 'USER'
    },
}, {
    timestamps: true
})


const User = model("User", userShema);

export default User;


