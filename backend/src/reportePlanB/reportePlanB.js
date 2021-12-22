const dbcon = require('../module/database');
const reportePlanB = {}

reportePlanB.listReportPlaB = async (req, res)=>{
    const {id} = req.params;
    const sql = `SELECT DISTINCT nombreDocente, apellidoDocente, idDatosAccion, grupoDatos, cicloDatos FROM tutoriasDocentes 
    INNER JOIN datos_accion ON tutoriasDocentes.numControlD = datos_accion.idTutoriasDocentes15 WHERE numControlD = ${id}`;
    dbcon.query(sql, function(error, data){
        if(error) throw error;
        res.json({success:true, data:data});
    });
}

reportePlanB.listTotalPrograma = async (req, res)=>{
    const {numControlD, idDatosAccion} = req.params;
    const sql = `SELECT COUNT(*) as programadas FROM tutoriasDocentes INNER JOIN  datos_accion ON tutoriasDocentes.numControlD = datos_accion.idTutoriasDocentes15
    INNER JOIN atencion_indi ON datos_accion.idDatosAccion = atencion_indi.idDatosAccion3 WHERE numControlD = ${numControlD} AND idDatosAccion = ${idDatosAccion}`;
    dbcon.query(sql, function(error, data){
        if(error) throw error;
        res.json({success:true, data:data});
    });
}

reportePlanB.listTotalCanaliz = async (req, res)=>{
    const {numControlD, grupoTutores} = req.params;
    const sql = `SELECT count(*) as canaliz FROM alumnos 
    INNER JOIN canalizacion_alumno ON alumnos.idAlumnos = canalizacion_alumno.idAlumnos14 WHERE idTutorDocente4 = ${numControlD} AND grupoTutores = '${grupoTutores}' AND planONoplan = 'planeado'`;
    dbcon.query(sql, function(error, data){
        if(error) throw error;
        res.json({success:true, data:data});
    });
}

reportePlanB.listPsicologoT  = async (req, res)=>{
    const {numControlD, grupoTutores} = req.params;
    const sql = `SELECT count(*) as psicologoTH, CONCAT(':H') as tipo FROM alumnos INNER JOIN canalizacion_alumno ON alumnos.idAlumnos = canalizacion_alumno.idAlumnos14 
    WHERE idTutorDocente4 = ${numControlD} AND grupoTutores = '${grupoTutores}' AND tipoCanaAlu = 'Hombre' AND areaCanalAlu = 'Psicólogo' AND planONoplan = 'planeado';`;
    dbcon.query(sql, function(error, data){
        if(error) throw error;
        res.json({success:true, data:data});
    });
}

reportePlanB.listPsicologoTM  = async (req, res)=>{
    const {numControlD, grupoTutores} = req.params;
    const sql = `SELECT count(*) as psicologoTM, CONCAT(':M') as tipoM FROM alumnos INNER JOIN canalizacion_alumno ON alumnos.idAlumnos = canalizacion_alumno.idAlumnos14 
    WHERE idTutorDocente4 = ${numControlD} AND grupoTutores = '${grupoTutores}' AND tipoCanaAlu = 'Mujer' AND areaCanalAlu = 'Psicólogo' AND planONoplan = 'planeado';`;
    dbcon.query(sql, function(error, data){
        if(error) throw error;
        res.json({success:true, data:data});
    });
}

reportePlanB.listPedagogoTH  = async (req, res)=>{
    const {numControlD, grupoTutores} = req.params;
    const sql = `SELECT count(*) as PedagogoTH, CONCAT(':H') as tipoH FROM alumnos INNER JOIN canalizacion_alumno ON alumnos.idAlumnos = canalizacion_alumno.idAlumnos14 
    WHERE idTutorDocente4 = ${numControlD} AND grupoTutores = '${grupoTutores}' AND tipoCanaAlu = 'Hombre' AND areaCanalAlu = 'Pedagogo' AND planONoplan = 'planeado';`;
    dbcon.query(sql, function(error, data){
        if(error) throw error;
        res.json({success:true, data:data});
    });
}

reportePlanB.listPedagogoTM  = async (req, res)=>{
    const {numControlD, grupoTutores} = req.params;
    const sql = `SELECT count(*) as PedagogoTM, CONCAT(':M') as tipoM FROM alumnos INNER JOIN canalizacion_alumno ON alumnos.idAlumnos = canalizacion_alumno.idAlumnos14 
    WHERE idTutorDocente4 = ${numControlD} AND grupoTutores = '${grupoTutores}' AND tipoCanaAlu = 'Mujer' AND areaCanalAlu = 'Pedagogo' AND planONoplan = 'planeado';`;
    dbcon.query(sql, function(error, data){
        if(error) throw error;
        res.json({success:true, data:data});
    });
}

