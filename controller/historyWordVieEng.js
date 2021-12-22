import sql from 'mssql';
import config from '../config.js';

export const addHistory = (req, res) => {
    const data = {
        idDicVE: req.body.idDicVE,
        idUser: req.body.idUser,
        dateSearch: req.body.dateSearch
    };
    sql.connect(config).then(pool => {
        return pool.request()
            .query(`set dateformat dmy
                    insert into HistoryWord_Vie_Eng (idDicVE, idUser, dateSearch)
                    values ('${data.idDicVE}', '${data.idUser}', '${data.dateSearch}')`);
        
    }).then(result => {
        if(result.rowsAffected == 1) {
            res.send({
                "status": "Create successfully"
            });
        } else {
            res.send({
                "status": "Create failed"
            });
        }
        
    }).catch(err => {
        console.log(err);
    });
}