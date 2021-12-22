
import express from "express";

import { countWordInHistoryEngVie, countWordInYourWordEngVie } from "../controller/statistic.js";

const router = express.Router();

router.get('/countHistoryWordEngVie/:id', countWordInHistoryEngVie);

router.get('/countYourWordEngVie/:id', countWordInYourWordEngVie);

export default router;