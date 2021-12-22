import React from 'react';
import { Link } from 'react-router-dom';
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

class insertAlumCanali extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            aux:"",
            auxCam:"",
        }
    }//Metodo para obtener los datos como email, la contraseña, etc. de la api
    componentDidMount(){
        let id = this.props.match.params.id;
        const Url = "http://localhost:3000/apis/list/Update/canali/one/"+id;
        axios.get(Url)
        .then(res=>{
            const datos = res.data.data[0];
            this.setState({
                campoHora:datos.horaCanalAlu,
                campoTipo:datos.tipoCanaAlu,
                campoAreaCana:datos.areaCanalAlu,
                areaCana:datos.areaCanalAlu,
                campoMotiCana:datos.motiCanalAlu,
                motivoCana:datos.motiCanalAlu,
                campoObserCan:datos.obserCanalAlu,
                emailDocen:datos.correoDocente,
                password:datos.passwordDocente,
                nombreDocente:datos.nombreDocente, 
                apellidoDocente:datos.apellidoDocente
            });
        });//Metodo para obtener los datos generale del alumno de la api
        let idAlumno = this.props.match.params.idAlumno;
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
                    <Link class="boton_salir color navbar-brand" onClick={() => this.vercanali()}>Volver</Link>
                </nav>
                <br></br><br></br><br></br><br></br>
                <div class="container-fluid">
                    <div>
                    <h4 class="text-center text-white">Modificar la Canalizacón del alumno: {this.state.nombreAlumno} {this.state.apellidoAlumno}</h4>
                        <br></br>
                        <div class="form-row">
                            <div class="form-group col-md-2">
                                <h5 class="text-white">Hora</h5>
                                <input type="time" class="form-control" value={this.state.campoHora} onChange={(value) => this.setState({campoHora:value.target.value})}/>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-4">
                                <h5 class="text-white">Área o departamento de canalización</h5>
                                <select class="form-control" value={this.state.campoAreaCana} onChange={(value) => this.setState({campoAreaCana:value.target.value})}>  
                                    <option value="Psicólogo">Psicólogo</option>
                                    <option value="Pedagogo">Pedagogo</option>  
                                    <option value="Enfermería">Enfermería</option>
                                    <option value="Becas">Becas</option>
                                    <option value="Incubadora">Incubadora</option>
                                    <option value="Bolsa de trabajo">Bolsa de trabajo</option>
                                    <option value="Asesoría Académica">Asesoría Académica</option>
                                </select>
                            </div>
                            <div class="form-group col-md-8">
                                <h5 class="text-white">Motivo de canalización</h5>
                                <input type="text" class="form-control" value={this.state.campoMotiCana} onChange={(value) => this.setState({campoMotiCana:value.target.value})}/>
                            </div>
                        </div>
                        <br/><br /><br/><br /><br/><br />
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
    }//Función para guardar los datos acualizados en la base y embiar los mensajes  
    Save(){
        if(this.state.campoAreaCana != this.state.areaCana){
            (async () => {
                const { value: text } = await Swal.fire({
                  icon: 'question',
                  title: '¿Cuál es el motivo del cambio de área?',
                  input: 'textarea',
                  inputPlaceholder: 'Ingrese el motivo',
                  inputAttributes: {
                    'aria-label': 'Type your message here'
                  },
                  showCancelButton: true,
                  cancelButtonColor:'#d33',
                })
                if (text) {
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
                if(this.state.areaCana === "Psicólogo"){
                    this.state.auxCam = 'juandaniel200031@gmail.com';
                }else if(this.state.areaCana === "Pedagogo"){
                    this.state.auxCam = 'juanmendes389@gmail.com';
                }else if(this.state.areaCana === "Becas"){
                    this.state.auxCam = "juandaniel200031@gmail.com";
                }else if(this.state.areaCana === "Enfermería"){
                    this.state.auxCam = "juandaniel200031@gmail.com";
                }else if(this.state.areaCana === "Incubadora"){
                    this.state.auxCam = "juandaniel200031@gmail.com";
                }else if(this.state.areaCana === "Bolsa de trabajo"){
                    this.state.auxCam = "juandaniel200031@gmail.com";
                }else if(this.state.areaCana === "Asesoría Académica"){
                    this.state.auxCam = "juandaniel200031@gmail.com";
                }
                let id = this.props.match.params.id;
                const Url = "http://localhost:3000/apis/update/cana/cambi/area/"+id;
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
                        areaCanalAlu: this.state.campoAreaCana, 
                        motiCanalAlu: this.state.campoMotiCana,  
                        obserCanalAlu: this.state.campoObserCan,
                        from: this.state.emailDocen,
                        to: this.state.aux,
                        subjet: 'Nuevo alumno canalizado: '+this.state.nombreAlumno+" "+this.state.apellidoAlumno,
                        text:'Tutor: '+this.state.nombreDocente+" "+this.state.apellidoDocente+", Datos del alumno: Correo: "+this.state.emailAlumno+", Grupo: "+this.state.grupoTutores+", Carrera: "+this.state.carreTutores,
                        user: this.state.emailDocen, 
                        pass: this.state.password,
                        from2: this.state.emailDocen,
                        to2: this.state.auxCam,
                        subjet2: 'Cambio de área',
                        text2:'El tutor a cambiado de área de canalización al alumno: '+this.state.nombreAlumno+" "+this.state.apellidoAlumno+' a la área de: '+this.state.campoAreaCana+", el motivo: "+text,
                        user2: this.state.emailDocen, 
                        pass2: this.state.password
                    }
                    axios.put(Url,datos);
                    Swal.fire({
                        icon:'success',
                        title:'Listo',
                        text:'El archivo se a modificado'
                    }).then((result)=>{
                        if(result.value){
                            window.location.replace("/vercanalizacion/"+this.props.match.params.idd2);
                        }
                    });
                }
            }
        })()
        }else{
            if(this.state.campoMotiCana != this.state.motivoCana){
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
                let id = this.props.match.params.id;
                const Url = "http://localhost:3000/apis/update/Canalizacion/one/All/"+id;
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
                        areaCanalAlu: this.state.campoAreaCana, 
                        motiCanalAlu: this.state.campoMotiCana,  
                        obserCanalAlu: this.state.campoObserCan,
                        from: this.state.emailDocen,
                        to: this.state.aux,
                        subjet: 'El tutor han modificado el (Motivo de canalización) del alumno: '+this.state.nombreAlumno+" "+this.state.apellidoAlumno,
                        text:'Datos anteriores: '+this.state.motivoCana+", Datos modificados: "+this.state.campoMotiCana,
                        user: this.state.emailDocen, 
                        pass: this.state.password
                    }
                    axios.put(Url,datos);
                    Swal.fire({
                        icon:'success',
                        title:'Listo',
                        text:'El archivo se a modificado'
                    }).then((result)=>{
                        if(result.value){
                            window.location.replace("/vercanalizacion/"+this.props.match.params.idd2);
                        }
                    });
                }
            }
        }
    }//Función para volver al Home del tutor 
    valverSalir(){
        Swal.fire({
            icon:'error',
            title:'Volver al inicio',
            text:'No se guardaran los cambios realizados',
            showCancelButton:true,
            confirmButtonText:'Volver',
            confirmButtonColor:'#d33',
            cancelButtonText:'Cancelar',
            cancelButtonColor:'#1D98CB',
        }).then((result)=>{
            if(result.value){
                window.location.replace("/HomeT/"+this.props.match.params.idd2);
            }
        });
    }//Función para ver las canalizaciones 
    vercanali(){
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
                window.location.replace("/vercanalizacion/"+this.props.match.params.idd2);
            }
        });
    }
}

export default insertAlumCanali;
