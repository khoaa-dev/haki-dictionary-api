import express from "express";

import announcementRoutes from './routes/announcements.js';
import userRoutes from './routes/users.js';



const router = express.Router();

router.get('/', (req, res) => {
    res.send('API page');
});

router.use('/announcement', announcementRoutes);

router.use('/user', userRoutes);


export default router;