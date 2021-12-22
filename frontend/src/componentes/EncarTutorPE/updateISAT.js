import React from 'react';
import {Link} from 'react-router-dom';
import '../Home.css';
import axios from 'axios';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
import Foolder from '../fooldel';
import imagen from '../../Captura3.PNG';

var sectionStyle = {
    width: "100%",
    height: "600px",
    backgroundImage: "url(" + imagen + ")"
};

class ISAT extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            readDatos:[]
        }
    }//Metodo para obtener los programas educativos asignados al encargado 
    componentDidMount(){
        let idPE = this.props.match.params.idPE;
        const Url = "http://localhost:3000/apis/list/PE/all/carreras/"+idPE;
        axios.get(Url)
        .then(res=>{
            if(res.data.success){
                const datosCar = res.data.data;
                this.setState({readDatos:datosCar});
            }
        });//Metodo para mostrar todos los datos del informe de seguimiento para modificar
        let id = this.props.match.params.id;
        const Url2 = "http://localhost:3000/apis/list/ubdate/ISAT/"+id;
        axios.get(Url2)
        .then(res=>{
            if(res.data.success){
                const datos = res.data.data[0];
                this.setState({
                    carreraAcc:datos.carreraAcc,
                    periodoCuatri:datos.periodoCuatri,
                    totalGrupo:datos.totalGrupo,
                    totalTutor:datos.totalTutor,
                    totalAtendi:datos.totalAtendi,
                    tutorGrupa:datos.tutorGrupa,
                    totalTemas:datos.totalTemas,
                    totalTemaVist:datos.totalTemaVist,
                    tutorIndi:datos.tutorIndi,
                    totalPrograma:datos.totalPrograma,
                    totalRealiza:datos.totalRealiza,
                    acadTutorIndi:datos.acadTutorIndi,
                    profTutorIndi:datos.profTutorIndi,
                    admiTutorIndi:datos.admiTutorIndi,
                    otrosTutorIn:datos.otrosTutorIn,
                    totalIniCuatri:datos.totalIniCuatri,
                    totalTermiCuatri:datos.totalTermiCuatri,
                    cumpliExH:datos.cumpliExSH,
                    cumpliExM:datos.cumpliExSM,
                    reprobacH:datos.reprobacSH,
                    reprobacM:datos.reprobacSM,
                    problEcoH:datos.problEcoSH,
                    problEcoM:datos.problEcoSM,
                    dificuTrH:datos.dificuTrSH,
                    dificuTrM:datos.dificuTrSM,
                    probleTrH:datos.probleTrSH,
                    probleTrM:datos.probleTrSM,
                    cambiCarH:datos.cambiCarSH,
                    cambiCarM:datos.cambiCarSM,
                    incompHoH:datos.incompHoSH,
                    incompHoM:datos.incompHoSM,
                    faltReglH:datos.faltReglSH,
                    faltReglM:datos.faltReglSM,
                    cambiRegH:datos.cambiRegSH,
                    cambiRegM:datos.cambiRegSM,
                    cambiUniH:datos.cambiUniSH,
                    cambiUniM:datos.cambiUniSM,
                    problFamH:datos.problFamSH,
                    problFamM:datos.problFamSM,
                    problPerH:datos.problPerSH,
                    problPerM:datos.problPerSM,
                    otraH:datos.otraSH,
                    otraM:datos.otraSM,
                    cumpliExNH:datos.cumpliExNH,
                    cumpliExNM:datos.cumpliExNM,
                    reprobacNH:datos.reprobacNH,
                    reprobacNM:datos.reprobacNM,
                    problEcoNH:datos.problEcoNH,
                    problEcoNM:datos.problEcoNM,
                    dificuTrNH:datos.dificuTrNH,
                    dificuTrNM:datos.dificuTrNM,
                    probleTrNH:datos.probleTrNH,
                    probleTrNM:datos.probleTrNM,
                    cambiCarNH:datos.cambiCarNH,
                    cambiCarNM:datos.cambiCarNM,
                    incompHoNH:datos.incompHoNH,
                    incompHoNM:datos.incompHoNM,
                    faltReglNH:datos.faltReglNH,
                    faltReglNM:datos.faltReglNM,
                    cambiRegNH:datos.cambiRegNH,
                    cambiRegNM:datos.cambiRegNM,
                    cambiUniNH:datos.cambiUniNH,
                    cambiUniNM:datos.cambiUniNM,
                    problFamNH:datos.problFamNH,
                    problFamNM:datos.problFamNM,
                    problPerNH:datos.problPerNH,
                    problPerNM:datos.problPerNM,
                    otraNH:datos.otraNH,
                    otraNM:datos.otraNM,
                    comentario:datos.comentario
                });
            }
        });
    }
    render(){
        return(
            <div style={ sectionStyle } className="estatic">
                <nav class="navbar bg-nav fixed-top">
                    <Link class="navbar-brand color" onClick={() => this.valverSalir()}>SIIUTeM</Link>
                    <Link onClick={() => this.verISAT()} class="boton_salir color navbar-brand">Volver</Link>
                </nav>
                <br></br><br></br>
                <div class="container-fluid py-5">
                    <h4 class="text-center text-white">MODIFICAR INFORME DE SEGUIMIENTO DE ACCIÓN TUTORIAL</h4>
                    <br></br>
                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <h5 class="text-white">Carrera</h5>
                            <select class="form-control" value={this.state.carreraAcc} onChange={(value) => this.setState({carreraAcc:value.target.value})}>  
                                <option>{this.state.carreraAcc}</option>
                                {this.read()}
                            </select>
                        </div>
                        <div class="form-group col-md-4">
                            <h5 class="text-white">Periodo cuatrimestral</h5>
                            <select class="form-control" value={this.state.periodoCuatri} onChange={(value) => this.setState({periodoCuatri:value.target.value})}>
                                <option value="Enero-Abril">Enero-Febrero</option>
                                <option value="Mayo-Agosto">Mayo-Agosto</option>  
                                <option value="Septiembre-Diciembre">Septiembre-Diciembre</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <h5 class="text-white">Total de grupos de la carrera</h5>
                            <input type="number" class="form-control" value={this.state.totalGrupo} onChange={(value) => this.setState({totalGrupo:value.target.value})}/>
                        </div>
                        <div class="form-group col-md-4">
                            <h5 class="text-white">Total de tutores de la carrera</h5>
                            <input type="number" class="form-control" value={this.state.totalTutor} onChange={(value) => this.setState({totalTutor:value.target.value})}/>
                        </div>
                        <div class="form-group col-md-4">
                            <h5 class="text-white">Total de alumnos atendidos</h5>
                            <input type="number" class="form-control" value={this.state.totalAtendi} onChange={(value) => this.setState({totalAtendi:value.target.value})}/>
                        </div>
                    </div>
                    <br></br>
                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <h5 class="text-white">Tutorías grupales</h5>
                            <input type="number" class="form-control" value={this.state.tutorGrupa} onChange={(value) => this.setState({tutorGrupa:value.target.value})} />
                        </div>
                        <div class="form-group col-md-4">
                            <h5 class="text-white">Total de temas programados</h5>
                            <input type="number" class="form-control" value={this.state.totalTemas} onChange={(value) => this.setState({totalTemas:value.target.value})} />
                        </div>
                        <div class="form-group col-md-4">
                            <h5 class="text-white">Total de temas programados vistos</h5>
                            <input type="number" class="form-control" value={this.state.totalTemaVist} onChange={(value) => this.setState({totalTemaVist:value.target.value})} />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <h5 class="text-white">Tutorías individuales</h5>
                            <input type="number" class="form-control" value={this.state.tutorIndi} onChange={(value) => this.setState({tutorIndi:value.target.value})} />
                        </div>
                        <div class="form-group col-md-4">
                            <h5 class="text-white">Total programadas</h5>
                            <input type="number" class="form-control" value={this.state.totalPrograma} onChange={(value) => this.setState({totalPrograma:value.target.value})} />
                        </div>
                        <div class="form-group col-md-4">
                            <h5 class="text-white">Total realizadas</h5>
                            <input type="number" class="form-control" value={this.state.totalRealiza} onChange={(value) => this.setState({totalRealiza:value.target.value})} />
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
                            <input type="number" class="form-control" value={this.state.acadTutorIndi} onChange={(value)=> this.setState({acadTutorIndi:value.target.value})}/>
                        </li>
                        <li class="list-group-item col-md-3">
                            <input type="number" class="form-control" value={this.state.profTutorIndi} onChange={(value)=> this.setState({profTutorIndi:value.target.value})}/>
                        </li>
                        <li class="list-group-item col-md-3">
                            <input type="number" class="form-control" value={this.state.admiTutorIndi} onChange={(value)=> this.setState({admiTutorIndi:value.target.value})}/>
                        </li>
                        <li class="list-group-item col-md-3">
                            <input type="number" class="form-control" value={this.state.otrosTutorIn} onChange={(value)=> this.setState({otrosTutorIn:value.target.value})}/>
                        </li>
                    </ul>
                    <br />
                    <h5 class="text-white">Bajas</h5>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <h5 class="text-white">Total de alumnos activos al iniciar el cuatrimestre</h5>
                            <input type="number" class="form-control" value={this.state.totalIniCuatri} onChange={(value) => this.setState({totalIniCuatri:value.target.value})}/>
                        </div>
                        <div class="form-group col-md-6">
                            <h5 class="text-white">Total de bajas al terminar el cuatrimestre</h5>
                            <input type="number" class="form-control" value={this.state.totalTermiCuatri} onChange={(value) => this.setState({totalTermiCuatri:value.target.value})}/>
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
                                    <input type="text" class="form-control" value={this.state.cumpliExH} onChange={(value)=> this.setState({cumpliExH:value.target.value})}/>
                                </li>
                                <li class="list-group-item col-md-3">
                                    <h5>Mujeres</h5>
                                    <input type="text" class="form-control" value={this.state.cumpliExM} onChange={(value)=> this.setState({cumpliExM:value.target.value})}/>
                                </li>
                                <li class="list-group-item col-md-3">
                                        <h5>Hombres</h5>
                                    <input type="text" class="form-control" value={this.state.cumpliExNH} onChange={(value)=> this.setState({cumpliExNH:value.target.value})}/>
                                </li>
                                <li class="list-group-item col-md-3">
                                    <h5>Mujeres</h5>
                                    <input type="text" class="form-control" value={this.state.cumpliExNM} onChange={(value)=> this.setState({cumpliExNM:value.target.value})}/>
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
                                    <input type="text" class="form-control" value={this.state.reprobacH} onChange={(value)=> this.setState({reprobacH:value.target.value})}/>
                                </li>
                                <li class="list-group-item col-md-3">
                                    <h5>Mujeres</h5>
                                    <input type="text" class="form-control" value={this.state.reprobacM} onChange={(value)=> this.setState({reprobacM:value.target.value})}/>
                                </li>
                                <li class="list-group-item col-md-3">
                                        <h5>Hombres</h5>
                                    <input type="text" class="form-control" value={this.state.reprobacNH} onChange={(value)=> this.setState({reprobacNH:value.target.value})}/>
                                </li>
                                <li class="list-group-item col-md-3">
                                    <h5>Mujeres</h5>
                                    <input type="text" class="form-control" value={this.state.reprobacNM} onChange={(value)=> this.setState({reprobacNM:value.target.value})}/>
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
                                    <input type="text" class="form-control" value={this.state.problEcoH} onChange={(value)=> this.setState({problEcoH:value.target.value})}/>
                                </li>
                                <li class="list-group-item col-md-3">
                                    <h5>Mujeres</h5>
                                    <input type="text" class="form-control" value={this.state.problEcoM} onChange={(value)=> this.setState({problEcoM:value.target.value})}/>
                                </li>
                                <li class="list-group-item col-md-3">
                                        <h5>Hombres</h5>
                                    <input type="text" class="form-control" value={this.state.problEcoNH} onChange={(value)=> this.setState({problEcoNH:value.target.value})}/>
                                </li>
                                <li class="list-group-item col-md-3">
                                    <h5>Mujeres</h5>
                                    <input type="text" class="form-control" value={this.state.problEcoNM} onChange={(value)=> this.setState({problEcoNM:value.target.value})}/>
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
                                    <input type="text" class="form-control" value={this.state.dificuTrH} onChange={(value)=> this.setState({dificuTrH:value.target.value})}/>
                                </li>
                                <li class="list-group-item col-md-3">
                                    <h5>Mujeres</h5>
                                    <input type="text" class="form-control" value={this.state.dificuTrM} onChange={(value)=> this.setState({dificuTrM:value.target.value})}/>
                                </li>
                                <li class="list-group-item col-md-3">
                                        <h5>Hombres</h5>
                                    <input type="text" class="form-control" value={this.state.dificuTrNH} onChange={(value)=> this.setState({dificuTrNH:value.target.value})}/>
                                </li>
                                <li class="list-group-item col-md-3">
                                    <h5>Mujeres</h5>
                                    <input type="text" class="form-control" value={this.state.dificuTrNM} onChange={(value)=> this.setState({dificuTrNM:value.target.value})}/>
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
                                    <input type="text" class="form-control" value={this.state.probleTrH} onChange={(value)=> this.setState({probleTrH:value.target.value})}/>
                                </li>
                                <li class="list-group-item col-md-3">
                                    <h5>Mujeres</h5>
                                    <input type="text" class="form-control" value={this.state.probleTrM} onChange={(value)=> this.setState({probleTrM:value.target.value})}/>
                                </li>
                                <li class="list-group-item col-md-3">
                                        <h5>Hombres</h5>
                                    <input type="text" class="form-control" value={this.state.probleTrNH} onChange={(value)=> this.setState({probleTrNH:value.target.value})}/>
                                </li>
                                <li class="list-group-item col-md-3">
                                    <h5>Mujeres</h5>
                                    <input type="text" class="form-control" value={this.state.probleTrNM} onChange={(value)=> this.setState({probleTrNM:value.target.value})}/>
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
                                    <input type="text" class="form-control" value={this.state.cambiCarH} onChange={(value)=> this.setState({cambiCarH:value.target.value})}/>
                                </li>
                                <li class="list-group-item col-md-3">
                                    <h5>Mujeres</h5>
                                    <input type="text" class="form-control" value={this.state.cambiCarM} onChange={(value)=> this.setState({cambiCarM:value.target.value})}/>
                                </li>
                                <li class="list-group-item col-md-3">
                                        <h5>Hombres</h5>
                                    <input type="text" class="form-control" value={this.state.cambiCarNH} onChange={(value)=> this.setState({cambiCarNH:value.target.value})}/>
                                </li>
                                <li class="list-group-item col-md-3">
                                    <h5>Mujeres</h5>
                                    <input type="text" class="form-control" value={this.state.cambiCarNM} onChange={(value)=> this.setState({cambiCarNM:value.target.value})}/>
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
                                    <input type="text" class="form-control" value={this.state.incompHoH} onChange={(value)=> this.setState({incompHoH:value.target.value})}/>
                                </li>
                                <li class="list-group-item col-md-3">
                                    <h5>Mujeres</h5>
                                    <input type="text" class="form-control" value={this.state.incompHoM} onChange={(value)=> this.setState({incompHoM:value.target.value})}/>
                                </li>
                                <li class="list-group-item col-md-3">
                                        <h5>Hombres</h5>
                                    <input type="text" class="form-control" value={this.state.incompHoNH} onChange={(value)=> this.setState({incompHoNH:value.target.value})}/>
                                </li>
                                <li class="list-group-item col-md-3">
                                    <h5>Mujeres</h5>
                                    <input type="text" class="form-control" value={this.state.incompHoNM} onChange={(value)=> this.setState({incompHoNM:value.target.value})}/>
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
                                    <input type="text" class="form-control" value={this.state.faltReglH} onChange={(value)=> this.setState({faltReglH:value.target.value})}/>
                                </li>
                                <li class="list-group-item col-md-3">
                                    <h5>Mujeres</h5>
                                    <input type="text" class="form-control" value={this.state.faltReglM} onChange={(value)=> this.setState({faltReglM:value.target.value})}/>
                                </li>
                                <li class="list-group-item col-md-3">
                                        <h5>Hombres</h5>
                                    <input type="text" class="form-control" value={this.state.faltReglNH} onChange={(value)=> this.setState({faltReglNH:value.target.value})}/>
                                </li>
                                <li class="list-group-item col-md-3">
                                    <h5>Mujeres</h5>
                                    <input type="text" class="form-control" value={this.state.faltReglNM} onChange={(value)=> this.setState({faltReglNM:value.target.value})}/>
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
                                    <input type="text" class="form-control" value={this.state.cambiRegH} onChange={(value)=> this.setState({cambiRegH:value.target.value})}/>
                                </li>
                                <li class="list-group-item col-md-3">
                                    <h5>Mujeres</h5>
                                    <input type="text" class="form-control" value={this.state.cambiRegM} onChange={(value)=> this.setState({cambiRegM:value.target.value})}/>
                                </li>
                                <li class="list-group-item col-md-3">
                                        <h5>Hombres</h5>
                                    <input type="text" class="form-control" value={this.state.cambiRegNH} onChange={(value)=> this.setState({cambiRegNH:value.target.value})}/>
                                </li>
                                <li class="list-group-item col-md-3">
                                    <h5>Mujeres</h5>
                                    <input type="text" class="form-control" value={this.state.cambiRegNM} onChange={(value)=> this.setState({cambiRegNM:value.target.value})}/>
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
                                    <input type="text" class="form-control" value={this.state.cambiUniH} onChange={(value)=> this.setState({cambiUniH:value.target.value})}/>
                                </li>
                                <li class="list-group-item col-md-3">
                                    <h5>Mujeres</h5>
                                    <input type="text" class="form-control" value={this.state.cambiUniM} onChange={(value)=> this.setState({cambiUniM:value.target.value})}/>
                                </li>
                                <li class="list-group-item col-md-3">
                                        <h5>Hombres</h5>
                                    <input type="text" class="form-control" value={this.state.cambiUniNH} onChange={(value)=> this.setState({cambiUniNH:value.target.value})}/>
                                </li>
                                <li class="list-group-item col-md-3">
                                    <h5>Mujeres</h5>
                                    <input type="text" class="form-control" value={this.state.cambiUniNM} onChange={(value)=> this.setState({cambiUniNM:value.target.value})}/>
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
                                    <input type="text" class="form-control" value={this.state.problFamH} onChange={(value)=> this.setState({problFamH:value.target.value})}/>
                                </li>
                                <li class="list-group-item col-md-3">
                                    <h5>Mujeres</h5>
                                    <input type="text" class="form-control" value={this.state.problFamM} onChange={(value)=> this.setState({problFamM:value.target.value})}/>
                                </li>
                                <li class="list-group-item col-md-3">
                                        <h5>Hombres</h5>
                                    <input type="text" class="form-control" value={this.state.problFamNH} onChange={(value)=> this.setState({problFamNH:value.target.value})}/>
                                </li>
                                <li class="list-group-item col-md-3">
                                    <h5>Mujeres</h5>
                                    <input type="text" class="form-control" value={this.state.problFamNM} onChange={(value)=> this.setState({problFamNM:value.target.value})}/>
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
                                    <input type="text" class="form-control" value={this.state.problPerH} onChange={(value)=> this.setState({problPerH:value.target.value})}/>
                                </li>
                                <li class="list-group-item col-md-3">
                                    <h5>Mujeres</h5>
                                    <input type="text" class="form-control" value={this.state.problPerM} onChange={(value)=> this.setState({problPerM:value.target.value})}/>
                                </li>
                                <li class="list-group-item col-md-3">
                                        <h5>Hombres</h5>
                                    <input type="text" class="form-control" value={this.state.problPerNH} onChange={(value)=> this.setState({problPerNH:value.target.value})}/>
                                </li>
                                <li class="list-group-item col-md-3">
                                    <h5>Mujeres</h5>
                                    <input type="text" class="form-control" value={this.state.problPerNM} onChange={(value)=> this.setState({problPerNM:value.target.value})}/>
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
                                    <input type="text" class="form-control" value={this.state.otraH} onChange={(value)=> this.setState({otraH:value.target.value})}/>
                                </li>
                                <li class="list-group-item col-md-3">
                                    <h5>Mujeres</h5>
                                    <input type="text" class="form-control" value={this.state.otraM} onChange={(value)=> this.setState({otraM:value.target.value})}/>
                                </li>
                                <li class="list-group-item col-md-3">
                                        <h5>Hombres</h5>
                                    <input type="text" class="form-control" value={this.state.otraNH} onChange={(value)=> this.setState({otraNH:value.target.value})}/>
                                </li>
                                <li class="list-group-item col-md-3">
                                    <h5>Mujeres</h5>
                                    <input type="text" class="form-control" value={this.state.otraNM} onChange={(value)=> this.setState({otraNM:value.target.value})}/>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <br />
                    <div class="form-group">
                        <h5 class="text-white">Observaciones</h5>
                        <div class="input-group">
                            <textarea class="form-control" aria-label="With textarea" value={this.state.comentario} onChange={(value) => this.setState({comentario:value.target.value})} ></textarea>
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
    }//Función para mostrar los programae asignados al encargado
    read(){
        return this.state.readDatos.map((datosCar)=>{
            return(
                <option>{datosCar.carreTutores}</option>
            );
        });
    }//Función para guardar los cambios ingresados en la base de datos 
    Save(){
        const Url = "http://localhost:3000/apis/ubdate/updateISAT/Aonli";
        const datos = {
            updateId: this.props.match.params.id,
            carreraAcc: this.state.carreraAcc,
            totalGrupo: this.state.totalGrupo, 
            totalTutor: this.state.totalTutor,
            periodoCuatri: this.state.periodoCuatri, 
            totalAtendi: this.state.totalAtendi,
            tutorGrupa: this.state.tutorGrupa,
            totalTemas: this.state.totalTemas, 
            totalTemaVist: this.state.totalTemaVist,
            tutorIndi: this.state.tutorIndi, 
            totalPrograma: this.state.totalPrograma, 
            totalRealiza: this.state.totalRealiza,
            acadTutorIndi: this.state.acadTutorIndi, 
            profTutorIndi: this.state.profTutorIndi, 
            admiTutorIndi: this.state.admiTutorIndi, 
            otrosTutorIn: this.state.otrosTutorIn, 
            totalIniCuatri: this.state.totalIniCuatri, 
            totalTermiCuatri: this.state.totalTermiCuatri, 
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
            comentario:this.state.comentario
        }
        axios.post(Url, datos);
        Swal.fire({
            icon:'success',
            title:'Listo',
            text:'Se han guardo los cambios'
        }).then((result)=>{
            if(result.value){
                window.location.replace("/verisat/"+this.props.match.params.idPE);
            }
        });
    }//Función para salir al HomePE del encargado  
    salir(){
        Swal.fire({
            icon:'question',
            title:'Salir',
            text:'No se guardaran los datos ingresados',
            showCancelButton:true,
            confirmButtonText:'Salir',
            confirmButtonColor:'#d33',
            cancelButtonText:'Cancelar',
            cancelButtonColor:'#1D98CB'
        }).then((result)=>{
            if(result.value){
                window.location.replace("/HomePE/"+this.props.match.params.idPE);
            }
        });
    }//Función para re direccinar a la vista de ver informe de seguimiento 
    verISAT(){
        Swal.fire({
            icon:'question',
            title:'Volver',
            text:'No se guardaran los datos ingresados',
            showCancelButton:true,
            confirmButtonText:'Volver',
            confirmButtonColor:'#d33',
            cancelButtonText:'Cancelar',
            cancelButtonColor:'#1D98CB'
        }).then((result)=>{
            if(result.value){
                window.location.replace("/verisat/"+this.props.match.params.idPE);
            }
        });
    }
}

export default ISAT;