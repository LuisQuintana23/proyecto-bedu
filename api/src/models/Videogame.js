import { sequelize } from "../db.js";
import { DataTypes } from "sequelize";

const Videogame = sequelize.define("Videogame", {
    id: {

    },
    name: {

    },
    description: {

    }
}, {
    timestamps: false
});

export default Videogame;