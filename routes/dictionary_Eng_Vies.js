import express from "express";

import { getAllDictionary, getAllDictionaryByName, getAllDictionaryById } from "../controller/dictionary_Eng_Vie.js";

const router = express.Router();

router.get('/', getAllDictionary);
router.get('/:name', getAllDictionaryByName);
router.get('/id/:id', getAllDictionaryById);

export default router;