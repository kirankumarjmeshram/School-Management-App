const asyncHandler = require('express-async-handler')

const Teacher = require('../models/teacher.model')
const User = require('../models/admin.model')

const getTeachers = asyncHandler(async (req, res) => {
  const teachers = await Teacher.find({ user: req.user.id })

  res.status(200).json(teachers)
})

const setTeacher = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('Please add a text field')
  }

  const teacher = await Teacher.create({
    text: req.body.text,
    user: req.user.id,
  })

  res.status(200).json(teacher)
})

const updateTeacher = asyncHandler(async (req, res) => {
  const teacher = await Teacher.findById(req.params.id)

  if (!teacher) {
    res.status(400)
    throw new Error('teacher not found')
  }

  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  if (teacher.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  const updatedTeacher = await Teacher.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  res.status(200).json(updatedTeacher)
})


const deleteTeacher = asyncHandler(async (req, res) => {
  const teacher = await Teacher.findById(req.params.id)

  if (!teacher) {
    res.status(400)
    throw new Error('teacher not found')
  }

  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  if (teacher.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  await teacher.remove()

  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getTeachers,
  setTeacher,
  updateTeacher,
  deleteTeacher,
}
