const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../modal/userSchema');
const router = express.Router();
const { protect } = require('../middleWare/authMiddleware');
const expressAsyncHandler = require('express-async-handler');

router.post('/register', expressAsyncHandler(async(req, res) => {
  const {name, email, password, isAdmin, addresses} = req.body;

  if (!name || !email || !password) {
      res.status(404)
      throw new Error('please add all field')
  }

  const userExist = await User.findOne({email});

  if (userExist) {
      res.status(400)
      throw new Error('user already exist')
  }

  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  const user = await User.create({
      name,
      email,
      isAdmin,
      password: hashedPassword
  })

  if (user) {
      res.json({
          _id: user.id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user._id)
      })
  } else {
      res.status(402)
      throw new Error('Invalid user data')
  }
}))

router.post('/login', expressAsyncHandler(async(req, res) => {

  const { email, password } = req.body;

  const user = await User.findOne({email})

  if (user && (await bcrypt.compare(password, user.password))) {
      res.json({
          _id: user.id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user._id)
      })
  } else {
      res.status(400)
      console.log(error);
  }
}))

router.get('/me', protect, async (req, res) => {
    res.status(200).json(req.user)
})

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
}

module.exports = router;
