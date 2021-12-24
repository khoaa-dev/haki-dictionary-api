
import express from "express";

import { countWordInHistory, countWordInYourWord  } from "../controller/statistic.js";

const router = express.Router();

router.get('/countHistoryWord/:id', countWordInHistory);

router.get('/countYourWord/:id', countWordInYourWord);

export default router;