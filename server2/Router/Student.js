const studentRouter = require(`express`).Router();
const { getStudents, deleteStudent, addStudent } = require('../Controller/Student');

studentRouter.get("/get", getStudents)
studentRouter.post("/add", addStudent)
studentRouter.delete("/delete/:id", deleteStudent)

module.exports = { studentRouter }