import express from 'express'
import cors from 'cors'
import db from './database/db.js'
import userroutes from './routes/routes.js'

const app = express()

app.use (cors())
app.use(express.json())
app.use('/user',userroutes)

try {
    db.authenticate()
    console.log('Conexión exitosa a la base de datos')
} catch (error) {
    console.log('Error de conexión en la bd: ${error}')
}

app.get('/',(req, res)=>{
    res.send('Hola equipo 5')
})

app.listen(8080, ()=>{
    console.log('Servidor ejecutandose desde localhost')
})