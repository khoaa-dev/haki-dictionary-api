import express from "express";

import { addYourWord, getAllYourWord } from "../controller/yourWordEngVie.js";

const router = express.Router();

router.get('/', getAllYourWord);

router.post('/addYourWordEngVie', addYourWord);

export default router;