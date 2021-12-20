import express from "express";

import { getAllAnnouncement, createAnnouncement, deleteAnnouncement } from "../controller/announcement.js";

const router = express.Router();

router.get('/', getAllAnnouncement);

router.post('/createAnnouncement', createAnnouncement);

router.post('/deleteAnnouncement/:id', deleteAnnouncement);

export default router;