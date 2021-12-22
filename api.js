import express from "express";

import announcementRoutes from './routes/announcements.js';
import userRoutes from './routes/users.js';
import dictionaryEngVieRoutes from './routes/dictionary_Eng_Vies.js';
import dictionaryVieEngRoutes from './routes/dictionaryVieEng.js';
import historyEngVieRoutes from './routes/historyWordEngVie.js';
import historyVieEngRoutes from './routes/historyWordVieEng.js';
import yourWordEngVieRoutes from './routes/yourWordEngVie.js';
import yourWordVieEngRoutes from './routes/yourWordVieEng.js';
import statisticRoutes from './routes/statistics.js';



const router = express.Router();

router.get('/', (req, res) => {
    res.send('API page');
});

router.use('/announcement', announcementRoutes);

router.use('/user', userRoutes);

router.use('/dictEngVie', dictionaryEngVieRoutes);
router.use('/dictVieEng', dictionaryVieEngRoutes);

router.use('/historyEngVie', historyEngVieRoutes);
router.use('/historyVieEng', historyVieEngRoutes);

router.use('/yourWordEngVie', yourWordEngVieRoutes);
router.use('/yourWordVieEng', yourWordVieEngRoutes);

router.use('/statistic', statisticRoutes);


export default router;