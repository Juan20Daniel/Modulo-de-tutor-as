const dbcon = require('../module/database');
const resultExaII = {}

resultExaII.listAlumGrups = async(req, res)=>{
    const sql = `select distinct grupoTutores from alumnos where grupoTutores like '1%'`;
    dbcon.query(sql, function(error, data){
        if(error) throw error;
        res.json({success:true, data:data});
    });
}

resultExaII.listGruposIdTu = async (req, res)=>{
    const {grupo} = req.params;
    const sql = `SELECT nombreAlumno, apellidoAlumno, idAlumnos FROM alumnos INNER JOIN resultExamenll ON alumnos.idAlumnos = resultExamenll.idAlumnos17 WHERE grupoTutores = '${grupo}' AND resultado = 0`;
    dbcon.query(sql, function(error, data){
        if(error) throw error;
        res.json({success:true, data:data});
    });
}

resultExaII.listResultGrups = async (req, res)=>{
    const {grupo} = req.params;
    const sql = `SELECT nombreAlumno, apellidoAlumno, idAlumnos17, resultado FROM alumnos inner join resultExamenll on alumnos.idAlumnos = resultExamenll.idAlumnos17 WHERE grupoTutores = '${grupo}' and resultado != 0`;
    dbcon.query(sql, function(error, data){
        if(error) throw error;
        res.json({success:true, data:data});
    });
}

resultExaII.listIdTutor = async (req, res)=>{
    const {grupo} = req.params;
    const sql = `SELECT DISTINCT idTutoriasDocentes18 FROM alumnos WHERE grupoTutores = '${grupo}'`;
    dbcon.query(sql, function(error, data){
        if(error) throw error;
        res.json({success:true, data:data});
    });
}

resultExaII.insertResultExII = async (req, res)=>{
    const {idAlumno17} = req.params;
    const {resultado} = req.body;
    const datos = {
        resultado:resultado
    }
    const sql = `UPDATE resultExamenll SET resultado = ${resultado}, fechaResult = CURDATE() WHERE idAlumnos17 = ${idAlumno17};`;
    dbcon.query(sql, datos, error=>{
        if(error){
            res.json({success:true, Status:'Datos actualizados'});
        }
    });
}

 resultExaII.listAllForGroups = async (req, res)=>{
    const {id} = req.params;
    const sql = `SELECT nombreAlumno, apellidoAlumno, numControlA, resultado FROM tutoriasDocentes INNER JOIN alumnos ON tutoriasDocentes.numControlD = alumnos.idTutoriasDocentes18 
    INNER JOIN resultExamenll ON alumnos.idAlumnos = resultExamenll.idAlumnos17 WHERE numControlD = ${id} and resultado != 0`;
    dbcon.query(sql, function(error, data){
        if(error) throw error;
        res.json({success:true, data:data});
    });
}

resultExaII.listResultForGroups = async (req, res)=>{
    const sql = `SELECT DISTINCT grupoTutores, carreTutores, YEAR(fechaResult) AS ano FROM alumnos INNER JOIN resultExamenll ON alumnos.idAlumnos = resultExamenll.idAlumnos17 WHERE resultado != 0`;
    dbcon.query(sql, function(error, data){
        if(error) throw error;
        res.json({success:true, data:data});
    });
}

resultExaII.deleteResultExII = async (req, res)=>{
    const {idAlumno17} = req.body;
    const sql = `UPDATE resultExamenll SET resultado = 0 WHERE idAlumnos17 = ${idAlumno17};`;
    dbcon.query(sql, error=>{
    if(error) throw error;
        res.json({success:true, Status:'Datos eliminado'});
    });
}

resultExaII.listResforGrupPE = async (req, res)=>{
    const {grupo} = req.params;
    const sql = `SELECT tipo, idAlumnos, nombreAlumno, apellidoAlumno, numControlA, idDatosIdent FROM tutoriasDocentes
	inner join alumnos on tutoriasDocentes.numControlD = alumnos.encargadoPE
    INNER JOIN datos_identificasion ON alumnos.idAlumnos = datos_identificasion.idAlumnos2
     WHERE grupoTutores = '${grupo}'`;
    dbcon.query(sql, function(error, data){
        if(error) throw error;
        res.json({success:true, data:data});
    });
}

resultExaII.listResAllforGrupJ = async (req, res)=>{
    const {grupo} = req.params;
    const sql = `SELECT nombreAlumno, apellidoAlumno, numControlA, resultado FROM alumnos INNER JOIN resultExamenll ON alumnos.idAlumnos = resultExamenll.idAlumnos17 
    WHERE grupoTutores = '${grupo}' AND resultado != 0`;
    dbcon.query(sql, function(error, data){
        if(error) throw error;
        res.json({success:true, data:data});
    });
}

resultExaII.listFiltrarResJ = async (req, res)=>{
    const {grupo} = req.params;
    const sql = `SELECT DISTINCT YEAR(fechaResult) as ano FROM resultExamenll WHERE fechaResult != 'sin calificacion'`;
    dbcon.query(sql, function(error, data){
        if(error) throw error;
        res.json({success:true, data:data});
    });
}

resultExaII.listFiltrarResultForAnos = async (req, res)=>{
    const {ano} = req.params;
    const sql = `SELECT DISTINCT grupoTutores, carreTutores, YEAR(fechaResult) AS ano FROM alumnos INNER JOIN resultExamenll ON alumnos.idAlumnos = resultExamenll.idAlumnos17 
    WHERE resultado != 0 AND YEAR(fechaResult) = '${ano}'`;
    dbcon.query(sql, function(error, data){
        if(error) throw error;
        res.json({success:true, data:data});
    });
}

module.exports =  resultExaII;