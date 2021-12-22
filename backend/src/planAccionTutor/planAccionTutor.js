const dbcon = require('../module/database');
const { json } = require('body-parser');
const planAccionTutor = {}

planAccionTutor.listAlumnsRepAll = async (req, res)=>{
    const {idTutor, grupo} = req.params;
    const sql = `SELECT idAlumnos, nombreAlumno, apellidoAlumno FROM alumnos WHERE not exists (SELECT idAlumnos17 FROM atencion_indi WHERE atencion_indi.idAlumnos17 = alumnos.idAlumnos ) AND idTutoriasDocentes18 = ${idTutor} AND grupoTutores = '${grupo}'`;
    dbcon.query(sql, function(error, data){
        if(error) throw error;
        res.json({success:true, data:data});
    });
}

planAccionTutor.insertAlumAtenIndi = async (req, res)=>{
    const {asuntoObserva,observaAtenIndi,idDatosAccion3,idAlumnos17} = req.body;
    const sql = 'INSERT INTO atencion_indi SET ?';
    const datos = {
        asuntoObserva:asuntoObserva,
        observaAtenIndi:observaAtenIndi,
        idDatosAccion3:idDatosAccion3,
        idAlumnos17:idAlumnos17
    }
    dbcon.query(sql, datos, error=>{
        if(error) throw error;
        res.json({success:true, Status:'Datos Insertados'});
    });
}

planAccionTutor.listInsertAlumAte = async (req, res)=>{
    const {id} = req.params;
    const sql = `SELECT grupoTutores, idTutoriasDocentes18, nombreAlumno, apellidoAlumno, idAtencionIndi, asuntoObserva, observaAtenIndi FROM datos_accion 
    INNER JOIN atencion_indi ON datos_accion.idDatosAccion = atencion_indi.idDatosAccion3 
    INNER JOIN alumnos ON atencion_indi.idAlumnos17 = alumnos.idAlumnos WHERE idDatosAccion = ${id}`;
    dbcon.query(sql, function(error, data){
        if(error) throw error;
        res.json({success:true, data:data});
    });
}

planAccionTutor.listPlanListGroups = async (req, res)=>{
    const {id} = req.params;
    const sql = `SELECT DISTINCT grupoTutores FROM alumnos WHERE not exists (SELECT grupoDatos FROM  datos_accion WHERE datos_accion.grupoDatos = alumnos.grupoTutores) AND idTutoriasDocentes18 = ${id}`;
    dbcon.query(sql, function(error, data){
        if(error) throw error;
        res.json({success:true, data:data});
    });
}

planAccionTutor.createNewPlan = async (req, res)=>{
    const {grupoDatos,cicloDatos,idTutoriasDocentes15} = req.body;
    const datos = `
    CALL datos_accion(?, ?, ?)
    `;
    dbcon.query(datos, [grupoDatos,cicloDatos,idTutoriasDocentes15], (err, rows, fields)=>{
        if(!err){
            res.json({success:true, Stats:'Datos insertados'});
        }
    });
}

planAccionTutor.listListPlan = async (req, res)=>{
    const {id} = req.params;
    const sql = `select nombreDocente, apellidoDocente, numControlD, idDatosAccion, grupoDatos, cicloDatos, fechaAatoAcc from tutoriasDocentes inner join datos_accion on tutoriasDocentes.numControlD = datos_accion.idTutoriasDocentes15 where numControlD = ${id}`;
    dbcon.query(sql, function(error, data){
        if(error) throw error;
        res.json({success:true, data:data});
    });
}

planAccionTutor.listGrupoCiclo = async (req, res)=>{
    const {id} = req.params;
    const sql = `select numControlD, nombreDocente, apellidoDocente, grupoDatos, cicloDatos from tutoriasDocentes inner join datos_accion on tutoriasDocentes.numControlD = datos_accion.idTutoriasDocentes15 where idDatosAccion = ${id}`;
    dbcon.query(sql, function(error, data){
        if(error) throw error;
        res.json({success:true, data:data});
    });
}

