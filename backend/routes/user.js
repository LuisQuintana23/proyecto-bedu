import { createUser, deletedUser, getAllUsers, getUser, updateUser, authenticated } from "../controllers/usercontroller.js"
import express from 'express'
const router = express.Router()

//servicios web
router.get('/', authenticated,getAllUsers)
router.get('/:id', authenticated,getUser)
router.post('/', createUser)
router.put('/:id',updateUser)
router.delete('/:id',deletedUser)

export default router
