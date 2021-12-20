import express from "express";

import { getAllAnnouncement } from "../controller/announcement.js";

const router = express.Router();

router.get('/', getAllAnnouncement);

export default router;