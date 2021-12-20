import express from "express";

import announcementRoutes from './routes/announcements.js';
import userRoutes from './routes/users.js';
import dictionaryEngVieRoutes from './routes/dictionary_Eng_Vies.js';



const router = express.Router();

router.get('/', (req, res) => {
    res.send('API page');
});

router.use('/announcement', announcementRoutes);

router.use('/user', userRoutes);

router.use('/dictEngVie', dictionaryEngVieRoutes);


export default router;