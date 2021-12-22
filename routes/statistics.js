
import express from "express";

import { countWordInHistoryEngVie, countWordInYourWordEngVie, countWordInHistoryVieEng, countWordInYourWordVieEng } from "../controller/statistic.js";

const router = express.Router();

router.get('/countHistoryWordEngVie/:id', countWordInHistoryEngVie);

router.get('/countHistoryWordVieEng/:id', countWordInHistoryVieEng);

router.get('/countYourWordEngVie/:id', countWordInYourWordEngVie);

router.get('/countYourWordVieEng/:id', countWordInYourWordVieEng);

export default router;