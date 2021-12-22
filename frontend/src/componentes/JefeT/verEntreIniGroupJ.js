import React from 'react';
import {Link} from 'react-router-dom';
import '../Home.css';
import axios from 'axios';
import Foolder from '../fooldel';
import imagen from '../../Captura3.PNG';

var sectionStyle = {
    width: "100%",
    height: "600px",
    backgroundImage: "url(" + imagen + ")"
};

class VerEntreIniGroupJ extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            readDatos:[],
            tipo:'Jefe de tutoria'
        }
    }//Metodo para obtener los datos generales del alumno, nombre, apellidos etc.
    componentDidMount(){
        let grupo = this.props.match.params.grupo;
        const Url = "http://localhost:3000/apis/list/solo/grupos/inicial/"+grupo;
        axios.get(Url)
        .then(res=>{
            if(res.data.success){
                const datos = res.data.data;
                this.setState({readDatos:datos});
            }
        }).catch(error=>{
            return error;
        });
    }
    render(){
        return(
            <div style={ sectionStyle } className="estatic">
                <nav class="navbar bg-nav fixed-top" >
                    <Link class="navbar-brand color" to={"/HomeJ/"+this.props.match.params.id}>SIIUTeM</Link>
                    <Link onClick={() => this.volver()} class="boton_salir color navbar-brand">Volver</Link>
                </nav>
                <br></br><br></br><br></br><br></br>
                <div class="container-fluid">
                    <h4 class="text-center text-white">RESULTADOS DE ENTREVISTA INICIAL A ESTUDIANTES DEL GRUPO {this.props.match.params.grupo}</h4>
                    <br></br>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item text-center col-md-1">
                            <h5>Nu.</h5>
                        </li>
                        <li class="list-group-item col-md-3">
                            <h5>Nombre</h5>
                        </li>
                        <li class="list-group-item col-md-4">
                            <h5>Apellidos</h5>
                        </li>
                        <li class="list-group-item col-md-3">
                            <h5>Nu. Control</h5>
                        </li>
                        <li class="list-group-item text-center col-md-1">
                            <h5>Ver</h5>
                        </li>
                    </ul>
                    {this.read()}
                </div>
                <br></br><br></br>
                <Foolder />
            </div>
        );
    }//Función para mostrar los datos
    read(){
        return this.state.readDatos.map((datos, index)=>{
            return(
                <ul class="list-group list-group-horizontal">
                    <li class="list-group-item text-center col-md-1">
                        <h5>{index + 1}</h5>
                    </li>
                    <li class="list-group-item col-md-3">
                        <h7>{datos.nombreAlumno}</h7>
                    </li>
                    <li class="list-group-item col-md-4">
                        <h7>{datos.apellidoAlumno}</h7>
                    </li>
                    <li class="list-group-item col-md-3">
                        <h7>{datos.numControlA}</h7>
                    </li>
                    <li class="list-group-item text-center col-md-1">
                        <Link title="Ver entrevista" to={'/verEntreIniIndividual/'+this.props.match.params.id+"/"+this.props.match.params.grupo+"/"+datos.idAlumnos+"/"+this.state.tipo+"/"+this.props.match.params.volver} class="btn btn-primary">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-card-list" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M14.5 3h-13a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
                            <path fill-rule="evenodd" d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5z"/>
                            <circle cx="3.5" cy="5.5" r=".5"/>
                            <circle cx="3.5" cy="8" r=".5"/>
                            <circle cx="3.5" cy="10.5" r=".5"/></svg>
                        </Link>
                    </li>
                </ul>
            );
        });
    }//Función para volver 
    volver(){
        if(this.props.match.params.volver === "1"){
            window.location.replace("/verEntreIniJ/"+this.props.match.params.id);
        }else{
            window.location.replace("/verEntreIniFiltrar/"+this.props.match.params.id+"/"+this.props.match.params.volver);
        }
    }
}

export default VerEntreIniGroupJ;