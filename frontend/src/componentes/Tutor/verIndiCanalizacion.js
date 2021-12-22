import React from 'react';
import { Link } from 'react-router-dom';
import '../Home.css';
import axios from 'axios';
import Foolder from '../fooldel';
import ReactToPrint, { PrintContextConsumer } from 'react-to-print';//Librería para el pdf
 
class VerIndiCanalizacion extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            campoTutor:""
        }
    }//Metodo para obtener la canalización de la api
    componentDidMount(){
        let id = this.props.id;
        const Url = "http://localhost:3000/apis/list/canali/onli/one/"+id;
        axios.get(Url)
        .then(res=>{
            const datos = res.data.data[0];
            this.setState({
                campoTutor:datos.nombreDocente,
                campoApeTu:datos.apellidoDocente,
                campoNomAlumn:datos.nombreAlumno,
                campoApeAlumn:datos.apellidoAlumno,
                campoNumContr:datos.numControlA,
                campoGrupoCan:datos.grupoTutores,
                campoFecha:datos.fechaCanalAlu, 
                campoHora:datos.horaCanalAlu,
                campoAreaCana:datos.areaCanalAlu, 
                campoMotiCana:datos.motiCanalAlu,
                campoAtenCana:datos.atenCanaAlu,
                campoFechaAte:datos.fechaAtenCana,
                campoObserCan:datos.obserCanalAlu
            });
        });
    }
    render() {
        return(
            <div>
                <nav class="navbar navbar-default bg-nav fixed-top" role="navigation">
                    <Link class="navbar-brand color" to={"/HomeT/"+this.props.idTutor}>SIIUTeM</Link>
                    <Link class="boton_salir color navbar-brand" to={"/vercanalizacion/"+this.props.idTutor}>Volver</Link>
                </nav>
                <br></br><br></br><br></br><br></br>
                <div class="container">
                    <img
                    width="150px" 
                    max-width=":256px"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQk6ORHe7XD9wZ5o7SkAo3ZnD6jsszlry4fgQ&usqp=CAU"/>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-6 border-white"></li>
                        <li class="list-group text-center col-6 rounded-0 border border-dark">
                            <h4>CANALIZACIÓN DE ALUMNO</h4>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-3 text-center rounded-0 border border-dark">
                            <h6>Nombre del alumno</h6>
                        </li>
                        <li class="list-group col-3 text-center rounded-0 border border-dark">
                            <h7>{this.state.campoNomAlumn+" "+this.state.campoApeAlumn}</h7>
                        </li>
                        <li class="list-group col-1 text-center rounded-0 border border-dark">
                            <h6>Grupo</h6>
                        </li>
                        <li class="list-group col-1 text-center rounded-0 border border-dark">
                            <h7>{this.state.campoGrupoCan}</h7>
                        </li>
                        <li class="list-group col-2 text-center rounded-0 border border-dark">
                            <h6>Nu. Control</h6>
                        </li>
                        <li class="list-group col-2 text-center rounded-0 border border-dark">
                            <h7>{this.state.campoNumContr}</h7>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-3 text-center rounded-0 border border-dark">
                            <h6>Nombre del Tutor</h6>
                        </li>
                        <li class="list-group col-3 text-center rounded-0 border border-dark">
                            <h7>{this.state.campoTutor+" "+this.state.campoApeTu}</h7>
                        </li> 
                        <li class="list-group col-1 text-center rounded-0 border border-dark">
                            <h6>Fecha</h6>
                        </li>
                        <li class="list-group col-2 text-center rounded-0 border border-dark">
                            <h7>{this.state.campoFecha}</h7>
                        </li>
                        <li class="list-group col-1 text-center rounded-0 border border-dark">
                            <h6>Hora</h6>
                        </li>
                        <li class="list-group col-2 text-center rounded-0 border border-dark">
                            <h7>{this.state.campoHora}</h7>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-3 text-center rounded-0 border border-dark">
                            <h6>Área o departamento de canalización</h6>
                        </li>
                        <li class="list-group text-center col-2 rounded-0 border border-dark">
                            <h7>{this.state.campoAreaCana}</h7>
                        </li>
                        <li class="list-group text-center col-3 rounded-0 border border-dark">
                            <h6>Motivo de canalización</h6>
                        </li>
                        <li class="list-group col-4 text-center rounded-0 border border-dark">
                            <h7>{this.state.campoMotiCana}</h7>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-2 text-center rounded-0 border border-dark">
                            <h6>Atendido por</h6>
                        </li>
                        <li class="list-group col-6 rounded-0 text-center border border-dark">
                            <h7>{this.state.campoAtenCana}</h7>
                        </li>
                        <li class="list-group col-2 text-center rounded-0 border border-dark">
                            <h6>Fecha de atención</h6>
                        </li>
                        <li class="list-group-item col-md-2 rounded-0 border-dark">
                            <h7>{this.state.campoFechaAte}</h7>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-2 rounded-0 text-center border border-dark">
                            <h6>Observaciones</h6>
                        </li>
                        <li class="list-group col-10 rounded-0 border border-dark">
                            <h7>{this.state.campoObserCan}</h7>
                        </li>
                    </ul>
                </div>
                <br /><br /><br /><br />
            </div>
        );
    }
}
//Clase para generar las funciones de generar pdf, imprimir directamente etc
class Example extends React.Component {
    render() {
        return (
            <div>
                <div class="container">
                        <VerIndiCanalizacion idTutor={this.props.match.params.id} id={this.props.match.params.can} ref={el => (this.componentRef = el)}/>
                        <ReactToPrint documentTitle="Canalización"  content={() => this.componentRef}>
                            <PrintContextConsumer>
                                {({ handlePrint }) => (
                                <div class="text-center">
                                    <Link class="btn btn-success" onClick={handlePrint}>Generar PDF</Link>
                                </div>
                                )}
                            </PrintContextConsumer>
                        </ReactToPrint>
                    <br></br><br></br><br></br>
                </div>
                <Foolder />
            </div>
        );
    }
}

export default Example;