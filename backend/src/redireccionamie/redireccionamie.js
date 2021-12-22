const dbcon = require('../module/database');
const  redirecc = {}

redirecc.Redir = async (req,res) =>{
    const {num1} = req.params;
    const sql = `SELECT * FROM tutoriasdocentes WHERE numControlD = ${num1}`;
    dbcon.query(sql, (error, data) => {
        if (error) throw error;
        if (data.length > 0) {
            res.json({success:true, data:data});
        } else {
            const sql = `SELECT * FROM alumnos WHERE numControlA = ${num1}`;
            dbcon.query(sql, (error, data) => {
                if (error) throw error;
                if (data.length > 0) {
                    res.json({success:true, data:data});
                } else {
                    res.send('Not result');
                }
            });
        }
    });
}

module.exports = redirecc;