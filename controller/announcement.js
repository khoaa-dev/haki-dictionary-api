import sql from 'mssql';
import config from '../config.js';

export const getAllAnnouncement = (req, res) => {
    sql.connect(config).then(pool => {
        return pool.request().query('select * from Announcement order by createdTime desc');
    })
    .then(result => {
        res.send(result.recordset);
    })
    .catch(err => {
        res.send(err);
    })
}