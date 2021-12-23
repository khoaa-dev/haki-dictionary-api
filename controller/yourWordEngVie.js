import sql from 'mssql';
import config from '../config.js';

export const getAllYourWord = (req, res) => {
    const {id} = req.params;
    sql.connect(config).then(pool => {
        return pool.request()
            .query(`select idUser, idDicEV, name, content, image from YourWords_Eng_Vie, dictionary_Eng_Vie where idUser = ${id} and idDicEV = id`);
        
    }).then(result => {
        res.send(result.recordset);
        
    }).catch(err => {
        console.log(err);
    });
}

export const addYourWord = (req, res) => {
    const data = {
        idDicEV: req.body.idDicEV,
        idUser: req.body.idUser
    };
    sql.connect(config).then(pool => {
        return pool.request()
            .query(`set dateformat dmy
                    insert into YourWords_Eng_Vie (idDicEV, idUser)
                    values ('${data.idDicEV}', '${data.idUser}')`);
        
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

export const deleteYourWord = (req, res) => {
    const data = {
        idDicEV: req.body.idDicEV,
        idUser: req.body.idUser
    };
    sql.connect(config).then(pool => {
        return pool.request()
            .query(`delete from  YourWords_Eng_Vie
                    where idDicEV = ${data.idDicEV} and idUser = ${data.idUser}`);
        
    }).then(result => {
        if(result.rowsAffected == 1) {
            res.send({
                "status": "Delete successfully"
            });
        } else {
            res.send({
                "status": "Delete failed"
            });
        }
        
    }).catch(err => {
        console.log(err);
    });
}