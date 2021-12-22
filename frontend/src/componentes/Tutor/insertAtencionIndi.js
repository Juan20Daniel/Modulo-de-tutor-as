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

class Plan extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            campoNombreAluAten:"",
            campoOpjAsuntoObserva:"",
            campoObservaAtenIndi:"",
            readDatos:[]
        }
    }// Metodo para obtener los nombres y apellidos de los alumnos por grupo 
    componentDidMount(){
        let idTutor = this.props.match.params.idTutor;
        let grupo = this.props.match.params.grupo;
        const Url = "http://localhost:3000/apis/list/alumnos/rep/plan/all/"+idTutor+"/"+grupo;
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
            <div style={ sectionStyle }>
                <nav class="navbar navbar-default bg-nav fixed-top" role="navigation">
                    <Link class="navbar-brand color" to={"/HomeT/"+this.props.match.params.idTutor}>SIIUTeM</Link>
                    <Link class="boton_salir color navbar-brand" to={"/creaPlan/"+this.props.match.params.id+"/"+this.props.match.params.idTutor}>Volver</Link>
                </nav>
                <br></br><br></br><br></br><br></br>
                <div class="container">
                    <h4 class="text-center text-white">PLAN DE ACCIÓN TUTORIAL</h4>
                    <br />
                    <h5 class="card-title text-white">Alumnos a atención individual</h5>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item col-md-4">
                            <h6>Nombre del alumno</h6>
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
                            <select class="form-control" onChange={(value) => this.setState({campoNombreAluAten:value.target.value})}>
                                <option selected="true" disabled="disabled">seleccione una opción</option>  
                                {this.read()}
                            </select>
                        </li>
                        <li class="list-group-item col-md-4">
                            <input type="text" class="form-control" onChange={(value) => this.setState({campoOpjAsuntoObserva:value.target.value})}/>   
                        </li>
                        <li class="list-group-item col-md-4">
                            <input type="text" class="form-control" onChange={(value) => this.setState({campoObservaAtenIndi:value.target.value})}/>
                        </li>
                    </ul>
                    <br /><br /><br />
                    <br /><br /><br />
                    <br /><br />
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
    }//Función para mostrar el nombre y apellidos 
    read(){
        return this.state.readDatos.map((datos)=>{
            return(
                <option value={datos.idAlumnos}>{datos.nombreAlumno+" "+datos.apellidoAlumno}</option>
            );
        });
    }//Función para guardar los datos en la base 
    Guardar(){
        const Url = "http://localhost:3000/apis/insert/atencionIndi";
        if(this.state.campoNombreAluAten === ""){
            Swal.fire(
                'Error',
                'El campo Nombre del alumno no puede estar vacio',
                'error'
            )
        }else{
            const datos = {
                asuntoObserva:this.state.campoOpjAsuntoObserva, 
                observaAtenIndi:this.state.campoObservaAtenIndi, 
                idDatosAccion3:this.props.match.params.id,
                idAlumnos17:this.state.campoNombreAluAten
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
    }//Función para volver a la vista de crear plan
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