const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = (req, res, next) => {
  // Getting token from req headers
  const token = req.header('x-auth-token');

  // Checking for existence of token
  if (!token) res.status(401).json({ msg: 'No token, authorization denied.' });

  try {
    // Verifying token is correct
    const decoded = jwt.verify(token, config.get('jwtSecret'));

    req.user = decoded;
    next();
  } catch (err) {
    res.status(400).json({ msg: 'Token is not valid.' });
  }
};
