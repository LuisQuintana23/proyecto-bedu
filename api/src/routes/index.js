import {Router} from "express";

import platforms from './platforms.js';

const router = Router();

router.use('/platforms', platforms);

export default router;