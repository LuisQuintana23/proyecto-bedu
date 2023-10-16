import express from "express";
import { register, login, authenticated, logout } from "../controllers/usercontroller.js"
const router = express.Router()
router.get('/',(req, res)=>{
    res.render('index')
})

router.get('/home', authenticated, ( req, res)=>{
    res.render('home', {
        user: req.user
    })
})
router.get('/login',(req, res)=>{
    res.render('login')
})

router.post('/login', login);

router.get('/register',(req, res)=>{
    res.render('register')
})

router.post('/register', register);

router.get('/logout', logout);

export default router
