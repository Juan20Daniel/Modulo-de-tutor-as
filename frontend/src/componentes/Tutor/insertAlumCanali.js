import React from 'react';
import { Link } from 'react-router-dom';
import '../Home.css';
import axios from 'axios';
import imagen from '../../Captura3.PNG';
import Swal from 'sweetalert2/dist/sweetalert2.js';// Librería para los alertas
import 'sweetalert2/src/sweetalert2.scss';// Librería para los alertas
import Foolder from '../fooldel';

var sectionStyle = {
    width: "100%",
    height: "600px",
    backgroundImage: "url(" + imagen + ")"
};

class insertAlumCanali extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            campoHora:"",
            campoAreaCana:"", 
            campoMotiCana:"",
            campoObserCan:"",
            campoTipo:"",
            aux:""
        }
    }//Metodo para obtener el correo, la contraseña, el nombre y el apellido del tutor,
    componentDidMount(){
        let numControlD = this.props.match.params.id;
        const Url = 'http://localhost:3000/apis/list/emil/password/docente/'+numControlD;
        axios.get(Url)
        .then(res=>{
            const datos = res.data.data[0];
            this.setState({
                emailDocen:datos.correoDocente,
                password:datos.passwordDocente,
                nombreDocente:datos.nombreDocente, 
                apellidoDocente:datos.apellidoDocente
            });
        });// Metodo para obtener los datos del alumno, nombre, apellidos, etc.
        let idAlumno = this.props.match.params.idAlum;
        const Url2 = 'http://localhost:3000/apis/list/datos/alumno/for/email/'+idAlumno;
        axios.get(Url2)
        .then(res=>{
            const datosAlum = res.data.data[0];
            this.setState({
                numControlA:datosAlum.numControlA,
                nombreAlumno:datosAlum.nombreAlumno,
                apellidoAlumno:datosAlum.apellidoAlumno,
                emailAlumno:datosAlum.emailAlumno,
                grupoTutores:datosAlum.grupoTutores,
                carreTutores:datosAlum.carreTutores
            });
        });
    }
    render(){
        return(
            <div style={ sectionStyle } className="estatic">
                <nav class="navbar navbar-default bg-nav fixed-top" role="navigation">
                    <Link class="navbar-brand color" onClick={() => this.valverSalir()}>SIIUTeM</Link>
                    <ul class="nav justify-content-end">
                        <li class="nav-item">
                            <div >
                                <Link class="boton_salir color navbar-brand" onClick={() => this.vercanali()}>Ver canalizaciones</Link>
                            </div>
                        </li>
                        <li class="nav-item">
                            <div >
                                <Link class="nav-link color navbar-brand" to={"/canalizacion/"+this.props.match.params.id}>Volver</Link>
                            </div>
                        </li>
                    </ul>
                </nav>
                <br></br><br></br><br></br><br></br>
                <div class="container-fluid">
                    <div>
                        <h4 class="text-center text-white">Canalizando al Alumno: {this.state.nombreAlumno} {this.state.apellidoAlumno}</h4>
                        <br></br>
                        <div class="form-row">
                            <div class="form-group col-md-2">
                                <h5 class="text-white">Hora</h5>
                                <input type="time" class="form-control" onChange={(value) => this.setState({campoHora:value.target.value})}/>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-4">
                                <h5 class="text-white">Área o departamento de canalización</h5>
                                <select class="form-control" onChange={(value) => this.setState({campoAreaCana:value.target.value})}>
                                    <option selected="true" disabled="disabled">seleccione una opción</option>  
                                    <option value="Psicólogo">Psicólogo</option>
                                    <option value="Pedagogo">Pedagogo</option> 
                                    <option value="Becas">Becas</option> 
                                    <option value="Enfermería">Enfermería</option>
                                    <option value="Incubadora">Incubadora</option>
                                    <option value="Bolsa de trabajo">Bolsa de trabajo</option>
                                    <option value="Asesoría Académica">Asesoría Académica</option>
                                </select>
                            </div>
                            <div class="form-group col-md-3">
                                <h5 class="text-white">Tipo</h5>
                                <select class="form-control" onChange={(value) => this.setState({campoTipo:value.target.value})}>
                                    <option selected="true" disabled="disabled">seleccione una opción</option>  
                                    <option value="Hombre">Hombre</option>
                                    <option value="Mujer">Mujer</option>  
                                </select>
                            </div>
                            <div class="form-group col-md-5">
                                <h5 class="text-white">Motivo de canalización</h5>
                                <input type="text" class="form-control" onChange={(value) => this.setState({campoMotiCana:value.target.value})}/>
                            </div>
                        </div>
                        <br /><br /><br /><br /><br /><br />
                        <div class="row">
                            <div class="col text-center">
                                <input type="submit" class="btn btn-primary" value="Enviar"onClick={() => this.Save()} />
                                <br></br><br></br><br></br><br></br>
                            </div>
                        </div>
                    </div>
                </div>
                <Foolder />
            </div>
        ); 
    }//Función para guardar los datos en la base de datos
    Save(){
        Swal.fire({
            icon:'question',
            title:'Enviar',
            text:'Desea canalizar a este alumno',
            showCancelButton:true,
            confirmButtonText:'Enviar',
            cancelButtonText:'Cancelar',
            cancelButtonColor:'#d33'
        }).then((result)=>{
            if(result.value){
                if(this.state.campoAreaCana === "Psicólogo"){
                    this.state.aux = 'juandaniel200031@gmail.com';
                }else if(this.state.campoAreaCana === "Pedagogo"){
                    this.state.aux = 'juanmendes389@gmail.com';
                }else if(this.state.campoAreaCana === "Becas"){
                    this.state.aux = "juandaniel200031@gmail.com";
                }else if(this.state.campoAreaCana === "Enfermería"){
                    this.state.aux = "juandaniel200031@gmail.com";
                }else if(this.state.campoAreaCana === "Incubadora"){
                    this.state.aux = "juandaniel200031@gmail.com";
                }else if(this.state.campoAreaCana === "Bolsa de trabajo"){
                    this.state.aux = "juandaniel200031@gmail.com";
                }else if(this.state.campoAreaCana === "Asesoría Académica"){
                    this.state.aux = "juandaniel200031@gmail.com";
                }
                const Url = "http://localhost:3000/apis/insert/Alumn/Canal";
                if(this.state.campoHora === ""){
                    Swal.fire(
                        'Error',
                        'El campo Hora no puede estar vacío',
                        'error'
                    );
                }else if(this.state.campoAreaCana === ""){
                    Swal.fire(
                        'Error',
                        'El campo Área o departamento de canalización no puede estar vacío',
                        'error'
                    );
                }else if(this.state.campoMotiCana === ""){
                    Swal.fire(
                        'Error',
                        'El campo Motivo de canalización no puede estar vacío',
                        'error'
                    );
                }else{
                    const datos = {
                        horaCanalAlu: this.state.campoHora,
                        tipoCanaAlu: this.state.campoTipo, 
                        areaCanalAlu: this.state.campoAreaCana, 
                        motiCanalAlu: this.state.campoMotiCana,  
                        obserCanalAlu: this.state.campoObserCan,
                        planONoplan: this.props.match.params.planONoplan,
                        idTutorDocente4: this.props.match.params.id,
                        idAlumnos14: this.props.match.params.idAlum,
                        from: this.state.emailDocen,
                        to: this.state.aux,
                        subjet: 'Nuevo alumno canalizado: '+this.state.nombreAlumno+" "+this.state.apellidoAlumno,
                        text:'Tutor: '+this.state.nombreDocente+" "+this.state.apellidoDocente+", Datos del alumno: Correo: "+this.state.emailAlumno+", Grupo: "+this.state.grupoTutores+", Carrera: "+this.state.carreTutores,
                        user: this.state.emailDocen, 
                        pass: this.state.password
                    }
                    axios.post(Url,datos);
                    Swal.fire({
                        icon:'success',
                        title:'Listo',
                        text:'El archivo se a regitrado'
                    }).then((result)=>{
                        if(result.value){
                            window.location.replace("/vercanalizacion/"+this.props.match.params.id);
                        }
                    });
                }
            }else{
                Swal.fire(
                    'Cancelado',
                    'Se a cancelado el envio',
                    'error'
                );
            }
        });
    }//Función para redireccionar al Home de tutor 
    valverSalir(){
        Swal.fire({
            icon:'error',
            title:'Volver',
            text:'No se guardaran los cambios realizados',
            showCancelButton:true,
            confirmButtonText:'Volver',
            confirmButtonColor:'#d33',
            cancelButtonText:'Cancelar',
            cancelButtonColor:'#1D98CB',
        }).then((result)=>{
            if(result.value){
                window.location.replace("/HomeT/"+this.props.match.params.id);
            }
        });
    }//Función para redireccionar al ver las canalizaciones de tutor 
    vercanali(){
        Swal.fire({
            icon:'question',
            title:'Ver canalizaciónes',
            text:'No se guardaran los datos ingresados',
            showCancelButton:true,
            confirmButtonText:'Ver',
            confirmButtonColor:'#d33',
            cancelButtonText:'Cancelar',
            cancelButtonColor:'#1D98CB'
        }).then((result)=>{
            if(result.value){
                window.location.replace("/vercanalizacion/"+this.props.match.params.id);
            }
        });
    }
}

export default insertAlumCanali;
