const router = require("express").Router();

const { getUsersBmi, addBmi } = require("../controllers/Bmi");

router.get("/getUsersBmi/:userId", getUsersBmi);
router.post("/addBmi", addBmi);

module.exports = router;
