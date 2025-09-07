require("dotenv").config();
const createError = require("http-errors");
const bcrypt = require("bcrypt");
const { v4 } = require("uuid");

const userModel = require("../schema/user");
const otpModel = require("../schema/otp");
const generateOTP = require("../utils/generateOTP");
const { authSchema } = require("../utils/validators");
const tranporter = require("../utils/transporter");

const register = async (req, res, next) => {
  try {
    const { error } = authSchema.validate(req.body);

    if (error) {
      console.log(error);

      throw createError.UnprocessableEntity(error.message);
    }

    const { name, email, password, resetPassword, role } = req.body;

    const emailExists = await userModel.findOne({ email });
    if (emailExists)
      throw createError.Conflict(`The email ${result.email} is already used.`);

    const salt = bcrypt.genSaltSync(10);
    const passwordHash = bcrypt.hashSync(password, salt);

    const user = await userModel.create({
      name,
      email,
      password: passwordHash,
      role,
    });

    if (!user) throw createError.InternalServerError();
    const otp = generateOTP();
    const otpToken = v4();

    const otpDetails = otpModel.create({
      userId: user._id,
      otp,
      otpToken,
      purpose: "verify-email",
    });

    await tranporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      supject: "MEAN Stack Authentication - Verify Your Email",
      html: `
      <div>
        <h1>Email Verification Code</h1>
        <div>
          <p>
            To verify your eamil and activate your account, use the above OTP<br />
            <strong>${otp}</strong>
          </p>
        </div>
      </div>
    `,
    });

    res.status(202).json({
      message: "User registered successfully.",
      token: otpToken,
      purpose: otpDetails.purpose,
    });
  } catch (error) {
    next(error);
  }
};

const verify = async (req, res, next) => {
  res.json(`${req.method} ${req.originalUrl}`);
};

const login = async (req, res, next) => {
  res.json(`${req.method} ${req.originalUrl}`);
};

const profile = async (req, res, next) => {
  res.json(`${req.method} ${req.originalUrl}`);
};

const logout = async (req, res, next) => {
  res.json(`${req.method} ${req.originalUrl}`);
};

const newPassword = async (req, res, next) => {
  res.json(`${req.method} ${req.originalUrl}`);
};

const resetPassword = async (req, res, next) => {
  res.json(`${req.method} ${req.originalUrl}`);
};

const forgottenPassword = async (req, res, next) => {
  res.json(`${req.method} ${req.originalUrl}`);
};

module.exports = {
  register,
  verify,
  login,
  profile,
  logout,
  newPassword,
  resetPassword,
  forgottenPassword,
};
