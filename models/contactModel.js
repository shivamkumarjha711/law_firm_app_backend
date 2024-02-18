import { Schema, model } from "mongoose";

const contactSchema = new Schema({
    name: {
        type: "String",
        required: [true, "Name is required"],
        minLength: [5, "Name must be at least 5 character"],
        maxLength: [50, "Name should be less than 50 character"],
    },
    email: {
        type: "String",
        required: [true, "E-mail is required"]
    },
    phoneNumber: {
        type: "Number",
        minLength: [10, "Phone Number must be 10 Char"],
        maxLength: [10, "Phone Number not greater than 10 Char"],
    },
    message: {
        type: "String"
    }
})

const Contact = model("Contact", contactSchema);

export default Contact;