reportePlanB.listBecaTHo  = async (req, res)=>{
    const {numControlD, grupoTutores} = req.params;
    const sql = `SELECT count(*) as BecaTH, CONCAT(':H') as tipoH FROM alumnos INNER JOIN canalizacion_alumno ON alumnos.idAlumnos = canalizacion_alumno.idAlumnos14 
    WHERE idTutorDocente4 = ${numControlD} AND grupoTutores = '${grupoTutores}' AND tipoCanaAlu = 'Hombre' AND areaCanalAlu = 'Becas' AND planONoplan = 'planeado';`;
    dbcon.query(sql, function(error, data){
        if(error) throw error;
        res.json({success:true, data:data});
    });
}

reportePlanB.listBecaTMu  = async (req, res)=>{
    const {numControlD, grupoTutores} = req.params;
    const sql = `SELECT count(*) as BecaTM, CONCAT(':M') as tipoM FROM alumnos INNER JOIN canalizacion_alumno ON alumnos.idAlumnos = canalizacion_alumno.idAlumnos14 
    WHERE idTutorDocente4 = ${numControlD} AND grupoTutores = '${grupoTutores}' AND tipoCanaAlu = 'Mujer' AND areaCanalAlu = 'Becas' AND planONoplan = 'planeado';`;
    dbcon.query(sql, function(error, data){
        if(error) throw error;
        res.json({success:true, data:data});
    });
}

reportePlanB.listEnfermeriaTHo  = async (req, res)=>{
    const {numControlD, grupoTutores} = req.params;
    const sql = `SELECT count(*) as EnfermeriaTH, CONCAT(':H') as tipoH FROM alumnos INNER JOIN canalizacion_alumno ON alumnos.idAlumnos = canalizacion_alumno.idAlumnos14 
    WHERE idTutorDocente4 = ${numControlD} AND grupoTutores = '${grupoTutores}' AND tipoCanaAlu = 'Hombre' AND areaCanalAlu = 'Enfermería' AND planONoplan = 'planeado';`;
    dbcon.query(sql, function(error, data){
        if(error) throw error;
        res.json({success:true, data:data});
    });
}

reportePlanB.listEnfermeriaTMu  = async (req, res)=>{
    const {numControlD, grupoTutores} = req.params;
    const sql = `SELECT count(*) as EnfermeriaTM, CONCAT(':M') as tipoM FROM alumnos INNER JOIN canalizacion_alumno ON alumnos.idAlumnos = canalizacion_alumno.idAlumnos14 
    WHERE idTutorDocente4 = ${numControlD} AND grupoTutores = '${grupoTutores}' AND tipoCanaAlu = 'Mujer' AND areaCanalAlu = 'Enfermería' AND planONoplan = 'planeado';`;
    dbcon.query(sql, function(error, data){
        if(error) throw error;
        res.json({success:true, data:data});
    });
}

reportePlanB.listIncubadoraTHo  = async (req, res)=>{
    const {numControlD, grupoTutores} = req.params;
    const sql = `SELECT count(*) as IncubadoraTH, CONCAT(':H') as tipoH FROM alumnos INNER JOIN canalizacion_alumno ON alumnos.idAlumnos = canalizacion_alumno.idAlumnos14 
    WHERE idTutorDocente4 = ${numControlD} AND grupoTutores = '${grupoTutores}' AND tipoCanaAlu = 'Hombre' AND areaCanalAlu = 'Incubadora' AND planONoplan = 'planeado';`;
    dbcon.query(sql, function(error, data){
        if(error) throw error;
        res.json({success:true, data:data});
    });
}
reportePlanB.listIncubadoraTMu  = async (req, res)=>{
    const {numControlD, grupoTutores} = req.params;
    const sql = `SELECT count(*) as IncubadoraTM, CONCAT(':M') as tipoM FROM alumnos INNER JOIN canalizacion_alumno ON alumnos.idAlumnos = canalizacion_alumno.idAlumnos14 
    WHERE idTutorDocente4 = ${numControlD} AND grupoTutores = '${grupoTutores}' AND tipoCanaAlu = 'Mujer' AND areaCanalAlu = 'Incubadora' AND planONoplan = 'planeado';`;
    dbcon.query(sql, function(error, data){
        if(error) throw error;
        res.json({success:true, data:data});
    });
}

