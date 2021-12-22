import React from 'react';
import {Link} from 'react-router-dom';
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

class updatePlan extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }//Metodo para mostrar el tema, el objetivo, acti, etc, para modificar 
    componentDidMount(){
        let id = this.props.match.params.id;
        const Url = "http://localhost:3000/apis/list/ubdatePlanSesio/"+id;
        axios.get(Url)
        .then(res=>{
            if(res.data.success){
                const datos = res.data.data[0];
                this.setState({
                    readDatos:datos,
                    campoTem:datos.tema,
                    campoOpj:datos.objetivos,
                    campoAct:datos.actividades,
                    campoRec:datos.recursos,
                    campoEvi:datos.evidencias,
                    campoId:datos.idDatosAccion2
                });
            }
        });
    }
    render(){    
        return(
            <div style={ sectionStyle }>
                <nav class="navbar navbar-default bg-nav fixed-top" role="navigation">
                    <Link class="navbar-brand color" onClick={() => this.salir()}>SIIUTeM</Link>
                    <Link class="boton_salir color navbar-brand" onClick={() => this.volver()}>Volver</Link>
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
                            <input type="text" class="form-control" value={this.state.campoTem} onChange={(value) => this.setState({campoTem:value.target.value})}/>
                        </li>
                        <li class="list-group-item col-md-4">
                            <input type="text" class="form-control" value={this.state.campoAct} onChange={(value) => this.setState({campoAct:value.target.value})}/>
                        </li>
                        <li class="list-group-item col-md-4">
                            <input type="text" class="form-control" value={this.state.campoRec} onChange={(value) => this.setState({campoRec:value.target.value})}/>
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
                            <input type="text" class="form-control" value={this.state.campoOpj} onChange={(value) => this.setState({campoOpj:value.target.value})}/>   
                        </li>
                        <li class="list-group-item col-md-6">
                            <input type="text" class="form-control" value={this.state.campoEvi} onChange={(value) => this.setState({campoEvi:value.target.value})}/>
                        </li>
                    </ul>
                    <br></br><br></br><br></br>
                    <div class="row">
                        <div class="col text-center">
                            <input type="button" class="btn btn-primary" value="Guardar" onClick={() => this.Update()} />
                            <br></br><br></br>    
                        </div>
                    </div>
                </div>
                <br></br><br></br>
                <Foolder />
            </div>
        );
    }//Función para actualizar los datos
    Update(){
        let id = this.props.match.params.id;
        const Url = "http://localhost:3000/apis/update/planSesioUpdate/"+id;
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
            } 
            axios.put(Url, datos);
            Swal.fire({
                icon:'success',
                title:'Listo',
                text:'Los cambios se han guardado'
            }).then((result)=>{
                if(result.value){
                    window.location.replace("/creaPlan/"+this.props.match.params.idPlan+"/"+this.props.match.params.idTutor);
                }
            });
        }
    }//Función para volver a la vista creaPlan del tutor 
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
                window.location.replace("/creaPlan/"+this.props.match.params.idPlan+"/"+this.props.match.params.idTutor);
            }
        });
    }//Función para salir de la vista a el Home de tutor
    salir(){
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
                window.location.replace("/HomeT/"+this.props.match.params.idTutor);
            }
        });
    }
}
export default updatePlan;