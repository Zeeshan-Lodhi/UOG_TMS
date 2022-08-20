const { con } = require("../connection")

const getStudents = (req, res) => {
    try {
        con.query("SELECT * FROM students", (err, result) => {
            if (err) {

                res.status(400).send("Error occured")
            } else {
                res.status(200).send(result)
            }
        })
    } catch (error) {
        console.log(error);
    }
}

const addStudent = (req, res) => {
    try {
        const { name, email, password, BusNo, mobile } = req.body
        const id = Math.floor(Math.random() * 100)

        con.query("INSERT INTO students (id, name, email, password, BusNo, mobile) VALUES (?,?,?,?,?,?)", [id, name, email, password, BusNo, mobile], (err, result) => {
            if (err) {
                console.log(err);
                res.json({ error: "User already exist with this email" })
            }
            else {
                res.status(201).json({ id, name, email, password, BusNo })
            }
        })
    } catch (error) {
        console.log(error);
    }
}

const deleteStudent = (req, res) => {
    try {
        const id = req.params.id
        con.query("DELETE FROM students WHERE id=?", [id], (err, result) => {
            if (err) {
                console.log(err);
                res.status(400).send("Error occured")
            } else {
                res.status(200).send(result)
            }
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports = { getStudents, addStudent, deleteStudent }