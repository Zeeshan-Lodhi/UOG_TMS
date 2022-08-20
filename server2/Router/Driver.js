const driverRouter = require(`express`).Router();
const { getDrivers } = require('../Controller/Driver');

driverRouter.get("/get", getDrivers)

module.exports = { driverRouter }