const express = require('express')
const dotenv = require("dotenv")
const app = express();
const connectDb = require("./DataBase/Connection")
dotenv.config();
const userRoutes = require('./Routes/User')
const notesRoutes = require('./Routes/Notes');
const protect = require('./MIddleWare/authMiddle');

connectDb()
app.use(express.json())
// app.get("/api/notes", (req, res) => {
//     res.json(
//         [
//             {
//                 _id: "1",
//                 title: "Day 1 of college",
//                 content:
//                     "I made a few new friends and introduced myself to a lot of new teachers.",
//                 category: "College",
//             },
//             {
//                 _id: "2",
//                 title: "Learned some Node JS",
//                 content: "Learned how to create a server in node JS and my first API",
//                 category: "Learning",
//             },]
//     )
// })


// Without creating routes and cntroller(callback function) we can write directly with this way
// app.post("/api/user", (req, res) => {
//     const { name, password, email } = req.body

//     res.json({ name, password, email })
// })

app.use(userRoutes)
// Protect is middleware that protect our notes from unauthorized user
app.use(protect, notesRoutes)

const port = process.env.PORT || 8000
app.listen(port, console.log(`Server is started at http://localhost:${port}/`))