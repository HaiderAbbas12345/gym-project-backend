const mongoose = require("mongoose");

const BmiSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    height: {
      type: String,
    },
    weight: { type: String },
    bmi: { type: String },
  },
  { timestamps: true }
);

const Bmi = mongoose.model("Bmi", BmiSchema);
module.exports = Bmi;
