import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import imagen from '../Captura3.PNG';
import axios from 'axios';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
import Foolder from './fooldel';

var sectionStyle = {
    width: "100%",
    height: "600px",
    backgroundImage: "url(" + imagen + ")"
};

class HomeJ extends React.Component  {
    render(){
        return(
            <div style={ sectionStyle }>
                <nav class="navbar navbar-default bg-nav fixed-top" role="navigation">
                    <Link class="navbar-brand color" to={"/HomeJ/"+this.props.match.params.id}>SIIUTeM</Link>
                    <Link class="boton_salir color navbar-brand" to="/">Salir</Link>
                </nav>
                <br></br><br></br> <br></br><br></br><br></br>
                <div class="container">
                    <div class="form-row">
                        <div class="col-md-4">
                            <ul class="list-group">
                                <li class="list-group-item text-center shadow-lg bg-white rounded"><h5>Menu Principal de Jefe de Tutoría</h5></li>
                                <li class="list-group-item border shadow-lg p-3 mb-5 bg-white rounded">
                                    <button class="btn btn-light col-md-12" onClick={() => this.habilitar()} >Habilitar Cuestionario de Evaluación de la Acción Tutorial</button><br></br>
                                    <Link to={"/subInfo/"+this.props.match.params.id} class="btn btn-light col-md-12">Subir Resultados de Examen II</Link><br></br>
                                    <li class="nav-item dropdown list">
                                        <Link class="nav-link dropdown-toggle btn-light" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Ver Informes</Link>
                                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <Link class="dropdown-item" to={"/verInfores/"+this.props.match.params.id}>Ver Resultados de Examen II</Link>
                                            <Link class="dropdown-item" to={"/encuestaF/"+this.props.match.params.id}>Ver Resultados de Enciesta de Satisfacción</Link>
                                            <Link class="dropdown-item" to={"/verEntreIniJ/"+this.props.match.params.id}>Ver Resultados de Entrevista Inicial</Link>
                                        </div>
                                    </li>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Foolder />
            </div>
        );
    }// Funcion para habilitar el (Cuestionario de Evaluación de la Acción Tutorial)
    habilitar(){
        Swal.fire({
            icon:'question',
            title:'Habilitar evacuación',
            showCancelButton:true,
            confirmButtonText:'Habilitar',
            cancelButtonText:'Cancelar',
            cancelButtonColor:'#d33'
        }).then((result) =>{
            if(result.value){
                const Url = "http://localhost:3000/apis/activar/button/evaluaDocente";
                axios.put(Url);
                Swal.fire({
                    icon:'success',
                    title:'Habilitar',
                    text:'La encuesta evaluación docente se a habilitado' 
                });
            }else{
                Swal.fire(
                    'Cancelado',
                    'Se a Cancelado la evaluación',
                    'error'
                );
            }
        });
    }
}

export default HomeJ;