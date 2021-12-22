import React from 'react';
import {Link} from 'react-router-dom';
import '../Home.css';
import imagen from '../../Captura3.PNG';
import Foolder from '../fooldel';
import axios from 'axios';

var sectionStyle = {
    width: "100%",
    height: "600px",
    backgroundImage: "url(" + imagen + ")"
};

class verResIndiExamII extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            readDatos:[],
            readAnos:[]
        }
    }//Metodo para obtener los datos de las entrevistas iniciales divididos por grupos 
    componentDidMount(){
        let ano = this.props.match.params.ano;
        const Url = "http://localhost:3000/apis/list/filtr/res/exa/cene/for/anos/jefe/"+ano;
        axios.get(Url)
        .then(res=>{
            const datos = res.data.data;
            this.setState({readDatos:datos});
        });//Metodo para obtener los años a filtrar 
        const Url2 = "http://localhost:3000/apis/list/filtrar/res/examen/ceneval/jefe";
        axios.get(Url2)
        .then(res=>{
            const anos = res.data.data;
            this.setState({readAnos:anos});
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
                                    <Link class="dropdown-item" to={"/encuestaF/"+this.props.match.params.id}>Ver Resultados de <br /> Enciesta de Satisfacción</Link>
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
                                <Link class="btn btn-outline-light" onClick={() => this.filtrar()} type="button">Buscar</Link>
                            </div>
                        </li>
                    </ul>
                </nav>
                <br></br><br></br><br></br><br></br>
                <div class="container-fluid">
                    <h4 class="text-center text-white">INFORMES DEL EXAMEN CENEVAL POR GRUPOS DEL AÑO {this.props.match.params.ano}</h4>
                    <br></br>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item text-center col-md-1">
                            <h5>Nu.</h5>
                        </li>
                        <li class="list-group-item col-md-2">
                            <h5>Grupo</h5>
                        </li>
                        <li class="list-group-item col-md-7">
                            <h5>Carrera</h5>
                        </li>
                        <li class="list-group-item col-md-1">
                            <h5>Año</h5>
                        </li>
                        <li class="list-group-item text-center col-md-1">
                            <h5>Ver</h5>
                        </li>
                    </ul>
                    {this.read()}
                    <br /><br /><br /><br />
                </div>
                <Foolder />
            </div>
        );
    }//Función para mostrar los datos divididos por grupos
    read(){
        return this.state.readDatos.map((datos, index)=>{
            return(
                <ul class="list-group list-group-horizontal">
                    <li class="list-group-item text-center col-md-1">
                        <h5>{index + 1}</h5>
                    </li>
                    <li class="list-group-item col-md-2">
                        <h7>{datos.grupoTutores}</h7>
                    </li>
                    <li class="list-group-item col-md-7">
                        <h7>{datos.carreTutores}</h7>
                    </li>
                    <li class="list-group-item col-md-1">
                        <h7>{datos.ano}</h7>
                    </li>
                    <li class="list-group-item text-center col-md-1">
                        <center>
                            <Link title="Ver grupo" class="btn btn-primary" to={"/verIfrmGrupExII/"+this.props.match.params.id+"/"+datos.grupoTutores+"/"+this.props.match.params.ano}>
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
        return this.state.readAnos.map((anos)=>{
            return(
                <option>{anos.ano}</option>
            );
        });
    }// Función para re direccionar y filtrar 
    filtrar(){
        if(this.state.campoAno === "Todos"){
            window.location.replace("/verInfores/"+this.props.match.params.id);
        }else{
            window.location.replace('/verResIndiExamII/'+this.props.match.params.id+"/"+this.props.match.params.ano);
        }
    }
}

export default verResIndiExamII;