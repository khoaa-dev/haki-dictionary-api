import express from "express";

import { addYourWord, getAllYourWord, deleteYourWord } from "../controller/yourWordVieEng.js";

const router = express.Router();

router.get('/:id', getAllYourWord);

router.post('/addYourWordVieEng', addYourWord);

router.post('/deleteYourWordVieEng', deleteYourWord);

export default router;