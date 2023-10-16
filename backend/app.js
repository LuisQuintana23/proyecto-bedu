import 'dotenv/config';
import express from 'express'
import db from './database/db.js'
import userroutes from './routes/user.js'
import routes from './routes/routes.js'
import cookieParser from 'cookie-parser'
const {APP_PORT} = process.env;

const app = express()

// plantillas
app.set('view engine', 'ejs');
// archivos estaticos
app.use(express.static('public'))

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser());

// limpiar cache
app.use((req, res, next) => {
    if (!req.user){
        res.header(
            'Cache-Control',
            'private, no-cache, no-store, must-revalidate'
        )
    }
    next()
})

// Routes
app.use('/user',userroutes)
app.use('/', routes)

try {
    db.authenticate()
    console.log('Conexión exitosa a la base de datos')
} catch (error) {
    console.log('Error de conexión en la bd: ${error}')
}

app.listen(APP_PORT, ()=>{
    console.log(`Servidor ejecutandose desde http://localhost:${APP_PORT}`)
})