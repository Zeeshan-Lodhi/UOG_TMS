const { con } = require("../connection")


const getDrivers = (req, res) => {
    try {
        con.query("SELECT * FROM driver", (err, result) => {
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

module.exports = { getDrivers }