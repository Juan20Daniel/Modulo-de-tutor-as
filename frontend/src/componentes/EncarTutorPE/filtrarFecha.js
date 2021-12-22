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

class filtrarFecha extends React.Component{
    constructor(props){
        super(props); 
        this.state = {
            datosRead:[],
            readAnos:[]
        }
    }//Metodo para obtener los datos divididos por grupos
    componentDidMount(){
        let idPE = this.props.match.params.id;
        let ano = this.props.match.params.ano;
        const Url = "http://localhost:3000/apis/list/ver/ano/EntreIntJyPE/"+idPE+"/"+ano;
        axios.get(Url)
        .then(res=>{
            if(res.data.success){
                const datos = res.data.data;
                this.setState({datosRead:datos});
            }
        });//Metodo para mostrar los años en los que se realizo algun registro
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
                    <h4 class="text-center text-white">RESULTADOS DE ENTREVISTA INICIAL DEL {this.props.match.params.ano}</h4>
                    <br></br>
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
                    {this.read()}
                </div>
                <Foolder />
            </div>
        );
    }//Función para mostrar los datos antes mencionados 
    read(){
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
                            <Link title="Ver grupo" to={"/verEntreIniGrupPE/"+this.props.match.params.id+"/"+datos.grupoTutores+"/"+this.props.match.params.ano} class="btn btn-info">
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
    }//Función para mostrar el año para filtrar 
    readAnos(){
        return this.state.readAnos.map((datos2)=>{
            return(
                <option>{datos2.fecha}</option>
            );
        });
    }//Función para filtrar y redireccionar por año 
    filtrar(){
        if(this.state.campoAno === "Todos"){
            window.location.replace("/verEntreIniJyPE/"+this.props.match.params.id);
        }else{
            window.location.replace('/verEntreIniFiltrar/'+this.props.match.params.id+"/"+this.state.campoAno);
        }
    }
}

export default filtrarFecha;