import sql from 'mssql';
import config from '../config.js';

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