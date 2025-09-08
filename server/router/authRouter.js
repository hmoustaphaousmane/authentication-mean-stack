const express = require("express");

const {
  register,
  verify,
  login,
  profile,
  logout,
  newPassword,
  resetPassword,
  forgottenPassword,
} = require("../controller/authController");

const router = express.Router();

router.post("/register", register);
router.patch("/verify", verify);
router.post("/login", login);
router.get("/profile", profile);
router.delete("/logout", logout);
router.patch("/new-password", newPassword);
router.post("/forgotten-password", forgottenPassword);
router.patch("/reset-password", resetPassword);

module.exports = router;
