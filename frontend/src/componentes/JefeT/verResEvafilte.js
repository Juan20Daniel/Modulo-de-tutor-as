import React from 'react';
import {Link} from 'react-router-dom';
import '../Home.css';
import axios from 'axios';
import imagen from '../../Captura3.PNG';
import Foolder from '../fooldel';

var sectionStyle = {
    width: "100%",
    height: "600px",
    backgroundImage: "url(" + imagen + ")"
};

class verResEvafilte extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            readDatos:[],
            readAnos:[],
            campoAno:""
        }
    }//Metodo para obtener los resultados filtrados del los resultados de la evaluación 
    componentDidMount(){
        let ano = this.props.match.params.ano;
        const Url = "http://localhost:3000/apis/list/ano/Filtrar/group/"+ano;
        axios.get(Url)
        .then(res=>{
            if(res.data.success){
                const datos = res.data.data;
                this.setState({readDatos:datos});
            }
        });//Metodo para obtener los años para filtrar 
        const Anos = "http://localhost:3000/apis/list/ano/All";
        axios.get(Anos)
        .then(res=>{
            if(res.data.success){
                const datos2 = res.data.data;
                this.setState({readAnos:datos2});
            }
        });
    }
    render(){
        return(
            <div style={ sectionStyle } className="estatic">
                <nav class="navbar bg-nav fixed-top" >
                    <Link class="navbar-brand color" to={"/HomeJ/"+this.props.match.params.id}>SIIUTeM</Link>
                    <ul class="nav justify-content-end">
                        <li class="nav-item">
                            <li class="nav-item dropdown list">
                                <Link class="nav-link dropdown-toggle color navbar-brand" data-toggle="dropdown">Ver Informes</Link>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link class="dropdown-item" to={"/verInfores/"+this.props.match.params.id}>Ver Resultados de <br /> Examen II</Link>
                                    <Link class="dropdown-item" to={"/verEntreIniJ/"+this.props.match.params.id}>Ver Resultados de <br /> Entrevista Inicial</Link>
                                </div>
                            </li>
                        </li>
                        <li class="nav-item dropdown list">
                            <Link to={"/subInfo/"+this.props.match.params.id} class="boton_salir color navbar-brand">Subir Resultados de Examen II</Link><br></br>
                        </li>
                        <li class="nav-item dropdown list">
                            <div class="form-inline">
                                <select class="form-control mr-sm-2" value={this.props.match.params.ano} onChange={(value) => this.setState({campoAno:value.target.value})}>
                                    <option value="Todos">Todos los resultados</option>
                                    {this.readAnos()}
                                </select>
                                <button class="btn btn-outline-light" onClick={() => this.filtrar()} type="button">Buscar</button>
                            </div>
                        </li>
                    </ul>
                </nav>
                <br></br><br></br><br></br><br></br>
                <div class="container-fluid">
                <h4 class="text-center text-white">LISTA DE TODOS LOS TUTORES EVALUADOS EN EL {this.props.match.params.ano}</h4>
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
                        <li class="list-group-item col-md-2">
                            <h5>Nu. Control</h5>
                        </li>
                        <li class="list-group-item col-md-2">
                            <h5>Calificación</h5>
                        </li>
                        <li class="list-group-item text-center col-md-1">
                            <h5>Ver</h5>
                        </li>
                    </ul>
                    {this.read()}
                </div>
                <Foolder />
            </div>
        );
    }//Función para mostrar los datos generales del alumno o los alumnos 
    read(){
        return this.state.readDatos.map((datos, index)=>{
            return(
                <ul class="list-group list-group-horizontal">
                    <li class="list-group-item text-center col-md-1">
                        <h5>{index + 1}</h5>
                    </li>
                    <li class="list-group-item col-md-3">
                        <h7>{datos.nombreDocente}</h7>
                    </li>
                    <li class="list-group-item col-md-3">
                        <h7>{datos.apellidoDocente}</h7>
                    </li>
                    <li class="list-group-item col-md-2">
                        <h7>{datos.numControlD}</h7>
                    </li>
                    <li class="list-group-item col-md-2">
                        <h7>{datos.grupoTutores}</h7>
                    </li>
                    <li class="list-group-item text-center col-md-1">
                        <center>
                            <Link title="Ver grupo" to={'/verResulGrupos/'+this.props.match.params.id+"/"+datos.numControlD+"/"+datos.grupoTutores+"/"+this.props.match.params.ano} class="btn btn-primary">
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-card-list" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M14.5 3h-13a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
                                <path fill-rule="evenodd" d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5z"/>
                                <circle cx="3.5" cy="5.5" r=".5"/>
                                <circle cx="3.5" cy="8" r=".5"/>
                                <circle cx="3.5" cy="10.5" r=".5"/>
                                </svg>
                            </Link>
                        </center>
                    </li>
                </ul>
            );
        });
    }//Función para mostrar el año a filtrar 
    readAnos(){
        return this.state.readAnos.map((datos2)=>{
            return(
                <option>{datos2.fecha}</option>
            );
        });
    }//Función para filtrar y re direccionar   
    filtrar(){
        if(this.state.campoAno === "Todos"){
            window.location.replace("/encuestaF/"+this.props.match.params.id);
        }else{
            window.location.replace('/verResEvafilte/'+this.props.match.params.id+"/"+this.state.campoAno);
        }
    }
}
export default verResEvafilte;