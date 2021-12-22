import React from 'react';
import { Link } from 'react-router-dom';
import '../Home.css';
import imagen from '../../Captura3.PNG';
import axios from 'axios';
import Foolder from '../fooldel';

var sectionStyle = {
    width: "100%",
    height: "600px",
    backgroundImage: "url(" + imagen + ")"
};

class verExamenII extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            readDatos:[]
        }
    }//Metodo para obtener todos los resultados del examen ceneval por grpupo
    componentDidMount(){
        let id = this.props.match.params.id;
        const Url = "http://localhost:3000/apis/list/examenll/"+id;
        axios.get(Url)
        .then(res=>{
            if(res.data.success){
                const datos = res.data.data;
                this.setState({readDatos:datos});
            }
        });
    }
    render(){
        return(
            <div style={ sectionStyle } className="estatic">
                <nav class="navbar navbar-default bg-nav fixed-top" role="navigation">
                    <Link class="navbar-brand color" to={"/HomeT/"+this.props.match.params.id}>SIIUTeM</Link>
                    <ul class="nav justify-content-end">
                        <li class="nav-item">
                            <Link class="boton_salir color navbar-brand" to={"/verEntreIni/"+this.props.match.params.id}>Ver Entrevista Inicial</Link>
                        </li>
                        <li class="nav-item">
                            <li class="nav-item dropdown list">
                                <Link class="nav-link dropdown-toggle color navbar-brand" data-toggle="dropdown">Ver Informes</Link>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link class="dropdown-item" to={"/plan/"+this.props.match.params.id}>Ver Planes de Acción Tutorial</Link>
                                    <Link class="dropdown-item" to={"/reportePlan/"+this.props.match.params.id}>Ver Reportes de Plan de Acción Tutorial A</Link>
                                    <Link class="dropdown-item" to={"/verreportplanB/"+this.props.match.params.id}>Ver Reportes de Plan de Acción Tutorial B</Link>
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
                    <h4 class="text-center text-white">RESULTADOS DEL EXAMEN II</h4>
                    <br></br>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item text-center col-md-1">
                            <h5>Nu.</h5>
                        </li>
                        <li class="list-group-item col-md-3">
                            <h5>Nombre</h5>
                        </li>
                        <li class="list-group-item col-md-3">
                            <h5>Apellidos</h5>
                        </li>
                        <li class="list-group-item col-md-3">
                            <h5>Nu. Control</h5>
                        </li>
                        <li class="list-group-item col-md-2">
                            <h5>Calificación</h5>
                        </li>
                    </ul>
                    {this.read()}
                    <br></br><br></br><br></br><br></br>
                </div>
                <Foolder />
            </div>
        );
    }//Función para mostrar los resultados del examen 
    read(){
        return this.state.readDatos.map((datos, index)=>{
            return(
                <ul class="list-group list-group-horizontal">
                    <li class="list-group-item text-center col-md-1">
                        <h5>{index + 1}</h5>
                    </li>
                    <li class="list-group-item col-md-3">
                        {datos.nombreAlumno}
                    </li>
                    <li class="list-group-item col-md-3">
                        {datos.apellidoAlumno}
                    </li>
                    <li class="list-group-item col-md-3">
                        {datos.numControlA}
                    </li>
                    <li class="list-group-item col-md-2">
                        {datos.resultado}
                    </li>
                </ul>
            );
        }); 
    }
}

export default verExamenII;