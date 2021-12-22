import express from "express";

import { addHistory } from "../controller/historyWordEngVie.js";

const router = express.Router();

// router.get('/', getAllAnnouncement);

router.post('/addHistoryEngVie', addHistory);

export default router;