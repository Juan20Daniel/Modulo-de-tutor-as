const dbcon = require('../module/database');
const entrevistaIni = {}

entrevistaIni.insertEntrevistaIni = async (req, res)=>{
    const {edadDatos, telCasa, celDatos, correo, idAlumnos2, vivienda, descripSi, huerfano, descripHu, estadoCivil, numHermano, lugarOcupa, idAlumnos3, tipoVivi, tenenciaVivi, cuentaCon, numHabitaciones, numVehiculos, manutencion, trabajoPapa, descripTrabajoP, trabajoMama, descripTrabajoM, ingresoFamil, numPersContri, numPersDependen, trabajo, relacionTrabajo, idAlumnos4, bachillProce, modalidad, anos, promedioObten, rendiEscolar, materiaFacil, materiaTrabajo, materiaExtra, cualMaterExt, repetiAnoAnter, nivel, obstaculos, idAlumnos5, lee, tipoLectu, lugarEstud, descripEstud, horasEstudi, horarioEstud, musicaEstud, idAlumnos6, tiempoLibre, tiempoAfici, idAlumnos7, tareaHogar, medida, integradoFamili, aspectoPreocupa, comunicarCasa, idAlumnos8, rasgos, idAlumnos9, saludAlumno, enfermeAlumno, tipoEnferme, padeciEnferme, cualPadeEnfer, operadoAlumno, causaOperado, problemaSalud, problemaFisi, tipoProblema, idAlumnos10, sugerencia, idAlumnos11, estado} = req.body;
    const datos =`
        CALL EntreIniEstu(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
    `;
    dbcon.query(datos, [edadDatos, telCasa, celDatos, correo, idAlumnos2, vivienda, descripSi, huerfano, descripHu, estadoCivil, numHermano, lugarOcupa, idAlumnos3, tipoVivi, tenenciaVivi, cuentaCon, numHabitaciones, numVehiculos, manutencion, trabajoPapa, descripTrabajoP, trabajoMama, descripTrabajoM, ingresoFamil, numPersContri, numPersDependen, trabajo, relacionTrabajo, idAlumnos4, bachillProce, modalidad, anos, promedioObten, rendiEscolar, materiaFacil, materiaTrabajo, materiaExtra, cualMaterExt, repetiAnoAnter, nivel, obstaculos, idAlumnos5, lee, tipoLectu, lugarEstud, descripEstud, horasEstudi, horarioEstud, musicaEstud, idAlumnos6, tiempoLibre, tiempoAfici, idAlumnos7, tareaHogar, medida, integradoFamili, aspectoPreocupa, comunicarCasa, idAlumnos8, rasgos, idAlumnos9, saludAlumno, enfermeAlumno, tipoEnferme, padeciEnferme, cualPadeEnfer, operadoAlumno, causaOperado, problemaSalud, problemaFisi, tipoProblema, idAlumnos10, sugerencia, idAlumnos11, estado], (err, rows, fields) => {
        if(!err){
            res.json({Status: 'Datos Insertados'});
        }else{
            console.log(err);
        }
    });
}

entrevistaIni.listVerEntreIniId = async (req, res) =>{
    const {id} = req.params;
    const sql = `SELECT tipo, idTutoriasDocentes18, idAlumnos,  nombreAlumno, apellidoAlumno, grupoTutores, numControlA, fechaDatos, idDatosIdent FROM 
	tutoriasDocentes INNER JOIN alumnos on tutoriasDocentes.numControlD = alumnos.idTutoriasDocentes18
    INNER JOIN datos_identificasion ON alumnos.idAlumnos = datos_identificasion.idAlumnos2 WHERE idTutoriasDocentes18 = ${id}`;
    dbcon.query(sql, function(error, data){
        if(error) throw error;
        res.json({success:true, data:data});
    });
}

entrevistaIni.listVerEntreIntJyPEIdPE = async (req, res) =>{
    const {idPE} = req.params;
    const sql = `SELECT distinct grupoTutores, gradoTutores, YEAR(fechaDatos) as fechaDatos FROM tutoriasDocentes INNER JOIN alumnos ON tutoriasDocentes.numControlD = alumnos.encargadoPE 
    INNER JOIN datos_identificasion ON alumnos.idAlumnos = datos_identificasion.idAlumnos2 WHERE numControlD = ${idPE}`;
    dbcon.query(sql, function(error, data){
        if(error) throw error;
        res.json({success:true, data:data});
    });
}

entrevistaIni.listVerAnoEntreIntJyPEIdPEAno = async (req, res) =>{
    const {idPE,ano} = req.params;
    const sql = `SELECT distinct grupoTutores, gradoTutores, YEAR(fechaDatos) as fechaDatos FROM tutoriasDocentes INNER JOIN alumnos ON tutoriasDocentes.numControlD = alumnos.encargadoPE 
    INNER JOIN datos_identificasion ON alumnos.idAlumnos = datos_identificasion.idAlumnos2 WHERE numControlD = ${idPE} and YEAR(fechaDatos) = '${ano}'`;
    dbcon.query(sql, function(error, data){
        if(error) throw error;
        res.json({success:true, data:data});
    });
}

