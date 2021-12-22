import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Foolder from './fooldel';
import imagen from '../Captura3.PNG';

var sectionStyle = {
    width: "100%",
    height: "600px",
    backgroundImage: "url(" + imagen + ")"
};

class EncargadoPE extends React.Component  {
    render(){
        return(
            <div style={ sectionStyle }>
                <nav class="navbar navbar-default bg-nav fixed-top" role="navigation">
                    <Link class="navbar-brand color" to="/" >SIIUTeM</Link>
                    <Link class="boton_salir color navbar-brand" to="/">Salir</Link>
                </nav>
                <br></br><br></br> <br></br><br></br><br></br>
                <div class="container">
                    <div class="form-row">
                        <div class="col-md-4">
                            <ul class="list-group">
                                <li class="list-group-item text-center shadow-lg bg-white rounded"><h5>Menu Principal de Encargado de Tutoría Por Programa Educativo</h5></li>
                                <li class="list-group-item border shadow-lg p-3 mb-5 bg-white rounded">
                                    <Link to={"/isat/"+this.props.match.params.id} class="btn btn-light col-md-12">Informe de Seguimiento de Acción Tutorial</Link><br></br>
                                    <Link to={"/cambiot/"+this.props.match.params.id} class="btn btn-light col-md-12">Cambio de Tutor</Link>
                                    <li class="nav-item dropdown list">
                                        <Link class="nav-link dropdown-toggle btn-light" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Ver Informes</Link>
                                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <Link to={"/verisat/"+this.props.match.params.id} class="btn btn-light col-md-12">Ver Informe de Seguimiento de Acción Tutorial</Link>
                                            <Link class="dropdown-item" to={"/verEntreIniJyPE/"+this.props.match.params.id}>Ver Entrevista Inicial</Link>
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
    }
}

export default EncargadoPE;