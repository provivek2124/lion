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
    check('email', 'Please provide an email').isEmail(),
    check('password', 'Password at least 6 character long').exists()

  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array() })
    }

    const { email, password } = req.body

    try {
      // user already exits ?
      let admin = await Admin.findOne({ email })
      if (!admin) {
        return res.status(400).json({ error: [{ msg: 'invalid credentials' }] })
      }
      
    const match = await bcrypt.compare(password, admin.password)

    if(!match){
        return res.status(400).json({ error: [{ msg: 'invalid credentials' }] })
      }
      
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