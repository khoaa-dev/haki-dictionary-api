import express from "express";

import { getAllDictionary, getAllDictionaryByName, getAllDictionaryById } from "../controller/dictionaryVieEng.js";

const router = express.Router();

router.get('/', getAllDictionary);
router.get('/:name', getAllDictionaryByName);
router.get('/id/:id', getAllDictionaryById);

export default router;