const { con } = require("../connection")


const addBus = (req, res) => {
    try {
        const { BusNo, PickUpTime, DropTime, BusType } = req.body

        con.query("INSERT INTO buses (BusNo, PickUpTime, DropTime, BusType) VALUES (?,?,?,?)", [BusNo, PickUpTime, DropTime, BusType], (err, result) => {
            if (err) {
                res.json({ error: "Bus Already exist" })
            }
            else {
                res.status(201).json({ BusNo, PickUpTime, DropTime, BusType })
            }
        })
    } catch (error) {
        res.json({ error: "Bus Already Exist" })
    }

}

const getBuses = (req, res) => {
    try {
        // Left join
        con.query(
            "select buses.BusNo, buses.PickUpTime, buses.DropTime,buses.BusType, driver.DriverName, driver.DriverMobile, route.RouteName from buses LEFT JOIN driver on buses.BusNo = driver.Busno LEFT JOIN route on buses.BusNo = route.Busno",
            (err, result) => {
                if (err) {
                    res.send(err)
                } else {
                    res.status(200).send(result)
                }
            })
    } catch (error) {
        console.log(error);
    }

}

const getSingleBus = (req, res) => {
    const id = req.params.id
    try {
        con.query(`SELECT * FROM buses WHERE busNo=${id}`, (err, result) => {
            if (err) {
                res.status(400).send("Error occured")
            } else {
                res.status(200).send(result)
                console.log(result);
            }
        })
    } catch (error) {
        console.log(error);
    }

}

const deleteBus = (req, res) => {
    try {
        const id = req.params.id
        con.query(`DELETE FROM buses WHERE BusNo=${id}`, (err, result) => {
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

const updateBus = (req, res) => {
    try {
        const { BusNo, PickUpTime, DropTime, BusType } = req.body
        const id = req.params.id

        con.query('UPDATE buses SET ? WHERE BusNo = ?', [{ BusNo, PickUpTime, DropTime, BusType }, id], (err, result) => {
            if (err) {
                res.status(400).send("Error occured ! Try again")
                console.log(err);
            }
            else {
                res.status(201).json({ BusNo, PickUpTime, DropTime, BusType })
            }
        })
    } catch (error) {
        console.log(error);
    }

}

module.exports = { addBus, getBuses, getSingleBus, deleteBus, updateBus }