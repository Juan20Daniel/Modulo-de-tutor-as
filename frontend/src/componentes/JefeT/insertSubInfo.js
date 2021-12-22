import React from 'react';
import {Link} from 'react-router-dom';
import '../Home.css';
import axios from 'axios';
import imagen from '../../Captura3.PNG';
import Foolder from '../fooldel';
import Swal from 'sweetalert2/dist/sweetalert2.js';//Librería para los alertas
import 'sweetalert2/src/sweetalert2.scss';//Librería para los alertas

var sectionStyle = {
    width: "100%",
    height: "600px",
    backgroundImage: "url(" + imagen + ")"
};

class subInfo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            readNomb:[],
            readResu:[],
            campoCalif:0,
            campoNombreCom:""
        }
    }//Metodo para obtener los nombres del grupo seleccionado 
    componentDidMount(){
        let grupo = this.props.match.params.grupo;
        const Url = "http://localhost:3000/apis/list/grupos/examenll/all/"+grupo;
        axios.get(Url)
        .then(res=>{
            if(res.data.success){
                const nombres = res.data.data;
                this.setState({readNomb:nombres});
            }
        });//Metodo para obtener el resultado ingresado 
        const Url2 = "http://localhost:3000/apis/list/result/examen/ll/"+grupo;
        axios.get(Url2)
        .then(res=>{
            if(res.data.success){
                const results = res.data.data;
                this.setState({readResu:results});
            }
        });//Metodo para obtener el numero de control del tutor 
        const Url3 = "http://localhost:3000/apis/list/onli/idTutor/examenII/"+grupo;
        axios.get(Url3)
        .then(res=>{
            if(res.data.success){
                const idTutor = res.data.data[0];
                this.setState({
                    campoIdTutor:idTutor.idTutoriasDocentes18
                });
            }
        });
    }
    render(){
        return(
            <div style={ sectionStyle } className="estatic">
                <nav class="navbar bg-nav fixed-top" >
                    <Link class="navbar-brand color" to={"/HomeJ/"+this.props.match.params.id}>SIIUTeM</Link>
                    <Link to={"/subInfo/"+this.props.match.params.id} class="boton_salir color navbar-brand">Volver</Link>
                </nav>
                <br></br><br></br><br></br><br/>
                <div class="container">
                    <h4 class="text-center text-white">INFORME DE EXAMEN II DEL GRUPO {this.props.match.params.grupo}</h4>
                    <br></br> <br></br> <br></br>
                    <div class="d-inline-block col-md-4 form-group">
                        <ul class="list-group list-group-vertical">
                            <li class="list-group-item col-md-12">
                                <h5>Registro de calificación</h5>
                                <ul class="list-group list-group-vertical">
                                    <select class="form-control col-md-12" onChange={(value) => this.setState({campoNombreCom:value.target.value})}>
                                        <option selected="true" disabled="disabled">seleccione un alumno</option>
                                        {this.nombres()} 
                                    </select><br />
                                    <h5>Calificación</h5>
                                    <input type="number" value={this.state.campoCalif} onChange={(value) => this.setState({campoCalif:value.target.value})} class="form-control"/><br /><br />
                                    <input type="button" class="btn btn-primary" onClick={() => this.sava()} value="Agregar"/>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="d-inline-block col-md-8 form-group">
                        <ul class="list-group list-group-vertical">
                            <li class="list-group-item col-md-12">
                                <h5>Alumnos</h5>
                                <ul class="list-group list-group-horizontal">
                                    <li  class="list-group-item text-center col-md-2">
                                        <h5>Nu.</h5> 
                                    </li>
                                    <li  class="list-group-item col-md-5">
                                        <h5>Nombre Completo</h5> 
                                    </li>
                                    <li  class="list-group-item col-md-3">
                                        <h5>Calificación</h5> 
                                    </li>
                                    <li  class="list-group-item text-center col-md-2">
                                        <h5>Borrar</h5> 
                                    </li>
                                </ul>
                                {this.results()}
                            </li>
                        </ul>
                    </div>
                    <br /><br /><br /><br />
                </div>
                <Foolder />
            </div>
        );
    }//Función para mostrar los datos como el nombre y los apellidos del alumno 
    nombres(){
        return this.state.readNomb.map((nombres)=>{
            return(
            <option value={nombres.idAlumnos}>{nombres.nombreAlumno} {nombres.apellidoAlumno}</option>
            );
        });
    }//Función para guardar o registrar los datos de en la base 
    sava(){
        let idAlumno17 = this.state.campoNombreCom;
        if(this.state.campoNombreCom === ""){
            Swal.fire(
                'Error',
                'El campo Registro de calificación no deve estar vacío'
            );
        }else if(this.state.campoCalif <= 0){
            Swal.fire(
                'Error',
                'El valor del campo Calificación debe ser mayor a 0'
            );
        }else{
            const Url = "http://localhost:3000/apis/update/result/examenll/Alum/"+idAlumno17
            const datos = {
                resultado: this.state.campoCalif,  
            }
            axios.put(Url, datos);
            window.location.replace("/insertSubInfo/"+this.props.match.params.id+"/"+this.props.match.params.grupo);
        }
    }//Función para mostrar los datos del alumno junto con la calificación 
    results(){
        return this.state.readResu.map((results, index)=>{
            return(
                <ul class="list-group list-group-horizontal">
                    <li class="list-group-item text-center col-md-2">
                        <h5>{index + 1}</h5>
                    </li>
                    <li class="list-group-item col-md-5">
                        {results.nombreAlumno+" "+results.apellidoAlumno} 
                    </li>
                    <li class="list-group-item col-md-3">
                        {results.resultado} 
                    </li>
                    <li class="list-group-item text-center col-md-2">
                        <center>
                            <button title="Eliminar calificación" class="btn btn-danger eliminar" onClick={() => this.Eliminar(results.idAlumnos17)}>
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/></svg>
                            </button>
                        </center>
                    </li>
                </ul>
            );
        });
    }//Función para el alerta de verificación para eliminar la calificación del alumno
    Eliminar(idAlumno17){
        Swal.fire({
            icon: 'question',
            title:'Eliminar',
            text:'Desea eliminar esta calificación',
            showCancelButton:true,
            confirmButtonText:'Si, eliminar',
            confirmButtonColor:'#d33',
            cancelButtonText:'No, eliminar',
            cancelButtonColor:'#1D98CB'
        }).then((result)=>{
            if(result.value){
                this.delete(idAlumno17);
            }else{
                Swal.fire(
                    'Cancelado',
                    'Se a cancelado la eliminación',
                    'error'
                );
            }
        });
    }//Función para guardar los datos en la base
    delete(idDatos){
        const Url = "http://localhost:3000/apis/update/Result/For/groups/delete";
        axios.post(Url,{idAlumno17:idDatos})
        .then(response =>{
            if (response.data.success) {
                window.location.replace("/insertSubInfo/"+this.props.match.params.id+"/"+this.props.match.params.grupo);
            }
        });
    }
}

export default subInfo;