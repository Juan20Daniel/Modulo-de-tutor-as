import React from 'react';
import { Link } from 'react-router-dom';
import '../Home.css';
import imagen from '../../Captura3.PNG';
import axios from 'axios';
import Swal from 'sweetalert2/dist/sweetalert2.js';//Librería para los alertas
import 'sweetalert2/src/sweetalert2.scss';//Librería para los alertas
import Foolder from '../fooldel';

var sectionStyle = {
    width: "100%",
    height: "600px",
    backgroundImage: "url(" + imagen + ")"
};

class Plan extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            readDatos:[],
            readSesio:[],
            readAtenc:[],
            campoTem:"",
            campoOpj:"",
            campoAct:"",
            campoRec:"",
            campoEvi:"",
            campoNom:"",
            campoAT:"",
            campoOps:"",
        }
    }// Metodo para obtener los datos generales del plan de acción tutorial 
    componentDidMount(){
        let id = this.props.match.params.id;
        const Url = "http://localhost:3000/apis/list/Grupo/Ciclo/"+id;
        axios.get(Url)
        .then(res=>{
            if(res.data.success){
                const datos = res.data.data[0];
                this.setState({
                    readDatos:datos,
                    campoId:datos.numControlD,
                    campoNomb:datos.nombreDocente,
                    campoApel:datos.apellidoDocente,
                    campoGruTu:datos.grupoDatos,
                    campoCicl:datos.cicloDatos
                });
            }
        });// Metodo para obtener las sesiones programadas de la api
        const Url2 = "http://localhost:3000/apis/list/listVerPlan/ver/"+id;
        axios.get(Url2)
        .then(res=>{
            if(res.data.success){
                const datos2 = res.data.data;
                this.setState({readSesio:datos2});
            }
        });// Metodo para obtener todos los alumnos a atención individual de la apia  
        const Url3 = "http://localhost:3000/apis/list/atencionIndi/list/"+id;
        axios.get(Url3)
        .then(res=>{
            if(res.data.success){
                const datos3 = res.data.data;
                this.setState({readAtenc:datos3});
            }
        });
    }
    render(){    
        return(
            <div style={ sectionStyle } className="estatic">
                <nav class="navbar navbar-default bg-nav fixed-top" role="navigation">
                    <Link class="navbar-brand color" onClick={() => this.salir()}>SIIUTeM</Link>
                    <Link class="boton_salir color navbar-brand" onClick={() => this.volver()}>Volver</Link>
                </nav>
                <br></br><br></br><br></br><br></br>
                <div class="container-fluid">
                    <h4 class="text-center text-white">PLAN DE ACCIÓN TUTORIAL</h4>
                    <br></br>
                    <h5 class="card-title text-white">Sesiones Grupales</h5>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item col-md-2">
                            <h5>Tema</h5>
                        </li>
                        <li class="list-group-item col-md-2">
                            <h5>Actividades</h5>
                        </li>
                        <li class="list-group-item col-md-2">
                            <h5>Recursos</h5>
                        </li>    
                        <li class="list-group-item col-md-2">
                            <h5>Objetivos</h5>
                        </li>
                        <li class="list-group-item col-md-2">
                            <h5>Evidencias</h5>
                        </li>
                        <li class="list-group-item col-md-1">
                            <h5>Editar</h5>
                        </li>
                        <li class="list-group-item col-md-1">
                            <h5>Borrar</h5>
                        </li>
                    </ul>
                    {this.readSesiones()}
                    <br></br>
                    <Link type="button" class="btn btn-primary" title="Añadir nueva sesión" to={"/insertPlan/"+this.props.match.params.id+"/"+this.props.match.params.idTutor}>Añadir</Link>
                    <br></br><br></br><br></br>
                    <h5 class="card-title text-white">Alumnos a atención individual</h5>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item col-md-3">
                            <h5>Nombre</h5>
                        </li>
                        <li class="list-group-item col-md-3">
                            <h5>Asunto a tratar</h5>
                        </li>
                        <li class="list-group-item col-md-4">
                            <h5>Observaciones</h5>
                        </li>
                        <li class="list-group-item col-md-1">
                            <h5>Editar</h5>
                        </li>
                        <li class="list-group-item col-md-1">
                            <h5>Borrar</h5>
                        </li>
                    </ul>
                    {this.atencionIndi()}
                    <br></br>
                    <Link type="button" class="btn btn-primary" title="Añadir nuevo alumnos a atención individual" to={"/insertAtencionIndi/"+this.props.match.params.id+"/"+this.props.match.params.idTutor+"/"+this.state.campoGruTu} >Añadir</Link>
                    <Link type="button" class="btn btn-success" to={"/verPlanInPDF/"+this.props.match.params.id+"/"+this.props.match.params.idTutor}>Generar PDF</Link>
                    <br></br><br></br>      
                </div>
                <br></br><br></br>
                <Foolder />
            </div>
        );
    }// Función para redireccionar a la vista de ver plan
    volver(){
        window.location.replace("/plan/"+this.state.campoId);
    }// Función para redireccionar a la vista de Home del tutor
    salir(){
        window.location.replace("/HomeT/"+this.state.campoId);
    }//Funcion para mostrar los temas, acti, recursos etc, de la api
    readSesiones(){
        return this.state.readSesio.map((datos2)=>{
            return(
                <ul class="list-group list-group-horizontal">
                    <li class="list-group-item col-md-2">
                        <label class="form-check-label" for="exampleCheck1">{datos2.tema}</label>
                    </li>
                    <li class="list-group-item col-md-2">
                        <label class="form-check-label" for="exampleCheck1">{datos2.actividades}</label>
                    </li> 
                    <li class="list-group-item col-md-2">
                        <label class="form-check-label" for="exampleCheck1">{datos2.recursos}</label>
                    </li>
                    <li class="list-group-item col-md-2">
                        <label class="form-check-label" for="exampleCheck1">{datos2.objetivos}</label>
                    </li>  
                    <li class="list-group-item col-md-2">
                        <label class="form-check-label" for="exampleCheck1">{datos2.evidencias}</label>
                    </li>
                    <li class="list-group-item col-md-1">
                        <Link class="btn btn-warning" title="Modificar los datos" to={"/ubdatePlanSesio/"+datos2.idSesionGrupal+"/"+this.props.match.params.id+"/"+this.props.match.params.idTutor}>
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                            </svg>
                        </Link> 
                    </li>
                    <li class="list-group-item col-md-1">
                        <Link class="btn btn-danger" title="Eliminar todo la fila" onClick={() => this.Eliminar(datos2.idSesionGrupal)}>
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/>
                            </svg>
                        </Link> 
                    </li>
                </ul>
            );
        });
    }// Función para mostrar todos los alumnos a atención individual
    atencionIndi(){
        return this.state.readAtenc.map((datos3)=>{
            return(
                <ul class="list-group list-group-horizontal">
                    <li class="list-group-item col-md-3">
                        <h7>{datos3.nombreAlumno+" "+datos3.apellidoAlumno}</h7>
                    </li>
                    <li class="list-group-item col-md-3">
                        <h7>{datos3.asuntoObserva}</h7>
                    </li>
                    <li class="list-group-item col-md-4">
                        <h7>{datos3.observaAtenIndi}</h7>
                    </li>
                    <li class="list-group-item col-md-1">
                        <Link class="btn btn-warning" title="Modificar los datos" to={"/updateAtencionIndi/"+datos3.idAtencionIndi+"/"+datos3.idTutoriasDocentes18+"/"+datos3.grupoTutores}>
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                            </svg>
                        </Link> 
                    </li>
                    <li class="list-group-item col-md-1">
                        <Link class="btn btn-danger" title="Eliminar todo la fila" onClick={() => this.Eliminar2(datos3.idAtencionIndi)}>
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/>
                            </svg>
                        </Link> 
                    </li>
                </ul>
            );
        });
    }//Función del alerta verificar la eliminación de la sesión programada
    Eliminar(idSesionGrupal){
        Swal.fire({
            icon: 'question',
            title:'Eliminar',
            text:'Desea eliminar estos datos',
            showCancelButton:true,
            confirmButtonText:'Si, eliminar',
            confirmButtonColor:'#d33',
            cancelButtonText:'No, eliminar',
            cancelButtonColor:'#1D98CB'
        }).then((result)=>{
            if(result.value){
                this.delete(idSesionGrupal);
            }else{
                Swal.fire(
                    'Cancelado',
                    'Se a cancelado la eliminación',
                    'error'
                );
            }
        });
    }//Función para eliminar la sesion programada
    delete(idDatos){
        const Url = "http://localhost:3000/apis/delete/deleteSesion";
        axios.post(Url,{idSesionGrupal:idDatos})
        .then(response =>{
            if (response.data.success) {
                window.location.replace("/creaPlan/"+this.props.match.params.id+"/"+this.props.match.params.idTutor);
            }
        });
    }// Función del alerta para verificar la eliminación del alumno a atención individual  
    Eliminar2(idAtencionIndi){
        Swal.fire({
            icon: 'question',
            title:'Eliminar',
            text:'Desea eliminar estos datos',
            showCancelButton:true,
            confirmButtonText:'Si, eliminar',
            confirmButtonColor:'#d33',
            cancelButtonText:'No, eliminar',
            cancelButtonColor:'#1D98CB'
        }).then((result)=>{
            if(result.value){
                this.deleteAtenci(idAtencionIndi);
            }else{
                Swal.fire(
                    'Cancelado',
                    'Se a cancelado la eliminación',
                    'error'
                );
            }
        });
    }//Función para eliminar al alumno a atención individual
    deleteAtenci(idAtencion){
        const Url = "http://localhost:3000/apis/atencionDelete/delete";
        axios.post(Url,{idAtencionIndi:idAtencion})
        .then(response =>{
            if (response.data.success) {
                window.location.replace("/creaPlan/"+this.props.match.params.id+"/"+this.props.match.params.idTutor);
            }
        });
    }
}

export default Plan;