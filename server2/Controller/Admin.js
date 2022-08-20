const { con } = require("../connection")


const login = (req, res) => {
    try {
        const { email, password } = req.body
        con.query("SELECT * FROM admin WHERE email=? AND password=?", [email, password], (err, result) => {
            if (err) {
                res.send(err)
            }
            if (result.length === 0) {
                res.status(400).send("Invalid Login Details")
            }
            else {
                res.json({
                    id: result[0].id,
                    email: result[0].email,
                    password: result[0].password,
                })
            }

        })
    } catch (error) {
        console.log(error);
    }

}

module.exports = { login }