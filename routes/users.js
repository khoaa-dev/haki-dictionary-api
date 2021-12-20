import express from "express";

import { getAllUser, createUser } from "../controller/user.js";

const router = express.Router();

router.get('/', getAllUser);

router.post('/createUser', createUser);
export default router;