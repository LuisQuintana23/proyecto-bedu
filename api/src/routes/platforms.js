import {Router} from "express";
import platform from "../controllers/platforms.controller.js";
const router = Router();

router.get("/", platform)
export default router;