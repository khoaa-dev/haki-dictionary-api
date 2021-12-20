import sql from 'mssql';
import config from '../config.js';

export const getAllUser = (req, res) => {
    sql.connect(config).then(pool => {
        return pool.request().query('select * from Users');
    })
    .then(reslut => {
        res.send(reslut.recordset);
    })
    .catch(err => {
        res.send(err);
    })
}

export const createUser = (req, res) => {
    const data = {
        email: req.body.email,
        name: req.body.name,
        pass: req.body.pass,
        avatarUrl: req.body.avatarUrl
    };
    sql.connect(config).then(pool => {
        return pool.request()
            .query(`insert into Users (email, name, pass, avatarUrl)
                    values ('${data.email}', N'${data.name}', '${data.pass}', '${data.avatarUrl}')`);
        
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