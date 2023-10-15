//importar el modelo
import usermodel from "../models/usermodel.js";

//mostrar todos los usuarios
export const getAllUsers = async (req, res) => {
    try{
        const users = await usermodel.findAll()
        res.json(users)
    }catch (error){
        res.json({message: error.message})

    }

}

//mostrar un solo usuario
export const getUser = async (req, res) => {
    try{
        const user = await usermodel.findAll({
            where:{
                id: req.params.id
            }
        })
        res.json(user)
    }catch (error){
        res.json({message: error.message})
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
        res.json({message: error.message})
    }

}

// actualizar un registro
export const updateUser = async (req, res)=>{
    try{
        await usermodel.update(req.body,{
            where: {id: req.params.id}
        })
        res.json({
            "message":"Usuario actualizado satisfactoriamente"
        })
    }catch (error){
        res.json({message: error.message})
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
        res.json({message: error.message})
    }

}