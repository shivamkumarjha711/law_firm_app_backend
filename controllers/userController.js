import User from "../models/userModel.js";

export const register = async (req, res, next) => {
    const {fullName, email, password} = req.body;

    if (!fullName || !email || !password) {
        res.status(400).json({
            success: false,
            message: "All Fields are required",
        })
        return
    };

    const userExist = await User.findOne({ email });

    if (userExist) {
        res.status(400).json({
            success: false,
            message: "Email already exist"
        })
        return
    };

    const user = await User.create({
        fullName,
        email,
        password
    });

    if (!user) {
        res.status(400).json({
            success: false,
            message: "User registration failed , Please try again!"
        })
        return
    }

    await user.save();

    res.status(201).json({
        success: true,
        message: "User register successfully",
        user
    })
}