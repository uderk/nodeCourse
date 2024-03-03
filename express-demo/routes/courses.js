const express = require('express')
const router = express.Router()
const validateCourse = require('../middleware/inputValidation')

const courses = [
  { id: 1, name: 'course1' },
  { id: 2, name: 'course2' },
  { id: 3, name: 'course3' }
]
router.get('/', (req, res) => {
  res.send(courses)
})

router.get('/:id', (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id))
  if (!course)
    return res.status(404).send('The course with the given ID was not found')
  res.send(course)
})

router.post('/', (req, res) => {
  const { error } = validateCourse(req.body)

  if (error) {
    res.status(400).send(error.details[0].message)
    return
  }

  const course = {
    id: courses.length + 1,
    name: req.body.name
  }
  courses.push(course)
  res.send(course)
})

router.put('/:id', (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id))
  if (!course)
    return res.status(404).send('The course with the given ID was not found')

  // const schema = Joi.object({
  const { error } = validateCourse(req.body)
  if (error) return res.status(400).send(error.details[0].message)

  // update the course
  course.name = req.body.name
  // return the updated course
  res.send(course)
})

router.delete('/:id', (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id))
  if (!course)
    return res.status(404).send('The course with the given ID was not found')

  const index = courses.indexOf(course)
  courses.splice(index, 1)

  res.send(course)
})

module.exports = router /*  */
