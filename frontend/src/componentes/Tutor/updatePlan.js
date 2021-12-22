import React from 'react';
import { Link } from 'react-router-dom';
import '../Home.css';
import axios from 'axios';
import Swal from 'sweetalert2/dist/sweetalert2.js';//Librería para los alertas
import 'sweetalert2/src/sweetalert2.scss';//Librería para los alertas
import Foolder from '../fooldel';
import imagen from '../../Captura3.PNG';

var sectionStyle = {
    width: "100%",
    height: "600px",
    backgroundImage: "url(" + imagen + ")"
};

class UpdatePlan extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            readDatos:[]
        }
    }//Metodo para optener el ciclo y el grupo para catualizar el plan
    componentDidMount(){
        let id = this.props.match.params.id;
        const Url = "http://localhost:3000/apis/plan/update/updatePlan/"+id;
        axios.get(Url)
        .then(res=>{
            if(res.data.success){
                const datos = res.data.data[0];
                this.setState({
                    campoGrupos:datos.grupoDatos,
                    campoCicl:datos.cicloDatos,
                    campoId:datos.idTutoriasDocentes15
                });
            }
        });//Metodo para obtener los grupos del tutor asignados 
        const Url2 = "http://localhost:3000/apis/list/All/Grups/tutor/alumnos/"+this.props.match.params.idTutor;
        axios.get(Url2)
        .then(res=>{
            const groups = res.data.data;
            this.setState({readDatos:groups});
        });
    }
    render(){    
        return(
            <div style={ sectionStyle } className="estatic">
                <nav class="navbar navbar-default bg-nav fixed-top" role="navigation">
                    <Link class="navbar-brand color" to={"/HomeT/"+this.props.match.params.idTutor}>SIIUTeM</Link>
                    <Link class="boton_salir color navbar-brand" onClick={() => this.volver()}>Volver</Link>
                </nav>
                <br></br><br></br><br></br><br></br>
                <div class="container"> 
                    <h4 class="text-center text-white">MODIFICAR PLAN DE ACCIÓN TUTORIAL</h4>
                    <br></br> <br></br> 
                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <h5 class="text-white">Grupo tutorado</h5>
                            <select class="form-control" value={this.state.campoGrupos} onChange={(value) => this.setState({campoGrupos:value.target.value})}>  
                                {this.read()}
                            </select>
                        </div>
                        <div class="col-md-4">
                            <h5 class="text-white">Ciclo</h5>
                            <select class="form-control" value={this.state.campoCicl} onChange={(value) => this.setState({campoCicl:value.target.value})}> 
                                <option value="Enero-Abril">Enero-Febrero</option>
                                <option value="Mayo-Agosto">Mayo-Agosto</option>  
                                <option value="Septiembre-Diciembre">Septiembre-Diciembre</option>
                            </select>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-1">
                                <h5 class="text-white">Modificar</h5>
                                <button onClick={() => this.Update()} class="btn btn-primary">Aceptar</button>
                            </div>
                        </div>
                    </div>  
                </div>
                <br></br><br></br>
                <Foolder />
            </div>
        );
    }//Función para mostrar los grupos 
    read(){
        return this.state.readDatos.map((groups) =>{
            return(
                <option>{groups.grupoTutores}</option>
            );
        });
    }//Función para actualizar el grupo o el ciclo en la base
    Update(){
        let id = this.props.match.params.id;
        const Url = "http://localhost:3000/apis/update/updatePlan/"+id;
        const datos = {
            grupoDatos: this.state.campoGrupos,
            cicloDatos: this.state.campoCicl
        }
        axios.put(Url,datos);
        Swal.fire({
            icon:'success',
            title:'Listo',
            text:'Los cambios se han guardado'
        }).then((result)=>{
            if(result.value){
                window.location.replace("/plan/"+this.state.campoId);
            }
        });
    }//Función para volver al la vista de plan 
    volver(){
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
                window.location.replace("/plan/"+this.state.campoId);
            }
        });
    }
}

export default UpdatePlan;