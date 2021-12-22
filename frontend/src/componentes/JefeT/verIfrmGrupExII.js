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

class verIfrmGrupExII extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            readDatos:[],
            readAnos:[]
        }
    }//Metodo para obtener los datos generales del alumno, nombre, etc.
    componentDidMount(){
        let grupo = this.props.match.params.grupo;
        const Url = "http://localhost:3000/apis/list/res/examen/ceneval/for/jefe/"+grupo;
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
                    <Link class="navbar-brand color" to={"/HomeJ/"+this.props.match.params.id}>SIIUTeM</Link>
                    <Link onClick={() => this.volver()} class="boton_salir color navbar-brand">Volver</Link>
                </nav>
                <br></br><br></br><br></br><br></br>
                <div class="container-fluid">
                <h4 class="text-center text-white">RESULTADOS DEL EXAMEN CENEVAL DEL GRUPO {this.props.match.params.grupo}</h4>
                    <br></br>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item text-center col-md-1">
                            <h5>Nu.</h5>
                        </li>
                        <li class="list-group-item col-md-3">
                            <h5>Nombre</h5>
                        </li>
                        <li class="list-group-item col-md-3">
                            <h5>Apellidos</h5>
                        </li>
                        <li class="list-group-item col-md-3">
                            <h5>Nu. Control</h5>
                        </li>
                        <li class="list-group-item col-md-2">
                            <h5>Calificación</h5>
                        </li>
                    </ul>
                    {this.read()}
                </div>
                <Foolder />
            </div>
        );
    }//Función para mostrar los datos obtenidos 
    read(){
        return this.state.readDatos.map((datos, index)=>{
            return(
                <ul class="list-group list-group-horizontal">
                    <li class="list-group-item text-center col-md-1">
                        <h5>{index + 1}</h5>
                    </li>
                    <li class="list-group-item col-md-3">
                        <h7>{datos.nombreAlumno}</h7>
                    </li>
                    <li class="list-group-item col-md-3">
                        <h7>{datos.apellidoAlumno}</h7>
                    </li>
                    <li class="list-group-item col-md-3">
                        <h7>{datos.numControlA}</h7>
                    </li>
                    <li class="list-group-item col-md-2">
                        <h7>{datos.resultado}</h7>
                    </li>
                </ul>
            );
        });
    }//Función para mostrar los años para filtrar 
    readAnos(){
        return this.state.readAnos.map((datos2)=>{
            return(
                <option>{datos2.fecha}</option>
            );
        });
    }//Función para volver 
    volver(){
        if(this.props.match.params.ano === "1"){
            window.location.replace("/verInfores/"+this.props.match.params.id);
        }else{
            window.location.replace("/verResIndiExamII/"+this.props.match.params.id+"/"+this.props.match.params.ano);
        }
    }
}
export default verIfrmGrupExII;