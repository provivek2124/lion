const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')

const Student = require('../models/student')


router.post('/',
  [
    check('name', 'Please provide a name').not().isEmpty(),
    check('address'),
    check('phone',"please provide valid phone no.").isLength({ min: 10 }),
    check('email', 'Please provide an email').isEmail(),
    check('dob'),
    check('joining_date'),
    check('status')
 ],
  
 async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array() })
    }

    const { name, address ,phone, email, dob, joining_date, status } = req.body

    try {
      // user already exits ?
      let student = await Student.findOne({ phone })
      if (student) {
        return res.status(400).json({ error: [{ msg: 'Student already exits' }] })
      }
      student = new Student({
        name,
        address,
        phone,
        email,
        dob,
        joining_date,
        status
      })

     
      await student.save()

      // sign a jsonwebtoken

      const payload = {
        student: {
          id: student.id
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