planAccionTutor.deleteAllPlan = async (req, res)=>{
    const {idDatosAccion} = req.body;
    const sql = `DELETE FROM datos_accion WHERE idDatosAccion = ${idDatosAccion}`;
    dbcon.query(sql, error=>{
        if(error) throw error;
        res.json({success:true, Statuss:'Datos eliminados'});
    });
}

planAccionTutor.deleteDeleteSesion = async (req, res)=>{
    const {idSesionGrupal} = req.body;
    const sql = `DELETE FROM sesion_grupal WHERE idSesionGrupal = ${idSesionGrupal}`;
    dbcon.query(sql, error=>{
        if(error) throw error;
        res.json({success:true, Status:'Dato eliminado'});
    });
}

planAccionTutor.atencionDeleteDelete = async (req, res)=>{
    const {idAtencionIndi} = req.body;
    const sql = `DELETE FROM atencion_indi WHERE idAtencionIndi = ${idAtencionIndi}`;
    dbcon.query(sql, error=>{
        if(error) throw error;
        res.json({success:true, Status:'Dato eliminado'});
    });
}

planAccionTutor.listUbdatePlanSesio = async (req, res)=>{
    const {id} = req.params;
    const sql = `select idSesionGrupal, tema, objetivos, actividades, recursos, evidencias, idDatosAccion2 from sesion_grupal where idSesionGrupal = ${id}`;
    dbcon.query(sql, function(error, data){
        if(error) throw error;
        res.json({success:true, data:data});
    });
}

planAccionTutor.updatePlanSesioUpdate = async (req, res)=>{
    const {id} = req.params;
    const {tema, objetivos, actividades, recursos, evidencias} = req.body;
    const sql = `UPDATE sesion_grupal SET tema='${tema}', objetivos='${objetivos}', actividades='${actividades}', recursos='${recursos}', evidencias='${evidencias}' WHERE idSesionGrupal = ${id}`;
    dbcon.query(sql, function(error){
        if(error) throw error;
        res.json({success:true, Status:'Datos Actualizados'})
    });
}

planAccionTutor.listAtencionIndiListAtenc = async (req, res) =>{
    const {id} = req.params;
    const sql = `SELECT idAlumnos, nombreAlumno, apellidoAlumno, asuntoObserva, observaAtenIndi, idDatosAccion3 FROM alumnos INNER JOIN atencion_indi ON alumnos.idAlumnos = atencion_indi.idAlumnos17 WHERE idAtencionIndi = ${id}`;
    dbcon.query(sql, function(error, data){
        if(error) throw error;
        res.json({success:true, data:data});
    });
}

planAccionTutor.updateAtencionIndiUpdate = async (req, res)=>{
    const {id} = req.params;
    const {asuntoObserva, observaAtenIndi} = req.body;
    const sql = `UPDATE atencion_indi SET asuntoObserva='${asuntoObserva}', observaAtenIndi='${observaAtenIndi}' WHERE idAtencionIndi = ${id}`;
    dbcon.query(sql, function(error){
        if(error) throw error;
        res.json({success:true, Status:'Datos Actualizados'})
    });
}

planAccionTutor.listAllGroupsTutor = async (req, res) =>{
    const {id} = req.params;
    const sql = `SELECT DISTINCT grupoTutores FROM alumnos WHERE idTutoriasDocentes18 = ${id}`;
    dbcon.query(sql, function(error, data){
        if(error) throw error;
        res.json({success:true, data:data});
    });
} 

planAccionTutor.planAccionTutorial = async (req, res) =>{
    const {grupoTutorado, ciclo, idTutoriasDocentes15, tema, objetivos, actividades, recursos, evidencias, idTutoriasDocentes16, nombreAluAten, asuntoObserva, observaAtenIndi, idTutoriasDocentes17} = req.body;
    const datos = `
        CALL planAccionTutorial(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
    `;
    dbcon.query(datos, [grupoTutorado, ciclo, idTutoriasDocentes15, tema, objetivos, actividades, recursos, evidencias, idTutoriasDocentes16, nombreAluAten, asuntoObserva, observaAtenIndi, idTutoriasDocentes17],(err, rows, fields) =>{
        if(!err){
            res.json({Status:'Datos Insertados'});
        }else{
            console.log(err);
        }
    });
}

