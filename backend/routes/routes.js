import { createUser, deletedUser, getAllUsers, getUser, updateUser } from "../controllers/usercontroller.js"
import express from 'express'
const router = express.Router()

//servicios web 
router.get('/', getAllUsers)
router.get('/:id', getUser)
router.post('/', createUser)
router.put('/:id',updateUser)
router.delete('/:id',deletedUser)

export default router