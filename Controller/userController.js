const user = require("../Model/user");
const bcrypt = require("bcrypt");
const saltRound = 10;
const jwt = require("jsonwebtoken");
const createUser = async (req, res) => {
  try {
    const { name, email, mobile, password } = req.body;
    // Check if all the input fields are fulfilled.
    if (!name || !email || !mobile || !password) {
      return res.status(400).json({ message: "Bad request" });
    }

    // Check user already exsist or not on the basis of email and phone number

    // const isExsist = await user.find({
    //   $or: [{ email: email }, { mobile: mobile }],
    // }); //tried this way but not working.

    const isEmailExsist = await user.findOne({ email: email });
    const isMobileExsist = await user.findOne({ mobile: mobile });

    if (isEmailExsist || isMobileExsist) {
      return res.status(409).json({ message: "User already exsists" });
    }

    //Encrypt the user password
    const PasswordEncrypt = await bcrypt.hash(password, saltRound);

    const newUser = new user({
      name,
      email,
      mobile,
      password: PasswordEncrypt,
    });

    const userResponse = await newUser.save();
    const token = await jwt.sign(
      { userID: userResponse._id },
      process.env.JWT_SECRET
    );
    res.status(201).json({
      message: "registered successfully",
      Hashpass: PasswordEncrypt,
      userResponse: userResponse,
      token,
    });
  } catch (error) {
    console.log(error);
  }
};

const LoginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        errorMessage: "Invalid credential",
      });
    }
    const UserDetails = await user.findOne({ email });
    if (!UserDetails) {
      return res.status(404).json({
        errorMessage: "Invalid credential",
      });
    }
    const passwordMatch = await bcrypt.compare(password, UserDetails.password);
    if (!passwordMatch) {
      return res.status(401).json({
        errorMessage: "Invalid credential",
      });
    }

    const token = await jwt.sign(
      { userId: UserDetails._id },
      process.env.JWT_SECRET
    );

    res.json({
      message: "User logged in successfully",
      token: token,
      name: UserDetails.name,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createUser,
  LoginUser,
};
