import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Home.css';
import Foolder from './fooldel';
import ReactToPrint, { PrintContextConsumer } from 'react-to-print';

class VerEntreIniIndividual extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            readDatos:[] //el array para los datos
        }
    }//Optención de los datos de la api con axios  
    componentDidMount(){
        let idAlumno = this.props.idAlumno;
        const Url = "http://localhost:3000/apis/list/one/ver/entrevista/inicial/individual/"+idAlumno;
        axios.get(Url)
        .then(res=>{
            const datos = res.data.data[0];
            this.setState({
                readDatos:datos,
                campoCarrer:datos.carreTutores,
                campoFecha:datos.fechaDatos,
                campoTutor:datos.nombreDocente,
                campoApeTu:datos.apellidoDocente,
                campoGrupo:datos.grupoTutores,
                campoNomAl:datos.nombreAlumno,
                campoApell:datos.apellidoAlumno,
                campoEdad:datos.edadDatos,
                campoTelCasa:datos.telCasa,
                campoCelDatos:datos.celDatos,
                campoCorreo:datos.correo,
                campoVivienda:datos.vivienda,
                campoDescripSi:datos.descripSi,
                campoHuerfano:datos.huerfano,
                campoDescripHu:datos.descripHu,
                campoEstadoCivil:datos.estadoCivil,
                campoNumHermano:datos.numHermano,
                campoLugarOcupa:datos.lugarOcupa,
                campoTipoVivi:datos.tipoVivi,
                campoTenenciaVivi:datos.tenenciaVivi, 
                campoCuentaCon:datos.cuentaCon, 
                campoNumHabitaciones:datos.numHabitaciones, 
                campoNumVehiculos:datos.numVehiculos, 
                campoManutencion:datos.manutencion,
                campoTrabajoPapa:datos.trabajoPapa, 
                campoDescripTrabajoP:datos.descripTrabajoP, 
                campoTrabajoMama:datos.trabajoMama, 
                campoDescripTrabajoM:datos.descripTrabajoM, 
                campoIngresoFamil:datos.ingresoFamil, 
                campoNumPersContri:datos.numPersContri, 
                campoNumPersDependen:datos.numPersDependen, 
                campoTrabajo:datos.trabajo, 
                campoRelacionTrabajo:datos.relacionTrabajo,
                campoBachillProce:datos.bachillProce, 
                campoModalidad:datos.modalidad, 
                campoAnos:datos.anos, 
                campoPromedioObten:datos.promedioObten, 
                campoRendiEscolar:datos.rendiEscolar, 
                campoMateriaFacil:datos.materiaFacil, 
                campoMateriaTrabajo:datos.materiaTrabajo, 
                campoMateriaExtra:datos.materiaExtra, 
                campoCualMaterExt:datos.cualMaterExt, 
                campoRepetiAnoAnter:datos.repetiAnoAnter, 
                campoNivel:datos.nivel, 
                campoObstaculos:datos.obstaculos,
                campoLee:datos.lee, 
                campoTipoLectu:datos.tipoLectu, 
                campoLugarEstud:datos.lugarEstud, 
                campoDescripEstud:datos.descripEstud, 
                campoHorasEstudi:datos.horasEstudi, 
                campoHorarioEstud:datos.horarioEstud,
                campoMusicaEstud:datos.musicaEstud,
                campoTiempoLibre:datos.tiempoLibre, 
                campoTiempoAfici:datos.tiempoAfici,
                campoTareaHogar:datos.tareaHogar, 
                campoMedida:datos.medida, 
                campoIntegradoFamili:datos.integradoFamili, 
                campoAspectoPreocupa:datos.aspectoPreocupa, 
                campoComunicarCasa:datos.comunicarCasa,
                campoRasgos:datos.rasgos,
                saludAlumno:datos.saludAlumno, 
                enfermeAlumno:datos.enfermeAlumno, 
                tipoEnferme:datos.tipoEnferme, 
                padeciEnferme:datos.padeciEnferme, 
                cualPadeEnfer:datos.cualPadeEnfer, 
                operadoAlumno:datos.operadoAlumno, 
                causaOperado:datos.causaOperado, 
                problemaSalud:datos.problemaSalud, 
                problemaFisi:datos.problemaFisi, 
                tipoProblema:datos.tipoProblema, 
                sugerencia:datos.sugerencia
            });
        });
    }
    render(){
        return(
            <div>
                <nav class="navbar bg-nav fixed-top">
                    <Link class="navbar-brand color" to={"/HomeT/"+this.props.idTutor}>SIIUTeM</Link>
                    <Link onClick={() => this.volver()} class="boton_salir color navbar-brand">Volver</Link>
                </nav>
                <br></br><br></br><br></br><br></br>
                <div class="container">
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-2 border border-white">
                            <img
                            width="150px" 
                            max-width=":256px"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQk6ORHe7XD9wZ5o7SkAo3ZnD6jsszlry4fgQ&usqp=CAU"/>
                        </li>
                        <li  class="list-group col-8 border border-white">
                            <h4 class="text-center">ENTREVISTA INICIAL A ESTUDIANTES</h4>
                        </li>
                    </ul>
                    <br />
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-1 text-center border border-dark rounded-0">
                            <h6>Carrera</h6>
                        </li>
                        <li class="list-group col-md-6 text-center border border-dark rounded-0">
                            <h7>{this.state.campoCarrer}</h7>
                        </li>
                        <li class="list-group col-1 text-center border border-dark rounded-0">
                            <h6>Grupo</h6>
                        </li>
                        <li class="list-group col-1 text-center border border-dark rounded-0">
                            <h7>{this.state.campoGrupo}</h7>
                        </li>
                        <li class="list-group col-1 text-center border border-dark rounded-0">
                            <h6>Fecha</h6>
                        </li>
                        <li class="list-group col-2 text-center border border-dark rounded-0">
                            <h7>{this.state.campoFecha}</h7>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-md-2 text-center border border-dark rounded-0">
                            <h6>Nombre del tutor</h6>
                        </li> 
                        <li class="list-group col-md-10 text-center border border-dark rounded-0">
                            <h7>{this.state.campoTutor+" "+this.state.campoApeTu}</h7>
                        </li>    
                    </ul>
                    <br />
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-4 text-center border border-dark rounded-0">
                            <h6>DATOS DE IDENTIFICASIÓN</h6>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-1 text-center border border-dark rounded-0">
                            <h6>Nombre</h6>
                        </li>
                        <li class="list-group col-8 border text-center border-dark rounded-0">
                            <h7>{this.state.campoNomAl+" "+this.state.campoApell}</h7>
                        </li>
                        <li class="list-group col-1 text-center border border-dark rounded-0">
                            <h6>Edad</h6>
                        </li>
                        <li class="list-group col-2 text-center border border-dark rounded-0">
                            <h7>{this.state.campoEdad}</h7>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-1 text-center border border-dark rounded-0">
                            <h6>Tel casa</h6>
                        </li>
                        <li class="list-group col-5 text-center border border-dark rounded-0">
                            <h7>{this.state.campoTelCasa}</h7>
                        </li>
                        <li class="list-group col-1 text-center border border-dark rounded-0">
                            <h6>Celular</h6>
                        </li>
                        <li class="list-group col-5 text-center border border-dark rounded-0">
                            <h7>{this.state.campoCelDatos}</h7>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-3 text-center border border-dark rounded-0">
                            <h6>Correo electrónico</h6>
                        </li>
                        <li class="list-group col-9 text-center border border-dark rounded-0">
                            <h7>{this.state.campoCorreo}</h7>
                        </li>
                    </ul>
                    <br />
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-4 text-center border border-dark rounded-0">
                            <h6>DATOS FAMILIARES</h6>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-2 text-center border border-dark rounded-0">
                            <h6>¿Con quién vives?</h6>
                        </li>
                        <li class="list-group col-4 text-center border border-dark rounded-0">
                            <h7>{this.state.campoVivienda}</h7>
                        </li>
                        <li class="list-group col-3 text-center border border-dark rounded-0">
                            <h6>Si otra situación, descríbela</h6>
                        </li>
                        <li class="list-group col-3 text-center border border-dark rounded-0">
                            <h7>{this.state.campoDescripSi}</h7>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-2 text-center border border-dark rounded-0">
                            <h6>¿Eres huérfano?</h6>
                        </li>
                        <li class="list-group col-2 text-center border border-dark rounded-0">
                            <h7>{this.state.campoHuerfano}</h7>
                        </li>
                        <li class="list-group col-2 text-center border border-dark rounded-0">
                            <h6>¿De?</h6>
                        </li>
                        <li class="list-group col-2 text-center border border-dark rounded-0">
                            <h7>{this.state.campoDescripHu}</h7>
                        </li>
                        <li class="list-group col-2 text-center border border-dark rounded-0">
                            <h6>Edo civil</h6>
                        </li>
                        <li class="list-group col-2 text-center border border-dark rounded-0">
                            <h7>{this.state.campoEstadoCivil}</h7>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-3 text-center border border-dark rounded-0">
                            <h6>Número de hermanos(as)</h6>
                        </li>
                        <li class="list-group col-2 text-center border border-dark rounded-0">
                            <h7>{this.state.campoNumHermano}</h7>
                        </li>
                        <li class="list-group col-3 text-center border border-dark rounded-0">
                            <h6>Lugar que ocupas</h6>
                        </li>
                        <li class="list-group col-2 text-center border border-dark rounded-0">
                            <h7>{this.state.campoLugarOcupa}</h7>
                        </li>
                    </ul>
                    <br />
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-4 text-center border border-dark rounded-0">
                            <h6>DATOS SOCIECONÓMICOS</h6>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-2 text-center border border-dark rounded-0">
                            <h6>Tipo de vivienda</h6>
                        </li>
                        <li class="list-group col-2 text-center border border-dark rounded-0">
                            <h7>{this.state.campoTipoVivi}</h7>
                        </li>
                        <li class="list-group col-2 text-center border border-dark rounded-0">
                            <h6>Tenencia de la vivienda</h6>
                        </li>
                        <li class="list-group col-2 text-center border border-dark rounded-0">
                            <h7>{this.state.campoTenenciaVivi}</h7>
                        </li>
                        <li class="list-group col-2 text-center border border-dark rounded-0">
                            <h6>Cuenta con…</h6>
                        </li>
                        <li class="list-group col-2 text-center border border-dark rounded-0">
                            <h7>{this.state.campoCuentaCon}</h7>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-3 text-center border border-dark rounded-0">
                            <h6>Número de habitaciones</h6>
                        </li>
                        <li class="list-group col-1 text-center border border-dark rounded-0">
                            <h7>{this.state.campoNumHabitaciones}</h7>
                        </li>
                        <li class="list-group col-3 text-center border border-dark rounded-0">
                            <h6>Número de vehículos</h6>
                        </li>
                        <li class="list-group col-1 text-center border border-dark rounded-0">
                            <h7>{this.state.campoNumVehiculos}</h7>
                        </li>
                        <li class="list-group col-2 text-center border border-dark rounded-0">
                            <h6>Manutención</h6>
                        </li>
                        <li class="list-group col-2 text-center border border-dark rounded-0">
                            <h7>{this.state.campoManutencion}</h7>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-2 text-center border border-dark rounded-0">
                            <h6>Trabajo del papá</h6>
                        </li>
                        <li class="list-group col-4 text-center border border-dark rounded-0">
                            <h7>{this.state.campoTrabajoPapa}</h7>
                        </li>
                        <li class="list-group col-3 text-center border border-dark rounded-0">
                            <h6>Si otro, describe por favor</h6>
                        </li>
                        <li class="list-group col-3 text-center border border-dark rounded-0">
                            <h7>{this.state.campoDescripTrabajoP}</h7>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-2 text-center border border-dark rounded-0">
                            <h6>Trabajo de la mamá</h6>
                        </li>
                        <li class="list-group col-4 text-center border border-dark rounded-0">
                            <h7>{this.state.campoTrabajoMama}</h7>
                        </li>
                        <li class="list-group col-3 text-center border border-dark rounded-0">
                            <h6>Si otro, describe por favor</h6>
                        </li>
                        <li class="list-group col-3 text-center border border-dark rounded-0">
                            <h7>{this.state.campoDescripTrabajoM}</h7>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-3 text-center border border-dark rounded-0">
                            <h6>Ingresos familiares</h6>
                        </li>
                        <li class="list-group col-2 text-center border border-dark rounded-0">
                            <h7>{this.state.campoIngresoFamil}</h7>
                        </li>
                        <li class="list-group col-6 text-center border border-dark rounded-0">
                            <h6>Número de personas que contribuyen a esos ingresos</h6>
                        </li>
                        <li class="list-group col-1 text-center border border-dark rounded-0">
                            <h7>{this.state.campoNumPersContri}</h7>
                        </li>
                    </ul> 
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-6 text-center border border-dark rounded-0">
                            <h6>Número de personas que dependen de esos ingresos</h6>
                        </li>
                        <li class="list-group col-2 text-center border border-dark rounded-0">
                            <h7>{this.state.campoNumPersDependen}</h7>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-1 text-center border border-dark rounded-0">
                            <h6>¿Trabajas?</h6>
                        </li>
                        <li class="list-group col-1 text-center border border-dark rounded-0">
                            <h7>{this.state.campoTrabajo}</h7>
                        </li>
                        <li class="list-group col-4 text-center border border-dark rounded-0">
                            <h6>¿Tiene relación con la carrera?</h6>
                        </li>
                        <li class="list-group col-2 text-center border border-dark rounded-0">
                            <h7>{this.state.campoRelacionTrabajo}</h7>
                        </li>
                    </ul>
                    <br />
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-4 text-center border border-dark rounded-0">
                            <h6>ANTECEDENTES ACADÉMICOS</h6>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-4 text-center border border-dark rounded-0">
                            <h6>Bachillerato de procedencia</h6>
                        </li>
                        <li class="list-group col-8 text-center border border-dark rounded-0">
                            <h7>{this.state.campoBachillProce}</h7>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-2 text-center border border-dark rounded-0">
                            <h6>Modalidad</h6>
                        </li>
                        <li class="list-group col-1 text-center border border-dark rounded-0">
                            <h7>{this.state.campoModalidad}</h7>
                        </li>
                        <li class="list-group col-4 text-center border border-dark rounded-0">
                            <h6>Duración en años para terminarlo</h6>
                        </li>
                        <li class="list-group col-1 text-center border border-dark rounded-0">
                            <h7>{this.state.campoAnos}</h7>
                        </li>
                        <li class="list-group col-2 text-center border border-dark rounded-0">
                            <h6>Promedio obtenido</h6>
                        </li>
                        <li class="list-group col-2 text-center border border-dark rounded-0">
                            <h7>{this.state.campoPromedioObten}</h7>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-5 text-center border border-dark rounded-0">
                            <h6>¿Cómo consideras tu rendimiento escolar?</h6>
                        </li>
                        <li class="list-group col-3 text-center border border-dark rounded-0">
                            <h7>{this.state.campoRendiEscolar}</h7>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-6 text-center border border-dark rounded-0">
                            <h6>¿Qué materias consideras que se te facilitan más?</h6>
                        </li>
                        <li class="list-group col-6 text-center border border-dark rounded-0">
                            <h7>{this.state.campoMateriaFacil}</h7>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-6 text-center border border-dark rounded-0">
                            <h6>¿Qué materias consideras que te cuestan más trabajo?</h6>
                        </li>
                        <li class="list-group col-6 text-center border border-dark rounded-0">
                            <h7>{this.state.campoMateriaTrabajo}</h7>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-5 text-center border border-dark rounded-0">
                            <h6>¿Cuántas materias acreditaste en extraordinario?</h6>
                        </li>
                        <li class="list-group col-1 text-center border border-dark rounded-0">
                            <h7>{this.state.campoMateriaExtra}</h7>
                        </li>
                        <li class="list-group col-1 text-center border border-dark rounded-0">
                            <h6>¿Cuáles?</h6>
                        </li>
                        <li class="list-group col-5 text-center border border-dark rounded-0">
                            <h7>{this.state.campoCualMaterExt}</h7>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-6 text-center border border-dark rounded-0">
                            <h6>¿Repetiste algún año o grado en niveles anteriores?</h6>
                        </li>
                        <li class="list-group col-1 text-center border border-dark rounded-0">
                            <h7>{this.state.campoRepetiAnoAnter}</h7>
                        </li>
                        <li class="list-group col-2 text-center border border-dark rounded-0">
                            <h6>¿En qué nivel?</h6>
                        </li>
                        <li class="list-group col-3 text-center border border-dark rounded-0">
                            <h7>{this.state.campoNivel}</h7>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-8 text-center border border-dark rounded-0">
                            <h6>¿Cuáles consideras tus principales obstáculos para encarar los estudios?</h6>
                        </li>
                        <li class="list-group col-4 text-center border border-dark rounded-0">
                            <h7>{this.state.campoObstaculos}</h7>
                        </li>
                    </ul>
                    <br />
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-4 text-center border border-dark rounded-0">
                            <h6>HÁBITOS DE ESTUDIO</h6> 
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-3 text-center border border-dark rounded-0">
                            <h6>¿Te gusta leer?</h6>
                        </li>
                        <li class="list-group col-1 text-center border border-dark rounded-0">
                            <h7>{this.state.campoLee}</h7>
                        </li>
                        <li class="list-group col-4 text-center border border-dark rounded-0">
                            <h6>¿Qué tipo de lectura te gusta?</h6>
                        </li>
                        <li class="list-group col-4 text-center border border-dark rounded-0">
                            <h7>{this.state.campoTipoLectu}</h7>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-6 text-center border border-dark rounded-0">
                            <h6>¿Tienes un lugar especial para estudiar en tu casa?</h6>
                        </li>
                        <li class="list-group col-1 text-center border border-dark rounded-0">
                            <h7>{this.state.campoLugarEstud}</h7>
                        </li>
                        <li class="list-group col-2 text-center border border-dark rounded-0">
                            <h6>Descríbelo</h6>
                        </li>
                        <li class="list-group col-3 text-center border border-dark rounded-0">
                            <h7>{this.state.campoDescripEstud}</h7>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-4 text-center border border-dark rounded-0">
                            <h6>¿Cuántas horas diarias dedicas usualmente al estudio?</h6>
                        </li>
                        <li class="list-group col-1 text-center border border-dark rounded-0">
                            <h7>{this.state.campoHorasEstudi}</h7>
                        </li>
                        <li class="list-group col-3 text-center border border-dark rounded-0">
                            <h6>¿Tienes un horario fijo para estudiar?</h6>
                        </li>
                        <li class="list-group col-1 text-center border border-dark rounded-0">
                            <h7>{this.state.campoHorarioEstud}</h7>
                        </li>
                        <li class="list-group col-2 text-center border border-dark rounded-0">
                            <h6>¿Oyes música cuando estudias?</h6>
                        </li>
                        <li class="list-group col-1 text-center border border-dark rounded-0">
                            <h7>{this.state.campoMusicaEstud}</h7>
                        </li>
                    </ul>
                    <br />
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-4 text-center border border-dark rounded-0">
                            <h6>AFICIONES</h6>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-4 text-center border border-dark rounded-0">
                            <h6>¿En qué sueles emplear tu tiempo libre mayoritariamente?</h6>
                        </li>
                        <li class="list-group col-3 text-center border border-dark rounded-0">
                            <h7>{this.state.campoTiempoLibre}</h7>
                        </li>
                        <li class="list-group col-3 text-center border border-dark rounded-0">
                            <h6>¿Cuánto tiempo diario dedicas a esa afición?</h6>
                        </li>
                        <li class="list-group col-2 text-center border border-dark rounded-0">
                            <h7>{this.state.campoTiempoAfici}</h7>
                        </li>
                    </ul>
                    <br />
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-4 text-center border border-dark rounded-0">
                            <h6>PERSONALIDAD</h6>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-6 text-center border border-dark rounded-0">
                            <h6>¿Colaboras en casa con las tareas del hogar?</h6>
                        </li>
                        <li class="list-group col-1 text-center border border-dark rounded-0">
                            <h7>{this.state.campoTareaHogar}</h7>
                        </li>
                        <li class="list-group col-3 text-center border border-dark rounded-0">
                            <h6>¿En qué medida?</h6>
                        </li>
                        <li class="list-group col-2 text-center border border-dark rounded-0">
                            <h7>{this.state.campoMedida}</h7>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-5 text-center border border-dark rounded-0">
                            <h6>¿Qué tan integrado(a) consideras que estás a tu ambiente familiar?</h6>
                        </li>
                        <li class="list-group col-1 text-center border border-dark rounded-0">
                            <h7>{this.state.campoIntegradoFamili}</h7>
                        </li>
                        <li class="list-group col-5 text-center border border-dark rounded-0">
                            <h6>¿Hablas con familiares sobre aspectos que te interesan o preocupan?</h6>
                        </li>
                        <li class="list-group col-1 text-center border border-dark rounded-0">
                            <h7>{this.state.campoAspectoPreocupa}</h7>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-6 text-center border border-dark rounded-0">
                            <h6>¿Consideras que te comunicas adecuadamente en casa?</h6>
                        </li>
                        <li class="list-group col-1 text-center border border-dark rounded-0">
                            <h7>{this.state.campoComunicarCasa}</h7>
                        </li>
                    </ul>
                    <br />
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-4 text-center border border-dark rounded-0">
                            <h6>Rasgos personales</h6>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-12 border border-dark rounded-0">
                            <h7>{this.state.campoRasgos}</h7>
                        </li>
                    </ul>
                    <br />
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-4 text-center border border-dark rounded-0">
                            <h6>Salud</h6>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-3 text-center border border-dark rounded-0">
                            <h6>¿Cómo consideras en general que es tu salud?</h6>
                        </li>
                        <li class="list-group col-1 text-center border border-dark rounded-0">
                            <h7>{this.state.saludAlumno}</h7>
                        </li>
                        <li class="list-group col-3 text-center border border-dark rounded-0">
                            <h6>¿Has tenido alguna enfermedad grave?</h6>
                        </li>
                        <li class="list-group col-1 text-center border border-dark rounded-0">
                            <h7>{this.state.enfermeAlumno}</h7>
                        </li>
                        <li class="list-group col-1 text-center border border-dark rounded-0">
                            <h6>¿De qué tipo?</h6>
                        </li>
                        <li class="list-group col-3 text-center border border-dark rounded-0">
                            <h7>{this.state.tipoEnferme}</h7>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-6 text-center border border-dark rounded-0">
                            <h6>¿Tienes algún padecimiento o enfermedad crónica?</h6>
                        </li>
                        <li class="list-group col-1 text-center border border-dark rounded-0">
                            <h7>{this.state.padeciEnferme}</h7>
                        </li>
                        <li class="list-group col-1 text-center border border-dark rounded-0">
                            <h6>¿Cuál?</h6>
                        </li>
                        <li class="list-group col-4 text-center border border-dark rounded-0">
                            <h7>{this.state.cualPadeEnfer}</h7>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-4 text-center border border-dark rounded-0">
                            <h6>¿Te han operado alguna vez?</h6>
                        </li>
                        <li class="list-group col-1 text-center border border-dark rounded-0">
                            <h7>{this.state.operadoAlumno}</h7>
                        </li>
                        <li class="list-group col-3 text-center border border-dark rounded-0">
                            <h6>¿Cuál fue la causa?</h6>
                        </li>
                        <li class="list-group col-4 text-center border border-dark rounded-0">
                            <h7>{this.state.causaOperado}</h7>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-10 text-center border border-dark rounded-0">
                            <h6>¿Padeces algún problema de salud que consideres pueda afectar tus estudios? Menciónalo</h6>
                        </li>
                        <li class="list-group col-2 text-center border border-dark rounded-0">
                            <h7>{this.state.problemaSalud}</h7>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-7 text-center border border-dark rounded-0">
                            <h6>¿Tienes alguna condición que afecte tu visión, audición, motricidad?</h6>
                        </li>
                        <li class="list-group col-1 text-center border border-dark rounded-0">
                            <h7>{this.state.problemaFisi}</h7>
                        </li>
                        <li class="list-group col-1 text-center border border-dark rounded-0">
                            <h6>¿Cuál?</h6>
                        </li>
                        <li class="list-group col-3 text-center border border-dark rounded-0">
                            <h7>{this.state.tipoProblema}</h7>
                        </li>
                    </ul>
                    <br />
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-4 text-center border border-dark rounded-0">
                            <h6>Comentario</h6>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-12 border border-dark rounded-0">
                            <h7>{this.state.sugerencia}</h7>
                        </li>
                    </ul>
                </div>
                <br />
            </div>
        );
    }// Función para redirecciónar al usuario dependiendo del tipo 
    volver(){ 
        switch(this.props.Tipo){
            case 'Tutor':
                window.location.replace("/verEntreIni/"+this.props.idTutor);
            break;
            case 'Encargado de tutoria': 
                window.location.replace("/verEntreIniGrupPE/"+this.props.idTutor+"/"+this.props.Grupo+"/"+this.props.volver);
            break;
            case 'Jefe de tutoria':
                window.location.replace("/verEntreIniGroupJ/"+this.props.idTutor+"/"+this.props.Grupo+"/"+this.props.volver);
            break;
        }
    }
}
// clase para generar las opciones de gernerar pdf, imprimir direcctamente etc.
class GenerarPDFEva extends React.Component{
    render(){
        return(
            <div>
                <div class="container">
                    <VerEntreIniIndividual Tipo={this.props.match.params.Tipo} Grupo={this.props.match.params.Grupo} volver={this.props.match.params.volver} idAlumno={this.props.match.params.idAlumno} idTutor={this.props.match.params.idTutor} ref={el => (this.componentRef = el)}/>
                    <ReactToPrint documentTitle="Entrevista inicial" content={() => this.componentRef}>
                        <PrintContextConsumer>
                            {({ handlePrint }) =>(
                                <div class="text-center">
                                    <Link class="btn btn-success" onClick={handlePrint}>Generar PDF</Link>
                                </div>  
                            )}
                        </PrintContextConsumer>
                    </ReactToPrint>
                </div>
                <br></br><br></br><br></br><br></br>
                <Foolder />
            </div>
        );
    }
}

export default GenerarPDFEva;