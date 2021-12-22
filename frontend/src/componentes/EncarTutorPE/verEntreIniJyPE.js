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

class verEntreIntJyPE extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            datosRead:[],
            readAnos:[],
            campoAux:1,
            campoAno:""
        }
    }//Metodo obtener los datos más generales de la entrevista inicial, grupo, fecha, etc.
    componentDidMount(){
        let idPE = this.props.match.params.id;
        const Url = 'http://localhost:3000/apis/list/verEntreIntJyPE/'+idPE;
        axios.get(Url)
        .then(res=>{
            if(res.data.success){
                const datos = res.data.data;
                this.setState({datosRead:datos});
            }
        }).catch(error=>{
            return error;
        }); //Metodo para obtener los años en las que haya registros para filtrar por año 
        const Anos = "http://localhost:3000/apis/list/ano/All/entrevista/inicial";
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
                <nav class="navbar navbar-default bg-nav fixed-top" role="navigation">
                    <Link class="navbar-brand color" to={"/HomePE/"+this.props.match.params.id}>SIIUTeM</Link>
                    <ul class="nav justify-content-end">
                        <li class="nav-item dropdown list">
                            <Link to={"/verisat/"+this.props.match.params.id} class="boton_salir color navbar-brand">Ver Informes de Seguimiento</Link>
                        </li>
                        <li class="nav-item dropdown list">
                            <Link to={"/cambiot/"+this.props.match.params.id} class="boton_salir color navbar-brand">Cambio de Tutor</Link>
                        </li>
                        <li class="nav-item dropdown list">
                            <Link to={"/isat/"+this.props.match.params.id} class="boton_salir color navbar-brand">Informe de Seguimiento de Acción Tutorial</Link><br></br>
                        </li>
                        <li class="nav-item dropdown list">
                            <div class="form-inline">
                                <select class="form-control mr-sm-2" onChange={(value) => this.setState({campoAno:value.target.value})}>
                                    <option>Todos los resultados</option>
                                    {this.readAnos()}
                                </select>
                                <button class="btn btn-outline-light" onClick={() => this.Filtrar()} type="button">Buscar</button>
                            </div>
                        </li>
                    </ul>
                </nav>
                <br></br><br></br><br></br><br></br>
                <h4 class="text-center text-white">TODOS LOS RESULTADOS DE LAS ENTREVISTAS INICIALES</h4>
                <br />
                <div class="container-fluid">
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item text-center col-md-1">
                             <h5>Nu.</h5>
                        </li>
                        <li class="list-group-item col-md-5">
                             <h5>Grupo</h5>
                        </li>
                        <li class="list-group-item col-md-5">
                             <h5>Año</h5>
                        </li>
                        <li class="list-group-item text-center col-md-1">
                             <h5>Ver</h5>
                        </li>
                    </ul>
                    {this.Read()}
                </div>
                <br></br><br></br><br></br><br></br>
                <Foolder />
            </div>
        );
    }//Función para mostrar los datos generales de la entrevista inicial 
    Read(){
        return this.state.datosRead.map((datos, index)=>{
            return(
                <ul class="list-group list-group-horizontal">
                    <li class="list-group-item text-center col-md-1">
                        <h5>{index + 1}</h5>
                    </li>
                    <li class="list-group-item col-md-5">
                        <h7>{datos.grupoTutores}</h7>
                    </li>
                    <li class="list-group-item col-md-5">
                        <h7>{datos.fechaDatos}</h7>
                    </li>
                    <li class="list-group-item text-center col-md-1">
                        <center>
                            <Link title="Ver grupo" to={"/verEntreIniGrupPE/"+this.props.match.params.id+"/"+datos.grupoTutores+"/"+this.state.campoAux} class="btn btn-info">
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
    }//Función para mostrar los años a filtrar 
    readAnos(){
        return this.state.readAnos.map((datos2)=>{
            return(
                <option>{datos2.fecha}</option>
            );
        });
    }//Función para filtrar y re direccionar 
    Filtrar(){
        window.location.replace("/filtrarFecha/"+this.props.match.params.id+"/"+this.state.campoAno);
    }
}

export default verEntreIntJyPE;