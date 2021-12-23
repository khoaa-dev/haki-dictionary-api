import express from "express";

import { addYourWord, getAllYourWord, deleteYourWord } from "../controller/yourWordEngVie.js";

const router = express.Router();

router.get('/:id', getAllYourWord);

router.post('/addYourWordEngVie', addYourWord);

router.post('/deleteYourWordEngVie', deleteYourWord);

export default router;