require('dotenv').config()
const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

//user Model 
const Admin = require('../models/admin')

// @route POST /register
// @des Register a new user
// @access Public
router.post('/',
  [
    check('name', 'Please provide a name').not().isEmpty(),
    check('phone',"please provide valid phone no.").isLength({ min: 10 }),
    check('email', 'Please provide an email').isEmail(),
    check('password', 'Password at least 6 character long').isLength({ min: 6 })

  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array() })
    }

    const { name, phone, email, password } = req.body

    try {
      // user already exits ?
      let admin = await Admin.findOne({ email })
      if (admin) {
        return res.status(400).json({ error: [{ msg: 'user already exits' }] })
      }
      admin = new Admin({
        name,
        phone,
        email,
        password
      })

      // password encryption
      const salt = await bcrypt.genSalt(10)
      admin.password = await bcrypt.hash(password, salt)

      await admin.save()

      // sign a jsonwebtoken

      const payload = {
        admin: {
          id: admin.id
        }
      }

      jwt.sign(payload, process.env.SECRET, {
        expiresIn: 36000
      },
        (err, token) => {
          if (err) throw err
          res.json({ token })
        }
      )
    } catch (err) {
      console.error(err.message)
      res.status(500).send('server error')
    }
  })

module.exports = router