entrevistaIni.listVerEntrevistaInicial = async (req, res) =>{
    const sql = 'SELECT DISTINCT grupoTutores, gradoTutores, carreTutores, YEAR(fechaDatos) as fechaDatos FROM alumnos INNER JOIN datos_identificasion ON alumnos.idAlumnos = datos_identificasion.idAlumnos2';
    dbcon.query(sql, function(error, data){
        if(error) throw error;
        res.json({success:true,data:data});
    });
}

entrevistaIni.listSoloGruposInicialGrupo = async (req, res) =>{
    const {grupo} = req.params;
    const sql = `SELECT idAlumnos, nombreAlumno, apellidoAlumno, numControlA, idDatosIdent FROM alumnos INNER JOIN datos_identificasion ON alumnos.idAlumnos = datos_identificasion.idAlumnos2 WHERE grupoTutores = '${grupo}'`;
    dbcon.query(sql, function(error, data){
        if(error) throw error;
        res.json({success:true, data:data});
    });
}

entrevistaIni.listOneVerEntrevistaInicialIndividualIdAlumno = async (req, res) =>{
    const {idAlumno} = req.params;
    const sql = `SELECT carreTutores, grupoTutores, fechaDatos, nombreDocente, apellidoDocente, nombreAlumno, apellidoAlumno,
    edadDatos, telCasa, celDatos, correo, vivienda, descripSi, huerfano, descripHu, estadoCivil, numHermano, lugarOcupa,
    tipoVivi, tenenciaVivi, cuentaCon, numHabitaciones, numVehiculos, manutencion, trabajoPapa, descripTrabajoP, trabajoMama, descripTrabajoM, ingresoFamil, numPersContri, numPersDependen, trabajo, relacionTrabajo,
    bachillProce, modalidad, anos, promedioObten, rendiEscolar, materiaFacil, materiaTrabajo, materiaExtra, cualMaterExt, repetiAnoAnter, nivel, obstaculos,
    lee, tipoLectu, lugarEstud, descripEstud, horasEstudi, horarioEstud, musicaEstud,
    tiempoLibre, tiempoAfici,
    tareaHogar, medida, integradoFamili, aspectoPreocupa, comunicarCasa,
    rasgos,
    saludAlumno, enfermeAlumno, tipoEnferme, padeciEnferme, cualPadeEnfer, operadoAlumno, causaOperado, problemaSalud, problemaFisi, tipoProblema, 
    sugerencia
    FROM tutoriasDocentes INNER JOIN alumnos ON tutoriasDocentes.numControlD = alumnos.idTutoriasDocentes18
    INNER JOIN datos_identificasion ON alumnos.idAlumnos = datos_identificasion.idAlumnos2  
    INNER JOIN datos_familiares ON alumnos.idAlumnos = datos_familiares.idAlumnos3 
    INNER JOIN datos_socioeconomicos ON alumnos.idAlumnos = datos_socioeconomicos.idAlumnos4 
    INNER JOIN antecedentes_academicos ON alumnos.idAlumnos = antecedentes_academicos.idAlumnos5 
    INNER JOIN habitos_estudio ON alumnos.idAlumnos = habitos_estudio.idAlumnos6 
    INNER JOIN aficiones ON alumnos.idAlumnos = aficiones.idAlumnos7 
    INNER JOIN personalidad ON alumnos.idAlumnos = personalidad.idAlumnos8 
    INNER JOIN rasgos_personalidad ON alumnos.idAlumnos =  rasgos_personalidad.idAlumnos9 
    INNER JOIN salud ON alumnos.idAlumnos = salud.idAlumnos10 
    INNER JOIN comentarios ON alumnos.idAlumnos = comentarios.idAlumnos11 WHERE idAlumnos = '${idAlumno}'`;
    dbcon.query(sql, function(error, data){
        if(error) throw error;
        res.json({success:true, data:data});
    });
}

entrevistaIni.listAnoAllEntrevistaInicial = async (req, res) =>{
    const sql = 'SELECT DISTINCT YEAR(fechaDatos) as fecha FROM datos_identificasion';
    dbcon.query(sql, function(error, data){
        if(error) throw error;
        res.json({success:true, data:data});
    });
}

entrevistaIni.listAnoGoupsEntrevistaInicialAno = async (req, res) =>{
    const {ano} = req.params;
    const sql = `SELECT DISTINCT grupoTutores, gradoTutores, carreTutores, YEAR(fechaDatos) as fechaDatos FROM alumnos INNER JOIN datos_identificasion ON alumnos.idAlumnos = datos_identificasion.idAlumnos2 WHERE YEAR(fechaDatos) ='${ano}'`;
    dbcon.query(sql, function(error, data){
        if(error) throw error;
        res.json({success:true, data:data});
    });
}

module.exports = entrevistaIni;