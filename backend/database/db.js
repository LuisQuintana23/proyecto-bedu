import {Sequelize} from 'sequelize'

const db = new Sequelize ('database-bedu','root','',{
    host:'localhost',
    dialect:'mysql'
})

export default db