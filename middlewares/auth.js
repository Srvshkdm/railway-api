const jwt = require("jsonwebtoken");

const authenticateUser = (req, res, next) => {
    const token = req.headers["authorization"];
    if (!token) return res.status(403).json({ error: "No token provided" });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; 
        next();
    } catch (error) {
        return res.status(401).json({ error: "Unauthorized" });
    }
};

module.exports = authenticateUser;
