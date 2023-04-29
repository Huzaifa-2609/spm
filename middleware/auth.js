const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(403).send("A token is required");
  }
  try {
    const decoded = await jwt.verify(token.split(" ")[1], "Iamagoodbou");
    req.user = decoded;
  } catch (err) {
    return res.status(401).json("Invalid Token");
  }
  return next();
};

module.exports = verifyToken;
