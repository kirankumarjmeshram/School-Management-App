const express = require('express')
const router = express.Router()
const {
  getTeachers,
  setTeacher,
  updateTeacher,
  deleteTeacher,
} = require('../controllers/teacher.controller')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getTeachers).post(protect, setTeacher)
router.route('/:id').delete(protect, deleteTeacher).put(protect, updateTeacher)

module.exports = router
