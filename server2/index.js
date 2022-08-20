const express = require('express');
const app = express();
const { adminRouter } = require('./Router/Admin')
const { busRouter } = require('./Router/Bus')
const { driverRouter } = require('./Router/Driver')
const { studentRouter } = require('./Router/Student')

app.use(express.json())

app.use(`/api/admin`, adminRouter)
app.use(`/api/bus`, busRouter)
app.use("/api/drivers", driverRouter)
app.use("/api/student", studentRouter)

// Login a admin
// app.post("/api/admin/login", (req, res) => {
//     try {
//         const { email, password } = req.body
//         con.query("SELECT * FROM admin WHERE email=? AND password=?", [email, password], (err, result) => {
//             if (err) {
//                 res.send(err)
//             }
//             if (result.length === 0) {
//                 res.status(400).send("Invalid Login Details")
//             }
//             else {
//                 res.json({
//                     id: result[0].id,
//                     email: result[0].email,
//                     password: result[0].password,
//                 })
//             }

//         })
//     } catch (error) {
//         console.log(error);
//     }
// })

// Add a bus
// app.post("/api/bus/add", (req, res) => {
//     try {
//         const { BusNo, RouteName, PickUpTime, DropTime, BusType } = req.body

//         con.query("INSERT INTO buses (BusNo, RouteName, PickUpTime, DropTime, BusType) VALUES (?,?,?,?,?)", [BusNo, RouteName, PickUpTime, DropTime, BusType], (err, result) => {
//             if (err) {
//                 res.json({ error: "Bus Already exist" })
//             }
//             else {
//                 res.status(201).json({ BusNo, RouteName, PickUpTime, DropTime, BusType })
//             }
//         })
//     } catch (error) {
//         res.json({ error: "Bus Already Exist" })
//     }
// })

// Get all buses
// app.get("/api/bus/get", (req, res) => {

//     try {
//         // Left join
//         con.query(
//             "SELECT buses.BusNo, buses.RouteName, buses.PickUpTime, buses.DropTime, buses.PickUpTime ,buses.BusType, driver.DriverName, driver.DriverMobile FROM driver LEFT JOIN buses on buses.BusNo = driver.Busno",
//             (err, result) => {
//                 if (err) {
//                     res.send(err)
//                 } else {
//                     console.log(result);
//                     res.status(200).send(result)
//                 }
//             })
//     } catch (error) {
//         console.log(error);
//     }
// })
// Get a single bus
// app.get("/api/bus/get/:id", (req, res) => {
//     const id = req.params.id
//     console.log(id);
//     try {
//         con.query(`SELECT * FROM buses WHERE busNo=${id}`, (err, result) => {
//             if (err) {
//                 res.status(400).send("Error occured")
//             } else {
//                 res.status(200).send(result)
//             }
//         })
//     } catch (error) {
//         console.log(error);
//     }
// })

// Delete a bus
// app.delete("/api/bus/delete/:id", (req, res) => {
//     try {
//         const id = req.params.id
//         con.query("DELETE FROM buses WHERE busNo=?", [id], (err, result) => {
//             if (err) {
//                 res.status(400).send("Error occured")
//             } else {
//                 res.status(200).send(result)
//             }
//         })
//     } catch (error) {
//         console.log(error);
//     }
// })
// Update a bus
// app.put("/api/bus/update/:id", (req, res) => {
//     try {
//         const { BusNo, RouteName, PickUpTime, DropTime, BusType } = req.body
//         const id = req.params.id

//         con.query('UPDATE buses SET ? WHERE busNo = ?', [{ BusNo, RouteName, PickUpTime, DropTime, BusType }, id], (err, result) => {
//             if (err) {
//                 res.status(400).send("Error occured ! Try again")
//                 console.log(err);
//             }
//             else {
//                 res.status(201).json({ BusNo, RouteName, PickUpTime, DropTime, BusType })
//             }
//         })
//     } catch (error) {
//         console.log(error);
//     }
// })


// Get all driver
// app.get("/api/drivers/get", (req, res) => {
//     try {
//         con.query("SELECT * FROM driver", (err, result) => {
//             if (err) {
//                 res.status(400).send("Error occured")
//             } else {
//                 res.status(200).send(result)
//             }
//         })
//     } catch (error) {
//         console.log(error);
//     }
// })

// Get all students
// app.get("/api/student/get", (req, res) => {
//     try {
//         con.query("SELECT * FROM students", (err, result) => {
//             if (err) {
//                 res.status(400).send("Error occured")
//             } else {
//                 res.status(200).send(result)
//             }
//         })
//     } catch (error) {
//         console.log(error);
//     }
// })
// Add a student
// app.post("/api/student/add", (req, res) => {
//     try {
//         const { name, email, password, BusNo } = req.body
//         const id = Math.floor(Math.random() * 100)
//         con.query("INSERT INTO students (id, name, email, password) VALUES (?,?,?,?)", [id, name, email, password, BusNo], (err, result) => {
//             if (err) {
//                 res.json({ error: "User already exist with this email" })
//             }
//             else {
//                 res.status(201).json({ id, name, email, password, BusNo })
//             }
//         })
//     } catch (error) {
//         console.log(error);
//     }
// })
// Delete a student
// app.delete("/api/student/delete/:id", (req, res) => {
//     try {
//         const id = req.params.id
//         con.query("DELETE FROM students WHERE id=?", [id], (err, result) => {
//             if (err) {
//                 res.status(400).send("Error occured")
//             } else {
//                 res.status(200).send(result)
//             }
//         })
//     } catch (error) {
//         console.log(error);
//     }
// })

app.listen(8000, () => {
    console.log('Server is running at port 8000');
});