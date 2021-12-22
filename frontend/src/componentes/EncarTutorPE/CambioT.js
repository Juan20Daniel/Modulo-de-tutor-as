import React from 'react';
import {Link} from 'react-router-dom';
import '../Home.css';
import axios from 'axios';
import imagen from '../../Captura3.PNG';
import Swal from 'sweetalert2/dist/sweetalert2.js';//Librería para los alertas alertar
import 'sweetalert2/src/sweetalert2.scss';//Librería para los alertas alertar
import Foolder from '../fooldel';

var sectionStyle = {
    width: "100%",
    height: "600px",
    backgroundImage: "url(" + imagen + ")"
};

class ISAT extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            readDatos:[],
            campoTutorAnt:0,
            campoTutorNue:0
        }
    }//Metodo para obtener los datos generales del tutor, nombre, apellidos, etc.
    componentDidMount(){
        const Url = "http://localhost:3000/apis/list/tutores";
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
                        <li class="nav-item">
                            <li class="nav-item dropdown list">
                                <Link class="nav-link dropdown-toggle color navbar-brand" data-toggle="dropdown">Ver Informes</Link>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link to={"/verisat/"+this.props.match.params.id} class="btn btn-light">Ver Informe de Seguimiento de Acción Tutorial</Link>
                                    <Link class="dropdown-item" to={"/verEntreIniJyPE/"+this.props.match.params.id}>Ver Entrevista Inicial</Link>
                                </div>
                            </li>
                        </li>
                        <li class="nav-item dropdown list">
                            <Link to={"/isat/"+this.props.match.params.id} class="boton_salir color navbar-brand">Informe de Seguimiento de Acción Tutorial</Link><br></br>
                        </li>
                    </ul>
                </nav>
                <br></br><br></br><br></br><br></br>
                <div class="container-fluid">
                    <h4 class="text-center text-white">CAMBIO DE TUTOR</h4>
                    <br></br>
                    <div class="form-group">
                        <div class="form-row">
                            <div class="col-md-4">
                                <input type="text" class="form-control" placeholder="Número de control de tutor anterior" onChange={(value) => this.setState({campoTutorAnt:value.target.value})} />
                            </div>
                            <div class="col-md-4">
                                <input type="text" class="form-control" placeholder="Número de control de nuevo tutor" onChange={(value) => this.setState({campoTutorNue:value.target.value})} />
                            </div>
                            <input title="Cambiar" type="button" class="btn btn-primary" onClick={() => this.Cambiar()} value="Aceptar"/> 
                        </div>
                    </div>
                    <br></br><br></br>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item text-center col-md-1">
                            <h5>Nu.</h5>
                        </li>
                        <li class="list-group-item col-md-3">
                            <h5>Nombres</h5>
                        </li>
                        <li class="list-group-item col-md-3">
                            <h5>Apellidos</h5>
                        </li>
                        <li class="list-group-item col-md-3">
                            <h5>Nu. Control</h5>
                        </li>
                        <li class="list-group-item col-md-2">
                            <h5>Tipo</h5>
                        </li>
                    </ul>
                    {this.Datos()}
                </div>
                <br></br><br></br>
                <Foolder />
            </div>
        );
    }//Función para mostrar los datos del tutor  
    Datos(){
        return this.state.readDatos.map((datos, index)=>{
            return(
                <ul class="list-group list-group-horizontal">
                    <li class="list-group-item text-center col-md-1">
                        <h5>{index + 1}</h5>
                    </li>
                    <li class="list-group-item col-md-3">
                        {datos.nombreDocente}
                    </li>
                    <li class="list-group-item col-md-3">
                        {datos.apellidoDocente}
                    </li>
                    <li class="list-group-item col-md-3">
                        {datos.numControlD}
                    </li>
                    <li class="list-group-item col-md-2">
                        {datos.tipo}
                    </li>
                </ul>
            );
        });
    }//Función para registrar el cambio de tutor 
    Cambiar(){
        if(this.state.campoTutorAnt === 0){
            Swal.fire(
                'Error',
                'El campo Número de control de tutor anterior no puede estar vacío',
                'error'
            );
        }else if(this.state.campoTutorNue === 0){
            Swal.fire(
                'Error',
                'El campo Número de control de nuevo tutor no puede estar vacío',
                'error'
            );
        }else{
            const Url = "http://localhost:3000/apis/cambio/tutor";
            const datos = {
                _contAnteri: this.state.campoTutorAnt, 
                _contNuev: this.state.campoTutorNue
            }
            axios.put(Url,datos);
            Swal.fire({
                icon:'success',
                title:'Listo',
                text:'Cambio Realizado'
            }).then((result)=>{
                if(result.value){
                    window.location.replace("/cambiot/"+this.props.match.params.id);
                }
            });
        }
    }
}

export default ISAT;