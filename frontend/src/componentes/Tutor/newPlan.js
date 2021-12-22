import React from 'react';
import { Link } from 'react-router-dom';
import '../Home.css';
import axios from 'axios';
import imagen from '../../Captura3.PNG';
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
            readDatos:[],
            campoGrupos:"",
            campoNewGro:"",
            campoCicl:""
        }
    }//Metodo para obtener los grupos asignados al tutor desde la api
    componentDidMount(){
        let id = this.props.match.params.id;
        const Url = "http://localhost:3000/apis/list/planList/groups/"+id;
        axios.get(Url)
        .then(res=>{
            if(res.data.success){
                const datos = res.data.data;
                this.setState({
                    readDatos:datos,
                    campoGrupos:datos.grupoTutores
                });
            }
        });
    }
    render(){    
        return(
            <div style={ sectionStyle }>
                <nav class="navbar navbar-default bg-nav fixed-top" role="navigation">
                    <Link class="navbar-brand color" to={'/HomeT/'+this.props.match.params.id}>SIIUTeM</Link>
                    <ul class="nav justify-content-end">
                        <li class="nav-item">
                            <li class="nav-item dropdown list">
                                <Link class="nav-link dropdown-toggle color navbar-brand" data-toggle="dropdown">Ver Resultados</Link>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link class="dropdown-item" to={"/verEntreIni/"+this.props.match.params.id}>Ver Entrevista Inicial</Link>
                                    <Link class="dropdown-item" to={"/verExameII/"+this.props.match.params.id}>Ver Resultados de Examen II</Link>
                                </div>
                            </li>
                        </li>
                        <li class="nav-item">
                            <li class="nav-item dropdown list">
                                <Link class="nav-link dropdown-toggle color navbar-brand" data-toggle="dropdown">Ver Informes</Link>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link class="dropdown-item" to={"/reportePlan/"+this.props.match.params.id}>Ver Reportes de Plan de Acción Tutorial A</Link>
                                    <Link class="dropdown-item" to={"/verreportplanB/"+this.props.match.params.id}>Ver Reportes de Plan de Acción Tutorial B</Link>
                                    <Link class="dropdown-item" to={"/vercanalizacion/"+this.props.match.params.id}>Ver Alumnos Canalizados</Link>
                                </div>
                            </li>
                        </li>
                        <li class="nav-item">
                            <Link class="boton_salir color navbar-brand" to={"/canalizacion/"+this.props.match.params.id}>Canalización de Alumno</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="boton_salir color navbar-brand" to={"/plan/"+this.props.match.params.id}>Volver</Link>
                        </li>
                    </ul>
                </nav>
                <br></br><br></br><br></br><br></br>
                <div class="container"> 
                    <h4 class="text-center text-white">PLAN DE ACCIÓN TUTORIAL</h4>
                    <br></br> <br></br> 
                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <h5 class="text-white">Grupo tutorado</h5>
                            <select class="form-control" onChange={(value) => this.setState({campoNewGro:value.target.value})}>
                                <option selected="true" disabled="disabled">seleccione una opción</option> 
                                {this.Read()}
                            </select>
                        </div>
                        <div class="col-md-4">
                            <h5 class="text-white">Ciclo</h5>
                            <select class="form-control" onChange={(value) => this.setState({campoCicl:value.target.value})}>
                                <option selected="true" disabled="disabled">seleccione una opción</option>  
                                <option value="Enero-Abril">Enero-Febrero</option>
                                <option value="Mayo-Agosto">Mayo-Agosto</option>  
                                <option value="Septiembre-Diciembre">Septiembre-Diciembre</option>
                            </select>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-1">
                                <h5 class="text-white">Nuevo</h5>
                                <button onClick={() => this.Crear()} class="btn btn-primary">Crear</button>
                            </div>
                        </div>
                    </div>  
                </div>
                <br></br><br></br>
                <Foolder />
            </div>
        );
    }//Función para mostrar los grupos
    Read(){
        return this.state.readDatos.map((datos)=>{
            return <option>{datos.grupoTutores}</option>                  
        });
    }//Función para guardar los datos en la base  
    Crear(){
        const Url = "http://localhost:3000/apis/create/new/plan";
        const datos = {
            grupoDatos: this.state.campoNewGro,
            cicloDatos: this.state.campoCicl,
            idTutoriasDocentes15: this.props.match.params.id
        }
        axios.post(Url,datos);
        window.location.replace("/plan/"+this.props.match.params.id);
    }
}

export default Plan;