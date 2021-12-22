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

class Tutor extends React.Component{
    render(){
        return(
            <div style={ sectionStyle }>
                <nav class="navbar navbar-default bg-nav fixed-top" role="navigation">
                    <Link class="navbar-brand color" to={"/HomeT/"+this.props.match.params.id}>SIIUTeM</Link>
                    <Link class="boton_salir color navbar-brand" to="/">Salir</Link>
                </nav>
                <br></br><br></br> <br></br><br></br><br></br>
                <div class="container">
                    <div class="form-row">
                        <div class="col-md-4">
                            <ul class="list-group">
                                <li class="list-group-item text-center shadow-lg bg-white rounded"><h5>Menu Principal de Tutor</h5></li>
                                <li class="list-group-item border shadow-lg p-3 mb-5 bg-white rounded">
                                    <button type="button" onClick={() => this.abilitar()} class="btn btn-light col-md-12">Habilitar Encuesta Inicial</button><br></br>
                                    <Link to={"/plan/"+this.props.match.params.id} class="btn btn-light col-md-12">Plan de Acción Tutorial</Link><br></br>
                                    <Link to={"/reportePlan/"+this.props.match.params.id} class="btn btn-light col-md-12">Reporte de Plan de Acción Tutorial A</Link><br></br>
                                    <Link to={"/canalizacion/"+this.props.match.params.id} class="btn btn-light col-md-12">Canalización de Alumnos</Link><br></br>
                                    <li class="nav-item dropdown list">
                                        <Link class="nav-link dropdown-toggle btn-light" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Ver Informes</Link>
                                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <Link class="dropdown-item" to={"/verreportplanB/"+this.props.match.params.id}>Ver Reporte de Plan de Acción Tutorial B</Link>
                                            <Link class="dropdown-item" to={"/vercanalizacion/"+this.props.match.params.id}>Ver Alumnos Canalizados</Link>
                                        </div>
                                    </li>
                                    <li class="nav-item dropdown list">
                                        <Link class="nav-link dropdown-toggle btn-light" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Ver Resultados</Link>
                                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <Link class="dropdown-item" to={"/verEntreIni/"+this.props.match.params.id}>Ver Entrevista Inicial</Link>
                                            <Link class="dropdown-item" to={"/verExameII/"+this.props.match.params.id}>Ver Resultados de Examen II</Link>
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
    }//Funcion para habilitar la encuesta inicial 
    abilitar(){
        Swal.fire({
            icon:'question',
            title:'Habilitar Entrevista Inicial',
            showCancelButton:true,
            confirmButtonText:'Habilitar',
            cancelButtonText:'Cancelar',
            cancelButtonColor:'#d33'
        }).then((result)=>{
            if(result.value){
                let id = this.props.match.params.id;
                const Url = "http://localhost:3000/apis/activar/button/entrevistaIni/"+id;
                axios.put(Url);
                Swal.fire({
                    icon:'success',
                    title:'Habilitar',
                    text:'La entrevista inicial se a habilitado' 
                });
            }else{
                Swal.fire(
                    'Cancelado',
                    'Se a cancelado la habilitación de la Entrevista Inicial',
                    'error'
                );
            }
        });
    }
}

export default Tutor;