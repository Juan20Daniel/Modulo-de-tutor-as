import React from 'react';
import {Link} from 'react-router-dom';
import '../Home.css';
import axios from 'axios';
import imagen from '../../Captura3.PNG';
import Foolder from '../fooldel';

var sectionStyle = {
    width: "100%",
    height: "600px",
    backgroundImage: "url(" + imagen + ")"
};

class subInfo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            readDato:[]
        }
    }//Metodo para obtener todos los grupos registrados en la base de datos
    componentDidMount(){
        const Url = "http://localhost:3000/apis/list/result/esamenll";
        axios.get(Url)
        .then(res=>{
            if(res.data.success){
                const datos = res.data.data;
                this.setState({readDato:datos});
            }
        });
    }
    render(){
        return(
            <div style={ sectionStyle } className="estatic">
                <nav class="navbar bg-nav fixed-top" >
                    <Link class="navbar-brand color" to={"/HomeJ/"+this.props.match.params.id}>SIIUTeM</Link>
                    <ul class="nav justify-content-end">
                        <li class="nav-item">
                            <li class="nav-item dropdown list col-md-2">
                                <Link class="nav-link dropdown-toggle color navbar-brand" data-toggle="dropdown">Ver Informes</Link>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link class="dropdown-item" to={"/verInfores/"+this.props.match.params.id}>Ver Resultados de <br /> Examen II</Link>
                                    <Link class="dropdown-item" to={"/encuestaF/"+this.props.match.params.id}>Ver Resultados de <br /> Enciesta de Satisfacción</Link>
                                    <Link class="dropdown-item" to={"/verEntreIniJ/"+this.props.match.params.id}>Ver Resultados de <br /> Entrevista Inicial</Link>
                                </div>
                            </li>
                        </li>
                    </ul>
                </nav>
                <br></br><br></br><br></br><br></br>
                <div class="container">
                    <h4 class="text-center text-white">INFORME DE EXAMEN II</h4>
                    <br /> <br /> 
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item col-md-6">
                            <ul class="list-group list-group-horizontal">
                                <li class="list-group-item text-center col-md-2">
                                    <h5>Nu.</h5>
                                </li>
                                <li class="list-group-item text-center col-md-7">
                                    <h5>Grupo</h5>
                                </li>
                                <li class="list-group-item text-center col-3">
                                    <h5>Añadir</h5>
                                </li>
                            </ul>
                            {this.read()}
                        </li>
                    </ul>
                </div>      
                <br /><br /><br /><br />
                <Foolder />
            </div>
        );
    }//Función para mostrar los grupos de la base 
    read(){
        return this.state.readDato.map((datos, index)=>{
            return(
                <ul class="list-group list-group-horizontal">
                    <li class="list-group-item text-center col-md-2">
                        <h5>{index + 1}</h5>
                    </li>
                    <li class="list-group-item col-md-7">
                        <h7>{datos.grupoTutores}</h7>
                    </li>
                    <li class="list-group-item text-center col-md-3">
                        <center>
                            <Link title="Ver grupo" class="btn btn-primary" to={"/insertSubInfo/"+this.props.match.params.id+"/"+datos.grupoTutores}>
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-card-list" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M14.5 3h-13a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
                                <path fill-rule="evenodd" d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5z"/>
                                <circle cx="3.5" cy="5.5" r=".5"/>
                                <circle cx="3.5" cy="8" r=".5"/>
                                <circle cx="3.5" cy="10.5" r=".5"/></svg>
                            </Link>
                        </center>
                    </li>
                </ul>
            );
        });
    }
}

export default subInfo;