import express from "express";

import { addHistory, getAllHistory } from "../controller/historyWordEngVie.js";

const router = express.Router();

router.get('/', getAllHistory);

router.post('/addHistoryEngVie', addHistory);

export default router;