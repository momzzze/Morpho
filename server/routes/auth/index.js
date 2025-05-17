const router = require('express').Router();

router.post('/login', (req, res) => {
  // TODO: Add real authentication logic
  res.json({ message: `Logged in as ${username}` });
});

module.exports = router;
