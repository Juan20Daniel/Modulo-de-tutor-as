const dbcon = require('../module/database');
const habilitarEntrIni = {}

habilitarEntrIni.verificaButtonAbilitate = async (req, res)=>{
    const {id} = req.params;
    const sql = `SELECT estado FROM estadoButon WHERE idAlumnos15 = ${id}`;
    dbcon.query(sql, function(error, data){
        if(error) throw error;
        res.json({success:true, data:data});
    });
}

habilitarEntrIni.verificaButtonAbilitateEvaluaDocente = async (req, res)=>{
    const {id} = req.params;
    const sql = `SELECT estado FROM estadoButonEvalua WHERE idAlumnos16 = ${id}`;
    dbcon.query(sql, function(error, data){
        if(error) throw error;
        res.json({success:true, data:data});
    });
}

habilitarEntrIni.activarButtonEntrevistaIniId = async (req, res)=>{
    const {id} = req.params;
    const sql = `UPDATE estadobuton SET estado='block' WHERE idnumControlD20 = ${id}`;
    dbcon.query(sql, function(error, data){
        if(error) throw error;
        res.json({success:true, Status:'Entrevista activada'});
    });
}

module.exports = habilitarEntrIni;