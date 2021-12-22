import React from 'react';
import {Link} from 'react-router-dom';
import '../Home.css';
import axios from 'axios';
import imagen from '../../Captura3.PNG';
import Swal from 'sweetalert2/dist/sweetalert2.js';//Librería para los alertas 
import 'sweetalert2/src/sweetalert2.scss';//Librería para los alertas 
import Foolder from '../fooldel';

var sectionStyle = {
    width: "100%",
    height: "600px",
    backgroundImage: "url(" + imagen + ")"
};

class ISAT extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            carreraAcc:"",
            totalGrupo:0, 
            totalTutor:0,
            periodoCuatri:"", 
            totalAtendi:0,
            idTutoriasDocentes6:0,
            tutorGrupa:0,
            totalTemas:0, 
            totalTemaVist:0, 
            idTutoriasDocentes7:0,
            tutorIndi:0, 
            totalPrograma:0, 
            totalRealiza:0, 
            idTutoriasDocentes8:0,
            acadTutorIndi:0, 
            profTutorIndi:0, 
            admiTutorIndi:0, 
            otrosTutorIn:0, 
            idTutoriasDocentes10:0,
            totalIniCuatri:0, 
            totalTermiCuatri:0, 
            idTutoriasDocentes12:0,
            cumpliExH:"0",
            cumpliExM:"0", 
            reprobacH:"0",
            reprobacM:"0",
            problEcoH:"0",
            problEcoM:"0",
            dificuTrH:"0",
            dificuTrM:"0",
            probleTrH:"0",
            probleTrM:"0",
            cambiCarH:"0",
            cambiCarM:"0",
            incompHoH:"0",
            incompHoM:"0",
            faltReglH:"0",
            faltReglM:"0", 
            cambiRegH:"0",
            cambiRegM:"0",
            cambiUniH:"0",
            cambiUniM:"0",
            problFamH:"0",
            problFamM:"0",
            problPerH:"0",
            problPerM:"0",
            otraH:"0",
            otraM:"0", 
            idTutoriasDocentes14:0,
            cumpliExNH:"0",
            cumpliExNM:"0",
            reprobacNH:"0",
            reprobacNM:"0",
            problEcoNH:"0",
            problEcoNM:"0",
            dificuTrNH:"0",
            dificuTrNM:"0",
            probleTrNH:"0",
            probleTrNM:"0",
            cambiCarNH:"0",
            cambiCarNM:"0",
            incompHoNH:"0",
            incompHoNM:"0",
            faltReglNH:"0",
            faltReglNM:"0", 
            cambiRegNH:"0", 
            cambiRegNM:"0", 
            cambiUniNH:"0",
            cambiUniNM:"0",
            problFamNH:"0",
            problFamNM:"0",
            problPerNH:"0",
            problPerNM:"0",
            otraNH:"0", 
            otraNM:"0",
            idTutoriasDocentes15:0,
            responsables:"", 
            comentario:"", 
            idTutoriasDocentes11:0,
            readDatos:[]
        }
    }//Metodo para obtener los programas educativos pertenecientes al encargado 
    componentDidMount(){
        let idPE = this.props.match.params.id;
        const Url = "http://localhost:3000/apis/list/PE/all/carreras/"+idPE;
        axios.get(Url)
        .then(res=>{
            if(res.data.success){
                const datos = res.data.data;
                this.setState({readDatos:datos});
            }
        });//Metodo para optener los nombres del encargado y los apellidos
        const Nom = "http://localhost:3000/apis/list/PE/Nom/Ape/"+idPE;
        axios.get(Nom)
        .then(res=>{
            if(res.data.success){
                const nomApe = res.data.data[0];
                this.setState({
                    nombre:nomApe.nombreDocente,
                    apellidos:nomApe.apellidoDocente
                });
            }
        });
    }
    render(){
        return(
            <div style={ sectionStyle } className="estatic">
                <nav class="navbar bg-nav fixed-top">
                    <Link class="navbar-brand color" onClick={() => this.valverSalir()}>SIIUTeM</Link>
                    <ul class="nav justify-content-end">
                        <li class="nav-item">
                            <li class="nav-item dropdown list">
                                <Link class="nav-link dropdown-toggle color navbar-brand" data-toggle="dropdown">Ver Informes</Link>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link onClick={() => this.verISAT()} class="btn btn-light col-md-12">Ver Informe de Seguimiento de Acción Tutorial</Link>
                                    <Link class="dropdown-item" onClick={() => this.verEntreIniJyPE()}>Ver Entrevista Inicial</Link>
                                </div>
                            </li>
                        </li>
                        <li class="nav-item dropdown list">
                            <Link onClick={() => this.cambioT()} class="boton_salir color navbar-brand">Cambio de Tutor</Link>
                        </li>
                    </ul>
                </nav>
                <br></br><br></br>
                <div class="container-fluid py-5">
                    <h4 class="text-center text-white">INFORME DE SEGUIMIENTO DE ACCIÓN TUTORIAL</h4>
                    <br></br>
                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <h5 class="text-white">Carrera</h5>
                            <select class="form-control" onChange={(value) => this.setState({carreraAcc:value.target.value})}>
                                <option selected="true" disabled="disabled">seleccione una opción</option>  
                                {this.read()}
                            </select>
                        </div>
                        <div class="form-group col-md-4">
                            <h5 class="text-white">Periodo cuatrimestral</h5>
                            <select class="form-control"onChange={(value) => this.setState({periodoCuatri:value.target.value})}>
                                <option selected="true" disabled="disabled">seleccione una opción</option>  
                                <option value="Enero-Abril">Enero-Febrero</option>
                                <option value="Mayo-Agosto">Mayo-Agosto</option>  
                                <option value="Septiembre-Diciembre">Septiembre-Diciembre</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <h5 class="text-white">Total de grupos de la carrera</h5>
                            <input type="number" class="form-control" onChange={(value) => this.setState({totalGrupo:value.target.value})} required/>
                        </div>
                        <div class="form-group col-md-4">
                            <h5 class="text-white">Total de tutores de la carrera</h5>
                            <input type="number" class="form-control" onChange={(value) => this.setState({totalTutor:value.target.value})} required/>
                        </div>
                        <div class="form-group col-md-4">
                            <h5 class="text-white">Total de alumnos atendidos</h5>
                            <input type="number" class="form-control" onChange={(value) => this.setState({totalAtendi:value.target.value})} required/>
                        </div>
                    </div>
                    <br></br>
                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <h5 class="text-white">Tutorías grupales</h5>
                            <input type="number" class="form-control" onChange={(value) => this.setState({tutorGrupa:value.target.value})} />
                        </div>
                        <div class="form-group col-md-4">
                            <h5 class="text-white">Total de temas programados</h5>
                            <input type="number" class="form-control" onChange={(value) => this.setState({totalTemas:value.target.value})} />
                        </div>
                        <div class="form-group col-md-4">
                            <h5 class="text-white">Total de temas programados vistos</h5>
                            <input type="number" class="form-control" onChange={(value) => this.setState({totalTemaVist:value.target.value})} />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <h5 class="text-white">Tutorías individuales</h5>
                            <input type="number" class="form-control" onChange={(value) => this.setState({tutorIndi:value.target.value})} />
                        </div>
                        <div class="form-group col-md-4">
                            <h5 class="text-white">Total programadas</h5>
                            <input type="number" class="form-control" onChange={(value) => this.setState({totalPrograma:value.target.value})} />
                        </div>
                        <div class="form-group col-md-4">
                            <h5 class="text-white">Total realizadas</h5>
                            <input type="number" class="form-control" onChange={(value) => this.setState({totalRealiza:value.target.value})} />
                        </div>
                    </div>
                    <br />
                    <h5 class="text-white">Total de tutorías individuales no programadas</h5>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item col-md-12">
                            <h5 class="text-center">Temas abordados</h5>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item col-md-3">
                            <h5>Académicos</h5>
                        </li>
                        <li class="list-group-item col-md-3">
                            <h5>Profesionales</h5>
                        </li>
                        <li class="list-group-item col-md-3">
                            <h5>Administrativos</h5>
                        </li>
                        <li class="list-group-item col-md-3">
                            <h5>Otros</h5>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item col-md-3">
                            <input type="number" class="form-control" onChange={(value)=> this.setState({acadTutorIndi:value.target.value})}/>
                        </li>
                        <li class="list-group-item col-md-3">
                            <input type="number" class="form-control" onChange={(value)=> this.setState({profTutorIndi:value.target.value})}/>
                        </li>
                        <li class="list-group-item col-md-3">
                            <input type="number" class="form-control" onChange={(value)=> this.setState({admiTutorIndi:value.target.value})}/>
                        </li>
                        <li class="list-group-item col-md-3">
                            <input type="number" class="form-control" onChange={(value)=> this.setState({otrosTutorIn:value.target.value})}/>
                        </li>
                    </ul>
                    <br />
                    <h5 class="text-white">Bajas</h5>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <h5 class="text-white">Total de alumnos activos al iniciar el cuatrimestre</h5>
                            <input type="number" class="form-control" onChange={(value) => this.setState({totalIniCuatri:value.target.value})}/>
                        </div>
                        <div class="form-group col-md-6">
                            <h5 class="text-white">Total de bajas al terminar el cuatrimestre</h5>
                            <input type="number" class="form-control" onChange={(value) => this.setState({totalTermiCuatri:value.target.value})}/>
                        </div>
                    </div>
                    <br />
                    <h5 class="text-white">Motivos de bajas</h5>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item col-md-12">
                            <h5>No se cumplieron expectativas</h5>
                            <ul class="list-group list-group-horizontal">
                                <ul class="list-group-item col-md-6">
                                    <h5 class="text-center">Alumnos canalizados</h5>
                                </ul>
                                <ul class="list-group-item col-md-6">
                                    <h5 class="text-center">Alumnos no canalizados</h5>
                                </ul>
                            </ul>
                            <ul class="list-group list-group-horizontal">
                                <li class="list-group-item col-md-3">
                                    <h5>Hombres</h5>
                                    <input type="number" class="form-control" onChange={(value)=> this.setState({cumpliExH:value.target.value})}/>
                                </li>
                                <li class="list-group-item col-md-3">
                                    <h5>Mujeres</h5>
                                    <input type="number" class="form-control" onChange={(value)=> this.setState({cumpliExM:value.target.value})}/>
                                </li>
                                <li class="list-group-item col-md-3">
                                        <h5>Hombres</h5>
                                    <input type="number" class="form-control" onChange={(value)=> this.setState({cumpliExNH:value.target.value})}/>
                                </li>
                                <li class="list-group-item col-md-3">
                                    <h5>Mujeres</h5>
                                    <input type="number" class="form-control" onChange={(value)=> this.setState({cumpliExNM:value.target.value})}/>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item col-md-12">
                            <h5>Reprobación</h5>
                            <ul class="list-group list-group-horizontal">
                                <ul class="list-group-item col-md-6">
                                    <h5 class="text-center">Alumnos canalizados</h5>
                                </ul>
                                <ul class="list-group-item col-md-6">
                                    <h5 class="text-center">Alumnos no canalizados</h5>
                                </ul>
                            </ul>
                            <ul class="list-group list-group-horizontal">
                                <li class="list-group-item col-md-3">
                                    <h5>Hombres</h5>
                                    <input type="number" class="form-control" onChange={(value)=> this.setState({reprobacH:value.target.value})}/>
                                </li>
                                <li class="list-group-item col-md-3">
                                    <h5>Mujeres</h5>
                                    <input type="number" class="form-control" onChange={(value)=> this.setState({reprobacM:value.target.value})}/>
                                </li>
                                <li class="list-group-item col-md-3">
                                        <h5>Hombres</h5>
                                    <input type="number" class="form-control" onChange={(value)=> this.setState({reprobacNH:value.target.value})}/>
                                </li>
                                <li class="list-group-item col-md-3">
                                    <h5>Mujeres</h5>
                                    <input type="number" class="form-control" onChange={(value)=> this.setState({reprobacNM:value.target.value})}/>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item col-md-12">
                            <h5>Problemas económicos</h5>
                            <ul class="list-group list-group-horizontal">
                                <ul class="list-group-item col-md-6">
                                    <h5 class="text-center">Alumnos canalizados</h5>
                                </ul>
                                <ul class="list-group-item col-md-6">
                                    <h5 class="text-center">Alumnos no canalizados</h5>
                                </ul>
                            </ul>
                            <ul class="list-group list-group-horizontal">
                                <li class="list-group-item col-md-3">
                                    <h5>Hombres</h5>
                                    <input type="number" class="form-control" onChange={(value)=> this.setState({problEcoH:value.target.value})}/>
                                </li>
                                <li class="list-group-item col-md-3">
                                    <h5>Mujeres</h5>
                                    <input type="number" class="form-control" onChange={(value)=> this.setState({problEcoM:value.target.value})}/>
                                </li>
                                <li class="list-group-item col-md-3">
                                        <h5>Hombres</h5>
                                    <input type="number" class="form-control" onChange={(value)=> this.setState({problEcoNH:value.target.value})}/>
                                </li>
                                <li class="list-group-item col-md-3">
                                    <h5>Mujeres</h5>
                                    <input type="number" class="form-control" onChange={(value)=> this.setState({problEcoNM:value.target.value})}/>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item col-md-12">
                            <h5>Dificultades para el transporte</h5>
                            <ul class="list-group list-group-horizontal">
                                <ul class="list-group-item col-md-6">
                                    <h5 class="text-center">Alumnos canalizados</h5>
                                </ul>
                                <ul class="list-group-item col-md-6">
                                    <h5 class="text-center">Alumnos no canalizados</h5>
                                </ul>
                            </ul>
                            <ul class="list-group list-group-horizontal">
                                <li class="list-group-item col-md-3">
                                    <h5>Hombres</h5>
                                    <input type="number" class="form-control" onChange={(value)=> this.setState({dificuTrH:value.target.value})}/>
                                </li>
                                <li class="list-group-item col-md-3">
                                    <h5>Mujeres</h5>
                                    <input type="number" class="form-control" onChange={(value)=> this.setState({dificuTrM:value.target.value})}/>
                                </li>
                                <li class="list-group-item col-md-3">
                                        <h5>Hombres</h5>
                                    <input type="number" class="form-control" onChange={(value)=> this.setState({dificuTrNH:value.target.value})}/>
                                </li>
                                <li class="list-group-item col-md-3">
                                    <h5>Mujeres</h5>
                                    <input type="number" class="form-control" onChange={(value)=> this.setState({dificuTrNM:value.target.value})}/>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item col-md-12">
                            <h5>Problemas de trabajo</h5>
                            <ul class="list-group list-group-horizontal">
                                <ul class="list-group-item col-md-6">
                                    <h5 class="text-center">Alumnos canalizados</h5>
                                </ul>
                                <ul class="list-group-item col-md-6">
                                    <h5 class="text-center">Alumnos no canalizados</h5>
                                </ul>
                            </ul>
                            <ul class="list-group list-group-horizontal">
                                <li class="list-group-item col-md-3">
                                    <h5>Hombres</h5>
                                    <input type="number" class="form-control" onChange={(value)=> this.setState({probleTrH:value.target.value})}/>
                                </li>
                                <li class="list-group-item col-md-3">
                                    <h5>Mujeres</h5>
                                    <input type="number" class="form-control" onChange={(value)=> this.setState({probleTrM:value.target.value})}/>
                                </li>
                                <li class="list-group-item col-md-3">
                                        <h5>Hombres</h5>
                                    <input type="number" class="form-control" onChange={(value)=> this.setState({probleTrNH:value.target.value})}/>
                                </li>
                                <li class="list-group-item col-md-3">
                                    <h5>Mujeres</h5>
                                    <input type="number" class="form-control" onChange={(value)=> this.setState({probleTrNM:value.target.value})}/>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item col-md-12">
                            <h5>Cambio de carrera</h5>
                            <ul class="list-group list-group-horizontal">
                                <ul class="list-group-item col-md-6">
                                    <h5 class="text-center">Alumnos canalizados</h5>
                                </ul>
                                <ul class="list-group-item col-md-6">
                                    <h5 class="text-center">Alumnos no canalizados</h5>
                                </ul>
                            </ul>
                            <ul class="list-group list-group-horizontal">
                                <li class="list-group-item col-md-3">
                                    <h5>Hombres</h5>
                                    <input type="number" class="form-control" onChange={(value)=> this.setState({cambiCarH:value.target.value})}/>
                                </li>
                                <li class="list-group-item col-md-3">
                                    <h5>Mujeres</h5>
                                    <input type="number" class="form-control" onChange={(value)=> this.setState({cambiCarM:value.target.value})}/>
                                </li>
                                <li class="list-group-item col-md-3">
                                        <h5>Hombres</h5>
                                    <input type="number" class="form-control" onChange={(value)=> this.setState({cambiCarNH:value.target.value})}/>
                                </li>
                                <li class="list-group-item col-md-3">
                                    <h5>Mujeres</h5>
                                    <input type="number" class="form-control" onChange={(value)=> this.setState({cambiCarNM:value.target.value})}/>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item col-md-12">
                            <h5>Incompatibilidad de horario</h5>
                            <ul class="list-group list-group-horizontal">
                                <ul class="list-group-item col-md-6">
                                    <h5 class="text-center">Alumnos canalizados</h5>
                                </ul>
                                <ul class="list-group-item col-md-6">
                                    <h5 class="text-center">Alumnos no canalizados</h5>
                                </ul>
                            </ul>
                            <ul class="list-group list-group-horizontal">
                                <li class="list-group-item col-md-3">
                                    <h5>Hombres</h5>
                                    <input type="number" class="form-control" onChange={(value)=> this.setState({incompHoH:value.target.value})}/>
                                </li>
                                <li class="list-group-item col-md-3">
                                    <h5>Mujeres</h5>
                                    <input type="number" class="form-control" onChange={(value)=> this.setState({incompHoM:value.target.value})}/>
                                </li>
                                <li class="list-group-item col-md-3">
                                        <h5>Hombres</h5>
                                    <input type="number" class="form-control" onChange={(value)=> this.setState({incompHoNH:value.target.value})}/>
                                </li>
                                <li class="list-group-item col-md-3">
                                    <h5>Mujeres</h5>
                                    <input type="number" class="form-control" onChange={(value)=> this.setState({incompHoNM:value.target.value})}/>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item col-md-12">
                            <h5>Faltas al reglamento</h5>
                            <ul class="list-group list-group-horizontal">
                                <ul class="list-group-item col-md-6">
                                    <h5 class="text-center">Alumnos canalizados</h5>
                                </ul>
                                <ul class="list-group-item col-md-6">
                                    <h5 class="text-center">Alumnos no canalizados</h5>
                                </ul>
                            </ul>
                            <ul class="list-group list-group-horizontal">
                                <li class="list-group-item col-md-3">
                                    <h5>Hombres</h5>
                                    <input type="number" class="form-control" onChange={(value)=> this.setState({faltReglH:value.target.value})}/>
                                </li>
                                <li class="list-group-item col-md-3">
                                    <h5>Mujeres</h5>
                                    <input type="number" class="form-control" onChange={(value)=> this.setState({faltReglM:value.target.value})}/>
                                </li>
                                <li class="list-group-item col-md-3">
                                        <h5>Hombres</h5>
                                    <input type="number" class="form-control" onChange={(value)=> this.setState({faltReglNH:value.target.value})}/>
                                </li>
                                <li class="list-group-item col-md-3">
                                    <h5>Mujeres</h5>
                                    <input type="number" class="form-control" onChange={(value)=> this.setState({faltReglNM:value.target.value})}/>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item col-md-12">
                            <h5>Cambio de residencia</h5>
                            <ul class="list-group list-group-horizontal">
                                <ul class="list-group-item col-md-6">
                                    <h5 class="text-center">Alumnos canalizados</h5>
                                </ul>
                                <ul class="list-group-item col-md-6">
                                    <h5 class="text-center">Alumnos no canalizados</h5>
                                </ul>
                            </ul>
                            <ul class="list-group list-group-horizontal">
                                <li class="list-group-item col-md-3">
                                    <h5>Hombres</h5>
                                    <input type="number" class="form-control" onChange={(value)=> this.setState({cambiRegH:value.target.value})}/>
                                </li>
                                <li class="list-group-item col-md-3">
                                    <h5>Mujeres</h5>
                                    <input type="number" class="form-control" onChange={(value)=> this.setState({cambiRegM:value.target.value})}/>
                                </li>
                                <li class="list-group-item col-md-3">
                                        <h5>Hombres</h5>
                                    <input type="number" class="form-control" onChange={(value)=> this.setState({cambiRegNH:value.target.value})}/>
                                </li>
                                <li class="list-group-item col-md-3">
                                    <h5>Mujeres</h5>
                                    <input type="number" class="form-control" onChange={(value)=> this.setState({cambiRegNM:value.target.value})}/>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item col-md-12">
                            <h5>Cambio de universidad</h5>
                            <ul class="list-group list-group-horizontal">
                                <ul class="list-group-item col-md-6">
                                    <h5 class="text-center">Alumnos canalizados</h5>
                                </ul>
                                <ul class="list-group-item col-md-6">
                                    <h5 class="text-center">Alumnos no canalizados</h5>
                                </ul>
                            </ul>
                            <ul class="list-group list-group-horizontal">
                                <li class="list-group-item col-md-3">
                                    <h5>Hombres</h5>
                                    <input type="number" class="form-control" onChange={(value)=> this.setState({cambiUniH:value.target.value})}/>
                                </li>
                                <li class="list-group-item col-md-3">
                                    <h5>Mujeres</h5>
                                    <input type="number" class="form-control" onChange={(value)=> this.setState({cambiUniM:value.target.value})}/>
                                </li>
                                <li class="list-group-item col-md-3">
                                        <h5>Hombres</h5>
                                    <input type="number" class="form-control" onChange={(value)=> this.setState({cambiUniNH:value.target.value})}/>
                                </li>
                                <li class="list-group-item col-md-3">
                                    <h5>Mujeres</h5>
                                    <input type="number" class="form-control" onChange={(value)=> this.setState({cambiUniNM:value.target.value})}/>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item col-md-12">
                            <h5>Problemas familiares</h5>
                            <ul class="list-group list-group-horizontal">
                                <ul class="list-group-item col-md-6">
                                    <h5 class="text-center">Alumnos canalizados</h5>
                                </ul>
                                <ul class="list-group-item col-md-6">
                                    <h5 class="text-center">Alumnos no canalizados</h5>
                                </ul>
                            </ul>
                            <ul class="list-group list-group-horizontal">
                                <li class="list-group-item col-md-3">
                                    <h5>Hombres</h5>
                                    <input type="number" class="form-control" onChange={(value)=> this.setState({problFamH:value.target.value})}/>
                                </li>
                                <li class="list-group-item col-md-3">
                                    <h5>Mujeres</h5>
                                    <input type="number" class="form-control" onChange={(value)=> this.setState({problFamM:value.target.value})}/>
                                </li>
                                <li class="list-group-item col-md-3">
                                        <h5>Hombres</h5>
                                    <input type="number" class="form-control" onChange={(value)=> this.setState({problFamNH:value.target.value})}/>
                                </li>
                                <li class="list-group-item col-md-3">
                                    <h5>Mujeres</h5>
                                    <input type="number" class="form-control" onChange={(value)=> this.setState({problFamNM:value.target.value})}/>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item col-md-12">
                            <h5>Problemas personales</h5>
                            <ul class="list-group list-group-horizontal">
                                <ul class="list-group-item col-md-6">
                                    <h5 class="text-center">Alumnos canalizados</h5>
                                </ul>
                                <ul class="list-group-item col-md-6">
                                    <h5 class="text-center">Alumnos no canalizados</h5>
                                </ul>
                            </ul>
                            <ul class="list-group list-group-horizontal">
                                <li class="list-group-item col-md-3">
                                    <h5>Hombres</h5>
                                    <input type="number" class="form-control" onChange={(value)=> this.setState({problPerH:value.target.value})}/>
                                </li>
                                <li class="list-group-item col-md-3">
                                    <h5>Mujeres</h5>
                                    <input type="number" class="form-control" onChange={(value)=> this.setState({problPerM:value.target.value})}/>
                                </li>
                                <li class="list-group-item col-md-3">
                                        <h5>Hombres</h5>
                                    <input type="number" class="form-control" onChange={(value)=> this.setState({problPerNH:value.target.value})}/>
                                </li>
                                <li class="list-group-item col-md-3">
                                    <h5>Mujeres</h5>
                                    <input type="number" class="form-control" onChange={(value)=> this.setState({problPerNM:value.target.value})}/>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item col-md-12">
                            <h5>Otros</h5>
                            <ul class="list-group list-group-horizontal">
                                <ul class="list-group-item col-md-6">
                                    <h5 class="text-center">Alumnos canalizados</h5>
                                </ul>
                                <ul class="list-group-item col-md-6">
                                    <h5 class="text-center">Alumnos no canalizados</h5>
                                </ul>
                            </ul>
                            <ul class="list-group list-group-horizontal">
                                <li class="list-group-item col-md-3">
                                    <h5>Hombres</h5>
                                    <input type="text" class="form-control" onChange={(value)=> this.setState({otraH:value.target.value})}/>
                                </li>
                                <li class="list-group-item col-md-3">
                                    <h5>Mujeres</h5>
                                    <input type="text" class="form-control" onChange={(value)=> this.setState({otraM:value.target.value})}/>
                                </li>
                                <li class="list-group-item col-md-3">
                                        <h5>Hombres</h5>
                                    <input type="text" class="form-control" onChange={(value)=> this.setState({otraNH:value.target.value})}/>
                                </li>
                                <li class="list-group-item col-md-3">
                                    <h5>Mujeres</h5>
                                    <input type="text" class="form-control" onChange={(value)=> this.setState({otraNM:value.target.value})}/>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <br />
                    <div class="form-group">
                        <h5 class="card-title text-white">Observaciones</h5>
                        <div class="input-group">
                            <textarea class="form-control" aria-label="With textarea" onChange={(value) => this.setState({comentario:value.target.value})} ></textarea>
                        </div>
                    </div>
                    <br />
                    <div class="text-center">
                        <input type="button" class="btn btn-primary" value="Guardar" onClick={() => this.Save()} />
                    </div>
                </div>
                <Foolder />
            </div>
        );
    }//Función para mostrar los programas educativos asignados al encargado 
    read(){
        return this.state.readDatos.map((datos)=>{
            return(
                <option>{datos.carreTutores}</option>
            );
        });
    }//Función para guardar los datos en la base de tados  
    Save(){      
        if(this.state.carreraAcc === ""){
            Swal.fire(
                'Error',
                'El campo Carrera no debe estar vacío'
            );
        }else if(this.state.periodoCuatri === ""){
            Swal.fire(
                'Error',
                'El campo Periodo cuatrimestral no debe estar vacío'
            );
        }else{
            const Url = "http://localhost:3000/apis/insert/InfoSeguiAaccTuto/informee/All";
            const datos = {
                carreraAcc: this.state.carreraAcc,
                totalGrupo: this.state.totalGrupo, 
                totalTutor: this.state.totalTutor,
                periodoCuatri: this.state.periodoCuatri, 
                totalAtendi: this.state.totalAtendi,
                idTutoriasDocentes6:this.props.match.params.id,
                tutorGrupa: this.state.tutorGrupa,
                totalTemas: this.state.totalTemas, 
                totalTemaVist: this.state.totalTemaVist, 
                idTutoriasDocentes7:this.props.match.params.id,
                tutorIndi: this.state.tutorIndi, 
                totalPrograma: this.state.totalPrograma, 
                totalRealiza: this.state.totalRealiza, 
                idTutoriasDocentes8:this.props.match.params.id,
                acadTutorIndi: this.state.acadTutorIndi, 
                profTutorIndi: this.state.profTutorIndi, 
                admiTutorIndi: this.state.admiTutorIndi, 
                otrosTutorIn: this.state.otrosTutorIn, 
                idTutoriasDocentes10: this.props.match.params.id,
                totalIniCuatri: this.state.totalIniCuatri, 
                totalTermiCuatri: this.state.totalTermiCuatri, 
                idTutoriasDocentes12: this.props.match.params.id,
                cumpliExS:this.state.cumpliExH+", "+this.state.cumpliExM,
                reprobacS:this.state.reprobacH+", "+this.state.reprobacM,
                problEcoS:this.state.problEcoH+", "+this.state.problEcoM,
                dificuTrS:this.state.dificuTrH+", "+this.state.dificuTrM,
                probleTrS:this.state.probleTrH+", "+this.state.probleTrM,
                cambiCarS:this.state.cambiCarH+", "+this.state.cambiCarM,
                incompHoS:this.state.incompHoH+", "+this.state.incompHoM,
                faltReglS:this.state.faltReglH+", "+this.state.faltReglM,
                cambiRegS:this.state.cambiRegH+", "+this.state.cambiRegM,
                cambiUniS:this.state.cambiUniH+", "+this.state.cambiUniM,
                problFamS:this.state.problFamH+", "+this.state.problFamM,
                problPerS:this.state.problPerH+", "+this.state.problPerM,
                otraS:this.state.otraH+", "+this.state.otraM,
                idTutoriasDocentes14:this.props.match.params.id,
                cumpliExN:this.state.cumpliExNH+", "+this.state.cumpliExNM,
                reprobacN:this.state.reprobacNH+", "+this.state.reprobacNM,
                problEcoN:this.state.problEcoNH+", "+this.state.problEcoNM,
                dificuTrN:this.state.dificuTrNH+", "+this.state.dificuTrNM,
                probleTrN:this.state.probleTrNH+", "+this.state.probleTrNM,
                cambiCarN:this.state.cambiCarNH+", "+this.state.cambiCarNM,
                incompHoN:this.state.incompHoNH+", "+this.state.incompHoNM,
                faltReglN:this.state.faltReglNH+", "+this.state.faltReglNM,
                cambiRegN:this.state.cambiRegNH+", "+this.state.cambiRegNM, 
                cambiUniN:this.state.cambiUniNH+", "+this.state.cambiUniNM,
                problFamN:this.state.problFamNH+", "+this.state.problFamNM,
                problPerN:this.state.problPerNH+", "+this.state.problPerNM,
                otraN:this.state.otraNH+", "+this.state.otraNM, 
                idTutoriasDocentes15:this.props.match.params.id,
                comentario:this.state.comentario, 
                idTutoriasDocentes11:this.props.match.params.id,
            }
            axios.post(Url, datos);
            Swal.fire({
                icon:'success',
                title:'Listo',
                text:'El archivo se a registrado'
            }).then((result)=>{
                if(result.value){
                    window.location.replace("/verisat/"+this.props.match.params.id);;
                }
            });
        }
    }//Función para volver a la vista HomePE del encargado 
    valverSalir(){
        Swal.fire({
            icon:'error',
            title:'Salir',
            text:'No se guardaran los datos ingresados',
            showCancelButton:true,
            confirmButtonText:'Salir',
            confirmButtonColor:'#d33',
            cancelButtonText:'Cancelar',
            cancelButtonColor:'#1D98CB',
        }).then((result)=>{
            if(result.value){
                window.location.replace("/HomePE/"+this.props.match.params.id);
            }
        });
    }//Función para ver las entrevistas iniciales 
    verEntreIniJyPE(){
        Swal.fire({
            icon:'question',
            title:'Ver Entrevista Inicial',
            text:'No se guardaran los datos ingresados',
            showCancelButton:true,
            confirmButtonText:'Ver',
            confirmButtonColor:'#d33',
            cancelButtonText:'Cancelar',
            cancelButtonColor:'#1D98CB',
        }).then((result)=>{
            if(result.value){
                window.location.replace("/verEntreIniJyPE/"+this.props.match.params.id);
            }
        });
    }//Función para re direccinar a la vista cambio de tutor 
    cambioT(){
        Swal.fire({
            icon:'question',
            title:'Cambio de Tutor',
            text:'No se guardaran los datos ingresados',
            showCancelButton:true,
            confirmButtonText:'Ir',
            confirmButtonColor:'#d33',
            cancelButtonText:'Cancelar',
            cancelButtonColor:'#1D98CB',
        }).then((result)=>{
            if(result.value){
                window.location.replace("/cambiot/"+this.props.match.params.id);
            }
        });
    }//Función para redireccionar a la vista ver informes de seguimiento 
    verISAT(){
        Swal.fire({
            icon:'question',
            title:'Ver Informe de Seguimiento de Acción Tutorial',
            text:'No se guardaran los datos ingresados',
            showCancelButton:true,
            confirmButtonText:'Ver',
            confirmButtonColor:'#d33',
            cancelButtonText:'Cancelar',
            cancelButtonColor:'#1D98CB',
        }).then((result)=>{
            if(result.value){
                window.location.replace("/verisat/"+this.props.match.params.id);
            }
        });
    }
}

export default ISAT;