import sql from 'mssql';
import config from '../config.js';

export const getAllHistory = (req, res) => {
    const {id} = req.params;
    sql.connect(config).then(pool => {
        return pool.request()
            .query(`select * from HistoryWord_Eng_Vie where idUser = ${id}`);
        
    }).then(result => {
        res.send(result.recordset);
        
    }).catch(err => {
        console.log(err);
    });
}

export const addHistory = (req, res) => {
    const data = {
        idDicEV: req.body.idDicEV,
        idUser: req.body.idUser,
        dateSearch: req.body.dateSearch
    };
    sql.connect(config).then(pool => {
        return pool.request()
            .query(`set dateformat dmy
                    insert into HistoryWord_Eng_Vie (idDicEV, idUser, dateSearch)
                    values ('${data.idDicEV}', '${data.idUser}', '${data.dateSearch}')`);
        
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