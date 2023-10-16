//importar el modelo
import usermodel from "../models/usermodel.js";
import jwt from 'jsonwebtoken';
import bcryptjs from 'bcryptjs';
import {promisify} from 'util';

export const register = async (req, res) => {
    const params = req.body;
    const username = params.username;
    const email = params.email;
    const password = params.password;
    const passwordConfirm = params.password_confirm;
    const aviso = params.aviso;
    const hashPassword = await bcryptjs.hash(password, 8);

    try {
        // crear al usuario con datos dados
        await usermodel.create({
            username: params.username,
            password: hashPassword,
            created_at: params.created_at,
            updated_at: params.updated_at,
            email: params.email
        })
        // redireccionar al inicio
        res.redirect('/');
    } catch (err){
        console.log(err);
    }
}

export const login = async (req, res) => {
    try{
        const params = req.body;
        const email =  params.email;
        const password =  params.password;
        const recordar =  params.recordar;

        if (
            !email ||
            !password
        )
        {
            res.json({message: "Campos Vacios"});
        } else {
            // encontrar coincidencias con el primer registro dado un correo
            const user = await usermodel.findOne({
                where:{
                    email: email,
                }
            })

            // verificar si el usuario existe y si las contraseñas con hash coinciden
            if (user.length === 0 || ! ( await bcryptjs.compare(password, user.password))){
                res.json({message: "No coinciden las credenciales"});
            } else {
                    // generar json web token para poder mantener su sesión activa
                    const token = jwt.sign({
                        id: user.id
                    }, process.env.JWT_SECRET, {
                        expiresIn: process.env.JWT_TIME,
                    })

                    //declarar un tiempo para la sesión
                    const cookiesOption = {
                        expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
                        httpOnly: true
                    }
                    // guardar cookie
                    res.cookie('jwt', token, cookiesOption);
                    // solo el home se accesa cuando se tiene jwt
                    res.redirect('/home')
            }
        }
    } catch( err ){
        console.log(err)
    }

}

// virifica si el usuario está autenticado
export const authenticated = async (req, res, next) => {
    // para autenticar la cookie debe estar presente
    if (req.cookies.jwt) {
        try{
            // obtener datos de la cookie
            const decoded = await promisify(jwt.verify)(req.cookies.jwt, process.env.JWT_SECRET)
            const user = await usermodel.findOne({
                where:{
                    id: decoded.id,
                }
            })
            // continuar sin usuario en caso de no coincidencias con el usuario en la bd
            if (user.length === 0){
                return next()
            }
            req.user = user;
            return next();
        }
        catch(err) {
            console.log(err)
            return next()
        }
    } else {
        res.redirect(403, '/login')
    }
}

export const logout = async (req, res) => {
    res.clearCookie('jwt');
    return res.redirect('/')
}

//mostrar todos los usuarios
export const getAllUsers = async (req, res) => {
    try{
        const users = await usermodel.findAll()
        res.json(users)
    }catch (error){
        res.json(404, {message: error.message})
    }

}

//mostrar un solo usuario
export const getUser = async (req, res) => {
    try{
        const user = await usermodel.findOne({
            where:{
                id: req.params.id
            }
        })
        res.json(user)
    }catch (error){
        res.json(404, {message: error.message})
    }
}

// crear un registro de usuario
export const createUser = async (req, res) => {
    try{
        const params = req.body;
        await usermodel.create({
            username: params.username,
            password: params.password,
            created_at: params.created_at,
            updated_at: params.updated_at,
            email: params.email
        })
        res.json({
            "message":"Usuario creado satisfactoriamente"
        })
    }catch (error){
        res.json(404, {message: error.message})
    }

}

// actualizar un registro
export const updateUser = async (req, res)=>{
    try{
        await usermodel.update(req.body,{
            where: {id: req.params.id}
        })
        res.json(201,{
            "message":"Usuario actualizado satisfactoriamente"
        })
    }catch (error){
        res.json(404, {message: error.message})
    }

}

//eliminar un registro
export const deletedUser = async (req, res)=>{
    try{
        await usermodel.destroy({
            where: {id: req.params.id}
        })
        res.json({
            "message":"Usuario eliminado :("
        })
    }catch (error){
        res.json(404, {message: error.message})
    }

}