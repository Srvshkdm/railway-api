const express = require("express");
const Train = require("../models/Train");

const router = express.Router();


const adminAuth = (req, res, next) => {
    if (req.headers["admin-api-key"] !== process.env.ADMIN_API_KEY) {
        return res.status(403).json({ error: "Unauthorized access" });
    }
    next();
};


router.post("/", adminAuth, async (req, res) => {
    try {
        const { name, source, destination, totalSeats } = req.body;
        const train = await Train.create({ name, source, destination, totalSeats, availableSeats: totalSeats });
        res.status(201).json({ message: "Train added", trainId: train.id });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
