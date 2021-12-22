import express from "express";

import { addYourWord } from "../controller/yourWordEngVie.js";

const router = express.Router();

// router.get('/', getAllAnnouncement);

router.post('/addYourWordEngVie', addYourWord);

export default router;