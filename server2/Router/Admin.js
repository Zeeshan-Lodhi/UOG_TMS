const adminRouter = require(`express`).Router();
const { login } = require('../Controller/Admin')
// const router = express.Router()

adminRouter.post("/login", login)

module.exports = { adminRouter }