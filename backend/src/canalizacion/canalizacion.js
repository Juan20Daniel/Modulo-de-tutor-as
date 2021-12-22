const dbcon = require('../module/database');
const nodemailer = require('nodemailer'); 
const canalizacion = {}

canalizacion.listAlumnCanali = async (req, res)=>{
    const {id} = req.params;
    const sql = `SELECT idAlumnos, nombreAlumno, apellidoAlumno, grupoTutores FROM alumnos 
    INNER JOIN atencion_indi ON alumnos.idAlumnos = atencion_indi.idAlumnos17 WHERE idTutoriasDocentes18 = ${id}`;
    dbcon.query(sql, function(error, data){
        if(error) throw error;
        res.json({success:true, data:data});
    });
}

canalizacion.listAlumnNoPlanDos = async (req, res)=>{
    const {id} = req.params;
    const sql = `SELECT idAlumnos, nombreAlumno, apellidoAlumno, grupoTutores FROM tutoriasDocentes INNER JOIN alumnos ON tutoriasDocentes.numControlD = alumnos.idTutoriasDocentes18 
    WHERE not exists (SELECT idAlumnos17 FROM atencion_indi WHERE atencion_indi.idAlumnos17 = alumnos.idAlumnos) AND numControlD = ${id}`;
    dbcon.query(sql, function(error, data){
        if(error) throw error;
        res.json({success:true, data:data});
    });
}

canalizacion.insertCanalizacion = async (req, res)=>{
    const {horaCanalAlu, tipoCanaAlu, areaCanalAlu, motiCanalAlu, obserCanalAlu, planONoplan, idTutorDocente4, idAlumnos14, from, to ,subjet, text, user, pass} = req.body;
    const datos = `
    CALL canalizacion(?, ?, ?, ?, ?, ?, ?, ?)
    `;
    dbcon.query(datos, [horaCanalAlu, tipoCanaAlu, areaCanalAlu, motiCanalAlu, obserCanalAlu, planONoplan, idTutorDocente4, idAlumnos14], (err, rows, fields)=>{
        if(!err){
            let transport = nodemailer.createTransport({  
                service: 'gmail',
                auth: {
                   user: user,
                   pass: pass
                }
            });
            const message = {  
                from:from, 
                to:to,        
                subject: subjet, 
                text: text
            };
            transport.sendMail(message, function(err, info) {  
                if (err) {
                    res.json({success:true, Status:err});
                } else {
                    res.json({success:true, Status:'Datos insertados y Mensaje enviado'});
                }
            });
        }
    });
}

canalizacion.listAllCanaliza = async (req, res)=>{
    const {id} = req.params;
    const sql = `SELECT idCanaliAlum, nombreAlumno, apellidoAlumno, grupoTutores, fechaCanalAlu, idAlumnos14, areaCanalAlu FROM alumnos INNER JOIN canalizacion_alumno ON alumnos.idAlumnos = canalizacion_alumno.idAlumnos14 WHERE idTutoriasDocentes18 = ${id}`;
    dbcon.query(sql, function(error, data){
        if(error) throw error;
        res.json({success:true, data:data});
    });
}

canalizacion.listIndiCana = async (req, res)=>{
    const {id} = req.params;
    const sql = `SELECT nombreDocente, apellidoDocente, nombreAlumno, apellidoAlumno, grupoTutores, numControlA, fechaCanalAlu, horaCanalAlu, areaCanalAlu, motiCanalAlu, atenCanaAlu, fechaAtenCana, obserCanalAlu FROM tutoriasDocentes 
    INNER JOIN alumnos ON tutoriasDocentes.numControlD = alumnos.idTutoriasDocentes18
    INNER JOIN canalizacion_alumno ON alumnos.idAlumnos = canalizacion_alumno.idAlumnos14 WHERE idCanaliAlum = ${id}`;
    dbcon.query(sql, function(error, data){
        if(error) throw error;
        res.json({success:true, data:data});
    });
}

canalizacion.listUpdateCanaliza = async (req, res)=>{
    const {id} = req.params;
    const sql = `SELECT nombreDocente, apellidoDocente, correoDocente, passwordDocente, horaCanalAlu, tipoCanaAlu, areaCanalAlu, motiCanalAlu, obserCanalAlu FROM tutoriasDocentes 
    INNER JOIN canalizacion_alumno ON tutoriasDocentes.numControlD = canalizacion_alumno.idTutorDocente4 WHERE idCanaliAlum  = ${id}`;
    dbcon.query(sql, function(error, data){
        if(error) throw error;
        res.json({success:true, data:data});
    });
}

canalizacion.updateCanaliza = async (req, res)=>{
    const {id} = req.params;
    const {horaCanalAlu, areaCanalAlu, motiCanalAlu, obserCanalAlu, from, to, subjet, text, user, pass} = req.body;
    const datos = {
        horaCanalAlu:horaCanalAlu, 
        areaCanalAlu:areaCanalAlu, 
        motiCanalAlu:motiCanalAlu, 
        obserCanalAlu:obserCanalAlu,
        from:from, 
        to:to,
        subjet:subjet, 
        text:text, 
        user:user, 
        pass:pass
    }
    const sql = `UPDATE canalizacion_alumno SET horaCanalAlu = '${horaCanalAlu}', areaCanalAlu = '${areaCanalAlu}', motiCanalAlu = '${motiCanalAlu}', obserCanalAlu = '${obserCanalAlu}' WHERE idCanaliAlum  = ${id}`;
    dbcon.query(sql, datos, err=>{
        if(!err){
            let transport = nodemailer.createTransport({  
                service: 'gmail',
                auth: {
                   user: user,
                   pass: pass
                }
            });
            const message = {  
                from:from, 
                to:to,        
                subject: subjet, 
                text: text
            };
            transport.sendMail(message, function(err, info) {  
                if (err) {
                    res.json({success:true, Status:err});
                } else {
                    res.json({success:true, Status:'Datos actualizados y Mensaje enviado'});
                }
            });
        }
    });
}

