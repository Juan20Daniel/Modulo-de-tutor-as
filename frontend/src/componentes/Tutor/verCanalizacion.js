import React from 'react';
import { Link } from 'react-router-dom';
import '../Home.css';
import axios from 'axios';
import imagen from '../../Captura3.PNG';
import Swal from 'sweetalert2/dist/sweetalert2.js';//Librería para los alerts
import 'sweetalert2/src/sweetalert2.scss';//Librería para los alerts
import Foolder from '../fooldel';

var sectionStyle = {
    width: "100%",
    height: "600px",
    backgroundImage: "url(" + imagen + ")"
};

class verCanalizacion extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            readDatos:[]
        }
    }//Metodo para obtener los datos generales de las canalizaciones, de la api
    componentDidMount(){
        let id = this.props.match.params.id; 
        const Url = "http://localhost:3000/apis/list/canalizacion/"+id;
        axios.get(Url)
        .then(res=>{
            if(res.data.success){
                const datos = res.data.data;
                this.setState({readDatos:datos});
            }
        }).catch(error=>{
            return error;
        });//Metodo para optener el correo la contraseña del tutor para enviar el correo a la área 
        const Url2 = 'http://localhost:3000/apis/list/emil/password/docente/'+id;
        axios.get(Url2)
        .then(res=>{
            const datosT = res.data.data[0];
            this.setState({
                emailDocen:datosT.correoDocente,
                password:datosT.passwordDocente,
                nombreDocente:datosT.nombreDocente, 
                apellidoDocente:datosT.apellidoDocente
            });
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
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link class="dropdown-item" to={"/plan/"+this.props.match.params.id}>Ver Planes de Acción Tutorial</Link>
                                    <Link class="dropdown-item" to={"/reportePlan/"+this.props.match.params.id}>Ver Reportes de Plan de Acción Tutorial A</Link>
                                    <Link class="dropdown-item" to={"/verreportplanB/"+this.props.match.params.id}>Ver Reportes de Plan de Acción Tutorial B</Link>
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
                <h4 class="text-center text-white">LISTA DE TODOS LOS ALUMNOS CANALIZADOS</h4>
                    <br></br>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item text-center col-md-1">
                            <h5>Nu.</h5>
                        </li>
                        <li class="list-group-item col-md-2">
                            <h5>Nombre</h5>
                        </li>
                        <li class="list-group-item col-md-3">
                            <h5>Apellidos</h5>
                        </li>
                        <li class="list-group-item col-md-1">
                            <h5>Grupo</h5>
                        </li>
                        <li class="list-group-item col-md-2">
                            <h5>Fecha</h5>
                        </li>
                        <li class="list-group-item text-center col-md-1">
                            <h5>Ver</h5>
                        </li>
                        <li class="list-group-item text-center col-md-1">
                            <h5>Editar</h5>
                        </li>
                        <li class="list-group-item text-center col-md-1">
                            <h5>Borrar</h5>
                        </li>
                    </ul> 
                    {this.listData()}
                </div> 
                <br /> <br /> <br /> <br /> <br /> <br />
                <Foolder />
            </div>
        );
    }
    listData(){
        return this.state.readDatos.map((datos, index)=>{
            return(
                <ul class="list-group list-group-horizontal">
                    <li class="list-group-item text-center col-md-1">
                        <h5>{index + 1}</h5>
                    </li>
                    <li class="list-group-item col-md-2">
                        {datos.nombreAlumno}
                    </li>
                    <li class="list-group-item col-md-3">
                        {datos.apellidoAlumno}
                    </li>
                    <li class="list-group-item col-md-1">
                        {datos.grupoTutores}
                    </li>
                    <li class="list-group-item col-md-2">
                        {datos.fechaCanalAlu}
                    </li>
                    <li class="list-group-item text-center col-md-1">
                        <center>
                            <Link title="Ver canalización" to={"/verIndiCanalizacion/"+this.props.match.params.id+"/"+datos.idCanaliAlum} class="btn btn-primary">
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-card-list" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M14.5 3h-13a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
                                <path fill-rule="evenodd" d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5z"/>
                                <circle cx="3.5" cy="5.5" r=".5"/>
                                <circle cx="3.5" cy="8" r=".5"/>
                                <circle cx="3.5" cy="10.5" r=".5"/></svg>
                            </Link>
                        </center>
                    </li>
                    <li class="list-group-item text-center col-md-1">
                        <center>
                            <Link title="Modificar canalización" class="btn btn-warning" to={"/updateCanalizacion/"+datos.idCanaliAlum+'/'+this.props.match.params.id+"/"+datos.idAlumnos14}>
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/></svg>
                            </Link>
                        </center>
                    </li>
                    <li class="list-group-item text-center col-md-1">
                        <center>
                            <button title="Eliminar canalización" class="btn btn-danger eliminar" onClick={() => this.Eliminar(datos.idCanaliAlum, this.state.emailDocen, this.state.password, datos.areaCanalAlu, datos.nombreAlumno, datos.apellidoAlumno, this.state.nombreDocente, this.state.apellidoDocente)}>
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/></svg>
                            </button>
                        </center>
                    </li>
                </ul> 
            );
        });
    }//Función para obtener los datos a mandar tanto por correo como para eliminar  
    Eliminar(idCanaliAlum, emailDocen, password, areaCanalAlu, nombreAlumno, apellidoAlumno, nombreDocente, apellidoDocente){
        Swal.fire({
            icon: 'question',
            title:'Eliminar',
            text:'Desea eliminar este archivo',
            showCancelButton:true,
            confirmButtonText:'Si, eliminar',
            confirmButtonColor:'#d33',
            cancelButtonText:'No, eliminar',
            cancelButtonColor:'#1D98CB'
        }).then((result)=>{
            if(result.value){
                this.delete(idCanaliAlum, emailDocen, password, areaCanalAlu, nombreAlumno, apellidoAlumno, nombreDocente, apellidoDocente);
            }else{
                Swal.fire(
                    'Cancelado',
                    'Se a cancelado la eliminación',
                    'error'
                );
            }
        });
    }//Fución para eliminar y mandar el correo
    delete(idDatos, EmailDoce, PassDoce, AreaCan, NombreAlu, ApellidAlu, NomDocen, ApellidDoce){
        (async () => {
            const { value: text } = await Swal.fire({
                icon:'question',
                title:'¿Cuál es el motivo de la eliminación',
                input: 'textarea',
                inputPlaceholder: 'Ingrese el motivo',
                inputAttributes: {
                    'aria-label': 'Type your message here'
                },
                showCancelButton: true,
                confirmButtonColor:'#d33',
                cancelButtonColor:'#1D98CB'
            });
            if (text) {
                if(AreaCan === "Psicólogo"){
                    AreaCan = 'juandaniel200031@gmail.com';
                }else if(AreaCan === "Pedagogo"){
                    AreaCan = 'juanmendes389@gmail.com';
                }else if(AreaCan === "Becas"){
                    AreaCan = "juandaniel200031@gmail.com";
                }else if(AreaCan === "Enfermería"){
                    AreaCan = "juandaniel200031@gmail.com";
                }else if(AreaCan === "Incubadora"){
                    AreaCan = "juandaniel200031@gmail.com";
                }else if(AreaCan === "Bolsa de trabajo"){
                    AreaCan = "juandaniel200031@gmail.com";
                }else if(AreaCan === "Asesoría Académica"){
                    AreaCan = "juandaniel200031@gmail.com";
                }
                const Url = "http://localhost:3000/apis/delete/canalizacion";
                axios.post(Url,{
                    idCanaliAlum:idDatos,
                    from:EmailDoce, 
                    to:AreaCan, 
                    subject:'La canalización del alumno: '+NombreAlu+" "+ApellidAlu+', se a eliminado', 
                    text:'El tutor: '+NomDocen+" "+ApellidDoce+', elimino la canalización por el motivo: '+text, 
                    user:EmailDoce, 
                    pass:PassDoce
                })
                .then(response =>{
                    if (response.data.success){
                        Swal.fire({
                            icon:'success',
                            title:'Listo',
                            text:'Se a eliminado la canalización'
                        }).then((result)=>{
                            if(result.value){
                                window.location.replace("/vercanalizacion/"+this.props.match.params.id);
                            }
                        });
                    }
                });
            }
        })()
    }
}

export default verCanalizacion;