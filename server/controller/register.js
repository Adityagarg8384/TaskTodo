const User = require("../models/model")
const bcrypt= require("bcryptjs");
const jwt= require("jsonwebtoken");

exports.register= async (req, res) => {
    try {
        const firstname = req.body.FirstName;
        const lastname = req.body.LastName;
        const email = req.body.EmailId;
        const password = req.body.Password
        console.log(req.body);
        console.log(firstname);
        console.log(lastname);
        console.log(email);
        console.log(password);
        if (!firstname || !lastname || !email || !password) {
            return res.status(404).send("Some data is missing");
        }

        const existingUser = await User.findOne({ email });
        console.log(existingUser);

        if (existingUser) {
            return res.status(404).send('User already exists with this email');
        }

        const encryptedPassword = await bcrypt.hash(password, 8);
        console.log("Hello world3");
        const user = await User.create({
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: encryptedPassword,
        })
        console.log("Hello world2");

        const token = jwt.sign(
            { id: user._id, email },
            'shhhh',
            {
                expiresIn: "2h",
            }
        )
        user.token = token;
        user.password = undefined;
        console.log("Hello world");


        return res.status(201).json(user);
    }
    catch (err) {
        console.log(err);
    }
}

