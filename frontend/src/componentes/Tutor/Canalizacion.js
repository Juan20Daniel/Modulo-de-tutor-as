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

class Canalizacion extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            readDatos:[],
            readNoPlan:[]
        }
    }
    componentDidMount(){
        let id = this.props.match.params.id;
        const Url = "http://localhost:3000/apis/list/alumnos/All/canaliza/"+id;
        axios.get(Url)
        .then(res=>{
            const datos = res.data.data;
            this.setState({readDatos:datos});
        });
        const Url2 = "http://localhost:3000/apis/list/Canaliz/no/plan/one/All/"+id;
        axios.get(Url2)
        .then(res=>{
            const datosNo = res.data.data;
            this.setState({readNoPlan:datosNo});
        });
    }
    render(){
        return(
            <div style={ sectionStyle } className="estatic">
                <nav class="navbar navbar-default bg-nav fixed-top" role="navigation">
                    <Link class="navbar-brand color" to={"/HomeT/"+this.props.match.params.id}>SIIUTeM</Link>
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
                                <div class="dropdown-menu col-md-2" aria-labelledby="navbarDropdown">
                                    <Link class="dropdown-item" to={"/plan/"+this.props.match.params.id}>Ver Planes de <br /> Acción Tutorial</Link>
                                    <Link class="dropdown-item" to={"/reportePlan/"+this.props.match.params.id}>Ver Reportes de  <br /> Plan de Acción<br />Tutorial A</Link>
                                    <Link class="dropdown-item" to={"/verreportplanB/"+this.props.match.params.id}>Ver Reporte de  <br /> Plan de Acción  <br /> Tutorial B</Link>
                                    <Link class="dropdown-item" to={"/vercanalizacion/"+this.props.match.params.id}>Ver Alumnos  <br /> Canalizados</Link>
                                </div>
                            </li>
                        </li>
                    </ul>
                </nav>
                <br></br><br></br><br></br><br></br>
                <div class="container-fluid">
                    <h4 class="text-center text-white">CANALIZACIÓN DE ALUMNOS</h4>
                    <br></br>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item col-md-12">
                            <h5>Alumnos planeados</h5>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item text-center col-md-1">
                            <h5>Nu.</h5>
                        </li>
                        <li class="list-group-item col-md-4">
                            <h5>Nombre</h5>
                        </li>
                        <li class="list-group-item col-md-3">
                            <h5>Apellidos</h5>
                        </li>
                        <li class="list-group-item col-md-2">
                            <h5>Grupo</h5>
                        </li>
                        <li class="list-group-item text-center col-md-2">
                            <h5>Canalizar</h5>
                        </li>
                    </ul>
                    {this.read()}
                    <br /><br />
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item col-md-12">
                            <h5>Alumnos no planeados</h5>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item text-center col-md-1">
                            <h5>Nu.</h5>
                        </li>
                        <li class="list-group-item col-md-4">
                            <h5>Nombre</h5>
                        </li>
                        <li class="list-group-item col-md-3">
                            <h5>Apellidos</h5>
                        </li>
                        <li class="list-group-item col-md-2">
                            <h5>Grupo</h5>
                        </li>
                        <li class="list-group-item text-center col-md-2">
                            <h5>Canalizar</h5>
                        </li>
                    </ul>
                    {this.readNoPla()}
                </div>
                <br /><br /><br /><br />
                <Foolder />
            </div>
        );
    }
    read(){
        return this.state.readDatos.map((datos, index)=>{
            return(
                <ul class="list-group list-group-horizontal">
                    <li class="list-group-item text-center col-md-1">
                        <h5>{index + 1}</h5>
                    </li>
                    <li class="list-group-item col-md-4">
                        {datos.nombreAlumno}
                    </li>
                    <li class="list-group-item col-md-3">
                        {datos.apellidoAlumno}
                    </li>
                    <li class="list-group-item col-md-2">
                        {datos.grupoTutores}
                    </li>
                    <li class="list-group-item col-md-2">
                        <center>
                            <Link title="Canalizar alumno" to={"/insertAlumCanali/"+this.props.match.params.id+"/"+datos.idAlumnos+"/planeado"} class="btn btn-primary">
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
    readNoPla(){
        return this.state.readNoPlan.map((datosNo, index)=>{
            return(
                <ul class="list-group list-group-horizontal">
                    <li class="list-group-item text-center col-md-1">
                        <h5>{index + 1}</h5>
                    </li>
                    <li class="list-group-item col-md-4">
                        {datosNo.nombreAlumno}
                    </li>
                    <li class="list-group-item col-md-3">
                        {datosNo.apellidoAlumno}
                    </li>
                    <li class="list-group-item col-md-2">
                        {datosNo.grupoTutores}
                    </li>
                    <li class="list-group-item col-md-2">
                        <center>
                            <Link title="Canalizar alumno" to={"/insertAlumCanali/"+this.props.match.params.id+"/"+datosNo.idAlumnos+"/noPlaneado"} class="btn btn-primary">
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

export default Canalizacion;
