const userModel = require("../models/user");
const bcrypt = require("bcrypt");

const getUsers = async (req, res) => {
  userModel
    .find()
    .then((data) => {
      return res.status(200).json({ success: true, data });
    })
    .catch((err) => {
      return res.status(400).json({ success: false, err });
    });
};

const userRegister = async (req, res) => {
  const salt = bcrypt.genSaltSync(10);

  let user = new userModel({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, salt),
    userRole: "user",
  });

  try {
    const userExists = await userModel.findOne({ email: req.body.email });
    if (userExists) {
      res.status(400).json({
        data: userExists,
        message: "User already exist",
      });
    } else {
      user
        .save()
        .then((data) => {
          return res.status(200).send({
            success: true,
            message: "User registered successfully",
            data: data,
          });
        })
        .catch((err) => {
          return res.status(404).send({
            success: false,
            message:
              err.message || "Some error occurred while sending a message.",
          });
        });
    }
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: error.message || "Service unavailable",
    });
  }
};

const loginUser = async (req, res) => {
  try {
    userModel.findOne({ email: req.body.email }, (err, data) => {
      if (data) {
        if (bcrypt.compareSync(req.body.password, data.password)) {
          res
            .status(200)
            .json({ success: true, data, message: "Login Successful" });
        } else {
          res.status(401).json({ message: "Password Invalid" });
        }
      } else {
        res.status(404).json({ message: "User not found" });
      }
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "Service unavailable",
    });
  }
};

module.exports = {
  getUsers,
  userRegister,
  loginUser,
};
