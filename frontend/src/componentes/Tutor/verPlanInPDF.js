import React from 'react';
import { Link } from 'react-router-dom';
import '../Home.css';
import axios from 'axios';
import Foolder from '../fooldel';
import ReactToPrint, { PrintContextConsumer} from 'react-to-print';// librería para el pdf 

class VerPlanInPDF extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            readSesio:[],
            readAtenc:[],
            campoTem:"",
            campoOpj:"",
            campoAct:"",
            campoRec:"",
            campoEvi:"",
            campoNom:"",
            campoAT:"",
            campoOps:""
        }
    }
    componentDidMount(){
        let id = this.props.id;//Metodo para obtener los datos generales del plan de accion tutorial de la api
        const Url = "http://localhost:3000/apis/list/Grupo/Ciclo/"+id;
        axios.get(Url)
        .then(res=>{
            if(res.data.success){
                const datos = res.data.data[0];
                this.setState({
                    campoId:datos.numControlD,
                    campoNomb:datos.nombreDocente,
                    campoApel:datos.apellidoDocente,
                    campoGruTu:datos.grupoDatos,
                    campoCicl:datos.cicloDatos
                });
            }
        });//Metodo para obtener las todas las sesiones programadas de la api 
        const Url2 = "http://localhost:3000/apis/list/listVerPlan/ver/"+id;
        axios.get(Url2)
        .then(res=>{
            if(res.data.success){
                const datos2 = res.data.data;
                this.setState({readSesio:datos2});
            }
        });//Metodo para obtener todos los alumnos a atención individual de la api 
        const Url3 = "http://localhost:3000/apis/list/atencionIndi/list/"+id;
        axios.get(Url3)
        .then(res=>{
            if(res.data.success){
                const datos3 = res.data.data;
                this.setState({readAtenc:datos3});
            }
        });
    }
    render(){    
        return(
            <div>
                <nav class="navbar navbar-default bg-nav fixed-top" role="navigation">
                    <Link class="navbar-brand color" to={"/HomeT/"+this.state.campoId}>SIIUTeM</Link>
                    <Link class="boton_salir color navbar-brand" to={"/creaPlan/"+this.props.id+"/"+this.state.campoId}>Volver</Link>
                </nav>
                <br></br><br></br><br></br><br></br>
                <div class="container">
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-2 border border-white">
                            <img
                            width="150px" 
                            max-width=":256px"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQk6ORHe7XD9wZ5o7SkAo3ZnD6jsszlry4fgQ&usqp=CAU"/>
                        </li>
                        <li class="list-group col-8 border border-white">
                            <h4 class="text-center">PLAN DE ACCIÓN TUTORIAL</h4>
                        </li>
                    </ul>
                    <br />
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-2 text-center border border-dark rounded-0">
                            <h6>Nombre del tutor</h6>
                        </li>
                        <li class="list-group col-10 text-center border border-dark rounded-0">
                            <h7>{this.state.campoNomb} {this.state.campoApel}</h7>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-1 text-center border border-dark rounded-0">
                            <h6>Grupo</h6>
                        </li>
                        <li class="list-group col-3 text-center border border-dark rounded-0">
                            <h7>{this.state.campoGruTu}</h7>
                        </li>
                        <li class="list-group col-md-5 text-center border border-white"/>
                        <li class="list-group col-1 text-center border border-dark rounded-0">
                            <h6>Ciclo</h6>
                        </li>
                        <li class="list-group col-2 text-center border border-dark rounded-0">
                            <h7>{this.state.campoCicl}</h7>
                        </li>
                    </ul>
                    <br />
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-4 text-center border border-dark rounded-0">
                            <h6>Sesiones Grupales</h6>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-1 text-center border border-dark rounded-0">
                            <h6>Nu.</h6>
                        </li>
                        <li class="list-group col-md-2 text-center border border-dark rounded-0">
                            <h6>Tema</h6>
                        </li>
                        <li class="list-group col-md-3 text-center border border-dark rounded-0">
                            <h6>Objetivos</h6>
                        </li>
                        <li class="list-group col-md-2 text-center border border-dark rounded-0">
                            <h6>Actividades</h6>
                        </li>
                        <li class="list-group col-md-2 text-center border border-dark rounded-0">
                            <h6>Recursos</h6>
                        </li>    
                        <li class="list-group col-md-2 text-center border border-dark rounded-0">
                            <h6>Evidencias</h6>
                        </li>
                    </ul>
                    {this.readSesiones()}
                    <br />
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group text-center col-4 border border-dark rounded-0">
                            <h6>Alumnos a atención individual</h6>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-1 text-center border border-dark rounded-0">
                            <h6>Nu.</h6>
                        </li>
                        <li class="list-group col-md-3 text-center border border-dark rounded-0">
                            <h6>Nombre</h6>
                        </li>
                        <li class="list-group col-md-3 text-center border border-dark rounded-0">
                            <h6>Asunto a tratar</h6>
                        </li>
                        <li class="list-group col-md-5 text-center border border-dark rounded-0">
                            <h6>Observaciones</h6>
                        </li>
                    </ul>
                    {this.atencionIndi()}
                    <br></br><br></br>      
                </div>
            </div>
        );
    }// Función para mostrar todas las sesiones
    readSesiones(){
        return this.state.readSesio.map((datos2, index)=>{
            return(
                <ul class="list-group list-group-horizontal">
                    <li class="list-group text-center col-1 border border-dark rounded-0">
                        <h6>{index + 1}</h6>
                    </li>
                    <li class="list-group col-md-2 border border-dark rounded-0">
                        <h7>{datos2.tema}</h7>
                    </li>
                    <li class="list-group col-md-3 border border-dark rounded-0">
                        <h7>{datos2.objetivos}</h7>
                    </li>  
                    <li class="list-group col-md-2 border border-dark rounded-0">
                        <h7>{datos2.actividades}</h7>
                    </li> 
                    <li class="list-group col-md-2 border border-dark rounded-0">
                        <h7>{datos2.recursos}</h7>
                    </li>
                    <li class="list-group col-md-2 border border-dark rounded-0">
                        <h7>{datos2.evidencias}</h7>
                    </li>
                </ul>
            );
        });
    }// Función para mostrar todos los alumnos a atención individual
    atencionIndi(){
        return this.state.readAtenc.map((datos3, index)=>{
            return(
                <ul class="list-group list-group-horizontal">
                    <li class="list-group text-center col-1 border border-dark rounded-0">
                        <h6>{index + 1}</h6>
                    </li>
                    <li class="list-group col-md-3 border border-dark rounded-0">
                        <h7>{datos3.nombreAlumno+" "+datos3. apellidoAlumno}</h7>
                    </li>
                    <li class="list-group col-md-3 border border-dark rounded-0">
                        <h7>{datos3.asuntoObserva}</h7>
                    </li>
                    <li class="list-group col-md-5 border border-dark rounded-0">
                        <h7>{datos3.observaAtenIndi}</h7>
                    </li>
                </ul>
            );
        });
    }
}
//Clase para generar las funciones de generar pdf, imprimir direcctamente etc.
class GenerarPDFPlan extends React.Component{
    render(){
        return(
            <div>
                <div class="container">
                    <VerPlanInPDF id={this.props.match.params.id} ref={el => (this.componentRef = el)} />
                    <ReactToPrint documentTitle="Plan de accián tutorial" content={() => this.componentRef}>
                        <PrintContextConsumer>
                            {({ handlePrint }) => (
                                <div class="text-center">
                                    <Link class="btn btn-success" onClick={handlePrint}>Generar PDF</Link>
                                </div>
                            )}
                        </PrintContextConsumer>
                    </ReactToPrint>
                </div>
                <br /><br /><br />
                <Foolder />
            </div>
        );
    }
}

export default GenerarPDFPlan;