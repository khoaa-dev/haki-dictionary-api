import sql from 'mssql';
import config from '../config.js';

export const countWordInHistory = (req, res) => {
    const {id} = req.params;

    (async function () {
        try {
            let pool = await sql.connect(config)
            let numWordEngVie = await pool.request()
                .query(`select count(idDicEV) as 'count' from HistoryWord_Eng_Vie where idUser = ${id}`);
                
            // Stored procedure
            
            let numWordVieEng = await pool.request()
                .query(`select count(idDicVE) as 'count' from HistoryWord_Vie_Eng where idUser = ${id}`);
            
            const sum = await numWordEngVie.recordset[0].count + await numWordVieEng.recordset[0].count;

            await res.send({
                "sum": sum
            })
        } catch (err) {
            // ... error checks
        }
    })()
}

export const countWordInYourWord = (req, res) => {
    const {id} = req.params;

    (async function () {
        try {
            let pool = await sql.connect(config)
            let numWordEngVie = await pool.request()
                .query(`select count(idDicEV) as 'count' from YourWords_Eng_Vie where idUser = ${id}`);
                
            console.dir(numWordEngVie.recordset[0].count)
        
            // Stored procedure
            
            let numWordVieEng = await pool.request()
                .query(`select count(idDicVE) as 'count' from YourWords_Vie_Eng where idUser = ${id}`);
            
            console.dir(numWordVieEng.recordset[0].count)
            const sum = await numWordEngVie.recordset[0].count + await numWordVieEng.recordset[0].count;

            await res.send({
                "sum": sum
            })
        } catch (err) {
            // ... error checks
        }
    })()
}