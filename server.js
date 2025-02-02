const express = require("express");
const sequelize = require("./config/db");
const authRoutes = require("./routes/auth");
const trainRoutes = require("./routes/train");
const bookingRoutes = require("./routes/booking");

const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/trains", trainRoutes);
app.use("/api/bookings", bookingRoutes);

const PORT = process.env.PORT || 5000;

sequelize.sync().then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});