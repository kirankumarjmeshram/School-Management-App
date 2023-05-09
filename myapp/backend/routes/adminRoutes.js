const express = require('express')
const router = express.Router()
const {
  registerUser,
  loginUser,
  getMe,
  getAllAdmins,
} = require('../controllers/admin.controller')
const { protect } = require('../middleware/authMiddleware')

router.post('/',registerUser)
router.post('/login', loginUser)
router.get('/me', protect, getMe)
router.get('/all',getAllAdmins)

module.exports = router
