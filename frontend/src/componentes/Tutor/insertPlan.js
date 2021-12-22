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
            campoTem:"",
            campoOpj:"",
            campoAct:"",
            campoRec:"",
            campoEvi:""
        }
    }
    render(){    
        return(
            <div style={ sectionStyle }>
                <nav class="navbar navbar-default bg-nav fixed-top" role="navigation">
                    <Link class="navbar-brand color" to={"/HomeT/"+this.props.match.params.idTutor}>SIIUTeM</Link>
                    <Link class="boton_salir color navbar-brand" to={"/creaPlan/"+this.props.match.params.id+"/"+this.props.match.params.idTutor}>Volver</Link>
                </nav>
                <br></br><br></br><br></br><br></br>
                <div class="container">
                    <h4 class="text-center text-white">PLAN DE ACCIÓN TUTORIAL</h4>
                    <br></br>
                    <h5 class="card-title text-white">Sesiones Grupales</h5>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item col-md-4">
                            <h6>Tema</h6>
                        </li>
                        <li class="list-group-item col-md-4">
                            <h6>Actividades</h6>
                        </li>
                        <li class="list-group-item col-md-4">
                            <h6>Recursos</h6>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item col-md-4">
                            <input type="text" class="form-control" onChange={(value) => this.setState({campoTem:value.target.value})}/>
                        </li>
                        <li class="list-group-item col-md-4">
                            <input type="text" class="form-control" onChange={(value) => this.setState({campoAct:value.target.value})}/>
                        </li>
                        <li class="list-group-item col-md-4">
                            <input type="text" class="form-control" onChange={(value) => this.setState({campoRec:value.target.value})}/>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item col-md-6">
                            <h6>Objetivos </h6>
                        </li>
                        <li class="list-group-item col-md-6">
                            <h6>Evidencias</h6>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item col-md-6">
                            <input type="text" class="form-control" onChange={(value) => this.setState({campoOpj:value.target.value})}/>   
                        </li>
                        <li class="list-group-item col-md-6">
                            <input type="text" class="form-control" onChange={(value) => this.setState({campoEvi:value.target.value})}/>
                        </li>
                    </ul>
                    <br></br><br></br><br></br>
                    <div class="row">
                        <div class="col text-center">
                            <input type="button" class="btn btn-primary" value="Guardar" onClick={() => this.Guardar()} />
                            <br></br><br></br>    
                        </div>
                    </div>
                </div>
                <br></br><br></br>
                <Foolder />
            </div>
        );
    }//Función para guardar los datos en la base
    Guardar(){
        const Url = "http://localhost:3000/apis/insert/sesionGrupal";
        if(this.state.campoTem === ""){
            Swal.fire(
                'Error',
                'El campo Tema no puede estar vacio',
                'error'
            );
        }else{
            const datos = {
                tema:this.state.campoTem, 
                objetivos:this.state.campoOpj, 
                actividades:this.state.campoAct, 
                recursos:this.state.campoRec, 
                evidencias:this.state.campoEvi, 
                idDatosAccion2:this.props.match.params.id
            }
            axios.post(Url,datos);
            Swal.fire({
                icon:'success',
                title:'Listo',
                text:'Se han registrado los datos'
            }).then((result)=>{
                if(result.value){
                    window.location.replace("/creaPlan/"+this.props.match.params.id+"/"+this.props.match.params.idTutor);
                }
            });
        }
    }//Función para volver a la vista crea plan
    volver(){
        Swal.fire({
            icon:'question',
            title:'Volver',
            text:'No se guardaran los datos ingresados',
            showCancelButton:true,
            confirmButtonText:'Volver',
            confirmButtonColor:'#d33',
            cancelButtonText:'Cancelar',
            cancelButtonColor:'#1D98CB'
        }).then((result)=>{
            if(result.value){
                window.location.replace("/creaPlan/"+this.props.match.params.id);
            }
        });
    }
}

export default Plan;