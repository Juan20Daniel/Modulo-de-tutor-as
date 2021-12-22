const dbcon = require('../module/database');
const cambioT = {}

cambioT.listTutores = async (req, res)=>{
    const sql = 'SELECT nombreDocente, apellidoDocente, numControlD, tipo FROM tutoriasDocentes WHERE tipo = "Tutor" OR tipo = "Maestro"';
    dbcon.query(sql, function(error, data){
        if(error) throw error;
        res.json({success:true, data:data});
    });
}

cambioT.cambioTutor = async (req, res)=>{
    const {_contAnteri, _contNuev} = req.body;
    const datos = `
    CALL cambioTutor(?, ?)
    `;
    dbcon.query(datos, [_contAnteri, _contNuev], (error, rows, fields)=>{
        if(error) throw error;
        res.json({success:true, Status:'Datos actualizado'});
    });
}

module.exports = cambioT;