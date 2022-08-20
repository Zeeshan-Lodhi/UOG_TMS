const jwt = require('jsonwebtoken')
const usermodel = require('../DataBase/Models/User')
const protect = async (req, res, next) => {
    let token;

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        try {
            token = req.headers.authorization.split(" ")[1];

            //decodes token id
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            req.user = await usermodel.findById(decoded.id).select("-password");

            next();
        } catch (error) {
            res.status(401);
            res.send("Not authorized, token failed");
        }
    }

    if (!token) {
        res.status(401);
        res.send("Not authorized, no token");
    }
};

module.exports = protect