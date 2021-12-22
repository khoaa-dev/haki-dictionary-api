import express from "express";

import { addHistory } from "../controller/historyWordVieEng.js";

const router = express.Router();

// router.get('/', getAllAnnouncement);

router.post('/addHistoryVieEng', addHistory);

export default router;