import sql from 'mssql';
import config from '../config.js';

export const countWordInHistoryEngVie = (req, res) => {
    const {id} = req.params;
    sql.connect(config).then(pool => {
        return pool.request()
            .query(`select count(idDicEV) as 'count' from HistoryWord_Eng_Vie where idUser = ${id}`);
        
    }).then(result => {
        res.send(result.recordset);
        
    }).catch(err => {
        console.log(err);
    });
}

export const countWordInHistoryVieEng = (req, res) => {
    const {id} = req.params;
    sql.connect(config).then(pool => {
        return pool.request()
            .query(`select count(idDicEV) as 'count' from HistoryWord_Vie_Eng where idUser = ${id}`);
        
    }).then(result => {
        res.send(result.recordset);
        
    }).catch(err => {
        console.log(err);
    });
}

export const countWordInYourWordEngVie = (req, res) => {
    const {id} = req.params;
    sql.connect(config).then(pool => {
        return pool.request()
            .query(`select count(idDicEV) as 'count' from YourWords_Eng_Vie where idUser = ${id}`);
        
    }).then(result => {
        res.send(result.recordset);
        
    }).catch(err => {
        console.log(err);
    });
}

export const countWordInYourWordVieEng = (req, res) => {
    const {id} = req.params;
    sql.connect(config).then(pool => {
        return pool.request()
            .query(`select count(idDicEV) as 'count' from YourWords_Vie_Eng where idUser = ${id}`);
        
    }).then(result => {
        res.send(result.recordset);
        
    }).catch(err => {
        console.log(err);
    });
}