reportePlanB.listBolsaTrabajoTHo  = async (req, res)=>{
    const {numControlD, grupoTutores} = req.params;
    const sql = `SELECT count(*) as BolsaTrabajoTH, CONCAT(':H') as tipoH FROM alumnos INNER JOIN canalizacion_alumno ON alumnos.idAlumnos = canalizacion_alumno.idAlumnos14 
    WHERE idTutorDocente4 = ${numControlD} AND grupoTutores = '${grupoTutores}' AND tipoCanaAlu = 'Hombre' AND areaCanalAlu = 'Bolsa de trabajo' AND planONoplan = 'planeado';`;
    dbcon.query(sql, function(error, data){
        if(error) throw error;
        res.json({success:true, data:data});
    });
}

reportePlanB.listBolsaTrabajoTMu  = async (req, res)=>{
    const {numControlD, grupoTutores} = req.params;
    const sql = `SELECT count(*) as BolsaTrabajoTM, CONCAT(':M') as tipoM FROM alumnos INNER JOIN canalizacion_alumno ON alumnos.idAlumnos = canalizacion_alumno.idAlumnos14 
    WHERE idTutorDocente4 = ${numControlD} AND grupoTutores = '${grupoTutores}' AND tipoCanaAlu = 'Mujer' AND areaCanalAlu = 'Bolsa de trabajo' AND planONoplan = 'planeado';`;
    dbcon.query(sql, function(error, data){
        if(error) throw error;
        res.json({success:true, data:data});
    });
}

reportePlanB.listAsesorAcademicoTH  = async (req, res)=>{
    const {numControlD, grupoTutores} = req.params;
    const sql = `SELECT count(*) as AsesorAcademicoTH, CONCAT(':H') as tipoH FROM alumnos INNER JOIN canalizacion_alumno ON alumnos.idAlumnos = canalizacion_alumno.idAlumnos14 
    WHERE idTutorDocente4 = ${numControlD} AND grupoTutores = '${grupoTutores}' AND tipoCanaAlu = 'Hombre' AND areaCanalAlu = 'Asesoría Académica' AND planONoplan = 'planeado';`;
    dbcon.query(sql, function(error, data){
        if(error) throw error;
        res.json({success:true, data:data});
    });
}

reportePlanB.listAsesorAcademicoTM  = async (req, res)=>{
    const {numControlD, grupoTutores} = req.params;
    const sql = `SELECT count(*) as AsesorAcademicoTM, CONCAT(':M') as tipoM FROM alumnos INNER JOIN canalizacion_alumno ON alumnos.idAlumnos = canalizacion_alumno.idAlumnos14 
    WHERE idTutorDocente4 = ${numControlD} AND grupoTutores = '${grupoTutores}' AND tipoCanaAlu = 'Mujer' AND areaCanalAlu = 'Asesoría Académica' AND planONoplan = 'planeado';`;
    dbcon.query(sql, function(error, data){
        if(error) throw error;
        res.json({success:true, data:data});
    });
}

reportePlanB.listOpsReportSegui  = async (req, res)=>{
    const {numControlD, grupoTutores} = req.params;
    const sql = `SELECT nombreAlumno,  apellidoAlumno, areaCanalAlu, obserCanalAlu FROM alumnos  INNER JOIN canalizacion_alumno ON  alumnos.idAlumnos = canalizacion_alumno.idAlumnos14 
    WHERE idTutoriasDocentes18 = ${numControlD} AND grupoTutores = '${grupoTutores}' AND planONoplan = 'planeado'`;
    dbcon.query(sql, function(error, data){
        if(error) throw error;
        res.json({success:true, data:data});
    });
}

reportePlanB.listTotalNoProgr = async (req, res)=>{
    const {numControlD, grupoTutores} = req.params;
    const sql = `SELECT count(*) as noProgram FROM alumnos 
    INNER JOIN canalizacion_alumno ON alumnos.idAlumnos = canalizacion_alumno.idAlumnos14 WHERE idTutorDocente4 = ${numControlD} AND grupoTutores = '${grupoTutores}' AND planONoplan = 'noPlaneado'`;
    dbcon.query(sql, function(error, data){
        if(error) throw error;
        res.json({success:true, data:data});
    });
}

reportePlanB.listAllAsuAten = async (req, res)=>{
    const {numControlD, grupoTutores} = req.params;
    const sql = `SELECT areaCanalAlu, obserCanalAlu, nombreAlumno, apellidoAlumno FROM  alumnos INNER JOIN canalizacion_alumno ON alumnos.idAlumnos = canalizacion_alumno.idAlumnos14 
    WHERE idTutoriasDocentes18 = ${numControlD} AND grupoTutores = '${grupoTutores}' AND planONoplan = 'noPlaneado'`;
    dbcon.query(sql, function(error, data){
        if(error) throw error;
        res.json({success:true, data:data});
    });
}

module.exports = reportePlanB;