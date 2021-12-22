import express from "express";

import { addYourWord, getAllYourWord } from "../controller/yourWordVieEng.js";

const router = express.Router();

router.get('/', getAllYourWord);

router.post('/addYourWordVieEng', addYourWord);

export default router;