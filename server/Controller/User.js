const userModel = require("../DataBase/Models/User")
const generateToken = require("../Utils/Token")
const bcrypt = require("bcrypt")

const register = async (req, res) => {
    const { name, password, email } = req.body

    const checkUserExist = await userModel.findOne({ email })

    if (checkUserExist) {
        res.status(400).send("User already exist")
        throw new Error("User already exist")
    }

    const hashPassword = await bcrypt.hash(password, 10)

    const createUser = await userModel.create({ name, password: hashPassword, email })

    if (createUser) {
        res.status(201).json({
            _id: createUser._id,
            name: createUser.name,
            email: createUser.email,
            password: createUser.password,
            token: generateToken(createUser._id)
        })
    } else {
        res.status(400)
        throw new Error("Errro occured")
    }
}

const login = async (req, res) => {
    const { password, email } = req.body

    const checkUserExist = await userModel.findOne({ email })

    if (checkUserExist) {
        const compare = await bcrypt.compare(password, checkUserExist.password)
        if (compare) {
            res.json({
                _id: checkUserExist._id,
                name: checkUserExist.name,
                email: checkUserExist.email,
                password: checkUserExist.password,
                token: generateToken(checkUserExist._id)
            })
        }
        else {
            res.status(400).send("Invalid Login Details")
        }
    }
    else {
        res.status(400).send("Invalid Login Details")
    }
}
module.exports = { register, login }