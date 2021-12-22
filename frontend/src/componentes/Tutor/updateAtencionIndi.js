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

class UpdateAtencionIndi extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            campoAlumn:0
        }
    }//Medoto para optener los datos del alumno a atención individual,
    componentDidMount(){
        let id = this.props.match.params.id;
        const Url = "http://localhost:3000/apis/list/atencionIndi/list/atenc/"+id;
        axios.get(Url)
        .then(res=>{
            if(res.data.success){
                const datos = res.data.data[0];
                this.setState({
                    campoIdAlu:datos.idAlumnos,
                    campoNombreA:datos.nombreAlumno,
                    campoApelliA:datos.apellidoAlumno,
                    campoOpjAsuntoObserva:datos.asuntoObserva,
                    campoObservaAtenIndi:datos.observaAtenIndi,
                    campoId:datos.idDatosAccion3
                });
            }
        });
    }
    render(){    
        return(
            <div style={ sectionStyle }>
                <nav class="navbar navbar-default bg-nav fixed-top" role="navigation">
                    <Link class="navbar-brand color" onClick={() => this.Salir()}>SIIUTeM</Link>
                    <Link class="boton_salir color navbar-brand" onClick={() => this.volver()}>Volver</Link>
                </nav>
                <br></br><br></br><br></br><br></br>
                <div class="container">
                    <h4 class="text-center text-white">PLAN DE ACCIÓN TUTORIAL</h4>
                    <br></br>
                    <h5 class="card-title text-white">Alumnos a atención individual</h5>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item col-md-4">
                            <h6>Nombre</h6>
                        </li>
                        <li class="list-group-item col-md-4">
                            <h6>Asunto a tratar</h6>
                        </li>
                        <li class="list-group-item col-md-4">
                            <h6>Observaciones</h6>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item col-md-4">
                            <h7>{this.state.campoNombreA+" "+this.state.campoApelliA}</h7>
                        </li>
                        <li class="list-group-item col-md-4">
                            <input type="text" class="form-control" value={this.state.campoOpjAsuntoObserva} onChange={(value) => this.setState({campoOpjAsuntoObserva:value.target.value})}/>   
                        </li>
                        <li class="list-group-item col-md-4">
                            <input type="text" class="form-control" value={this.state.campoObservaAtenIndi} onChange={(value) => this.setState({campoObservaAtenIndi:value.target.value})}/>
                        </li>
                    </ul>
                    <br></br><br></br><br></br>
                    <br></br><br></br><br></br>
                    <br></br><br></br>
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
    }//Función para volver a la vista creaPlan
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
                window.location.replace("/creaPlan/"+this.state.campoId+"/"+this.props.match.params.idTutor);
            }
        });
    }//Función para salir al home del tutor
    Salir(){
        Swal.fire({
            icon:'question',
            title:'Salir',
            text:'No se guardaran los datos ingresados',
            showCancelButton:true,
            confirmButtonText:'Salir',
            confirmButtonColor:'#d33',
            cancelButtonText:'Cancelar',
            cancelButtonColor:'#1D98CB'
        }).then((result)=>{
            if(result.value){
                window.location.replace("/HomeT/"+this.props.match.params.idTutor);
            }
        });
    }//Función para actualizar los datos del alumno a atención inividual 
    Update(){
        let id = this.props.match.params.id;
        const Url = "http://localhost:3000/apis/update/atencionIndi/Update/"+id;
        const datos = { 
            asuntoObserva:this.state.campoOpjAsuntoObserva, 
            observaAtenIndi:this.state.campoObservaAtenIndi,
            idAlumnos17:this.state.campoAlumn
        }
        axios.put(Url,datos);
        Swal.fire({
            icon:'success',
            title:'Listo',
            text:'Los cambios se han guardado'
        }).then((result)=>{
            if(result.value){
                window.location.replace("/creaPlan/"+this.state.campoId+"/"+this.props.match.params.idTutor);
            }
        });
    }
}

export default UpdateAtencionIndi;