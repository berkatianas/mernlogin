const express = require("express");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");
const router = express.Router();
const User = require("../../models/User");

// POST api/auth
// Login User et Retourner la Token
router.post(
  "/",
  [
    check("email", "Insérer un email valide").isEmail(),
    check("password", "Password obligatoire").exists()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Utilisateur non trouvé !" }] });
      }

      if (password !== user.password) {
        return res.status(400).json({ errors: [{ msg: "Password invalide" }] });
      }

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
      console.error(err.message);
      res.status(500).send("Erreur du Serveur :(");
    }
  }
);

module.exports = router;