planAccionTutor.verPlanListId = async (req, res) =>{
    const {id} = req.params;
    const consulta = (`SELECT idDatosAccion, fechaAatoAcc, nombreDocente FROM tutoriasdocentes INNER JOIN datos_accion ON tutoriasdocentes.numControlD = datos_accion.idTutoriasDocentes15 WHERE numControlD = ${id}`);
    dbcon.query(consulta, function(error, data){
      if(error) throw error;
      return res.json({success:true, data,data});
    });
}

planAccionTutor.ubdateVerPlanUbdate = async (req, res) =>{
    const {ubdate} = req.params; 
    const sql = (`SELECT idTutoriasDocentes15, grupoTutorado, ciclo, fechaAatoAcc, tema, objetivos, actividades, recursos, evidencias, nombreAluAten, asuntoObserva, observaAtenIndi FROM datos_accion INNER JOIN sesion_grupal ON datos_accion.idDatosAccion = sesion_grupal.idSesionGrupal INNER JOIN atencion_indi ON datos_accion.idDatosAccion = atencion_indi.idAtencionIndi WHERE idDatosAccion = ${ubdate}`);
    dbcon.query(sql, function(error, data){
        if(error) throw error;
        res.json({success:true, data:data});
    });
}

planAccionTutor.ubdateUbdatePlan = async (req, res) =>{
    const {idupdate, grupoTutorado, ciclo, tema, objetivos, actividades, recursos, evidencias, nombreAluAten, asuntoObserva, observaAtenIndi} = req.body;
    const datos = `
    CALL updatePlanAcciTuto(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
    `;
    dbcon.query(datos,[idupdate, grupoTutorado, ciclo, tema, objetivos, actividades, recursos, evidencias, nombreAluAten, asuntoObserva, observaAtenIndi],(err, rows, fields)=>{
        if(!err){
            res.json({Status:"Datos actualizados"});
        }else{
            console.log(err);
        }
    });
}

planAccionTutor.deletePlan = async (req, res)=>{
    const {idDatosAccion} = req.body;
    const datos = `
        CALL deletePlanAcciTuto(?);
    `;
    dbcon.query(datos, [idDatosAccion],(err, rows, fields)=>{
        if(!err){
            res.json({success:true, Status:'Datos Eliminados'});
        }else{
            console.log(err);
        }
    });
}

planAccionTutor.insertSesionGrupal = async (req, res)=>{
    const {tema, objetivos, actividades, recursos, evidencias, idDatosAccion2} = req.body;
    const sql = "INSERT INTO sesion_grupal SET ?";
    const datos = {
        tema:tema, 
        objetivos:objetivos, 
        actividades:actividades, 
        recursos:recursos, 
        evidencias:evidencias, 
        idDatosAccion2:idDatosAccion2
    }
    dbcon.query(sql, datos, error =>{
        if(error) throw error;
        res.json({success:true, Status:'Datos Insertados'});
    });
}

planAccionTutor.listListVerPlanVerId = async (req, res) =>{
    const {id} = req.params;
    const sql = `select idSesionGrupal, tema, objetivos, actividades, recursos, evidencias from datos_accion
    inner join sesion_grupal on datos_accion.idDatosAccion = sesion_grupal.idDatosAccion2 where idDatosAccion = ${id}`;
   dbcon.query(sql, function(error, data){
       if(error) throw error;
       res.json({success:true, data:data});
   });
}

planAccionTutor.planUpdateUpdatePlanId = async (req, res) =>{
    const {id} = req.params;
    const sql = `select grupoDatos, cicloDatos, idTutoriasDocentes15 from datos_accion where idDatosAccion = ${id}`;
    dbcon.query(sql, function(error, data){
        if(error) throw error;
        res.json({success:true, data:data});
    });
}

planAccionTutor.updateUpdatePlanId = async (req, res)=>{
    const {id} = req.params;
    const {grupoDatos, cicloDatos} = req.body;
    const sql = `UPDATE datos_accion SET grupoDatos='${grupoDatos}', cicloDatos='${cicloDatos}' WHERE idDatosAccion = ${id}`;
    dbcon.query(sql, error=>{
        if(error) throw error;
        res.json({success:true, Stats:'Datos actualizados'});
    });
}

module.exports = planAccionTutor;