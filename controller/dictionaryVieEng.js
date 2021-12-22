import sql from 'mssql';
import config from '../config.js';

export const getAllDictionary = (req, res) => {
    sql.connect(config).then(pool => {
        return pool.request().query('select * from dictionary_Vie_Eng');
    })
    .then(result => {
        res.send(result.recordset);
    })
    .catch(err => {
        res.send(err);
    })
}

export const getAllDictionaryByName = (req, res) => {
    const {name} = req.params;
    console.log(name);
    sql.connect(config).then(pool => {
        return pool.request().query(`select * from dictionary_Vie_Eng where name like N'${name}%'`);
    })
    .then(result => {
        res.send(result.recordset);
    })
    .catch(err => {
        res.send(err);
    })
}

export const getAllDictionaryById = (req, res) => {
    const {id} = req.params;
    sql.connect(config).then(pool => {
        return pool.request().query(`select * from dictionary_Vie_Eng where id = ${id}`);
    })
    .then(result => {
        res.send(result.recordset);
    })
    .catch(err => {
        res.send(err);
    })
}
