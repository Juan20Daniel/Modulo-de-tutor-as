const dbcon = require('../module/database');
const reportePlan = {}

reportePlan.listEvidencias = async (req, res) =>{
    const {id} = req.params;
    const sql = `select evidencias from datos_accion inner join sesion_grupal on datos_accion.idDatosAccion = sesion_grupal.idDatosAccion2 where idDatosAccion = ${id}`;
    dbcon.query(sql, function(error, data){
        if(error) throw error;
        res.json({success:true, data:data});
    });
}

reportePlan.listObservaciones = async (req, res)=>{
    const {id} = req.params;
    const sql = `select observaAtenIndi from datos_accion inner join atencion_indi on datos_accion.idDatosAccion = atencion_indi.idDatosAccion3 where idDatosAccion = ${id}`;
    dbcon.query(sql, function(error, data){
        if(error) throw error;
        res.json({success:true, data:data});
    });
}

reportePlan.insertReportePlan = async (req, res)=>{
    const {grupoRepor, cicloRepor, loPlaneado, loRealizado, idTutoriasDocentes16, idDatosAccion4} = req.body;
    const sql = `
    CALL reporte_plan_accion(?, ?, ?, ?, ?, ?)
    `;
    dbcon.query(sql, [grupoRepor, cicloRepor, loPlaneado, loRealizado, idTutoriasDocentes16, idDatosAccion4], (err, rows, fields)=>{
        if(!err){
            res.json({success:true, Status:"Datos insertados"});
        }
    });
}

reportePlan.listAllReport = async (req, res)=>{
    const {id} = req.params;
    const sql = `select idPlanAccion, loPlaneado, loRealizado from reporte_plan_accion where idDatosAccion4 = ${id}`;
    dbcon.query(sql, function(error, data){
        if(error) throw error;
        res.json({success:true, data:data});
    });
}

reportePlan.listUpdateReport = async (req, res)=>{
    const {id} = req.params;
    const sql = `select idPlanAccion, loPlaneado, loRealizado from reporte_plan_accion where idPlanAccion = ${id}`;
    dbcon.query(sql, function(error, data){
        if(error) throw error;
        res.json({success:true, data:data});
    });
}

reportePlan.updateReporteplan = async (req, res)=>{
    const {id} = req.params;
    const {loPlaneado, loRealizado} = req.body;
    const sql = `UPDATE reporte_plan_accion SET loPlaneado = '${loPlaneado}', loRealizado = '${loRealizado}' WHERE idPlanAccion = ${id}`;
    dbcon.query(sql, error=>{
        if(error) throw error;
        res.json({success:true, Status:'Datos Actualizados'});
    });
}

reportePlan.deleteReport = async (req, res)=>{
    const {idPlanAccion} = req.body;
    const sql = `DELETE FROM reporte_plan_accion WHERE idPlanAccion = ${idPlanAccion}`;
    dbcon.query(sql, error=>{
        if(error) throw error;
        res.json({success:true, Status:'Datos eliminados'});
    });
}

reportePlan.ubdateReportePlanId = async (req,res) =>{
    const {id} = req.params;
    const sql = `SELECT  numControlD, idPlanAccion, grupoTutorado, ciclo, evidencias, observaAtenIndi, loPlaneado, loRealizado FROM tutoriasDocentes INNER JOIN  sesion_grupal ON tutoriasDocentes.numControlD = sesion_grupal.idTutoriasDocentes16 INNER JOIN datos_accion ON tutoriasDocentes.numControlD = datos_accion.idTutoriasDocentes15 INNER JOIN atencion_indi ON tutoriasDocentes.numControlD = atencion_indi.idTutoriasDocentes17 INNER JOIN reporte_plan_accion ON sesion_grupal.idSesionGrupal = reporte_plan_accion.idSesionGrupa2 WHERE numControlD = ${id}`;
    dbcon.query(sql, function(error, data){
        if(error) throw error;
        res.json({success:true, data:data}); 
    });
}

reportePlan.updatePlanUpdateReportePlanId = async(req, res)=>{
    const {id} = req.params;
    const {loPlaneado,loRealizado} = req.body;
    const datos = {
        loPlaneado:loPlaneado,
        loRealizado:loRealizado
    }
    const sql = `UPDATE reporte_plan_accion SET loPlaneado='${loPlaneado}', loRealizado='${loRealizado}' WHERE idPlanAccion=${id}`;
    dbcon.query(sql, datos, error=>{
        if(error) throw error;
        res.json({success:true, Status:"Datos Actualizados"});
    });
}

reportePlan.listReportePlanId = async (req, res) =>{
    const {id} = req.params;
    const sql = `SELECT grupoTutorado, ciclo, evidencias, observaAtenIndi, idSesionGrupal, numControlD FROM tutoriasDocentes 
    INNER JOIN  sesion_grupal ON tutoriasDocentes.numControlD = sesion_grupal.idTutoriasDocentes16 
    INNER JOIN datos_accion ON tutoriasDocentes.numControlD = datos_accion.idTutoriasDocentes15 
    INNER JOIN atencion_indi ON tutoriasDocentes.numControlD = atencion_indi.idTutoriasDocentes17  WHERE numControlD = ${id}`;
    dbcon.query(sql, function(error, data){
        if(error) throw error;
        res.json({success:true, data:data});
    });
}

reportePlan.addReportePlan = async (req, res)=>{
    const {loPlaneado, loRealizado, idSesionGrupa2} = req.body;
    const datos = `
    CALL reporte_plan_accion(?, ?, ?) 
    `;
    dbcon.query(datos, [loPlaneado, loRealizado, idSesionGrupa2], (err, rows, fields)=>{
        if(!err){
            res.json({success:true, Status:'Datos insertados'}); 
        }
    });
}

module.exports = reportePlan;