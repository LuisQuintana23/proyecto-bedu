import {Sequelize} from "sequelize";
// leer variables de entorno
const {DB_USER, DB_PORT, DB_PASSWORD, DB_HOST, DB_NAME} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
    logging: true,
})

export default sequelize