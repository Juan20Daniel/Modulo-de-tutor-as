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

class ResulGrupos extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            readDatos:[],
            readRes:0
        }
    }//Metodo para obtener los datos generales del alumno 
    componentDidMount(){
        let id2 = this.props.match.params.id2;
        let grupo = this.props.match.params.grupo;
        const Url = "http://localhost:3000/apis/list/Group/Result/"+id2+"/"+grupo;
        axios.get(Url)
        .then(res=>{
            if(res.data.success){
                const datos = res.data.data;
                this.setState({readDatos:datos});
            }
        });//Metodo para obtener la calificación del maestro 
        const Url2 = "http://localhost:3000/apis/list/result/cali/final/"+id2+"/"+grupo;
        axios.get(Url2)
        .then(res=>{
            if(res.data.success){
                const cal = res.data.data[0];
                this.setState({readRes:cal.calificacion});
            }
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
                    <h4 class="text-center text-white">RESULTADOS DE LA EVALUACIÓN DOCENTE DEL GRUPO {this.props.match.params.grupo}</h4>
                    <br></br>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item col-md-2">
                            <h5>Calificación</h5>
                        </li>
                        <li class="list-group-item col-md-2">
                            <h5>{this.state.readRes}</h5>
                        </li>
                    </ul>
                    <br />
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
                    <br /><br/><br />
                </div>
                <Foolder />
            </div>
        );
    }//Funcion para mostrar los datos del alumno 
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
                    <li class="list-group-item col-md-4">
                        <h7>{datos.apellidoAlumno}</h7>
                    </li>
                    <li class="list-group-item col-md-3">
                        <h7>{datos.numControlA}</h7>
                    </li>
                    <li class="list-group-item text-center col-md-1">
                        <Link title="Ver cuestionario" class="btn btn-primary" to={"/verResulEvalua/"+this.props.match.params.id+"/"+this.props.match.params.id2+"/"+this.props.match.params.grupo+"/"+datos.idAlumnos+"/"+this.props.match.params.ano}>
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
    }//Función para volver a la vista de encuestas o a filtrar 
    volver(){
        if(this.props.match.params.ano === "1"){
            window.location.replace("/encuestaF/"+this.props.match.params.id);
        }else{
            window.location.replace("/verResEvafilte/"+this.props.match.params.id+"/"+this.props.match.params.ano);
        }
    }
}
export default ResulGrupos;