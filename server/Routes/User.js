const express = require('express')
const router = express.Router()
const { register, login } = require("../Controller/User")


router.post("/api/user/register", register)
router.post("/api/user/login", login)

module.exports = router