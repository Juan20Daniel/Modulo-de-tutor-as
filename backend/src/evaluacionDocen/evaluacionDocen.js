const dbcon = require('../module/database');
const evaluacionDocen = {}

evaluacionDocen.insertEvalua = async (req, res) =>{
    const {cuatrimestre, idAlumnos12, pregunta1, pregunta2, pregunta3, pregunta4, pregunta5, pregunta6, pregunta7, pregunta8, pregunta9, pregunta10, comentario, idAlumnos13, idAlumnos16} = req.body;
    const datos =`
        CALL evaluaDocente(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
    `;
    dbcon.query(datos, [cuatrimestre, idAlumnos12, pregunta1, pregunta2, pregunta3, pregunta4, pregunta5, pregunta6, pregunta7, pregunta8, pregunta9, pregunta10, comentario, idAlumnos13, idAlumnos16],(err, rows, fields) => {
        if(!err){
            res.json({Status: 'Datos Insertados'});
        }else{
            console.log(err);
        }
    });
}

evaluacionDocen.listCalifiFinal = async (req, res)=>{
    const {id,grupo} = req.params;
    const sql = ` SELECT SUM(pregunta1) / COUNT(*) + 
    SUM(pregunta2) / COUNT(*) + 
    SUM(pregunta3) / COUNT(*) + 
    SUM(pregunta4) / COUNT(*) + 
    SUM(pregunta5) / COUNT(*) + 
    SUM(pregunta6) / COUNT(*) + 
    SUM(pregunta7) / COUNT(*) + 
    SUM(pregunta8) / COUNT(*) + 
    SUM(pregunta9) / COUNT(*) / 9 as calificacion FROM tutoriasDocentes INNER JOIN alumnos ON  tutoriasDocentes.numControlD = alumnos.idTutoriasDocentes18 
    INNER JOIN encuestaT ON alumnos.idAlumnos = encuestaT.idAlumnos13 WHERE numControlD = ${id} and grupoTutores='${grupo}'`;
    dbcon.query(sql, function(error, data){
        if(error) throw error;
        res.json({success:true, data:data});
    });
}

evaluacionDocen.activarButtonEvaluaDocente = async (req, res)=>{
    const sql = `UPDATE estadoButonEvalua SET estado='block'`;
    dbcon.query(sql, function(error){
        if(error) throw error;
        res.json({success:true, Status:'Evaluación docente activada'});
    });
}

evaluacionDocen.listEvaluaDocent = async (req, res) =>{
    const sql = `SELECT DISTINCT grupoTutores, nombreDocente, apellidoDocente, numControlD FROM tutoriasDocentes inner join alumnos on tutoriasDocentes.numControlD = alumnos.idTutoriasDocentes18 WHERE tipo = 'Tutor'`;
    dbcon.query(sql, function(error, data){
        if(error) throw error;
        res.json({success:true, data:data});
    });
}

evaluacionDocen.listGroupResultIdGrupo = async (req, res) =>{
    const {id,grupo} = req.params;
    const sql = `SELECT idAlumnos, numControlA, nombreAlumno, apellidoAlumno FROM alumnos INNER JOIN encuestaT ON alumnos.idAlumnos = encuestaT.idAlumnos13 WHERE idTutoriasDocentes18 = ${id} and grupoTutores = '${grupo}'`;
    dbcon.query(sql, function(error, data){
        if(error) throw error;
        res.json({success:true, data:data});
    });
}

evaluacionDocen.listResultEvaluaOnliOneId = async (req, res) =>{
    const {id} = req.params;
    const sql = `SELECT distinct fechaDatoGene, carreTutores, nombreAlumno, apellidoAlumno, grupoTutores, nombreDocente, apellidoDocente, cuatrimestre, pregunta1, pregunta2, pregunta3, pregunta4, pregunta5, pregunta6, pregunta7, pregunta8, pregunta9, pregunta10, comentario FROM tutoriasDocentes INNER JOIN alumnos ON tutoriasDocentes.numControlD = alumnos.idTutoriasDocentes18 INNER JOIN datos_generales_alumno ON alumnos.idAlumnos = datos_generales_alumno.idAlumnos12 INNER JOIN encuestaT ON alumnos.idAlumnos = encuestaT.idAlumnos13 WHERE idAlumnos = ${id}`;
    dbcon.query(sql, function(error, data){
        if(error) throw error;
        res.json({success:true, data:data});
    });
}

evaluacionDocen.listAnoAll = async (req, res) =>{
    const sql = 'SELECT DISTINCT YEAR(fechaDatoGene) as fecha FROM datos_generales_alumno';
    dbcon.query(sql, function(error, data){
        if(error) throw error;
        res.json({success:true, data:data});
    });
}

evaluacionDocen.listAnoFiltrarGroupAno = async (req, res) =>{
    const {ano} = req.params;
    const sql = `SELECT distinct grupoTutores, nombreDocente, apellidoDocente, numControlD FROM tutoriasDocentes 
    inner join  alumnos on tutoriasDocentes.numControlD = alumnos.idTutoriasDocentes18 
    INNER JOIN datos_generales_alumno ON alumnos.idAlumnos = datos_generales_alumno.idAlumnos12 WHERE tipo = 'Tutor' and  YEAR(fechaDatoGene) = '${ano}'`;
    dbcon.query(sql, function(error, data){
        if(error) throw error;
        res.json({success:true, data:data});
    });
}

module.exports = evaluacionDocen;