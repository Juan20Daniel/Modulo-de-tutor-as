import React from 'react';
import { Link } from 'react-router-dom';
import '../Home.css';
import axios from 'axios';
import imagen from '../../Captura3.PNG';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
import Foolder from '../fooldel';

var sectionStyle = {
    width: "100%",
    height: "600px",
    backgroundImage: "url(" + imagen + ")"
};

class reportePlan extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            readSesio:[],
            readOpser:[],
            readAll:[],
            readDatM:[],
            campoLoPlaneado:"", 
            campoLoRealizado:""
        }
    }//Metodo para obtener las sesiones programadas de la api
    componentDidMount(){
        let id = this.props.match.params.id;
        const Url = "http://localhost:3000/apis/list/reporte/rlan/evidencias/"+id;
        axios.get(Url)
        .then(res=>{
            if(res.data.success){
                const datos = res.data.data;
                this.setState({readSesio:datos});
            }
        });//Metodo para las observaciones de la api 
        const Url2 = "http://localhost:3000/apis/list/reporte/Observaciones/all/"+id;
        axios.get(Url2)
        .then(res=>{
            if(res.data.success){
                const datos2 = res.data.data;
                this.setState({readOpser:datos2});
            }
        });// Metodo para obtener lo planeado y lo realizado de la api
        const Url3 = "http://localhost:3000/apis/list/reporte/plan/accion/All/"+id;
        axios.get(Url3)
        .then(res=>{
            if(res.data.success){
                const datos3 = res.data.data;
                this.setState({readAll:datos3});
            }
        });
    }
    render(){
        return(
            <div style={ sectionStyle } className="estatic">
                <nav class="navbar navbar-default bg-nav fixed-top" role="navigation">
                    <Link class="navbar-brand color" to={"/HomeT/"+this.props.match.params.idTutor}>SIIUTeM</Link>
                    <Link class="boton_salir color navbar-brand" to={"/reportePlan/"+this.props.match.params.idTutor}>Volver</Link>
                </nav>
                <br></br><br></br><br></br><br></br>
                <div class="container-fluid">
                    <h4 class="text-center text-white">REPORTE DE PLAN DE ACCIÓN TUTORIAL A</h4>
                    <br />
                    <h5 class="card-title text-white">Sesiones Grupales Programadas</h5>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item text-center col-md-1">
                            <h5>Nu.</h5>
                        </li>
                        <li class="list-group-item col-md-5">
                            <h5>Lo planeado</h5>
                        </li>
                        <li class="list-group-item col-md-4">
                            <h5>Lo realizado</h5>
                        </li>
                        <li class="list-group-item col-md-1">
                            <h5>Editar</h5>
                        </li>
                        <li class="list-group-item col-md-1">
                            <h5>Borrar</h5>
                        </li>
                    </ul>
                    {this.readAll()}
                    <br />
                    <Link type="button" title="Nueva sesiones Grupales Programadas" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Añadir</Link>
                    <br></br><br></br>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item col-md-6">
                            <ul class="list-group list-group-horizontal">
                                <li class="list-group-item col-md-12">
                                    <h5>Observaciones</h5>
                                </li>
                            </ul>
                            {this.readOpser()}
                        </li>
                        <li class="list-group-item col-md-6">
                            <ul class="list-group list-group-horizontal">
                                <li class="list-group-item col-md-12">
                                    <h5>Evidencias</h5>
                                </li>
                            </ul>
                            {this.readSesion()}
                        </li>
                    </ul>
                    <br />
                    <Link class="btn btn-success" to={"/verReportPlPDF/"+this.props.match.params.id+"/"+this.props.match.params.idTutor+"/"+this.props.match.params.Nom+"/"+this.props.match.params.Ape+"/"+this.props.match.params.Grupo+"/"+this.props.match.params.Ciclo}>Generar PDF</Link>
                </div>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Nuevo registro</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span></button>
                            </div>
                            <div class="modal-body">
                                <div class="form-group">
                                    <h5 for="recipient-name" class="col-form-label">Lo planeado</h5>
                                    <input type="text" class="form-control" onChange={(value) => this.setState({campoLoPlaneado:value.target.value})}  />
                                </div>
                                <div class="form-group">
                                    <h5 for="message-text" class="col-form-label">Lo realizado</h5>
                                    <input type="text" class="form-control" onChange={(value) => this.setState({campoLoRealizado:value.target.value})} />
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-danger" data-dismiss="modal">Cancelar</button>
                                <button type="button" onClick={() => this.Save()} class="btn btn-primary">Añadir</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="updateModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Modificar registro</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span></button>
                            </div>
                            <div class="modal-body">
                                <div class="form-group">
                                    <h5 for="recipient-name" class="col-form-label">Lo planeado</h5>
                                    <input type="text" class="form-control" value={this.state.campoUpPlaneado} onChange={(value) => this.setState({campoUpPlaneado:value.target.value})} />
                                </div>
                                <div class="form-group">
                                    <h5 for="message-text" class="col-form-label">Lo realizado</h5>
                                    <input type="text" class="form-control" value={this.state.campoUpRealizad} onChange={(value) => this.setState({campoUpRealizad:value.target.value})} />
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-danger" data-dismiss="modal">Cancelar</button>
                                <button type="button" onClick={() => this.Update()} class="btn btn-primary">Editar</button>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br><br></br>
                <Foolder />
            </div>
        );
    }//Función para mostrar las evidencias de la api 
    readSesion(){
        return this.state.readSesio.map((datos)=>{
            return(
                <ul class="list-group list-group-horizontal">
                    <li class="list-group-item col-md-12">
                        {datos.evidencias}
                    </li>
                </ul>
            );
        });
    }//Funcion para mostrar las observaciones de la api
    readOpser(){
        return this.state.readOpser.map((datos2)=>{
            return(
                <ul class="list-group list-group-horizontal">
                    <li class="list-group-item col-md-12">
                        {datos2.observaAtenIndi} 
                    </li>
                </ul>
            );
        });
    }//Función para mostrar lo planeado y lo realizado 
    readAll(){
        return this.state.readAll.map((datos3, index)=>{
            return(
                <ul class="list-group list-group-horizontal">
                    <li class="list-group-item text-center col-md-1">
                        <h5>{index + 1}</h5>
                    </li>
                    <li class="list-group-item col-md-5">
                        {datos3.loPlaneado}
                    </li>
                    <li class="list-group-item col-md-4">
                        {datos3.loRealizado}
                    </li>
                    <li class="list-group-item col-md-1">
                        <center>
                            <Link onClick={() => this.updateRegi(datos3.idPlanAccion)} class="btn btn-warning" title="Modificar los datos" data-toggle="modal" data-target="#updateModal">
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/></svg>
                            </Link>
                        </center>
                    </li>
                    <li class="list-group-item col-md-1">
                        <center>
                            <button class="btn btn-danger" title="Eliminar toda la fila" onClick={() => this.delete(datos3.idPlanAccion)}>
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/></svg>
                            </button>
                        </center>
                    </li>
                </ul>
            );
        });
    }//Función para el alerta de verificación 
    delete(idPlanAccion){
        Swal.fire({
            icon:'question',
            title:'Eliminar',
            text:'Desea eliminar estos datos',
            showCancelButton:true,
            confirmButtonText:'Si, eliminar',
            confirmButtonColor:'#d33',
            cancelButtonText:'No, eliminar',
            cancelButtonColor:'#1D98CB'
        }).then((result)=>{
            if(result.value){
                this.Eliminar(idPlanAccion)
            }else{
                Swal.fire(
                    'Cancelado',
                    'Se a cancelado la eliminación',
                    'error'
                );
            }
        });
    }//Función para eliminar lo planeado o lo realizado
    Eliminar(id){
        const Url = "http://localhost:3000/apis/delete/report/accion/all";
        axios.post(Url,{idPlanAccion:id})
        .then(responser=>{
            if(responser.data.success){
                window.location.replace("/insertReportePlan/"+this.props.match.params.id+"/"+this.props.match.params.idTutor+"/"+this.props.match.params.Nom+"/"+this.props.match.params.Ape+"/"+this.props.match.params.Grupo+"/"+this.props.match.params.Ciclo);
            }
        });
    }//Función para actualizar lo planeado y lo realizado  
    updateRegi(idPlanAccion){
        const Url = "http://localhost:3000/apis/list/update/report/plan/All/accion/"+idPlanAccion;
        axios.get(Url)
        .then(res=>{
            if(res.data.success){
                const datosM = res.data.data[0];
                this.setState({
                    readDatM:datosM,
                    campoUpPlaneado:datosM.loPlaneado,
                    campoUpRealizad:datosM.loRealizado,
                    campoIdReport: datosM.idPlanAccion
                });
            }
        });
    }// Función para guardar los datos en la base de lo planeado y lo realizado 
    Save(){
        const Url = "http://localhost:3000/apis/insert/Reporte/plan/All";
        const datos = { 
            grupoRepor: this.props.match.params.Grupo, 
            cicloRepor: this.props.match.params.Ciclo, 
            loPlaneado: this.state.campoLoPlaneado, 
            loRealizado: this.state.campoLoRealizado, 
            idTutoriasDocentes16: this.props.match.params.idTutor,
            idDatosAccion4: this.props.match.params.id 
        }
        axios.post(Url,datos);
        Swal.fire({
            icon:'success',
            title:'Listo',
            text:'Se a agregado'
        }).then((result)=>{
            if(result.value){
                window.location.replace("/insertReportePlan/"+this.props.match.params.id+"/"+this.props.match.params.idTutor+"/"+this.props.match.params.Nom+"/"+this.props.match.params.Ape+"/"+this.props.match.params.Grupo+"/"+this.props.match.params.Ciclo);
            }
        });
    }//Función para actualizar los datos tanto lo realizado y lo planeado 
    Update(){
        const Url = "http://localhost:3000/apis/update/report/plan/acc/"+this.state.campoIdReport;
        const datos = {
            loPlaneado: this.state.campoUpPlaneado, 
            loRealizado: this.state.campoUpRealizad
        }
        axios.put(Url, datos);
        Swal.fire({
            icon:'success',
            title:'Listo',
            text:'El registro se a modificado'
        }).then((result)=>{
            if(result.value){
                window.location.replace("/insertReportePlan/"+this.props.match.params.id+"/"+this.props.match.params.idTutor+"/"+this.props.match.params.Nom+"/"+this.props.match.params.Ape+"/"+this.props.match.params.Grupo+"/"+this.props.match.params.Ciclo);
            }
        });
    }
}

export default reportePlan;