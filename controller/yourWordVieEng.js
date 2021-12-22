import sql from 'mssql';
import config from '../config.js';

export const addYourWord = (req, res) => {
    const data = {
        idDicVE: req.body.idDicVE,
        idUser: req.body.idUser
    };
    sql.connect(config).then(pool => {
        return pool.request()
            .query(`insert into YourWords_Vie_Eng (idDicVE, idUser)
                    values ('${data.idDicVE}', '${data.idUser}')`);
        
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