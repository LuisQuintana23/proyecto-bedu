//importar conexion de la base de datos
import db from "../database/db.js";
//importar sequelizer
import {DataTypes} from "sequelize";

const usermodel = db.define('user',{
    username:{type:DataTypes.STRING},
    password:{type:DataTypes.STRING},
})

export default usermodel