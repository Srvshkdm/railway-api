const express = require("express");
const sequelize = require("../config/db");
const Train = require("../models/Train");
const Booking = require("../models/Booking");
const authenticateUser = require("../middlewares/auth");

const router = express.Router();

router.post("/:trainId", authenticateUser, async (req, res) => {
    const { trainId } = req.params;
    const userId = req.user.id;

    const transaction = await sequelize.transaction(); 

    try {
        const train = await Train.findOne({
            where: { id: trainId },
            lock: true,
            transaction,
        });

        if (!train) {
            await transaction.rollback();
            return res.status(404).json({ error: "Train not found" });
        }

        if (train.availableSeats <= 0) {
            await transaction.rollback();
            return res.status(400).json({ error: "No seats available" });
        }

        
        train.availableSeats -= 1;
        await train.save({ transaction });

        
        const booking = await Booking.create(
            { userId, trainId },
            { transaction }
        );

        await transaction.commit(); 
        res.status(201).json({ message: "Booking successful", bookingId: booking.id });

    } catch (error) {
        await transaction.rollback(); 
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;

router.get("/", authenticateUser, async (req, res) => {
    try {
        const bookings = await Booking.findAll({ where: { userId: req.user.id } });
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
