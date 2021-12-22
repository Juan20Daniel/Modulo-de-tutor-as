const dbcon = require('../module/database');
const infoSeguiAccT = {}

infoSeguiAccT.insertInfoSeguiAccT = async (req, res)=>{
    const {carreraAcc, totalGrupo, totalTutor, periodoCuatri, totalAtendi, idTutoriasDocentes6, tutorGrupa, totalTemas, totalTemaVist, idTutoriasDocentes7, tutorIndi, totalPrograma, totalRealiza, idTutoriasDocentes8, acadTutorIndi, profTutorIndi, admiTutorIndi, otrosTutorIn, idTutoriasDocentes10, totalIniCuatri, totalTermiCuatri, idTutoriasDocentes12, cumpliExS, reprobacS, problEcoS, dificuTrS, probleTrS, cambiCarS, incompHoS, faltReglS, cambiRegS, cambiUniS, problFamS, problPerS, otraS, idTutoriasDocentes14, cumpliExN, reprobacN, problEcoN, dificuTrN, probleTrN, cambiCarN, incompHoN, faltReglN, cambiRegN, cambiUniN, problFamN, problPerN, otraN, idTutoriasDocentes15, responsables, comentario, idTutoriasDocentes11} = req.body;
    const datos = `
    CALL InfoSeguiAaccTuto(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    dbcon.query(datos, [carreraAcc, totalGrupo, totalTutor, periodoCuatri, totalAtendi, idTutoriasDocentes6, tutorGrupa, totalTemas, totalTemaVist, idTutoriasDocentes7, tutorIndi, totalPrograma, totalRealiza, idTutoriasDocentes8, acadTutorIndi, profTutorIndi, admiTutorIndi, otrosTutorIn, idTutoriasDocentes10, totalIniCuatri, totalTermiCuatri, idTutoriasDocentes12, cumpliExS, reprobacS, problEcoS, dificuTrS, probleTrS, cambiCarS, incompHoS, faltReglS, cambiRegS, cambiUniS, problFamS, problPerS, otraS, idTutoriasDocentes14, cumpliExN, reprobacN, problEcoN, dificuTrN, probleTrN, cambiCarN, incompHoN, faltReglN, cambiRegN, cambiUniN, problFamN, problPerN, otraN, idTutoriasDocentes15, responsables, comentario, idTutoriasDocentes11],(err, rows, fields)=>{
        if(!err){
            res.json({success:true, Status:'Datos insertados'});
        }
    });
}

infoSeguiAccT.listISAT = async (req, res)=>{
    const {id} = req.params;
    const sql = `SELECT idAcciTuto, nombreDocente, apellidoDocente, fechaAT, carreraAcc FROM tutoriasDocentes INNER JOIN  accion_tutorial ON tutoriasDocentes.numControlD = accion_tutorial.idTutoriasDocentes6 WHERE numControlD = ${id}`;
    dbcon.query(sql, function(error, data){
        if(error) throw error;
        res.json({success:true, data:data});
    });
}

infoSeguiAccT.listOnliISAT = async (req, res)=>{
    const {id} = req.params;
    const sql = `SELECT carreraAcc, periodoCuatri, totalGrupo, totalTutor, totalAtendi, 
    tutorGrupa, totalTemas, totalTemaVist,
    tutorIndi, totalPrograma, totalRealiza,
    acadTutorIndi, profTutorIndi, admiTutorIndi, otrosTutorIn,
    totalIniCuatri, totalTermiCuatri,
    SUBSTRING_INDEX(cumpliExS,',',1) cumpliExSH, SUBSTRING_INDEX(cumpliExS,',',-1) cumpliExSM,
    SUBSTRING_INDEX(reprobacS,',',1) reprobacSH, SUBSTRING_INDEX(reprobacS,',',-1) reprobacSM,
    SUBSTRING_INDEX(problEcoS,',',1) problEcoSH, SUBSTRING_INDEX(problEcoS,',',-1) problEcoSM,
    SUBSTRING_INDEX(dificuTrS,',',1) dificuTrSH, SUBSTRING_INDEX(dificuTrS,',',-1) dificuTrSM,
    SUBSTRING_INDEX(probleTrS,',',1) probleTrSH, SUBSTRING_INDEX(probleTrS,',',-1) probleTrSM,
    SUBSTRING_INDEX(cambiCarS,',',1) cambiCarSH, SUBSTRING_INDEX(cambiCarS,',',-1) cambiCarSM,
    SUBSTRING_INDEX(incompHoS,',',1) incompHoSH, SUBSTRING_INDEX(incompHoS,',',-1) incompHoSM,
    SUBSTRING_INDEX(faltReglS,',',1) faltReglSH, SUBSTRING_INDEX(faltReglS,',',-1) faltReglSM, 
    SUBSTRING_INDEX(cambiRegS,',',1) cambiRegSH, SUBSTRING_INDEX(cambiRegS,',',-1) cambiRegSM,
    SUBSTRING_INDEX(cambiUniS,',',1) cambiUniSH, SUBSTRING_INDEX(cambiUniS,',',-1) cambiUniSM,
    SUBSTRING_INDEX(problFamS,',',1) problFamSH, SUBSTRING_INDEX(problFamS,',',-1) problFamSM,
    SUBSTRING_INDEX(problPerS,',',1) problPerSH, SUBSTRING_INDEX(problPerS,',',-1) problPerSM,
    SUBSTRING_INDEX(otraS,',',1) otraSH, SUBSTRING_INDEX(otraS,',',-1) otraSM,
    SUBSTRING_INDEX(cumpliExN,',',1) cumpliExNH, SUBSTRING_INDEX(cumpliExN,',',-1) cumpliExNM,
    SUBSTRING_INDEX(reprobacN,',',1) reprobacNH, SUBSTRING_INDEX(reprobacN,',',-1) reprobacNM,
    SUBSTRING_INDEX(problEcoN,',',1) problEcoNH, SUBSTRING_INDEX(problEcoN,',',-1) problEcoNM,
    SUBSTRING_INDEX(dificuTrN,',',1) dificuTrNH, SUBSTRING_INDEX(dificuTrN,',',-1) dificuTrNM,
    SUBSTRING_INDEX(probleTrN,',',1) probleTrNH, SUBSTRING_INDEX(probleTrN,',',-1) probleTrNM,
    SUBSTRING_INDEX(cambiCarN,',',1) cambiCarNH, SUBSTRING_INDEX(cambiCarN,',',-1) cambiCarNM,
    SUBSTRING_INDEX(incompHoN,',',1) incompHoNH, SUBSTRING_INDEX(incompHoN,',',-1) incompHoNM,
    SUBSTRING_INDEX(faltReglN,',',1) faltReglNH, SUBSTRING_INDEX(faltReglN,',',-1) faltReglNM, 
    SUBSTRING_INDEX(cambiRegN,',',1) cambiRegNH, SUBSTRING_INDEX(cambiRegN,',',-1) cambiRegNM,
    SUBSTRING_INDEX(cambiUniN,',',1) cambiUniNH, SUBSTRING_INDEX(cambiUniN,',',-1) cambiUniNM,
    SUBSTRING_INDEX(problFamN,',',1) problFamNH, SUBSTRING_INDEX(problFamN,',',-1) problFamNM,
    SUBSTRING_INDEX(problPerN,',',1) problPerNH, SUBSTRING_INDEX(problPerN,',',-1) problPerNM,
    SUBSTRING_INDEX(otraN,',',1) otraNH, SUBSTRING_INDEX(otraN,',',-1) otraNM,
    responsables,  comentario
    FROM accion_tutorial INNER JOIN tutorias_grupales ON accion_tutorial.idAcciTuto = tutorias_grupales.idTutorGrupal  
    INNER JOIN tutoria_individual ON accion_tutorial.idAcciTuto = tutoria_individual.idTutorIndi  
    INNER JOIN tutorIndiNoProgra ON accion_tutorial.idAcciTuto = tutorIndiNoProgra.idTutorProgra
    INNER JOIN bajas ON accion_tutorial.idAcciTuto = bajas.idBajas
    INNER JOIN canalizados ON accion_tutorial.idAcciTuto = canalizados.idCanalizados 
    INNER JOIN noCanalizados ON accion_tutorial.idAcciTuto = noCanalizados.idNoCanalizados 
    INNER JOIN responsable_tutoria ON accion_tutorial.idAcciTuto = responsable_tutoria.idResponsTutor WHERE idAcciTuto = ${id}`;
    dbcon.query(sql, function(error, data){
        if(error) throw error;
        res.json({success:true, data:data});
    });
}

infoSeguiAccT.listUpdateISAT = async (req, res)=>{
    const {id} = req.params;
    const sql = `SELECT carreraAcc, periodoCuatri, totalGrupo, totalTutor, totalAtendi, 
    tutorGrupa, totalTemas, totalTemaVist,
    tutorIndi, totalPrograma, totalRealiza,
    acadTutorIndi, profTutorIndi, admiTutorIndi, otrosTutorIn,
    totalIniCuatri, totalTermiCuatri,
    SUBSTRING_INDEX(cumpliExS,',',1) cumpliExSH, SUBSTRING_INDEX(cumpliExS,',',-1) cumpliExSM,
    SUBSTRING_INDEX(reprobacS,',',1) reprobacSH, SUBSTRING_INDEX(reprobacS,',',-1) reprobacSM,
    SUBSTRING_INDEX(problEcoS,',',1) problEcoSH, SUBSTRING_INDEX(problEcoS,',',-1) problEcoSM,
    SUBSTRING_INDEX(dificuTrS,',',1) dificuTrSH, SUBSTRING_INDEX(dificuTrS,',',-1) dificuTrSM,
    SUBSTRING_INDEX(probleTrS,',',1) probleTrSH, SUBSTRING_INDEX(probleTrS,',',-1) probleTrSM,
    SUBSTRING_INDEX(cambiCarS,',',1) cambiCarSH, SUBSTRING_INDEX(cambiCarS,',',-1) cambiCarSM,
    SUBSTRING_INDEX(incompHoS,',',1) incompHoSH, SUBSTRING_INDEX(incompHoS,',',-1) incompHoSM,
    SUBSTRING_INDEX(faltReglS,',',1) faltReglSH, SUBSTRING_INDEX(faltReglS,',',-1) faltReglSM, 
    SUBSTRING_INDEX(cambiRegS,',',1) cambiRegSH, SUBSTRING_INDEX(cambiRegS,',',-1) cambiRegSM,
    SUBSTRING_INDEX(cambiUniS,',',1) cambiUniSH, SUBSTRING_INDEX(cambiUniS,',',-1) cambiUniSM,
    SUBSTRING_INDEX(problFamS,',',1) problFamSH, SUBSTRING_INDEX(problFamS,',',-1) problFamSM,
    SUBSTRING_INDEX(problPerS,',',1) problPerSH, SUBSTRING_INDEX(problPerS,',',-1) problPerSM,
    SUBSTRING_INDEX(otraS,',',1) otraSH, SUBSTRING_INDEX(otraS,',',-1) otraSM,
    SUBSTRING_INDEX(cumpliExN,',',1) cumpliExNH, SUBSTRING_INDEX(cumpliExN,',',-1) cumpliExNM,
    SUBSTRING_INDEX(reprobacN,',',1) reprobacNH, SUBSTRING_INDEX(reprobacN,',',-1) reprobacNM,
    SUBSTRING_INDEX(problEcoN,',',1) problEcoNH, SUBSTRING_INDEX(problEcoN,',',-1) problEcoNM,
    SUBSTRING_INDEX(dificuTrN,',',1) dificuTrNH, SUBSTRING_INDEX(dificuTrN,',',-1) dificuTrNM,
    SUBSTRING_INDEX(probleTrN,',',1) probleTrNH, SUBSTRING_INDEX(probleTrN,',',-1) probleTrNM,
    SUBSTRING_INDEX(cambiCarN,',',1) cambiCarNH, SUBSTRING_INDEX(cambiCarN,',',-1) cambiCarNM,
    SUBSTRING_INDEX(incompHoN,',',1) incompHoNH, SUBSTRING_INDEX(incompHoN,',',-1) incompHoNM,
    SUBSTRING_INDEX(faltReglN,',',1) faltReglNH, SUBSTRING_INDEX(faltReglN,',',-1) faltReglNM, 
    SUBSTRING_INDEX(cambiRegN,',',1) cambiRegNH, SUBSTRING_INDEX(cambiRegN,',',-1) cambiRegNM,
    SUBSTRING_INDEX(cambiUniN,',',1) cambiUniNH, SUBSTRING_INDEX(cambiUniN,',',-1) cambiUniNM,
    SUBSTRING_INDEX(problFamN,',',1) problFamNH, SUBSTRING_INDEX(problFamN,',',-1) problFamNM,
    SUBSTRING_INDEX(problPerN,',',1) problPerNH, SUBSTRING_INDEX(problPerN,',',-1) problPerNM,
    SUBSTRING_INDEX(otraN,',',1) otraNH, SUBSTRING_INDEX(otraN,',',-1) otraNM,
    responsables,  comentario
    FROM accion_tutorial INNER JOIN tutorias_grupales ON accion_tutorial.idAcciTuto = tutorias_grupales.idTutorGrupal  
    INNER JOIN tutoria_individual ON accion_tutorial.idAcciTuto = tutoria_individual.idTutorIndi  
    INNER JOIN tutorIndiNoProgra ON accion_tutorial.idAcciTuto = tutorIndiNoProgra.idTutorProgra
    INNER JOIN bajas ON accion_tutorial.idAcciTuto = bajas.idBajas
    INNER JOIN canalizados ON accion_tutorial.idAcciTuto = canalizados.idCanalizados 
    INNER JOIN noCanalizados ON accion_tutorial.idAcciTuto = noCanalizados.idNoCanalizados 
    INNER JOIN responsable_tutoria ON accion_tutorial.idAcciTuto = responsable_tutoria.idResponsTutor WHERE idAcciTuto = ${id}`;
    dbcon.query(sql, function(error, data){
        if(error) throw error;
        res.json({success:true, data:data});
    });
}

infoSeguiAccT.updateISAT = async (req, res)=>{
    const {updateId, carreraAcc, totalGrupo,totalTutor,periodoCuatri,totalAtendi,tutorGrupa,totalTemas,totalTemaVist,tutorIndi,totalPrograma,totalRealiza, acadTutorIndi,profTutorIndi,admiTutorIndi,otrosTutorIn,totalIniCuatri,totalTermiCuatri,reprobacS,cumpliExS,problEcoS,dificuTrS,probleTrS,cambiCarS,incompHoS,faltReglS,cambiRegS,cambiUniS,problFamS,problPerS,otraS,cumpliExN,reprobacN,problEcoN,dificuTrN,probleTrN,cambiCarN,incompHoN,faltReglN,cambiRegN,cambiUniN,problFamN,problPerN,otraN,responsables,comentario} = req.body;
    const datos = `
    CALL updateISAT(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    dbcon.query(datos, [updateId, carreraAcc, totalGrupo, totalTutor, periodoCuatri, totalAtendi, tutorGrupa, totalTemas, totalTemaVist, tutorIndi, totalPrograma, totalRealiza, acadTutorIndi, profTutorIndi, admiTutorIndi, otrosTutorIn, totalIniCuatri, totalTermiCuatri, cumpliExS, reprobacS, problEcoS, dificuTrS, probleTrS, cambiCarS, incompHoS, faltReglS, cambiRegS, cambiUniS, problFamS, problPerS, otraS, cumpliExN, reprobacN, problEcoN, dificuTrN, probleTrN, cambiCarN, incompHoN, faltReglN, cambiRegN, cambiUniN, problFamN, problPerN, otraN, responsables, comentario], (err, rows, fields)=>{
        if(!err){
            res.json({success:true, Status:'Datos Aclualizados'});
        }
    });
}

infoSeguiAccT.listPeAllCarreras = async (req, res)=>{
    const {idPE} = req.params;
    const sql = `select distinct carreTutores from alumnos where not existS(SELECT carreraAcc FROM accion_tutorial WHERE accion_tutorial.carreraAcc = alumnos.carreTutores) AND encargadoPE = ${idPE}`;
    dbcon.query(sql, function(error, data){
        if(error) throw error;
        res.json({success:true, data:data});
    });
}

infoSeguiAccT.listPENomApe = async (req, res) =>{
    const {idPE} = req.params;
    const sql = `SELECT nombreDocente, apellidoDocente FROM tutoriasDocentes WHERE numControlD = ${idPE}`;
    dbcon.query(sql, function(error, data){
        if(error) throw error;
        res.json({success:true, data:data});
    });
}

infoSeguiAccT.listTotalPsico = async (req, res) =>{
    const {Carrera} = req.params;
    const sql = `SELECT COUNT(*) AS psicologo FROM alumnos INNER JOIN canalizacion_alumno ON alumnos.idAlumnos = canalizacion_alumno.idAlumnos14 
    WHERE areaCanalAlu = 'Psicólogo' AND carreTutores = '${Carrera}'`;
    dbcon.query(sql, function(error, data){
        if(error) throw error;
        res.json({success:true, data:data});
    });
}

infoSeguiAccT.listTotaPedag = async (req, res) =>{
    const {Carrera} = req.params;
    const sql = `SELECT COUNT(*) AS pedagogo FROM alumnos INNER JOIN canalizacion_alumno ON alumnos.idAlumnos = canalizacion_alumno.idAlumnos14 
    WHERE areaCanalAlu = 'Pedagogo' AND carreTutores = '${Carrera}'`;
    dbcon.query(sql, function(error, data){
        if(error) throw error;
        res.json({success:true, data:data});
    });
}

infoSeguiAccT.listTotBeca = async (req, res) =>{
    const {Carrera} = req.params;
    const sql = `SELECT COUNT(*) AS becas FROM alumnos INNER JOIN canalizacion_alumno ON alumnos.idAlumnos = canalizacion_alumno.idAlumnos14 
    WHERE areaCanalAlu = 'Becas' AND carreTutores = '${Carrera}'`;
    dbcon.query(sql, function(error, data){
        if(error) throw error;
        res.json({success:true, data:data});
    });
}

infoSeguiAccT.listTotalEnfermeria = async (req, res) =>{
    const {Carrera} = req.params;
    const sql = `SELECT COUNT(*) AS enfermeria FROM alumnos INNER JOIN canalizacion_alumno ON alumnos.idAlumnos = canalizacion_alumno.idAlumnos14 
    WHERE areaCanalAlu = 'Enfermería' AND carreTutores = '${Carrera}'`;
    dbcon.query(sql, function(error, data){
        if(error) throw error;
        res.json({success:true, data:data});
    });
}

infoSeguiAccT.listToIncubadora = async (req, res) =>{
    const {Carrera} = req.params;
    const sql = `SELECT COUNT(*) AS incubadora FROM alumnos INNER JOIN canalizacion_alumno ON alumnos.idAlumnos = canalizacion_alumno.idAlumnos14 
    WHERE areaCanalAlu = 'Incubadora' AND carreTutores = '${Carrera}'`;
    dbcon.query(sql, function(error, data){
        if(error) throw error;
        res.json({success:true, data:data});
    });
}

infoSeguiAccT.listToBolsaTrabajo = async (req, res) =>{
    const {Carrera} = req.params;
    const sql = `SELECT COUNT(*) AS bolsaTrabajo FROM alumnos INNER JOIN canalizacion_alumno ON alumnos.idAlumnos = canalizacion_alumno.idAlumnos14 
    WHERE areaCanalAlu = 'Bolsa de trabajo' AND carreTutores = '${Carrera}'`;
    dbcon.query(sql, function(error, data){
        if(error) throw error;
        res.json({success:true, data:data});
    });
}

infoSeguiAccT.listToAsesoriaAcademica = async (req, res) =>{
    const {Carrera} = req.params;
    const sql = `SELECT COUNT(*) AS asesoriaAcademica FROM alumnos INNER JOIN canalizacion_alumno ON alumnos.idAlumnos = canalizacion_alumno.idAlumnos14 
    WHERE areaCanalAlu = 'Asesoría Académica' AND carreTutores = '${Carrera}'`;
    dbcon.query(sql, function(error, data){
        if(error) throw error;
        res.json({success:true, data:data});
    });
}

infoSeguiAccT.listTolAlumnosCanalizados = async (req, res) =>{
    const {Carrera} = req.params;
    const sql = `SELECT COUNT(*) AS alumnosCanalizados FROM alumnos INNER JOIN canalizacion_alumno ON alumnos.idAlumnos = canalizacion_alumno.idAlumnos14 
    WHERE carreTutores = '${Carrera}'`;
    dbcon.query(sql, function(error, data){
        if(error) throw error;
        res.json({success:true, data:data});
    });
}

infoSeguiAccT.deleteISAT = async (req, res)=>{
    const {id} = req.body;
    const datos = `
        CALL deleteISAT(?)
    `;
    dbcon.query(datos, [id], (err, rows, fields)=>{
        if(!err){
            res.json({success:true, Status:'Datos eliminados'});
        }
    }); 
}

module.exports = infoSeguiAccT;