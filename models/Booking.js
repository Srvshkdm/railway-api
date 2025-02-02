
// const { DataTypes } = require("sequelize");
// const sequelize = require("../config/db");
// const User = require("./models/User");


const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const User = require("../models/User");
const Train = require("../models/Train");

const Booking = sequelize.define("Booking", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    userId: { type: DataTypes.INTEGER, allowNull: false, references: { model: User, key: "id" } },
    trainId: { type: DataTypes.INTEGER, allowNull: false, references: { model: Train, key: "id" } },
});

module.exports = Booking;