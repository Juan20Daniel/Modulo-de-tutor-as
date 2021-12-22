import React from 'react';
import { Link } from 'react-router-dom';
import '../Home.css';
import axios from 'axios';
import imagen from '../../Captura3.PNG';
import Foolder from '../fooldel';

var sectionStyle = {
    width: "100%",
    height: "600px",
    backgroundImage: "url(" + imagen + ")"
};

class reportPlan extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            datosRead:[]
        }
    }//Metodo para obtener datos generales de la api por parte el reporte de plan de acción B
    componentDidMount(){
        const Url = 'http://localhost:3000/apis/list/report/plan/accion/B/'+this.props.match.params.id; 
        axios.get(Url)
        .then(res=>{
            if(res.data.success){
                const datos = res.data.data;
                this.setState({datosRead:datos});
            }
        }).catch(error=>{
            return error;
        });  
    }
    render(){
        return(
            <div style={ sectionStyle } className="estatic">
                <nav class="navbar navbar-default bg-nav fixed-top" role="navigation">
                    <Link class="navbar-brand color" to={"/HomeT/"+this.props.match.params.id} >SIIUTeM</Link>
                    <ul class="nav justify-content-end">
                        <li class="nav-item">
                            <li class="nav-item dropdown list">
                                <Link class="nav-link dropdown-toggle color navbar-brand" data-toggle="dropdown">Ver Resultados</Link>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link class="dropdown-item" to={"/verEntreIni/"+this.props.match.params.id}>Ver Entrevista Inicial</Link>
                                    <Link class="dropdown-item" to={"/verExameII/"+this.props.match.params.id}>Ver Resultados de Examen II</Link>
                                </div>
                            </li>
                        </li>
                        <li class="nav-item">
                            <li class="nav-item dropdown list">
                                <Link class="nav-link dropdown-toggle color navbar-brand" data-toggle="dropdown">Ver Informes</Link>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link class="dropdown-item" to={"/plan/"+this.props.match.params.id}>Ver Planes de Acción Tutorial</Link>
                                    <Link class="dropdown-item" to={"/reportePlan/"+this.props.match.params.id}>Ver Reportes de Plan de Acción Tutorial A</Link>
                                    <Link class="dropdown-item" to={"/vercanalizacion/"+this.props.match.params.id}>Ver Alumnos Canalizados</Link>
                                </div>
                            </li>
                        </li>
                        <li class="nav-item">
                            <Link class="boton_salir color navbar-brand" to={"/canalizacion/"+this.props.match.params.id}>Canalización de Alumno</Link>
                        </li>
                    </ul>
                </nav>
                <br></br><br></br><br></br><br></br>
                <div class="container-fluid">
                    <h4 class="text-center text-white">REPORTES DE PLAN DE ACCIÓN TUTORIAL B</h4>
                    <br></br>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item text-center col-md-1">
                            <h5>Nu.</h5>
                        </li>
                        <li class="list-group-item col-md-4">
                            <h5>Nombre</h5>
                        </li>
                        <li class="list-group-item col-md-4">
                            <h5>Apellidos</h5>
                        </li>
                        <li class="list-group-item col-md-2">
                            <h5>Grupo</h5>
                        </li>
                        <li class="list-group-item text-center col-md-1">
                            <h5>Ver</h5>
                        </li>
                    </ul>
                    {this.readPlan()}
                </div>
                <Foolder />
            </div>
        );
    }// Función para mostrar los datos generales de la api
    readPlan(){
        return this.state.datosRead.map((datos, index)=>{
            return(
                <ul class="list-group list-group-horizontal">
                    <li class="list-group-item text-center col-md-1">
                        <h5>{index + 1}</h5>
                    </li>
                    <li class="list-group-item col-md-4">
                        {datos.nombreDocente}
                    </li>
                    <li class="list-group-item col-md-4">
                        {datos.apellidoDocente}
                    </li>
                    <li class="list-group-item col-md-2">
                        {datos.grupoDatos}
                    </li>
                    <li class="list-group-item col-md-1">
                        <center>
                            <Link title="Ver informe" to={"/verReportePlanBIndi/"+this.props.match.params.id+"/"+datos.grupoDatos+"/"+datos.cicloDatos+"/"+datos.nombreDocente+"/"+datos.apellidoDocente+"/"+datos.idDatosAccion} class="btn btn-primary">
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-card-list" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M14.5 3h-13a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
                                <path fill-rule="evenodd" d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5z"/>
                                <circle cx="3.5" cy="5.5" r=".5"/>
                                <circle cx="3.5" cy="8" r=".5"/>
                                <circle cx="3.5" cy="10.5" r=".5"/></svg>
                            </Link>
                        </center>
                    </li>
                </ul>
            
            );
        });
    }
}

export default reportPlan;