canalizacion.updateCanalizaCaArea = async (req, res)=>{
    const {id} = req.params;
    const {horaCanalAlu, areaCanalAlu, motiCanalAlu, obserCanalAlu, from, to, subjet, text, user, pass, from2, to2, subjet2, text2, user2, pass2} = req.body;
    const datos = {
        horaCanalAlu:horaCanalAlu, 
        areaCanalAlu:areaCanalAlu, 
        motiCanalAlu:motiCanalAlu, 
        obserCanalAlu:obserCanalAlu,
        from:from, 
        to:to,
        subjet:subjet, 
        text:text, 
        user:user, 
        pass:pass,
        from:from2, 
        to:to2,
        subjet:subjet2, 
        text:text2, 
        user:user2, 
        pass:pass2
    }
    const sql = `UPDATE canalizacion_alumno SET horaCanalAlu = '${horaCanalAlu}', areaCanalAlu = '${areaCanalAlu}', motiCanalAlu = '${motiCanalAlu}', obserCanalAlu = '${obserCanalAlu}' WHERE idCanaliAlum  = ${id}`;
    dbcon.query(sql, datos, err=>{
        if(!err){
            let transport = nodemailer.createTransport({  
                service: 'gmail',
                auth: {
                   user: user,
                   pass: pass
                }
            });
            const message = {  
                from:from, 
                to:to,        
                subject: subjet, 
                text: text
            };
            transport.sendMail(message, function(err, info) {  
                if (err) {
                    res.json({success:true, Status:err});
                } else {
                    res.json({success:true, Status:'Datos actualizados y Mensaje enviado'});
                }
            });
            //Email 2
            let transport2 = nodemailer.createTransport({  
                service: 'gmail',
                auth: {
                   user: user2,
                   pass: pass2
                }
            });
            const message2 = {  
                from:from2, 
                to:to2,        
                subject: subjet2, 
                text: text2
            };
            transport2.sendMail(message2, function(err, info) {  
                if (err) {
                    res.json({success:true, Status:err});
                } else {
                    res.json({success:true, Status:'Mensaje2 enviado'});
                }
            });
        }
    });
}


canalizacion.deleteCanalizacion = async (req, res)=>{
    const {idCanaliAlum, from, to, subject, text, user, pass} = req.body;
    const sql = `DELETE FROM canalizacion_alumno WHERE idCanaliAlum=${idCanaliAlum}`;
    dbcon.query(sql, err=>{
        if(!err){
            let transport = nodemailer.createTransport({  
                service: 'gmail',
                auth: {
                   user: user,
                   pass: pass
                }
            });
            const message = {  
                from:from, 
                to:to,        
                subject: subject, 
                text: text
            };
            transport.sendMail(message, function(err, info) {  
                if (err) {
                    res.json({success:true, Status:err});
                } else {
                    res.json({success:true, Status:'Datos eliminados y Mensaje enviado'});
                }
            });
        }
    });
}

canalizacion.listEmailPass = async (req, res)=>{
    const {numControlD} = req.params;
    const sql = `SELECT nombreDocente, apellidoDocente, correoDocente, passwordDocente FROM tutoriasDocentes WHERE numControlD = ${numControlD}`;
    dbcon.query(sql, function(error, data){
        if(error) throw error;
        res.json({success:true, data:data});
    });
}

canalizacion.listDatosAlumFroEmail = async (req, res)=>{
    const {idAlumno} = req.params;
    const sql = `SELECT numControlA, nombreAlumno, apellidoAlumno, emailAlumno, grupoTutores, carreTutores FROM alumnos WHERE idAlumnos = ${idAlumno}`;
    dbcon.query(sql, function(error, data){
        if(error) throw error;
        res.json({success:true, data:data});
    });
}

canalizacion.listCanalizacionListAllId = async (req, res) =>{
    const {id} = req.params;
    const sql = `SELECT nombreAlumno, apellidoAlumno FROM tutoriasDocentes INNER JOIN alumnos ON tutoriasDocentes.numControlD = alumnos.idTutoriasDocentes18 WHERE numControlD = ${id}`;
    dbcon.query(sql, function(error, data){
        if(error) throw error;
        res.json({success:true, data:data});
    });
}

canalizacion.ubdateCanalizacionId = async (req, res) =>{
    const {id} = req.params;
    const sql = `SELECT nombreAluCana, grupoCanaliz, areaCanalAlu, motiCanalAlu, obserCanalAlu, idTutorDocente4 FROM canalizacion_alumno WHERE idCanaliAlum = ${id}`;
    dbcon.query(sql, function(error, data){
        if(error) throw error;
        res.json({success:true, data:data});
    });
}

module.exports = canalizacion;