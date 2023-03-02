const router = require("express").Router();

const { getUsers, userRegister, loginUser } = require("../controllers/user");

router.get("/getUsers", getUsers);
router.post("/userRegister", userRegister);
router.post("/loginUser", loginUser);

module.exports = router;
