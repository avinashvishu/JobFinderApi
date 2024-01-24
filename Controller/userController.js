const user = require("../Model/user");

const createUser = async (req, res) => {};

const LoginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  res.json({ message: "successfull" });
};

module.exports = {
  createUser,
  LoginUser,
};
