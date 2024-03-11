const User = require("../models/model")
const bcrypt= require("bcryptjs");
const jwt= require("jsonwebtoken");

exports.login= async (req, res) => {
    try {
        const email = req.body.EmailId;
        const password = req.body.Password;
        console.log(email);

        if (!email || !password) {
            return res.status(404).send("All fields are required");
        }

        const user = await User.findOne({ email })
        console.log("Hello world");

        if (user && (await bcrypt.compare(password, user.password))) {
            console.log("Hello world1");
            console.log(user);
            const token=jwt.sign(
                { id: user._id },
                'shhhh',
                {
                    expiresIn: "2h",
                }
            )
            user.token = token;
            user.password = undefined;
            console.log("Hello world2");
            const options = {
                expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
                httpOnly: true,
            }
            console.log("Hello world3");

            return res.status(200).cookie("token", token, options).json({
                success: true,
                token,
                user
            })
        }
        else{
            console.log("Nothing such found");
        }
    }
    catch (err) {
        console.log(err);
    }
}
