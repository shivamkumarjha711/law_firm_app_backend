
import Contact from "../models/contactModel.js"


export const contactUs = async (req, res, next) => {
    const {name, email, phoneNumber, message} = req.body;

    if (!name || !email || !phoneNumber) {
        return res.status(400).json({
            success: false,
            message: "Nmae, Email, Phone Number are required"
        })
    }

    const contact = await Contact.create({
        name,
        email,
        phoneNumber,
        message
    })

    if (!contact) {
        return res.status(400).json({
            success: false,
            message: "Contact Detais not Save, Please try again!"
        })
    }

    await contact.save();

    res.status(201).json({
        success: true,
        message: "Contact Details Saved Successfully",
        contact
    })
}