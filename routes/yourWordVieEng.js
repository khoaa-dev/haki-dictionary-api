import express from "express";

import { addYourWord } from "../controller/yourWordVieEng.js";

const router = express.Router();

// router.get('/', getAllAnnouncement);

router.post('/addYourWordVieEng', addYourWord);

export default router;