import React from 'react';
import {Link} from 'react-router-dom';
import '../Home.css';
import '../includes/bootstrap';
import axios from 'axios';
import Swal from 'sweetalert2/dist/sweetalert2.js';//Libreria para los alertas
import 'sweetalert2/src/sweetalert2.scss';//Libreria para los alertas
import { animateScroll as scroll} from 'react-scroll';//Librería para hcer scroll
import Foolder from '../fooldel';

class EntrevistaIni extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            Platicador:"",			
            Optimista:"",		
            Amiguero:"",	
            Timido:"",			
            Solitario:"",			
            Ansioso:"",	
            Enojon:"",			
            ExplotFacime:"",			
            Pesimista:"",
            Seguro:"",			
            PiensAntesActu:"",			
            EnfrentoProble:"",	
            Servicial:"",			
            PiensasDe:"",			
            Generoso:"",
            Egocentrico:"",			
            Antisocial:"",		
            Insensible:"",	
            Planificador:"",			
            Puntual:"",	
            PocoEspontaneo:"",	
            Despreocupado:"",			
            Aventado:"",		
            Flojo:"",	
            CuestionoTodo:"",			
            MeCuestaSegui:"",			
            Curioso:"",
            Conservad:"",		
            PrefieresSeguro:"",
            SigoIndicacione:"",	
            Alegre:"",
            Autoritario:"",			
            Chistoso:"",
            Retraido:"",			
            Temeroso:"",			
            Inseguro:"",	
            Impulsivo:"",			
            Preocupon:"",			
            Nervioso:"",	
            Calmado:"",						
            Persevera:"",	
            Franco:"",	
            Altruista:"",			
            Solidario:"",	
            Competitivo:"",			
            Indiferente:"",			
            Orgulloso:"",
            Ambicioso:"",			
            Cuadrado:"",			
            Escrupuloso:"",	
            Espontaneo:"",			
            Desinhibido:"",			
            PocaFuerzaVoluntad:"",	
            Critico:"",
            Imaginativo:"",			
            Independiente:"",
            Tradicionalista:"",			
            PocoCreativo:"",			
            NomeGustaMeManden:"",
            campoEdadDatos:0,
            campoTelCasa:"", 
            campoCelDatos:"",
            campoCorreo:"", 
            campoIdAlumnos2:0,
            campoVivienda:"", 
            campoDescripSi:"",
            campoHuerfano:"", 
            campoDescripHu:"", 
            campoEstadoCivil:"",
            campoNumHermano:"", 
            campoLugarOcupa:"",
            campoIdAlumnos:0,
            campoTipoVivi:"",  
            campoCuentaCon:"", 
            campoNumHabitaciones:"", 
            campoNumVehiculos:0, 
            campoManutencion:"",
            campoTrabajoPapa:"", 
            campoDescripTrabajoP:"",
            campoTrabajoMama:"", 
            campoDescripTrabajoM:"",
            campoIngresoFamil:"", 
            campoNumPersContri:"", 
            campoNumPersDependen:"", 
            campoTrabajo:"", 
            campoRelacionTrabajo:"",
            campoIdAlumnos4:0,
            campoBachillProce:"",
            campoModalidad:"",
            campoAnos:"", 
            campoPromedioObten:"",
            campoRendiEscolar:"", 
            campoMateriaFacil:"", 
            campoMateriaTrabajo:"",
            campoMateriaExtra:"", 
            campoCualMaterExt:"",
            campoRepetiAnoAnter:"",
            campoNivel:"", 
            campoObstaculos:"", 
            campoIdAlumnos5:0,
            campoLee:"", 
            campoTipoLectu:"", 
            campoLugarEstud:"",
            campoDescripEstud:"", 
            campoHorasEstudi:"", 
            campoHorarioEstud:"",
            campoMusicaEstud:"", 
            campoIdAlumnos6:0,
            campoTiempoLibre:"", 
            campoTiempoAfici:"", 
            campoIdAlumnos7:0,
            campoTareaHogar:"", 
            campoMedida:"", 
            campoIntegradoFamili:"",
            campoAspectoPreocupa:"", 
            campoComunicarCasa:"", 
            campoIdAlumnos8:0,
            campoRasgos:"Un monton",
            campoIdAlumnos9:0,
            campoSaludAlumno:"", 
            campoEnfermeAlumno:"", 
            campoTipoEnferme:"",
            campoPadeciEnferme:"",
            campoCualPadeEnfer:"",
            campoOperadoAlumno:"", 
            campoCausaOperado:"",
            campoProblemaSalud:"", 
            campoProblemaFisi:"", 
            campoTipoProblema:"",
            campoIdAlumnos10:0,
            campoSugerencia:"Sin comentarios", 
            campoIdAlumnos11:0,
            campoEstado:0
        }
    }
    render(){
        return(
            <div>
                <nav class="navbar bg-nav fixed-top" >
                    <Link class="navbar-brand color" to={"/entrevistaIni/"+this.props.match.params.id}>SIIUTeM</Link>
                </nav>
                <br /><br /><br /><br />
                <div class="container">
                    <h5 class="text-center">ENTREVISTA INICIAL</h5>
                    <div id="identifi">
                        <br />
                        <h5 class="card-title">DATOS DE IDENTIFICASIÓN</h5>
                        <br />
                        <div class="form-row">
                            <div class="form-group col-md-3">
                                <h5>Edad</h5>
                                <input type="number" class="form-control" onChange={(value) => this.setState({campoEdadDatos:value.target.value})}/>
                            </div>
                            <div class="form-group col-md-3">
                                <h5>Tel casa</h5>
                                <input type="text" class="form-control" onChange={(value) => this.setState({campoTelCasa:value.target.value})}/>
                            </div>
                            <div class="form-group col-md-3">
                                <h5>Celular</h5>
                                <input type="text" class="form-control" onChange={(value) => this.setState({campoCelDatos:value.target.value})}/>
                            </div>
                        </div>                            
                        <div class="form-row">
                            <div class="col-md-9">
                                <h5>Correo electrónico</h5>
                                <input type="email" class="form-control" onChange={(value) => this.setState({campoCorreo:value.target.value})} />
                            </div>
                        </div>
                        <br></br><br></br><br></br><br></br><br></br><br></br>
                        <div class="col text-center">
                            <input type="button" class="btn btn-primary abajo" onClick={() => this.identifi()} value="Siguiente" />
                        </div>
                        <br></br><br></br>
                    </div>                    
                    <div className="ocultar" id="familiares">
                        <br></br>
                        <h5 class="card-title">DATOS FAMILIARES</h5>
                        <br></br>
                        <div class="form-row">
                            <div class="form-group col-md-5">
                                <h5>¿Con quién vives?</h5>
                                <select class="form-control" onChange={(value) => this.setState({campoVivienda:value.target.value})}>
                                    <option selected="true" disabled="disabled">seleccione una opción</option>
                                    <option value="Mis papás">Mis papás</option>  
                                    <option value="Con mi papá">Con mi papá</option> 
                                    <option value="Con mi mamá">Con mi mamá</option> 
                                    <option value="Con parientes">Con parientes (tíos, abuelos, etc.)</option>         
                                    <option value="Con amigos">Con amigos</option>
                                    <option value="Otra situación">Otra situación</option> 
                                </select>
                            </div>
                            <div class="form-group col-md-4">
                                <h5>Si otra situación, descríbela</h5>
                                <input type="text" class="form-control" onChange={(value) => this.setState({campoDescripSi:value.target.value})} />
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-4">
                                <h5>¿Eres huérfano?</h5>
                                <select class="form-control" onChange={(value) => this.setState({campoHuerfano:value.target.value})}>
                                <option selected="true" disabled="disabled">seleccione una opción</option>
                                    <option value="No">No</option>  
                                    <option value="Si">Si</option> 
                                </select>
                            </div>
                            <div class="form-group col-md-5">
                                <h5>¿De?</h5>
                                <select class="form-control" onChange={(value) => this.setState({campoDescripHu:value.target.value})}>
                                    <option selected="true" disabled="disabled">seleccione una opción</option> 
                                    <option value="De padre">De padre</option>
                                    <option value="De madre">De madre</option>
                                    <option value="De ambos">De ambos</option>
                                    <option value="De Ninguno">De Ninguno</option> 
                                </select>
                            </div>
                            <div class="col">
                                <h5>Edo civil</h5>
                                <select class="form-control"  onChange={(value) => this.setState({campoEstadoCivil:value.target.value})}>
                                <option selected="true" disabled="disabled">seleccione una opción</option>
                                    <option value="Soltero">Soltero</option>  
                                    <option value="Casado">Casado</option>
                                    <option value="Unión libre">Unión libre</option>
                                    <option value="Divorciado(a)">Divorciado(a)</option> 
                                </select>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-4">
                                <h5>Número de hermanos(as)</h5>
                                <input type="number" class="form-control" onChange={(value) => this.setState({campoNumHermano:value.target.value})}/>
                            </div>
                            <div class="form-group col-md-5">
                                <h5>Lugar que ocupas</h5>
                                <input type="number" class="form-control" onChange={(value) => this.setState({campoLugarOcupa:value.target.value})}/>
                            </div>
                        </div>
                        <br></br><br></br>
                        <div class="col text-center">
                            <input type="button" class="btn btn-warning" value="Atrás" onClick={() => this.atrasFamiliares()}/>
                            <input type="button" class="btn btn-primary offset-md-1" onClick={() => this.familiares()} value="Siguiente" />
                        </div>
                        <br></br><br></br>
                    </div>
                    <div className="ocultar" id="sociecomo">
                        <br></br>
                        <h5 class="card-title">DATOS SOCIECONÓMICOS</h5>
                        <br></br>
                        <div class="form-row">
                            <div class="form-group col-md-3">
                                <h5>Tipo de vivienda</h5>
                                <select class="form-control" onChange={(value) => this.setState({campoTipoVivi:value.target.value})}>
                                    <option selected="true" disabled="disabled">seleccione una opción</option>
                                    <option value="Casa">Casa</option>  
                                    <option value="Casa en coto privado">Casa en coto privado</option>
                                    <option value="Departamento">Departamento</option>
                                    <option value="Departamento en multifamiliar">Departamento en multifamiliar</option>
                                    <option value="Casa de huéspedes">Casa de huéspedes</option>
                                </select>
                            </div>
                            <div class="form-group col-md-3">
                                <h5>Tenencia de la vivienda</h5>
                                <select class="form-control" onChange={(value) => this.setState({campoTenenciaVivi:value.target.value})}>
                                    <option selected="true" disabled="disabled">seleccione una opción</option>
                                    <option value="Propia">Propia</option>  
                                    <option value="Rentada">Rentada</option>
                                    <option value="Prestada">Prestada</option>
                                    <option value="Hipotecada">Hipotecada</option>
                                    <option value="Otra">Otra</option>
                                </select>
                            </div> 
                            <div class="form-group col-md-6">
                                <h5>Cuenta con…</h5>
                                <input type="text" class="form-control"  onChange={(value) => this.setState({campoCuentaCon:value.target.value})}/>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-3">
                            <h5>Número de habitaciones</h5> 
                                <input type="number" class="form-control" onChange={(value) => this.setState({campoNumHabitaciones:value.target.value})}/>
                            </div>
                            <div class="form-group col-md-3">
                            <h5>Número de vehículos</h5> 
                                <input type="number" class="form-control" value={this.state.campoNumVehiculos} onChange={(value) => this.setState({campoNumVehiculos:value.target.value})}/>
                            </div>
                            <div class="form-group col-md-6">
                            <h5>Manutención</h5> 
                                <input type="text" class="form-control" onChange={(value) => this.setState({campoManutencion:value.target.value})} />
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-5">
                                <h5>Trabajo del papá</h5>
                                <select class="form-control" onChange={(value) => this.setState({campoTrabajoPapa:value.target.value})}>
                                    <option selected="true" disabled="disabled">seleccione una opción</option>
                                    <option value="Empleado(a) de gobierno">Empleado(a) de gobierno</option>  
                                    <option value="Empleado(a) en una empresa">Empleado(a) en una empresa</option>
                                    <option value="Agroproductor">Agroproductor</option>
                                    <option value="Operario(a) de producción">Operario(a) de producción</option>
                                    <option value="Comerciante">Comerciante</option>
                                    <option value="Profesionista trabaja por cuenta propia">Profesionista trabaja por cuenta propia</option>
                                    <option value="Militar (ejército o armada)">Militar (ejército o armada)</option>
                                    <option value="Otro">Otro</option>
                                </select>
                            </div>
                            <div class="form-group col-md-7">
                                <h5>Si otro, describe por favor</h5>
                                <input type="text" class="form-control" onChange={(value) => this.setState({campoDescripTrabajoP:value.target.value})}/>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-5">
                            <h5>Trabajo de la mamá</h5>
                                <select class="form-control" onChange={(value) => this.setState({campoTrabajoMama:value.target.value})}>
                                    <option selected="true" disabled="disabled">seleccione una opción</option>
                                    <option value="Empleado(a) de gobierno">Empleado(a) de gobierno</option>  
                                    <option value="Empleado(a) en una empresa">Empleado(a) en una empresa</option>
                                    <option value="Agroproductor">Agroproductor</option>
                                    <option value="Operario(a) de producción">Operario(a) de producción</option>
                                    <option value="Comerciante">Comerciante</option>
                                    <option value="Profesionista trabaja por cuenta propia">Profesionista trabaja por cuenta propia</option>
                                    <option value="Militar (ejército o armada)">Militar (ejército o armada)</option>
                                    <option value="Otro">Otro</option>
                                </select>
                            </div>
                            <div class="form-group col-md-7">
                                <h5>Si otro, describe por favor</h5>
                                <input type="text" class="form-control" onChange={(value) => this.setState({campoDescripTrabajoM:value.target.value})}/>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-5">
                                <h5>Ingresos familiares</h5>
                                <input type="text" class="form-control" onChange={(value) => this.setState({campoIngresoFamil:value.target.value})}/>
                            </div>
                            <div class="form-group col-md-7">
                                <h5>Número de personas que contribuyen a esos ingresos</h5>
                                <input type="text" class="form-control" onChange={(value) => this.setState({campoNumPersContri:value.target.value})}/>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-5">
                                <h5>Número de personas que dependen de esos ingresos</h5>
                                <input type="text" class="form-control" onChange={(value) => this.setState({campoNumPersDependen:value.target.value})}/>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-3">
                                <h5>¿Trabajas?</h5>
                                <select class="form-control" onChange={(value) => this.setState({campoTrabajo:value.target.value})}>
                                    <option selected="true" disabled="disabled">seleccione una opción</option>
                                    <option value="No">No</option>  
                                    <option value="Si">Si</option>
                                </select>
                            </div>
                            <div class="form-group col-md-4">
                                <h5>¿Tiene relación con la carrera?</h5>
                                <select class="form-control" onChange={(value) => this.setState({campoRelacionTrabajo:value.target.value})}>
                                    <option selected="true" disabled="disabled">seleccione una opción</option>  
                                    <option value="Mucho">Mucho</option>
                                    <option value="Mucho">Algo</option>
                                    <option value="Mucho">Nada</option>
                                </select>
                            </div>
                        </div> 
                        <br></br><br></br><br></br>
                        <div class="col text-center">
                            <input type="button" class="btn btn-warning" value="Atrás" onClick={() => this.atrasSociecomo()}/>
                            <input type="button" class="btn btn-primary offset-md-1" onClick={() => this.sociecomo()} value="Siguiente" />
                        </div>
                        <br></br><br></br><br></br>
                    </div>
                    <div className="ocultar" id="antecede_acade">
                        <br></br>
                        <h5 class="card-title">ANTECEDENTES ACADÉMICOS</h5>
                        <br></br>
                        <div class="form-row">
                            <div class="form-group col-md-5">
                                <h5>Bachillerato de procedencia</h5>
                                <input type="text" class="form-control" onChange={(value) => this.setState({campoBachillProce:value.target.value})}/>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-4">
                                <h5>Modalidad</h5>
                                <select class="form-control" onChange={(value) => this.setState({campoModalidad:value.target.value})}>
                                    <option selected="true" disabled="disabled">seleccione una opción</option>  
                                    <option value="Escolarizada">Escolarizada</option>  
                                    <option value="Semiescolarizada">Semiescolarizada</option>
                                    <option value="Abierta">Abierta</option>
                                    <option value="A distancia">A distancia</option>
                                    <option value="Examen Único">Examen Único</option>
                                </select>
                            </div>
                            <div class="form-group col-md-5">
                                <h5>Duración en años para terminarlo</h5>
                                <select class="form-control" onChange={(value) => this.setState({campoAnos:value.target.value})}>
                                    <option selected="true" disabled="disabled">seleccione una opción</option>  
                                    <option value="Tres años">Tres años</option>  
                                    <option value="Menos de uno">Menos de uno</option>
                                    <option value="Alrededor de un año">Alrededor de un año</option>
                                    <option value="Más de un año">Más de un año</option>
                                    <option value="Examen Único">Dos años</option>
                                    <option value="Más de tres años">Más de tres años</option>
                                </select>
                            </div>
                            <div class="form-group col-md-3">
                                <h5>Promedio obtenido</h5>
                                <select class="form-control" onChange={(value) => this.setState({campoPromedioObten:value.target.value})}>
                                    <option selected="true" disabled="disabled">seleccione una opción</option>    
                                    <option value="Entre 10 y 9.5">Entre 10 y 9.5</option>
                                    <option value="Entre 9.4 y 9.0">Entre 9.4 y 9.0</option>
                                    <option value="Entre 8.9 y 8.5">Entre 8.9 y 8.5</option>
                                    <option value="Entre 8.4 y 8.0">Entre 8.4 y 8.0</option>
                                    <option value="Entre 7.9 y 7.5">Entre 7.9 y 7.5</option>
                                    <option value="Entre 7.4 y 6.0">Entre 7.4 y 6.0</option>
                                    <option value="Menos de 6">Menos de 6</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-5">
                                <h5>¿Cómo consideras tu rendimiento escolar?</h5>
                                <select class="form-control" onChange={(value) => this.setState({campoRendiEscolar:value.target.value})}>
                                    <option selected="true" disabled="disabled">seleccione una opción</option>    
                                    <option value="Muy bueno">Muy bueno</option>
                                    <option value="Bueno">Bueno</option>
                                    <option value="Regular">Regular</option>
                                    <option value="Malo">Malo</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-9">
                                <h5>¿Qué materias consideras que se te facilitan más?</h5>
                                <input type="text" class="form-control" onChange={(value) => this.setState({campoMateriaFacil:value.target.value})}/>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-9">
                                <h5>¿Qué materias consideras que te cuestan más trabajo?</h5>
                                <input type="text" class="form-control" onChange={(value) => this.setState({campoMateriaTrabajo:value.target.value})} />
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-5">
                            <h5>¿Cuántas materias acreditaste en extraordinario?</h5>
                                <input type="text" class="form-control" onChange={(value) => this.setState({campoMateriaExtra:value.target.value})}/>
                            </div>
                            <div class="form-group col-md-7">
                            <h5>¿Cuáles?</h5>
                                <input type="text" class="form-control" onChange={(value) => this.setState({campoCualMaterExt:value.target.value})}/>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <h5>¿Repetiste algún año o grado en niveles anteriores?</h5>
                                <select class="form-control" onChange={(value) => this.setState({campoRepetiAnoAnter:value.target.value})}>
                                    <option selected="true" disabled="disabled">seleccione una opción</option>    
                                    <option value="No">No</option>  
                                    <option value="Si">Si</option>
                    
                                </select>
                            </div>
                            <div class="form-group col-md-3">
                                <h5>¿En qué nivel?</h5>
                                <select class="form-control" onChange={(value) => this.setState({campoNivel:value.target.value})}>
                                    <option selected="true" disabled="disabled">seleccione una opción</option>    
                                    <option value="Primaria">Primaria</option>  
                                    <option value="Secundaria">Secundaria</option>
                                    <option value="Bachillerato">Bachillerato</option>
                                    <option value="Carrera Técnica">Carrera Técnica</option>
                                    <option value="Otra">Otra</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-9">
                                <h5>¿Cuáles consideras tus principales obstáculos para encarar los estudios?</h5>
                                <input type="text" class="form-control" onChange={(value) => this.setState({campoObstaculos:value.target.value})}/>
                            </div>
                        </div>
                        <br></br><br></br><br></br>
                        <div class="col text-center">
                            <input type="button" class="btn btn-warning" value="Atrás" onClick={() => this.atrasAntecede_acade()}/>
                            <input type="button" class="btn btn-primary offset-md-1" onClick={() => this.antecede_acade()} value="Siguiente" />
                        </div>
                        <br></br><br></br><br></br>
                    </div>
                    <div className="ocultar" id="habitos_estudio">
                        <br></br>
                        <h5 class="card-title">HÁBITOS DE ESTUDIO</h5>
                        <br></br>
                        <div class="form-row">
                            <div class="form-group col-md-3">
                                <h5>¿Te gusta leer?</h5>
                                <select class="form-control" onChange={(value) => this.setState({campoLee:value.target.value})}>
                                    <option selected="true" disabled="disabled">seleccione una opción</option>  
                                    <option value="Si">Si</option>  
                                    <option value="No">No</option>
                                </select>
                            </div>
                            <div class="form-group col-md-6">
                                <h5>¿Qué tipo de lectura te gusta?</h5>
                                <select class="form-control" onChange={(value) => this.setState({campoTipoLectu:value.target.value})}>
                                    <option selected="true" disabled="disabled">seleccione una opción</option>  
                                    <option value="Novelas">Novelas</option>  
                                    <option value="Cuentos">Cuentos</option>
                                    <option value="Poesía">Poesía</option>
                                    <option value="Noticias">Noticias</option>
                                    <option value="Ciencia Ficción">Ciencia Ficción</option>
                                    <option value="Libros de texto">Libros de texto</option>
                                    <option value="Artículos de divulgación">Artículos de divulgación</option>
                                    <option value="Artículos de opinión">Artículos de opinión</option>
                                    <option value="Otro">Otro</option>
                                </select>
                            </div>
                        </div> 
                        <div class="form-row">
                            <div class="form-group col-md-5">
                                <h5>¿Tienes un lugar especial para estudiar en tu casa?</h5>
                                <select class="form-control" onChange={(value) => this.setState({campoLugarEstud:value.target.value})}>
                                    <option selected="true" disabled="disabled">seleccione una opción</option>  
                                    <option value="No">No</option>
                                    <option value="Si">Si</option>  
                                </select>
                            </div>
                            <div class="form-group col-md-7">
                            <h5>Descríbelo</h5>
                                <input type="text" class="form-control" onChange={(value) => this.setState({campoDescripEstud:value.target.value})}/>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                            <h5>¿Cuántas horas diarias dedicas usualmente al estudio?</h5>
                                <input type="text" class="form-control" onChange={(value) => this.setState({campoHorasEstudi:value.target.value})}/>
                            </div>
                            <div class="form-group col-md-4">
                            <h5>¿Tienes un horario fijo para estudiar?</h5>
                                <select class="form-control" onChange={(value) => this.setState({campoHorarioEstud:value.target.value})}>
                                    <option selected="true" disabled="disabled">seleccione una opción</option>  
                                    <option value="No">No</option>
                                    <option value="Si">Si</option>  
                                </select>
                            </div>
                        </div> 
                        <div class="form-row">
                            <div class="form-group col-md-4">
                                <h5>¿Oyes música cuando estudias?</h5>
                                <select class="form-control" onChange={(value) => this.setState({campoMusicaEstud:value.target.value})}>
                                    <option selected="true" disabled="disabled">seleccione una opción</option>  
                                    <option value="No">No</option>
                                    <option value="Si">Si</option>  
                                </select>
                            </div>
                        </div>
                        <br></br><br></br><br></br>
                        <div class="col text-center">
                            <input type="button" class="btn btn-warning" value="Atrás" onClick={() => this.AtrasHabitos_estudio()}/>
                            <input type="button" class="btn btn-primary offset-md-1" onClick={() => this.habitos_estudio()} value="Siguiente" />
                        </div>
                        <br></br><br></br><br></br>
                    </div>
                    <div className="ocultar" id="aficiones">
                        <br></br>
                        <h5 class="card-title">AFICIONES</h5>
                        <br></br>
                        <div class="form-row">
                            <div class="form-group col-md-5"> 
                                <h5>¿En qué sueles emplear tu tiempo libre mayoritariamente?</h5>
                                <select class="form-control" onChange={(value) => this.setState({campoTiempoLibre:value.target.value})}>
                                    <option selected="true" disabled="disabled">seleccione una opción</option>  
                                    <option value="Practicar algún deporte">Practicar algún deporte</option>
                                    <option value="Leer">Leer</option>  
                                    <option value="Escuchar música">Escuchar música</option>
                                    <option value="Salir o estar con amigos">Salir o estar con amigos</option>
                                    <option value="Ir al cine">Ir al cine</option>
                                    <option value="Ver TV">Ver TV</option>
                                    <option value="Redes sociales">Redes sociales</option>
                                    <option value="Navegar en Internet">Navegar en Internet</option>
                                    <option value="Jugar juegos en computadora, celular">Jugar juegos en computadora, celular</option>
                                    <option value="Otro">Otro</option>
                                </select>
                            </div>
                            <div class="form-group col-md-4">
                            <h5>¿Cuánto tiempo diario dedicas a esa afición?</h5>
                            <select class="form-control" onChange={(value) => this.setState({campoTiempoAfici:value.target.value})}>
                                    <option selected="true" disabled="disabled">seleccione una opción</option>  
                                    <option value="Media hora">Media hora</option>
                                    <option value="Una hora">Una hora</option>  
                                    <option value="Hora y media">Hora y media</option>
                                    <option value="Dos horas">Dos horas</option>
                                    <option value="Tres horas">Tres horas</option>
                                    <option value="Más de tres horas">Más de tres horas</option>
                                </select>
                            </div>
                        </div>
                        <br></br><br></br><br></br>
                        <br></br><br></br><br></br>
                        <br></br><br></br>
                        <div class="col text-center">
                            <input type="button" class="btn btn-warning" value="Atrás" onClick={() => this.AtrasAficiones()}/>
                            <input type="button" class="btn btn-primary offset-md-1" onClick={() => this.aficiones()} value="Siguiente" />
                        </div>
                        <br></br><br></br><br></br>
                    </div>
                    <div className="ocultar" id="personalidad">
                        <br></br>
                        <h5 class="card-title">PERSONALIDAD</h5>
                        <br></br>
                        <div class="form-row">
                            <div class="form-group col-md-5">
                                <h5>¿Colaboras en casa con las tareas del hogar?</h5>
                                <select class="form-control" onChange={(value) => this.setState({campoTareaHogar:value.target.value})}>
                                    <option selected="true" disabled="disabled">seleccione una opción</option>  
                                    <option value="No">No</option>
                                    <option value="Si">Si</option>  
                                </select>
                            </div>
                            <div class="form-group col-md-5">
                                <h5>¿En qué medida?</h5>
                                <select class="form-control" onChange={(value) => this.setState({campoMedida:value.target.value})}>
                                    <option selected="true" disabled="disabled">seleccione una opción</option>  
                                    <option value="Mucho">Mucho</option>
                                    <option value="Regular">Regular</option>
                                    <option value="Solo lo necesario">Solo lo necesario</option>
                                    <option value="Poco">Poco</option>
                                    <option value="Nada">Nada</option>  
                                </select>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                            <h5>¿Qué tan integrado(a) consideras que estás a tu ambiente familiar?</h5>
                            <select class="form-control" onChange={(value) => this.setState({campoIntegradoFamili:value.target.value})}>
                                    <option selected="true" disabled="disabled">seleccione una opción</option>  
                                    <option value="Totalmente">Totalmente</option>
                                    <option value="Bastante">Bastante</option>
                                    <option value="Suficiente">Suficiente</option>
                                    <option value="Regular">Regular</option>
                                    <option value="Poco">Poco</option>
                                    <option value="Nada">Nada</option>  
                                </select>
                            </div>
                            <div class="form-group col-md-4">
                                <h5>¿Hablas con familiares sobre aspectos que te interesan o preocupan?</h5>
                                <select class="form-control" onChange={(value) => this.setState({campoAspectoPreocupa:value.target.value})}>
                                    <option selected="true" disabled="disabled">seleccione una opción</option>  
                                    <option value="Siempre">Siempre</option>
                                    <option value="Casi siempre">Casi siempre</option>
                                    <option value="A veces">A veces</option>
                                    <option value="Casi nunca">Casi nunca</option>
                                    <option value="Nunca">Nunca</option>  
                                </select>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <h5>¿Consideras que te comunicas adecuadamente en casa?</h5>
                                    <select class="form-control" onChange={(value) => this.setState({campoComunicarCasa:value.target.value})}>
                                        <option selected="true" disabled="disabled">seleccione una opción</option>  
                                        <option value="Si">Si</option>
                                        <option value="No">No</option>  
                                    </select>
                                </div>
                            </div>
                        </div>
                        <br></br><br></br><br></br>
                        <div class="col text-center">
                            <input type="button" class="btn btn-warning" value="Atrás" onClick={() => this.atrasPersonalidad()}/>
                            <input type="button" class="btn btn-primary offset-md-1" onClick={() => this.personalidad()} value="Siguiente" />
                        </div>
                        <br></br><br></br><br></br>
                    </div> 
                    <div className="ocultar" id="rasgos">
                        <br></br>
                        <h5 class="card-title">Marca aquellos rasgos que mejor definan tu personalidad</h5>
                        <br></br>
                        <ul class="list-group list-group-horizontal">
                            <li class="list-group-item col-md-4">
                                <label class="form-check-label" for="exampleCheck1">Platicador(a)</label>
                                <select class="form-control col-md-12" onChange={(value)=> this.setState({Platicador:value.target.value})}>
                                    <option value="No">No</option>  
                                    <option value=" Platicador(a),">Si</option>         
                                </select>
                            </li>
                            <li class="list-group-item col-md-4">
                            <label class="form-check-label" for="exampleCheck1">Optimista</label>        
                                <select class="form-control col-md-12" onChange={(value)=> this.setState({Optimista:value.target.value})}>
                                    <option value="No">No</option>  
                                    <option value=" Optimista,">Si</option>         
                                </select>
                            </li>
                            <li class="list-group-item col-md-4">
                                <label class="form-check-label" for="exampleCheck1">Amiguero(a)</label>
                                <select class="form-control col-md-12" onChange={(value)=> this.setState({Amiguero:value.target.value})}>
                                    <option value="No">No</option>  
                                    <option value=" Amiguero(a),">Si</option>         
                                </select>
                            </li>
                        </ul>
                        <ul class="list-group list-group-horizontal">
                            <li class="list-group-item col-md-4">
                                <label class="form-check-label" for="exampleCheck1">Tímido(a)</label>
                                <select class="form-control col-md-12" onChange={(value)=> this.setState({Timido:value.target.value})}>
                                    <option value="No">No</option>  
                                    <option value=" Tímido(a),">Si</option>         
                                </select>
                            </li>
                            <li class="list-group-item col-md-4">
                                <label class="form-check-label" for="exampleCheck1">Solitario(a)</label>
                                <select class="form-control col-md-12" onChange={(value)=> this.setState({Solitario:value.target.value})}>
                                    <option value="No">No</option>  
                                    <option value=" Solitario(a),">Si</option>         
                                </select>
                            </li>
                            <li class="list-group-item col-md-4">
                                <label class="form-check-label" for="exampleCheck1">Ansioso(a)</label>
                                <select class="form-control col-md-12" onChange={(value)=> this.setState({Ansioso:value.target.value})}>
                                    <option value="No">No</option>  
                                    <option value=" Ansioso(a),">Si</option>         
                                </select>
                            </li>
                        </ul>
                        <ul class="list-group list-group-horizontal">
                            <li class="list-group-item col-md-4">
                                <label class="form-check-label" for="exampleCheck1">Enojón(a)</label>
                                <select class="form-control col-md-12" onChange={(value)=> this.setState({Enojon:value.target.value})}>
                                    <option value="No">No</option>  
                                    <option value=" Enojón(a),">Si</option>         
                                </select>
                            </li>
                            <li class="list-group-item col-md-4">
                                <label class="form-check-label" for="exampleCheck1">Explotas fácilmente</label>
                                <select class="form-control col-md-12" onChange={(value)=> this.setState({ExplotFacime:value.target.value})}>
                                    <option value="No">No</option>  
                                    <option value=" Explotas fácilmente,">Si</option>         
                                </select>
                            </li>
                            <li class="list-group-item col-md-4">
                                <label class="form-check-label" for="exampleCheck1">Pesimista</label>
                                <select class="form-control col-md-12" onChange={(value)=> this.setState({Pesimista:value.target.value})}>
                                    <option value="No">No</option>  
                                    <option value=" Pesimista,">Si</option>         
                                </select>
                            </li>
                        </ul>
                        <ul class="list-group list-group-horizontal">
                            <li class="list-group-item col-md-4">
                                <label class="form-check-label" for="exampleCheck1">Seguro(a)</label>
                                <select class="form-control col-md-12" onChange={(value)=> this.setState({Seguro:value.target.value})}>
                                    <option value="No">No</option>  
                                    <option value=" Seguro(a),">Si</option>         
                                </select>
                            </li>
                            <li class="list-group-item col-md-4">
                                <label class="form-check-label" for="exampleCheck1">Piensas antes de actuar</label>
                                <select class="form-control col-md-12" onChange={(value)=> this.setState({PiensAntesActu:value.target.value})}>
                                    <option value="No">No</option>  
                                    <option value=" Piensas antes de actuar,">Si</option>         
                                </select>
                            </li>
                            <li class="list-group-item col-md-4">
                                <label class="form-check-label" for="exampleCheck1">Enfrento los problemas</label>
                                <select class="form-control col-md-12" onChange={(value)=> this.setState({EnfrentoProble:value.target.value})}>
                                    <option value="No">No</option>  
                                    <option value=" Enfrento los problemas,">Si</option>         
                                </select>
                            </li>
                        </ul>
                        <ul class="list-group list-group-horizontal">
                            <li class="list-group-item col-md-4">
                                <label class="form-check-label" for="exampleCheck1">Servicial</label>
                                <select class="form-control col-md-12" onChange={(value)=> this.setState({Servicial:value.target.value})}>
                                    <option value="No">No</option>  
                                    <option value=" Servicial,">Si</option>         
                                </select>
                            </li>
                            <li class="list-group-item col-md-4">
                                <label class="form-check-label" for="exampleCheck1">Piensas en los demás</label>
                                <select class="form-control col-md-12" onChange={(value)=> this.setState({PiensasDe:value.target.value})}>
                                    <option value="No">No</option>  
                                    <option value=" Piensas en los demás,">Si</option>         
                                </select>
                            </li>
                            <li class="list-group-item col-md-4">
                                <label class="form-check-label" for="exampleCheck1">Generoso(a)</label>
                                <select class="form-control col-md-12" onChange={(value)=> this.setState({Generoso:value.target.value})}>
                                    <option value="No">No</option>  
                                    <option value=" Generoso(a),">Si</option>         
                                </select>
                            </li>
                        </ul>
                        <ul class="list-group list-group-horizontal">
                            <li class="list-group-item col-md-4">
                                <label class="form-check-label" for="exampleCheck1">Egocéntrico(a)</label>
                                <select class="form-control col-md-12" onChange={(value)=> this.setState({Egocentrico:value.target.value})}>
                                    <option value="No">No</option>  
                                    <option value=" Egocéntrico(a),">Si</option>         
                                </select>
                            </li>
                            <li class="list-group-item col-md-4">
                                <label class="form-check-label" for="exampleCheck1">Antisocial</label>
                                <select class="form-control col-md-12" onChange={(value)=> this.setState({Antisocial:value.target.value})}>
                                    <option value="No">No</option>  
                                    <option value=" Antisocial,">Si</option>         
                                </select>
                            </li>
                            <li class="list-group-item col-md-4">
                                <label class="form-check-label" for="exampleCheck1">Insensible</label>
                                <select class="form-control col-md-12" onChange={(value)=> this.setState({Insensible:value.target.value})}>
                                    <option value="No">No</option>  
                                    <option value=" Insensible,">Si</option>         
                                </select>
                            </li>
                        </ul>
                        <ul class="list-group list-group-horizontal">
                            <li class="list-group-item col-md-4">
                                <label class="form-check-label" for="exampleCheck1">Planificador(a)</label>
                                <select class="form-control col-md-12" onChange={(value)=> this.setState({Planificador:value.target.value})}>
                                    <option value="No">No</option>  
                                    <option value=" Planificador(a),">Si</option>         
                                </select>
                            </li>
                            <li class="list-group-item col-md-4">
                                <label class="form-check-label" for="exampleCheck1">Puntual</label>
                                <select class="form-control col-md-12" onChange={(value)=> this.setState({Puntual:value.target.value})}>
                                    <option value="No">No</option>  
                                    <option value=" Puntual,">Si</option>         
                                </select>
                            </li>
                            <li class="list-group-item col-md-4">
                                <label class="form-check-label" for="exampleCheck1">Poco espontáneo</label>
                                <select class="form-control col-md-12" onChange={(value)=> this.setState({PocoEspontaneo:value.target.value})}>
                                    <option value="No">No</option>  
                                    <option value=" Poco espontáneo,">Si</option>         
                                </select>
                            </li>
                        </ul>
                        <ul class="list-group list-group-horizontal">
                            <li class="list-group-item col-md-4">
                                <label class="form-check-label" for="exampleCheck1">Despreocupado(a)</label>
                                <select class="form-control col-md-12" onChange={(value)=> this.setState({Despreocupado:value.target.value})}>
                                    <option value="No">No</option>  
                                    <option value=" Despreocupado(a),">Si</option>         
                                </select>
                            </li>
                            <li class="list-group-item col-md-4">
                                <label class="form-check-label" for="exampleCheck1">Aventado(a)</label>
                                <select class="form-control col-md-12" onChange={(value)=> this.setState({Aventado:value.target.value})}>
                                    <option value="No">No</option>  
                                    <option value=" Aventado(a),">Si</option>         
                                </select>
                            </li>
                            <li class="list-group-item col-md-4">
                                <label class="form-check-label" for="exampleCheck1">Flojo(a)</label>
                                <select class="form-control col-md-12" onChange={(value)=> this.setState({Flojo:value.target.value})}>
                                    <option value="No">No</option>  
                                    <option value=" Flojo(a),">Si</option>         
                                </select>
                            </li>
                        </ul>
                        <ul class="list-group list-group-horizontal">
                            <li class="list-group-item col-md-4">
                                <label class="form-check-label" for="exampleCheck1">Cuestiono todo</label>
                                <select class="form-control col-md-12" onChange={(value)=> this.setState({CuestionoTodo:value.target.value})}>
                                    <option value="No">No</option>  
                                    <option value=" Cuestiono todo,">Si</option>         
                                </select>
                            </li>
                            <li class="list-group-item col-md-4">
                                <label class="form-check-label" for="exampleCheck1">Me cuesta seguir indicaciones</label>
                                <select class="form-control col-md-12" onChange={(value)=> this.setState({MeCuestaSegui:value.target.value})}>
                                    <option value="No">No</option>  
                                    <option value=" Me cuesta seguir indicaciones,">Si</option>         
                                </select>
                            </li>
                            <li class="list-group-item col-md-4">
                                <label class="form-check-label" for="exampleCheck1">Curioso(a)</label>
                                <select class="form-control col-md-12" onChange={(value)=> this.setState({Curioso:value.target.value})}>
                                    <option value="No">No</option>  
                                    <option value=" Curioso(a),">Si</option>         
                                </select>
                            </li>
                        </ul>
                        <ul class="list-group list-group-horizontal">
                            <li class="list-group-item col-md-4">
                                <label class="form-check-label" for="exampleCheck1">Conservador(a)</label>
                                <select class="form-control col-md-12" onChange={(value)=> this.setState({Conservad:value.target.value})}>
                                    <option value="No">No</option>  
                                    <option value=" Conservador(a),">Si</option>         
                                </select>
                            </li>
                            <li class="list-group-item col-md-4">
                                <label class="form-check-label" for="exampleCheck1">Prefieres lo seguro</label>
                                <select class="form-control col-md-12" onChange={(value)=> this.setState({PrefieresSeguro:value.target.value})}>
                                    <option value="No">No</option>  
                                    <option value=" Prefieres lo seguro,">Si</option>         
                                </select>
                            </li>
                            <li class="list-group-item col-md-4">
                                <label class="form-check-label" for="exampleCheck1">Sigo indicaciones fácilmente</label>
                                <select class="form-control col-md-12" onChange={(value)=> this.setState({SigoIndicacione:value.target.value})}>
                                    <option value="No">No</option>  
                                    <option value=" Sigo indicaciones fácilmente,">Si</option>         
                                </select>
                            </li>
                        </ul>
                        <ul class="list-group list-group-horizontal">
                            <li class="list-group-item col-md-4">
                                <label class="form-check-label" for="exampleCheck1">Alegre</label>
                                <select class="form-control col-md-12" onChange={(value)=> this.setState({Alegre:value.target.value})}>
                                    <option value="No">No</option>  
                                    <option value=" Alegre,">Si</option>         
                                </select>
                            </li>
                            <li class="list-group-item col-md-4">
                                <label class="form-check-label" for="exampleCheck1">Autoritario(a)</label>
                                <select class="form-control col-md-12" onChange={(value)=> this.setState({Autoritario:value.target.value})}>
                                    <option value="No">No</option>  
                                    <option value=" Autoritario(a),">Si</option>         
                                </select>
                            </li>
                            <li class="list-group-item col-md-4">
                                <label class="form-check-label" for="exampleCheck1">Chistoso(a)</label>
                                <select class="form-control col-md-12" onChange={(value)=> this.setState({Chistoso:value.target.value})}>
                                    <option value="No">No</option>  
                                    <option value=" Chistoso(a),">Si</option>         
                                </select>
                            </li>
                        </ul>
                        <ul class="list-group list-group-horizontal">
                            <li class="list-group-item col-md-4">
                                <label class="form-check-label" for="exampleCheck1">Retraído(a)</label>
                                <select class="form-control col-md-12" onChange={(value)=> this.setState({Retraido:value.target.value})}>
                                    <option value="No">No</option>  
                                    <option value=" Retraído(a),">Si</option>         
                                </select>
                            </li>
                            <li class="list-group-item col-md-4">
                                <label class="form-check-label" for="exampleCheck1">Temeroso(a)</label>
                                <select class="form-control col-md-12" onChange={(value)=> this.setState({Temeroso:value.target.value})}>
                                    <option value="No">No</option>  
                                    <option value=" Temeroso(a),">Si</option>         
                                </select>
                            </li>
                            <li class="list-group-item col-md-4">
                                <label class="form-check-label" for="exampleCheck1">Inseguro(a)</label>
                                <select class="form-control col-md-12" onChange={(value)=> this.setState({Inseguro:value.target.value})}>
                                    <option value="No">No</option>  
                                    <option value=" Inseguro(a),">Si</option>         
                                </select>
                            </li>
                        </ul>
                        <ul class="list-group list-group-horizontal">
                            <li class="list-group-item col-md-4">
                                <label class="form-check-label" for="exampleCheck1">Impulsivo(a)</label>
                                <select class="form-control col-md-12" onChange={(value)=> this.setState({Impulsivo:value.target.value})}>
                                    <option value="No">No</option>  
                                    <option value=" Impulsivo(a),">Si</option>         
                                </select>
                            </li>
                            <li class="list-group-item col-md-4">
                                <label class="form-check-label" for="exampleCheck1">Preocupón(a)</label>
                                <select class="form-control col-md-12" onChange={(value)=> this.setState({Preocupon:value.target.value})}>
                                    <option value="No">No</option>  
                                    <option value=" Preocupón(a),">Si</option>         
                                </select>
                            </li>
                            <li class="list-group-item col-md-4">
                                <label class="form-check-label" for="exampleCheck1">Nervioso(a)</label>
                                <select class="form-control col-md-12" onChange={(value)=> this.setState({Nervioso:value.target.value})}>
                                    <option value="No">No</option>  
                                    <option value=" Nervioso(a),">Si</option>         
                                </select>
                            </li>
                        </ul>
                        <ul class="list-group list-group-horizontal">
                            <li class="list-group-item col-md-4">
                                <label class="form-check-label" for="exampleCheck1">Calmado(a)</label>
                                <select class="form-control col-md-12" onChange={(value)=> this.setState({Calmado:value.target.value})}>
                                    <option value="No">No</option>  
                                    <option value=" Calmado(a),">Si</option>         
                                </select>
                            </li>
                            <li class="list-group-item col-md-4">
                                <label class="form-check-label" for="exampleCheck1">Optimista</label>
                                <select class="form-control col-md-12">
                                    <option value="No">No</option>  
                                    <option value=" Calmado(a),">Si</option>         
                                </select>
                            </li>
                            <li class="list-group-item col-md-4">
                                <label class="form-check-label" for="exampleCheck1">Perseverante y tenaz</label>
                                <select class="form-control col-md-12" onChange={(value)=> this.setState({Persevera:value.target.value})}>
                                    <option value="No">No</option>  
                                    <option value=" Perseverante y tenaz,">Si</option>         
                                </select>
                            </li>
                        </ul>
                        <ul class="list-group list-group-horizontal">
                            <li class="list-group-item col-md-4">
                                <label class="form-check-label" for="exampleCheck1">Franco(a)</label>
                                <select class="form-control col-md-12" onChange={(value)=> this.setState({Franco:value.target.value})}>
                                    <option value="No">No</option>  
                                    <option value=" Franco(a),">Si</option>         
                                </select>
                            </li>
                            <li class="list-group-item col-md-4">
                                <label class="form-check-label" for="exampleCheck1">Altruista</label>
                                <select class="form-control col-md-12" onChange={(value)=> this.setState({Altruista:value.target.value})}>
                                    <option value="No">No</option>  
                                    <option value=" Altruista,">Si</option>         
                                </select>
                            </li>
                            <li class="list-group-item col-md-4">
                                <label class="form-check-label" for="exampleCheck1">Solidario(a) (Dato repetido)</label>
                                <select class="form-control col-md-12" onChange={(value)=> this.setState({Solidario:value.target.value})}>
                                    <option value="No">No</option>  
                                    <option value=" Solidario(a),">Si</option>         
                                </select>
                            </li>
                        </ul>
                        <ul class="list-group list-group-horizontal">
                            <li class="list-group-item col-md-4">
                                <label class="form-check-label" for="exampleCheck1">Competitivo(a)</label>
                                <select class="form-control col-md-12" onChange={(value)=> this.setState({Competitivo:value.target.value})}>
                                    <option value="No">No</option>  
                                    <option value=" Competitivo(a),">Si</option>         
                                </select>
                            </li>
                            <li class="list-group-item col-md-4">
                                <label class="form-check-label" for="exampleCheck1">Indiferente</label>
                                <select class="form-control col-md-12" onChange={(value)=> this.setState({Indiferente:value.target.value})}>
                                    <option value="No">No</option>  
                                    <option value=" Indiferente,">Si</option>         
                                </select>
                            </li>
                            <li class="list-group-item col-md-4">
                                <label class="form-check-label" for="exampleCheck1">Orgulloso</label>
                                <select class="form-control col-md-12" onChange={(value)=> this.setState({Orgulloso:value.target.value})}>
                                    <option value="No">No</option>  
                                    <option value=" Orgulloso,">Si</option>         
                                </select>
                            </li>
                        </ul>
                        <ul class="list-group list-group-horizontal">
                            <li class="list-group-item col-md-4">
                                <label class="form-check-label" for="exampleCheck1">Ambicioso(a)</label>
                                <select class="form-control col-md-12" onChange={(value)=> this.setState({Ambicioso:value.target.value})}>
                                    <option value="No">No</option>  
                                    <option value=" Ambicioso(a),">Si</option>         
                                </select>
                            </li>
                            <li class="list-group-item col-md-4">
                                <label class="form-check-label" for="exampleCheck1">Cuadrado(a)</label>
                                <select class="form-control col-md-12" onChange={(value)=> this.setState({Cuadrado:value.target.value})}>
                                    <option value="No">No</option>  
                                    <option value=" Cuadrado(a),">Si</option>         
                                </select>
                            </li>
                            <li class="list-group-item col-md-4">
                                <label class="form-check-label" for="exampleCheck1">Escrupuloso</label>
                                <select class="form-control col-md-12" onChange={(value)=> this.setState({Escrupuloso:value.target.value})}>
                                    <option value="No">No</option>  
                                    <option value=" Escrupuloso,">Si</option>         
                                </select>
                            </li>
                        </ul>
                        <ul class="list-group list-group-horizontal">
                            <li class="list-group-item col-md-4">
                                <label class="form-check-label" for="exampleCheck1">Espontáneo(a)</label>
                                <select class="form-control col-md-12" onChange={(value)=> this.setState({Espontaneo:value.target.value})}>
                                    <option value="No">No</option>  
                                    <option value=" Escrupuloso,">Si</option>         
                                </select>
                            </li>
                            <li class="list-group-item col-md-4">
                                <label class="form-check-label" for="exampleCheck1">Desinhibido(a)</label>
                                <select class="form-control col-md-12" onChange={(value)=> this.setState({Desinhibido:value.target.value})}>
                                    <option value="No">No</option>  
                                    <option value=" Desinhibido(a),">Si</option>         
                                </select>
                            </li>
                            <li class="list-group-item col-md-4">
                                <label class="form-check-label" for="exampleCheck1">Poca fuerza de voluntad</label>
                                <select class="form-control col-md-12" onChange={(value)=> this.setState({PocaFuerzaVoluntad:value.target.value})}>
                                    <option value="No">No</option>  
                                    <option value=" Poca fuerza de voluntad,">Si</option>         
                                </select>
                            </li>
                        </ul>
                        <ul class="list-group list-group-horizontal">
                            <li class="list-group-item col-md-4">
                                <label class="form-check-label" for="exampleCheck1">Crítico(a)</label>
                                <select class="form-control col-md-12" onChange={(value)=> this.setState({Critico:value.target.value})}>
                                    <option value="No">No</option>  
                                    <option value=" Crítico(a),">Si</option>         
                                </select>
                            </li>
                            <li class="list-group-item col-md-4">
                                <label class="form-check-label" for="exampleCheck1">Imaginativo(a)</label>
                                <select class="form-control col-md-12" onChange={(value)=> this.setState({Imaginativo:value.target.value})}>
                                    <option value="No">No</option>  
                                    <option value=" Imaginativo(a),">Si</option>         
                                </select>
                            </li>
                            <li class="list-group-item col-md-4">
                                <label class="form-check-label" for="exampleCheck1">Independiente</label>
                                <select class="form-control col-md-12" onChange={(value)=> this.setState({Independiente:value.target.value})}>
                                    <option value="No">No</option>  
                                    <option value=" Independiente,">Si</option>         
                                </select>
                            </li>
                        </ul>
                        <ul class="list-group list-group-horizontal">
                            <li class="list-group-item col-md-4">
                                <label class="form-check-label" for="exampleCheck1">Tradicionalista</label>
                                <select class="form-control col-md-12" onChange={(value)=> this.setState({Tradicionalista:value.target.value})}>
                                    <option value="No">No</option>  
                                    <option value=" Tradicionalista,">Si</option>         
                                </select>
                            </li>
                            <li class="list-group-item col-md-4">
                                <label class="form-check-label" for="exampleCheck1">Poco creativo(a)</label>
                                <select class="form-control col-md-12" onChange={(value)=> this.setState({PocoCreativo:value.target.value})}>
                                    <option value="No">No</option>  
                                    <option value=" Poco creativo(a),">Si</option>         
                                </select>
                            </li>
                            <li class="list-group-item col-md-4">
                                <label class="form-check-label" for="exampleCheck1">No me gusta que me manden</label>
                                <select class="form-control col-md-12" onChange={(value)=> this.setState({NomeGustaMeManden:value.target.value})}>
                                    <option value="No">No</option>  
                                    <option value=" No me gusta que me manden">Si</option>         
                                </select>
                            </li>
                        </ul>
                        <br></br><br></br><br></br>
                        <div class="col text-center">
                            <input type="button" class="btn btn-warning" value="Atrás" onClick={() => this.atrasRasgos()}/>
                            <input type="button" class="btn btn-primary offset-md-1" onClick={() => this.rasgos()} value="Siguiente" />
                        </div>
                        <br></br><br></br><br></br>
                    </div>
                    <div className="ocultar" id="salud">
                        <br></br>
                        <h5 class="card-title">SALUD</h5>
                        <br></br>
                        <div class="form-row">
                            <div class="form-group col-md-5">
                                <h5>¿Cómo consideras en general que es tu salud?</h5>
                                <select class="form-control" onChange={(value) => this.setState({campoSaludAlumno:value.target.value})}>
                                    <option selected="true" disabled="disabled">seleccione una opción</option>  
                                    <option value="Muy buena">Muy buena</option>
                                    <option value="Buena">Buena</option>  
                                    <option value="Regular">Regular</option>
                                    <option value="Mala">Mala</option>
                                </select>
                            </div>
                            <div class="form-group col-md-4">
                                <h5>¿Has tenido alguna enfermedad grave?</h5>
                                <select class="form-control" onChange={(value) => this.setState({campoEnfermeAlumno:value.target.value})}>
                                    <option selected="true" disabled="disabled">seleccione una opción</option>  
                                    <option value="No">No</option>
                                    <option value="Si">Si</option>  
                                </select>
                            </div>
                            <div class="form-group col-md-3">
                                <h5>¿De qué tipo?</h5>
                                <input type="text" class="form-control" onChange={(value) => this.setState({campoTipoEnferme:value.target.value})}/>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <h5>¿Tienes algún padecimiento o enfermedad crónica?</h5>
                                <select class="form-control" onChange={(value) => this.setState({campoPadeciEnferme:value.target.value})}>
                                    <option selected="true" disabled="disabled">seleccione una opción</option>  
                                    <option value="No">No</option>
                                    <option value="Si">Si</option>  
                                </select>
                            </div>
                            <div class="form-group col-md-3">
                                <h5>¿Cuál?</h5>
                                <input type="text" class="form-control" onChange={(value) => this.setState({campoCualPadeEnfer:value.target.value})}/>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-4">
                                <h5>¿Te han operado alguna vez?</h5>
                                <select class="form-control" onChange={(value) => this.setState({campoOperadoAlumno:value.target.value})}>
                                    <option selected="true" disabled="disabled">seleccione una opción</option>  
                                    <option value="No">No</option>
                                    <option value="Si">Si</option>  
                                </select>
                            </div>
                            <div class="form-group col-md-4">
                                <h5>¿Cuál fue la causa?</h5>
                                <input type="text" class="form-control" onChange={(value) => this.setState({campoCausaOperado:value.target.value})}/>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-8">
                                <h5>¿Padeces algún problema de salud que consideres pueda afectar tus estudios? Menciónalo</h5>
                                <input type="text" class="form-control" onChange={(value) => this.setState({campoProblemaSalud:value.target.value})}/>
                            </div>
                        </div>
    
                        <div class="form-row">
                            <div class="form-group col-md-8">
                                <h5>¿Tienes alguna condición que afecte tu visión, audición, motricidad?</h5>
                                <select class="form-control" onChange={(value) => this.setState({campoProblemaFisi:value.target.value})}>
                                    <option selected="true" disabled="disabled">seleccione una opción</option>  
                                    <option value="No">No</option>
                                    <option value="Si">Si</option>  
                                </select>
                            </div>
                            <div class="form-group col-md-4">
                                <h5>¿Cuál?</h5>
                                <input type="text" class="form-control" onChange={(value) => this.setState({campoTipoProblema:value.target.value})}/>
                            </div>
                        </div>
                        <br></br>
                        <div class="form-row">
                            <h5 class="card-title text-center">Si tuvieras algún comentario o algo más que agregar, te pedimos que lo hagas en el siguiente espacio</h5>
                            <div class="input-group">
                                <textarea class="form-control" aria-label="With textarea" onChange={(value) => this.setState({campoSugerencia:value.target.value})}></textarea>
                            </div>
                        </div>
                        <br></br>
                        <div class="row">
                            <div class="col text-center">
                                <input type="button" class="btn btn-warning" value="Atrás" onClick={() => this.salud()} />
                                <input type="button" class="btn btn-primary offset-md-1" value="Enviar" onClick={() => this.Enviar()} />
                            <br></br><br></br>
                            <h5 class="card-title">¡Muchas gracias!</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <Foolder />
            </div>
        );
    }//Función para eviar la respuesta de la entrevista inicial del alumno a la api
    Enviar(){
        const Url = "http://localhost:3000/apis/entrevistaIni";
        if(this.state.Platicador === "No"){
            this.state.Platicador = "";
        }else if(this.state.Optimista === "No"){
            this.state.Optimista = "";
        }else if(this.state.Amiguero === "No"){
            this.state.Amiguero = "";
        }else if(this.state.Timido === "No"){
            this.state.Timido = "";
        }else if(this.state.Solitario === "No"){
            this.state.Solitario = "";
        }else if(this.state.Ansioso === "No"){
            this.state.Ansioso = "";
        }else if(this.state.Enojon === "No"){
            this.state.Enojon = "";
        }else if(this.state.ExplotFacime === "No"){
            this.state.ExplotFacime = "";
        }else if(this.state.Pesimista === "No"){
            this.state.Pesimista = "";
        }else if(this.state.Seguro === "No"){
            this.state.Seguro = "";
        }else if(this.state.PiensAntesActu === "No"){
            this.state.PiensAntesActu = "";
        }else if(this.state.EnfrentoProble === "No"){
            this.state.EnfrentoProble = "";
        }else if(this.state.Servicial === "No"){
            this.state.Servicial = "";
        }else if(this.state.PiensasDe === "No"){
            this.state.PiensasDe = "";
        }else if(this.state.Generoso === "No"){
            this.state.Generoso = "";
        }else if(this.state.Egocentrico === "No"){
            this.state.Egocentrico = "";
        }else if(this.state.Antisocial === "No"){
            this.state.Antisocial = "";
        }else if(this.state.Insensible === "No"){
            this.state.Insensible = "";
        }else if(this.state.Planificador === "No"){
            this.state.Planificador = "";
        }else if(this.state.Puntual === "No"){
            this.state.Puntual = "";
        }else if(this.state.PocoEspontaneo === "No"){
            this.state.PocoEspontaneo = "";
        }else if(this.state.Despreocupado === "No"){
            this.state.Despreocupado = "";
        }else if(this.state.Aventado === "No"){
            this.state.Aventado = "";
        }else if(this.state.Flojo === "No"){
            this.state.Flojo = "";
        }else if(this.state.CuestionoTodo === "No"){
            this.state.CuestionoTodo = "";
        }else if(this.state.MeCuestaSegui === "No"){
            this.state.MeCuestaSegui = "";
        }else if(this.state.Curioso === "No"){
            this.state.Curioso = "";
        }else if(this.state.Conservad === "No"){
            this.state.Conservad = "";
        }else if(this.state.PrefieresSeguro === "No"){
            this.state.PrefieresSeguro = "";
        }else if(this.state.SigoIndicacione === "No"){
            this.state.SigoIndicacione = "";
        }else if(this.state.Alegre === "No"){
            this.state.Alegre = "";
        }else if(this.state.Autoritario === "No"){
            this.state.Autoritario = "";
        }else if(this.state.Chistoso === "No"){
            this.state.Chistoso = "";
        }else if(this.state.Retraido === "No"){
            this.state.Retraido = "";
        }else if(this.state.Temeroso === "No"){
            this.state.Temeroso = "";
        }else if(this.state.Inseguro === "No"){
            this.state.Inseguro = "";
        }else if(this.state.Impulsivo === "No"){
            this.state.Impulsivo = "";
        }else if(this.state.Preocupon === "No"){
            this.state.Preocupon = "";
        }else if(this.state.Nervioso === "No"){
            this.state.Nervioso = "";
        }else if(this.state.Calmado === "No"){
            this.state.Calmado = "";
        }else if(this.state.Persevera === "No"){
            this.state.Persevera = "";
        }else if(this.state.Franco === "No"){
            this.state.Franco = "";
        }else if(this.state.Altruista === "No"){
            this.state.Altruista = "";
        }else if(this.state.Solidario === "No"){
            this.state.Solidario = "";
        }else if(this.state.Competitivo === "No"){
            this.state.Competitivo = "";
        }else if(this.state.Indiferente === "No"){
            this.state.Indiferente = "";
        }else if(this.state.Orgulloso === "No"){
            this.state.Orgulloso = "";
        }else if(this.state.Ambicioso === "No"){
            this.state.Ambicioso = "";
        }else if(this.state.Cuadrado === "No"){
            this.state.Cuadrado = "";
        }else if(this.state.Escrupuloso === "No"){
            this.state.Escrupuloso = "";
        }else if(this.state.Espontaneo === "No"){
            this.state.Espontaneo = "";
        }else if(this.state.Desinhibido === "No"){
            this.state.Desinhibido = "";
        }else if(this.state.PocaFuerzaVoluntad === "No"){
            this.state.PocaFuerzaVoluntad = "";
        }else if(this.state.Critico === "No"){
            this.state.Critico = "";
        }else if(this.state.Imaginativo === "No"){
            this.state.Imaginativo = "";
        }else if(this.state.Independiente === "No"){
            this.state.Independiente = "";
        }else if(this.state.Tradicionalista === "No"){
            this.state.Tradicionalista = "";
        }else if(this.state.PocoCreativo === "No"){
            this.state.PocoCreativo = "";
        }else if(this.state.NomeGustaMeManden === "No"){
            this.state.NomeGustaMeManden = "";
        }else{
            var jsonEntrIni = this.state.Platicador+this.state.Optimista+this.state.Amiguero+this.state.Timido+this.state.Solitario+
                            this.state.Ansioso+this.state.Enojon+this.state.ExplotFacime+this.state.Pesimista+this.state.Seguro+
                            this.state.PiensAntesActu+this.state.EnfrentoProble+this.state.Servicial+this.state.PiensasDe+
                            this.state.Generoso+this.state.Egocentrico+this.state.Antisocial+this.state.Insensible+
                            this.state.Planificador+this.state.Puntual+this.state.PocoEspontaneo+this.state.Despreocupado+
                            this.state.Aventado+this.state.Flojo+this.state.CuestionoTodo+this.state.MeCuestaSegui+
                            this.state.Curioso+this.state.Conservad+this.state.PrefieresSeguro+this.state.SigoIndicacione+
                            this.state.Alegre+this.state.Autoritario+this.state.Chistoso+this.state.Retraido+this.state.Temeroso+
                            this.state.Inseguro+this.state.Impulsivo+this.state.Preocupon+this.state.Nervioso+this.state.Calmado+
                            this.state.Franco+this.state.Altruista+this.state.Solidario+this.state.Competitivo+
                            this.state.Indiferente+this.state.Orgulloso+this.state.Ambicioso+this.state.Cuadrado+this.state.Escrupuloso+
                            this.state.Espontaneo+this.state.Desinhibido+this.state.PocaFuerzaVoluntad+this.state.Critico+
                            this.state.Imaginativo+this.state.Independiente+this.state.Tradicionalista+this.state.PocoCreativo+
                            this.state.NomeGustaMeManden;
            const datos = {
                edadDatos: this.state.campoEdadDatos, 
                telCasa: this.state.campoTelCasa, 
                celDatos: this.state.campoCelDatos,
                correo:this.state.campoCorreo,
                idAlumnos2: this.props.match.params.id, 
                vivienda: this.state.campoVivienda, 
                descripSi: this.state.campoDescripSi, 
                huerfano: this.state.campoHuerfano, 
                descripHu: this.state.campoDescripHu, 
                estadoCivil: this.state.campoEstadoCivil, 
                numHermano: this.state.campoNumHermano, 
                lugarOcupa: this.state.campoLugarOcupa, 
                idAlumnos3: this.props.match.params.id, 
                tipoVivi: this.state.campoTipoVivi, 
                tenenciaVivi: this.state.campoTenenciaVivi, 
                cuentaCon: this.state.campoCuentaCon, 
                numHabitaciones: this.state.campoNumHabitaciones, 
                numVehiculos: this.state.campoNumVehiculos, 
                manutencion: this.state.campoManutencion, 
                trabajoPapa: this.state.campoTrabajoPapa, 
                descripTrabajoP: this.state.campoDescripTrabajoP, 
                trabajoMama: this.state.campoTrabajoMama, 
                descripTrabajoM: this.state.campoDescripTrabajoM, 
                ingresoFamil: this.state.campoIngresoFamil, 
                numPersContri: this.state.campoNumPersContri, 
                numPersDependen: this.state.campoNumPersDependen, 
                trabajo: this.state.campoTrabajo, 
                relacionTrabajo: this.state.campoRelacionTrabajo, 
                idAlumnos4: this.props.match.params.id, 
                bachillProce: this.state.campoBachillProce, 
                modalidad: this.state.campoModalidad, 
                anos: this.state.campoAnos, 
                promedioObten: this.state.campoPromedioObten, 
                rendiEscolar: this.state.campoRendiEscolar, 
                materiaFacil: this.state.campoMateriaFacil, 
                materiaTrabajo: this.state.campoMateriaTrabajo, 
                materiaExtra: this.state.campoMateriaExtra,
                cualMaterExt: this.state.campoCualMaterExt,
                repetiAnoAnter: this.state.campoRepetiAnoAnter, 
                nivel: this.state.campoNivel,
                obstaculos: this.state.campoObstaculos, 
                idAlumnos5: this.props.match.params.id, 
                lee: this.state.campoLee, 
                tipoLectu: this.state.campoTipoLectu, 
                lugarEstud: this.state.campoLugarEstud, 
                descripEstud: this.state.campoDescripEstud, 
                horasEstudi: this.state.campoHorasEstudi, 
                horarioEstud: this.state.campoHorarioEstud, 
                musicaEstud: this.state.campoMusicaEstud,
                idAlumnos6: this.props.match.params.id, 
                tiempoLibre: this.state.campoTiempoLibre, 
                tiempoAfici: this.state.campoTiempoAfici, 
                idAlumnos7: this.props.match.params.id, 
                tareaHogar: this.state.campoTareaHogar, 
                medida: this.state.campoMedida, 
                integradoFamili: this.state.campoIntegradoFamili, 
                aspectoPreocupa: this.state.campoAspectoPreocupa, 
                comunicarCasa: this.state.campoComunicarCasa, 
                idAlumnos8: this.props.match.params.id,
                rasgos: jsonEntrIni,
                idAlumnos9: this.props.match.params.id, 
                saludAlumno: this.state.campoSaludAlumno, 
                enfermeAlumno: this.state.campoEnfermeAlumno, 
                tipoEnferme: this.state.campoTipoEnferme, 
                padeciEnferme: this.state.campoPadeciEnferme,
                cualPadeEnfer: this.state.campoCualPadeEnfer,
                operadoAlumno: this.state.campoOperadoAlumno, 
                causaOperado: this.state.campoCausaOperado,
                problemaSalud: this.state.campoProblemaSalud, 
                problemaFisi: this.state.campoProblemaFisi, 
                tipoProblema: this.state.campoTipoProblema, 
                idAlumnos10: this.props.match.params.id, 
                sugerencia: this.state.campoSugerencia, 
                idAlumnos11: this.props.match.params.id,
                estado: this.props.match.params.id
            }
            if(this.state.campoSaludAlumno === "" || this.state.campoSaludAlumno === undefined){
                Swal.fire(
                    'Error',
                    'El campo (¿Cómo consideras en general que es tu salud?) no puede estar vacío',
                    'error'
                );
            }else if(this.state.campoEnfermeAlumno === "" || this.state.campoEnfermeAlumno === undefined){
                Swal.fire(
                    'Error',
                    'El campo (¿Has tenido alguna enfermedad grave?) no puede estar vacío',
                    'error'
                );
            }else if(this.state.campoPadeciEnferme === "" || this.state.campoPadeciEnferme === undefined){
                Swal.fire(
                    'Error',
                    'El campo (¿Tienes algún padecimiento o enfermedad crónica?) no puede estar vacío',
                    'error'
                );
            }else if(this.state.campoOperadoAlumno === "" || this.state.campoOperadoAlumno === undefined){
                Swal.fire(
                    'Error',
                    'El campo (¿Te han operado alguna vez?) no puede estar vacío',
                    'error'
                );
            }else if(this.state.campoProblemaFisi === "" || this.state.campoProblemaFisi === undefined){
                Swal.fire(
                    'Error',
                    'El campo (¿Tienes alguna condición que afecte tu visión, audición, motricidad?) no puede estar vacío',
                    'error'
                );
            }else{  
                Swal.fire({
                    icon: 'question',
                    title:'Enviar',
                    text:'Deseas registrar tu respuesta',
                    showCancelButton:true,
                    confirmButtonText:'Enviar',
                    confirmButtonColor:'#1D98CB',
                    cancelButtonText:'Cancelar',
                    cancelButtonColor:'#d33'
                })
                .then((result)=>{
                    if(result.value){
                        Swal.fire({
                            icon: 'success',
                            title:'Listo',
                            text:'Tu respuesta se a registrado',
                            confirmButtonText:'Ok',
                            confirmButtonColor: '#1D98CB'
                        })
                        .then((result)=>{
                            if(result.value){
                                axios.post(Url, datos);
                                window.location.replace("/HomeA/"+this.props.match.params.id);
                            }
                        });
                    }
                });
            }
        }
    }//Función para desocultar los campos de datos familiares y ocultar los demás
    identifi(){
        if(this.state.campoEdadDatos === 0){
            Swal.fire(
                'Error',
                'El campo Edad no puede estar vacío',
                'error'
            );
        }else if(this.state.campoEdadDatos <= 0){
            Swal.fire(
                'Error',
                'El valor del campo Edad deve ser mayor a 0',
                'error'
            );
        }else{
            document.getElementById("identifi").style.display = 'none';
            document.getElementById("familiares").style.display = 'block';
            document.getElementById("sociecomo").style.display = 'none';
            document.getElementById("antecede_acade").style.display = 'none';
            document.getElementById("habitos_estudio").style.display = 'none';
            document.getElementById("aficiones").style.display = 'none';
            document.getElementById("personalidad").style.display = 'none';
            document.getElementById("rasgos").style.display = 'none';
            document.getElementById("salud").style.display = 'none';
            scroll.scrollToTop();
        }
    }//Función para desocultar los campos de socieconomicos y ocultar los demás
    familiares(){
        if(this.state.campoVivienda === ""){
            Swal.fire(
                'Error',
                'La pregunta ¿Con quién vives? no puede estar vacío',
                'error'
            );
        }else if(this.state.campoHuerfano ===""){
            Swal.fire(
                'Error',
                'La pregunta ¿Eres huérfano? no puede estar vacío',
                'error'
            );
        }else if(this.state.campoNumHermano <= 0){
            Swal.fire(
                'Error',
                'El valor del campo Número de hermanos(as) deve ser mayor a 0',
                'error'
            );
        }else if(this.state.campoLugarOcupa <= 0){
            Swal.fire(
                'Error',
                'El valor del campo Lugar que ocupas deve ser mayor a 0',
                'error'
            );
        }else if(this.state.campoEstadoCivil === "" || this.state.campoEstadoCivil === undefined){
            Swal.fire(
                'Error',
                'El campo (Edo civil) no puede estar vacío',
                'error'
            );
        }else{
            document.getElementById("identifi").style.display = 'none';
            document.getElementById("familiares").style.display = 'none';
            document.getElementById("sociecomo").style.display = 'block';
            document.getElementById("antecede_acade").style.display = 'none';
            document.getElementById("habitos_estudio").style.display = 'none';
            document.getElementById("aficiones").style.display = 'none';
            document.getElementById("personalidad").style.display = 'none';
            document.getElementById("rasgos").style.display = 'none';
            document.getElementById("salud").style.display = 'none';
            scroll.scrollToTop();
        }
    }//Función para desocultar los campos de identificación y ocultar los demás
    atrasFamiliares(){
        document.getElementById("identifi").style.display = 'block';
        document.getElementById("familiares").style.display = 'none';
        document.getElementById("sociecomo").style.display = 'none';
        document.getElementById("antecede_acade").style.display = 'none';
        document.getElementById("habitos_estudio").style.display = 'none';
        document.getElementById("aficiones").style.display = 'none';
        document.getElementById("personalidad").style.display = 'none';
        document.getElementById("rasgos").style.display = 'none';
        document.getElementById("salud").style.display = 'none';
    }//Función para desocultar los campos de antecedentes hacademicos y ocultar los demás
    sociecomo(){
        if(this.state.campoTipoVivi === ""){
            Swal.fire(
                'Error',
                'El campo (Tipo de vivienda) no puede estar vacío',
                'error'
            );
        }else if(this.state.campoTenenciaVivi === "" || this.state.campoTenenciaVivi === undefined){
            Swal.fire(
                'Error',
                'El campo (Tenencia de la vivienda) no puede estar vacío',
                'error'
            );
        }else if(this.state.campoCuentaCon === "" ){
            Swal.fire(
                'Error',
                'El campo (Cuenta con) no puede estar vacío',
                'error'
            );
        }else if(this.state.campoTrabajoPapa === "" || this.state.campoTrabajoPapa === undefined){
            Swal.fire(
                'Error',
                'El campo (Trabajo del papá) no puede estar vacío',
                'error'
            );
        }else if(this.state.campoTrabajoMama === "" || this.state.campoTrabajoMama === undefined){
            Swal.fire(
                'Error',
                'El campo (Trabajo de la mamá) no puede estar vacío',
                'error'
            );
        }else if(this.state.campoIngresoFamil <= 0){
            Swal.fire(
                'Error',
                'El valor del campo (Ingresos familiares) deve ser mayor a 0',
                'error'
            );
        }else if(this.state.campoNumPersContri <= 0){
            Swal.fire(
                'Error',
                'El valor del campo (Número de personas que contribuyen a esos ingresos) deve ser mayor a 0',
                'error'
            );
        }else if(this.state.campoNumPersDependen <= 0){
            Swal.fire(
                'Error',
                'El valor del campo (Número de personas que dependen de esos ingresos) deve ser mayor a 0',
                'error'
            );
        }else if(this.state.campoTrabajo === "" || this.state.campoTrabajo === undefined){
            Swal.fire(
                'Error',
                'El campo (¿Trabajas?) no puede estar vacío',
                'error'
            );
        }else{   
            document.getElementById("identifi").style.display = 'none';
            document.getElementById("familiares").style.display = 'none';
            document.getElementById("sociecomo").style.display = 'none';
            document.getElementById("antecede_acade").style.display = 'block';
            document.getElementById("habitos_estudio").style.display = 'none';
            document.getElementById("aficiones").style.display = 'none';
            document.getElementById("personalidad").style.display = 'none';
            document.getElementById("rasgos").style.display = 'none';
            document.getElementById("salud").style.display = 'none';
            scroll.scrollToTop();
        }
    }//Función para desocultar los campos de datos familiares y ocultar los demás
    atrasSociecomo(){
        document.getElementById("identifi").style.display = 'none';
        document.getElementById("familiares").style.display = 'block';
        document.getElementById("sociecomo").style.display = 'none';
        document.getElementById("antecede_acade").style.display = 'none';
        document.getElementById("habitos_estudio").style.display = 'none';
        document.getElementById("aficiones").style.display = 'none';
        document.getElementById("personalidad").style.display = 'none';
        document.getElementById("rasgos").style.display = 'none';
        document.getElementById("salud").style.display = 'none';
        scroll.scrollToTop();
    }//Función para desocultar los campos de hambitos de estudio y ocultar los demás
    antecede_acade(){
        if(this.state.campoBachillProce === ""){
            Swal.fire(
                'Error',
                'El campo (Bachillerato de procedencia) no puede estar vacío',
                'error'
            );
        }else if(this.state.campoModalidad === "" || this.state.campoModalidad === undefined){
            Swal.fire(
                'Error',
                'El campo (Modalidad) no puede estar vacío',
                'error'
            );
        }else if(this.state.campoAnos === "" || this.state.campoAnos === undefined){
            Swal.fire(
                'Error',
                'El campo (Duración en años para terminarlo) no puede estar vacío',
                'error'
            );
        }else if(this.state.campoPromedioObten === "" || this.state.campoPromedioObten === undefined){
            Swal.fire(
                'Error',
                'El campo (Promedio obtenido) no puede estar vacío',
                'error'
            );
        }else if(this.state.campoRendiEscolar === "" || this.state.campoRendiEscolar === undefined){
            Swal.fire(
                'Error',
                'El campo (¿Cómo consideras tu rendimiento escolar?) no puede estar vacío',
                'error'
            );
        }else if(this.state.campoMateriaFacil === ""){
            Swal.fire(
                'Error',
                'El campo (¿Qué materias consideras que se te facilitan más?) no puede estar vacío',
                'error'
            );
        }else if(this.state.campoMateriaTrabajo === ""){
            Swal.fire(
                'Error',
                'El campo (¿Qué materias consideras que te cuestan más trabajo?) no puede estar vacío',
                'error'
            );
        }else if(this.state.campoMateriaExtra === ""){
            Swal.fire(
                'Error',
                'El campo (¿Cuántas materias acreditaste en extraordinario?) no puede estar vacío',
                'error'
            );
        }else if(this.state.campoRepetiAnoAnter === "" || this.state.campoRepetiAnoAnter === undefined){
            Swal.fire(
                'Error',
                'El campo (¿Repetiste algún año o grado en niveles anteriores?) no puede estar vacío',
                'error'
            );
        }else if(this.state.campoObstaculos === ""){
            Swal.fire(
                'Error',
                'El campo (¿Cuáles consideras tus principales obstáculos para encarar los estudios?) no puede estar vacío',
                'error'
            );
        }else{
            document.getElementById("identifi").style.display = 'none';
            document.getElementById("familiares").style.display = 'none';
            document.getElementById("sociecomo").style.display = 'none';
            document.getElementById("antecede_acade").style.display = 'none';
            document.getElementById("habitos_estudio").style.display = 'block';
            document.getElementById("aficiones").style.display = 'none';
            document.getElementById("personalidad").style.display = 'none';
            document.getElementById("rasgos").style.display = 'none';
            document.getElementById("salud").style.display = 'none';
            scroll.scrollToTop();
        }
    }//Función para desocultar los campos de datos socieconomicosy ocultar los demás
    atrasAntecede_acade(){
        document.getElementById("identifi").style.display = 'none';
        document.getElementById("familiares").style.display = 'none';
        document.getElementById("sociecomo").style.display = 'block';
        document.getElementById("antecede_acade").style.display = 'none';
        document.getElementById("habitos_estudio").style.display = 'none';
        document.getElementById("aficiones").style.display = 'none';
        document.getElementById("personalidad").style.display = 'none';
        document.getElementById("rasgos").style.display = 'none';
        document.getElementById("salud").style.display = 'none';
        scroll.scrollToTop();
    }//Función para desocultar los campos de aficiones y ocultar los demás
    habitos_estudio(){
        if(this.state.campoLee === "" || this.state.campoLee === undefined){
            Swal.fire(
                'Error',
                'El campo (¿Te gusta leer?) no puede estar vacío',
                'error'
            );
        }else if(this.state.campoLugarEstud === "" || this.state.campoLugarEstud === undefined){
            Swal.fire(
                'Error',
                'El campo (¿Tienes un lugar especial para estudiar en tu casa?) no puede estar vacío',
                'error'
            );
        }else if(this.state.campoHorasEstudi === ""){
            Swal.fire(
                'Error',
                'El campo (¿Cuántas horas diarias dedicas usualmente al estudio?) no puede estar vacío',
                'error'
            );
        }else if(this.state.campoHorarioEstud === "" || this.state.campoHorarioEstud === undefined){
            Swal.fire(
                'Error',
                'El campo (¿Tienes un horario fijo para estudiar?) no puede estar vacío',
                'error'
            );
        }else if(this.state.campoMusicaEstud === "" || this.state.campoMusicaEstud === undefined){
            Swal.fire(
                'Error',
                'El campo (¿Oyes música cuando estudias?) no puede estar vacío',
                'error'
            );
        }else{
            document.getElementById("identifi").style.display = 'none';
            document.getElementById("familiares").style.display = 'none';
            document.getElementById("sociecomo").style.display = 'none';
            document.getElementById("antecede_acade").style.display = 'none';
            document.getElementById("habitos_estudio").style.display = 'none';
            document.getElementById("aficiones").style.display = 'block';
            document.getElementById("personalidad").style.display = 'none';
            document.getElementById("rasgos").style.display = 'none';
            document.getElementById("salud").style.display = 'none';
            scroll.scrollToTop();
        }
    }//Función para desocultar los campos de antecedentes academicos y ocultar los demás
    AtrasHabitos_estudio(){
        document.getElementById("identifi").style.display = 'none';
        document.getElementById("familiares").style.display = 'none';
        document.getElementById("sociecomo").style.display = 'none';
        document.getElementById("antecede_acade").style.display = 'block';
        document.getElementById("habitos_estudio").style.display = 'none';
        document.getElementById("aficiones").style.display = 'none';
        document.getElementById("personalidad").style.display = 'none';
        document.getElementById("rasgos").style.display = 'none';
        document.getElementById("salud").style.display = 'none';
        scroll.scrollToTop();
    }//Función para desocultar los campos de pesonalidad y ocultar los demás
    aficiones(){
        if(this.state.campoTiempoLibre === "" || this.state.campoTiempoLibre === undefined){
            Swal.fire(
                'Error',
                'El campo (¿En qué sueles emplear tu tiempo libre mayoritariamente?) no puede estar vacío',
                'error'
            );
        }else if(this.state.campoTiempoAfici === "" || this.state.campoTiempoAfici === undefined){
            Swal.fire(
                'Error',
                'El campo (¿Cuánto tiempo diario dedicas a esa afición?) no puede estar vacío',
                'error'
            );
        }else{
            document.getElementById("identifi").style.display = 'none';
            document.getElementById("familiares").style.display = 'none';
            document.getElementById("sociecomo").style.display = 'none';
            document.getElementById("antecede_acade").style.display = 'none';
            document.getElementById("habitos_estudio").style.display = 'none';
            document.getElementById("aficiones").style.display = 'none';
            document.getElementById("personalidad").style.display = 'block';
            document.getElementById("rasgos").style.display = 'none';
            document.getElementById("salud").style.display = 'none';
            scroll.scrollToTop();
        }
    }//Función para desocultar los campos de hambitos de estudio y ocultar los demás
    AtrasAficiones(){
        document.getElementById("identifi").style.display = 'none';
        document.getElementById("familiares").style.display = 'none';
        document.getElementById("sociecomo").style.display = 'none';
        document.getElementById("antecede_acade").style.display = 'none';
        document.getElementById("habitos_estudio").style.display = 'block';
        document.getElementById("aficiones").style.display = 'none';
        document.getElementById("personalidad").style.display = 'none';
        document.getElementById("rasgos").style.display = 'none';
        document.getElementById("salud").style.display = 'none';
        scroll.scrollToTop();
    }
    personalidad(){
        if(this.state.campoTareaHogar === "" || this.state.campoTareaHogar === undefined){
            Swal.fire(
                'Error',
                'El campo (¿Colaboras en casa con las tareas del hogar?) no puede estar vacío',
                'error'
            );
        }else if(this.state.campoIntegradoFamili === "" || this.state.campoIntegradoFamili === undefined){
            Swal.fire(
                'Error',
                'El campo (¿Qué tan integrado(a) consideras que estás a tu ambiente familiar?) no puede estar vacío',
                'error'
            );
        }else if(this.state.campoAspectoPreocupa === "" || this.state.campoAspectoPreocupa === undefined){
            Swal.fire(
                'Error',
                'El campo (¿Hablas con familiares sobre aspectos que te interesan o preocupan?) no puede estar vacío',
                'error'
            );
        }else if(this.state.campoComunicarCasa === "" || this.state.campoComunicarCasa === undefined){
            Swal.fire(
                'Error',
                'El campo (¿Consideras que te comunicas adecuadamente en casa?) no puede estar vacío',
                'error'
            );
        }else{
            document.getElementById("identifi").style.display = 'none';
            document.getElementById("familiares").style.display = 'none';
            document.getElementById("sociecomo").style.display = 'none';
            document.getElementById("antecede_acade").style.display = 'none';
            document.getElementById("habitos_estudio").style.display = 'none';
            document.getElementById("aficiones").style.display = 'none';
            document.getElementById("personalidad").style.display = 'none';
            document.getElementById("rasgos").style.display = 'block';
            document.getElementById("salud").style.display = 'none';
            scroll.scrollToTop();
        }
    }//Función para desocultar los campos de aficiones y ocultar los demás
    atrasPersonalidad(){
        document.getElementById("identifi").style.display = 'none';
        document.getElementById("familiares").style.display = 'none';
        document.getElementById("sociecomo").style.display = 'none';
        document.getElementById("antecede_acade").style.display = 'none';
        document.getElementById("habitos_estudio").style.display = 'none';
        document.getElementById("aficiones").style.display = 'block';
        document.getElementById("personalidad").style.display = 'none';
        document.getElementById("rasgos").style.display = 'none';
        document.getElementById("salud").style.display = 'none';
        scroll.scrollToTop();
    }//Función para desocultar los campos de salud y ocultar los demás
    rasgos(){
        document.getElementById("identifi").style.display = 'none';
        document.getElementById("familiares").style.display = 'none';
        document.getElementById("sociecomo").style.display = 'none';
        document.getElementById("antecede_acade").style.display = 'none';
        document.getElementById("habitos_estudio").style.display = 'none';
        document.getElementById("aficiones").style.display = 'none';
        document.getElementById("personalidad").style.display = 'none';
        document.getElementById("rasgos").style.display = 'none';
        document.getElementById("salud").style.display = 'block';
        scroll.scrollToTop();
    }//Función para desocultar los campos de personalidad y ocultar los demás
    atrasRasgos(){
        document.getElementById("identifi").style.display = 'none';
        document.getElementById("familiares").style.display = 'none';
        document.getElementById("sociecomo").style.display = 'none';
        document.getElementById("antecede_acade").style.display = 'none';
        document.getElementById("habitos_estudio").style.display = 'none';
        document.getElementById("aficiones").style.display = 'none';
        document.getElementById("personalidad").style.display = 'block';
        document.getElementById("rasgos").style.display = 'none';
        document.getElementById("salud").style.display = 'none';
        scroll.scrollToTop();
    }//Función para desocultar los campos de rasgos y ocultar los demás
    salud(){
        document.getElementById("identifi").style.display = 'none';
        document.getElementById("familiares").style.display = 'none';
        document.getElementById("sociecomo").style.display = 'none';
        document.getElementById("antecede_acade").style.display = 'none';
        document.getElementById("habitos_estudio").style.display = 'none';
        document.getElementById("aficiones").style.display = 'none';
        document.getElementById("personalidad").style.display = 'none';
        document.getElementById("rasgos").style.display = 'block';
        document.getElementById("salud").style.display = 'none';
        scroll.scrollToTop();
    }
}

export default EntrevistaIni;





















