import React from 'react';
import {Link} from 'react-router-dom';
import '../Home.css';
import axios from 'axios';
import imagen from '../../Captura3.PNG';
import Swal from 'sweetalert2/dist/sweetalert2.js';//Librería para los alertas
import 'sweetalert2/src/sweetalert2.scss';//Librería para los alertas
import Foolder from '../fooldel';

var sectionStyle = {
    width: "100%",
    height: "600px",
    backgroundImage: "url(" + imagen + ")"
};

class verISAT extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            readDatos:[]
        }
    }//Metodo para obtener los datos generales del informe de seguimiento 
    componentDidMount(){
        let id = this.props.match.params.id;
        const Url = "http://localhost:3000/apis/list/ISAT/"+id;
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
                <nav class="navbar bg-nav fixed-top" >
                    <Link class="navbar-brand color" to={"/HomePE/"+this.props.match.params.id}>SIIUTeM</Link>
                    <ul class="nav justify-content-end">
                        <li class="nav-item dropdown list">
                            <Link class="boton_salir color navbar-brand" to={"/verEntreIniJyPE/"+this.props.match.params.id}>Ver Entrevista Inicial</Link>
                        </li>
                        <li class="nav-item dropdown list">
                            <Link to={"/cambiot/"+this.props.match.params.id} class="boton_salir color navbar-brand">Cambio de Tutor</Link>
                        </li>
                        <li class="nav-item dropdown list">
                            <Link to={"/isat/"+this.props.match.params.id} class="boton_salir color navbar-brand">Informe de Seguimiento de Acción Tutorial</Link><br></br>
                        </li>
                    </ul>
                </nav>
                <br></br><br></br><br></br><br></br>
                <div class="container-fluid">
                    <h4 class="text-center text-white">INFORMES DE SEGUIMIENTO DE ACCÓN TUTORIAL</h4>
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
                    {this.read()}
                    <br></br><br></br><br></br><br></br>
                    <br></br><br></br><br></br><br></br>
                </div>
                <Foolder />
            </div>
        );
    }//Función para mostrar los datos generales 
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
                        <h7>{datos.fechaAT}</h7>
                    </li>
                    <li class="list-group-item col-md-1">
                        <center>
                            <Link title="Ver informe" class="btn btn-info" to={"/verIndiISAT/"+this.props.match.params.id+"/"+datos.idAcciTuto+"/"+datos.carreraAcc}>
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-card-list" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M14.5 3h-13a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
                                <path fill-rule="evenodd" d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5z"/>
                                <circle cx="3.5" cy="5.5" r=".5"/>
                                <circle cx="3.5" cy="8" r=".5"/>
                                <circle cx="3.5" cy="10.5" r=".5"/></svg>    
                            </Link>
                        </center>
                    </li>
                    <li class="list-group-item col-md-1">
                        <center>
                            <Link title="Modificar informe" to={"/updateISAT/"+datos.idAcciTuto+"/"+this.props.match.params.id} class="btn btn-warning">
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/></svg>
                            </Link>
                        </center>
                    </li>
                    <li class="list-group-item col-md-1">
                        <center>
                            <button title="Eliminar informe" class="btn btn-danger eliminar" onClick={() => this.Eliminar(datos.idAcciTuto)}>
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/></svg>
                            </button>
                        </center>
                    </li>
                </ul>
            );
        });
    }//Función para la verificación en caso de eliminar el informe 
    Eliminar(idAcciTuto){
        Swal.fire({
            icon:'question',
            title:'Eliminar',
            text:'Desea eliminar este archivo',
            showCancelButton:true,
            confirmButtonText:'Si, eliminar',
            confirmButtonColor:'#d33',
            cancelButtonText:'No, eliminar',
            cancelButtonColor:'#1D98CB'
        }).then((result)=>{
            if(result.value){
                this.Delete(idAcciTuto);
            }else{
                Swal.fire(
                'Cancelar',
                'Se a cancelado la eliminación',
                'error'
                );
            }
        });
    }//Función de eliminar el informe de seguimiento de acción tutorial
    Delete(idDatos){
        const Url = "http://localhost:3000/apis/delete/ISAT/";
        axios.post(Url,{id:idDatos})
        .then(response =>{
            if (response.data.success){
                window.location.replace("/verisat/"+this.props.match.params.id);
            }
        });
    }
}

export default verISAT;