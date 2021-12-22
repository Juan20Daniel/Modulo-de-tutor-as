import React from 'react';
import {Link } from 'react-router-dom';
import './Home.css';
import axios from 'axios';
import Foolder from './fooldel';

class Alumno extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            readDatos:[],
            readDatos2:[],
            childVisible:"",
            childVisible2:""
        }
    }//Metoto de verificación de que la entrevista inicial esta habilitada o deshabilitada  
    componentDidMount(){
        let id = this.props.match.params.id;
        const Url = "http://localhost:3000/apis/verifica/button/abilitate/"+id;
        axios.get(Url)
        .then(res=>{
            if(res.data.success){
                const datos = res.data.data[0];
                this.setState({
                    readDatos:datos,
                    childVisible:datos.estado
                });
            }
        });//Metoto de verificación de que la evaluacion de la accío tutorial, esta habilitada o deshabilitada 
        const Url2 = "http://localhost:3000/apis/verifica/button/abilitate/evaluaDocente/"+id;
        axios.get(Url2)
        .then(res=>{
            if(res.data.success){
                const data = res.data.data[0];
                this.setState({
                    readDatos2:data,
                    childVisible2:data.estado
                });
            }
        });
    }
    render(){
        const entrevistaIni = { display:this.state.childVisible}
        const evaluaDocente = { display:this.state.childVisible2}
        return(
            <div>
                <nav class="navbar navbar-default bg-nav fixed-top" role="navigation">
                    <Link class="boton_salir color navbar-brand" to="/">Salir</Link>
                </nav>
                <br /><br /><br /><br /><br />
                <div class="container-fluid">
                    <div class="colorHomeA rounded" style={entrevistaIni}>
                        <ul class="list-group list-group-horizontal">
                            <li class="navbar shadow-none p-7 col-md-12 bg-light rounded">
                                <div style={entrevistaIni}>
                                    <Link to={"/entrevistaIni/"+this.props.match.params.id}>ENTREVISTA INICIAL</Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div style={evaluaDocente}>
                        <ul class="list-group list-group-horizontal">
                            <li class="navbar shadow-none p-7 col-md-12 bg-light rounded">
                                <div style={evaluaDocente}>
                                    <Link to={"/evaluaDocente/"+this.props.match.params.id}>EVALUACION DE LA ACCIÓN TUTORIAL</Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <Foolder />
            </div>
        );
    }
}
   				
export default Alumno;