import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Foolder from './fooldel';

class Maestro extends React.Component  {
    render(){
        return(
            <div>
                <nav class="navbar navbar-default bg-nav fixed-top" role="navigation">
                    <Link class="navbar-brand color" to="/HomeM" >SIIUTeM</Link>
                    <Link class="boton_salir color navbar-brand" to="/">Salir</Link>
                </nav>
                <br></br><br></br> <br></br><br></br><br></br>
                <div class="container">
                    <h1>Maestro</h1>
                </div>
                <Foolder />
            </div>
        );
    }
}

export default Maestro;