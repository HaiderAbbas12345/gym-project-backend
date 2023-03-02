const bmiModel = require("../models/Bmi");

const getUsersBmi = async (req, res) => {
  console.log(req.params);
  bmiModel
    .find({ userId: req.params.userId })
    .then((data) => {
      return res.status(200).json({ success: true, data });
    })
    .catch((err) => {
      return res.status(400).json({ success: false, err });
    });
};

const addBmi = async (req, res) => {
  let bmi = new bmiModel({
    userId: req.body.userId,
    height: req.body.height,
    weight: req.body.weight,
    bmi: req.body.bmi,
  });

  bmi
    .save()
    .then((data) => {
      return res.status(200).send({
        success: true,
        data: data,
      });
    })
    .catch((err) => {
      return res.status(404).send({
        success: false,
        message: err.message || "Some error occurred while sending a message.",
      });
    });
};

module.exports = {
  getUsersBmi,
  addBmi,
};
