const busRouter = require(`express`).Router();
const { addBus, getBuses, getSingleBus, deleteBus, updateBus } = require('../Controller/Bus');

busRouter.post("/add", addBus)
busRouter.get("/get", getBuses)
busRouter.get("/get/:id", getSingleBus)
busRouter.delete("/delete/:id", deleteBus)
busRouter.put("/update/:id", updateBus)

module.exports = { busRouter }