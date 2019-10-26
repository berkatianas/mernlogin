const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function(req, res, next) {
  // Get Token depuis le Header
  const token = req.header("x-login");

  if (!token) {
    return res.status(401).json({
      msg: "Pas de Token,Erreur 401"
    });
  }

  // Vérifier Token
  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));
    req.user = decoded.user;
    next();
  } catch (err) {
    return res.status(401).json({ msg: "Token is not valid" });
  }
};
