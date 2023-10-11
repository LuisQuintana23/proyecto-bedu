import 'dotenv/config';
import app from './src/app.js';
import sequelize from './src/db.js';
const {APP_PORT} = process.env;

// sincronizar con base de datos
sequelize.sync({
    force: true
})
    .then(() => {
        app.listen(APP_PORT, () => {
            console.log(`Listen ${APP_PORT}`)
        })
    })