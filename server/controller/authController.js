const register = async (req, res, next) => {
  res.json(`${req.method} ${req.originalUrl}`);
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
