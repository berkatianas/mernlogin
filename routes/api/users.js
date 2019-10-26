const express = require("express");
const jwt = require("jsonwebtoken");
const config = require("config");
const router = express.Router();
const User = require("../../models/User");

// POST api/users
// Ajouter un user
router.post("/", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "Existe deja" });
    }

    user = new User({
      name,
      email,
      password
    });
    user.save();

    // Token
    const payload = {
      user: {
        id: user.id
      }
    };
    jwt.sign(
      payload,
      config.get("jwtSecret"),
      { expiresIn: 3600000 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.log(err.message);
    return res.status(500).send("Erreur Serveur");
  }
});

module.exports = router;
