import express from "express";

import { addHistory, getAllHistory } from "../controller/historyWordVieEng.js";

const router = express.Router();

router.get('/:id', getAllHistory);

router.post('/addHistoryVieEng', addHistory);

export default router;