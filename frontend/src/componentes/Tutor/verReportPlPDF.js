import React from 'react';
import { Link } from 'react-router-dom';
import '../Home.css';
import axios from 'axios';
import Foolder from '../fooldel';
import ReactToPrint, { PrintContextConsumer } from 'react-to-print'; //librería para el pdf

class VerReportPlPDF extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            readSesio:[],
            readOpser:[],
            readAll:[],
            readDatM:[],
            campoLoPlaneado:"", 
            campoLoRealizado:""
        }
    }//Metodo para obtener todas las Sesiones de la api
    componentDidMount(){
        let id = this.props.id;
        const Url = "http://localhost:3000/apis/list/reporte/rlan/evidencias/"+id;
        axios.get(Url)
        .then(res=>{
            if(res.data.success){
                const datos = res.data.data;
                this.setState({readSesio:datos});
            }
        });//Metodo para obtener todas las observaciones de la api
        const Url2 = "http://localhost:3000/apis/list/reporte/Observaciones/all/"+id;
        axios.get(Url2)
        .then(res=>{
            if(res.data.success){
                const datos2 = res.data.data;
                this.setState({readOpser:datos2});
            }
        });//Metodo para obtener toto lo planeado y lo realizado de la api
        const Url3 = "http://localhost:3000/apis/list/reporte/plan/accion/All/"+id;
        axios.get(Url3)
        .then(res=>{
            if(res.data.success){
                const datos3 = res.data.data;
                this.setState({readAll:datos3});
            }
        });
    }
    render(){
        return(
            <div>
                <nav class="navbar navbar-default bg-nav fixed-top" role="navigation">
                    <Link class="navbar-brand color" to={"/HomeT/"+this.props.idTutor}>SIIUTeM</Link>
                    <Link class="boton_salir color navbar-brand" to={"/insertReportePlan/"+this.props.id+"/"+this.props.idTutor+"/"+this.props.Nom+"/"+this.props.Ape+"/"+this.props.Grupo+"/"+this.props.Ciclo}>Volver</Link>
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
                            <h4 class="text-center">REPORTE DE PLAN DE ACCIÓN TUTORIAL A</h4>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-8 border border-white" />
                        <li class="list-group col-2 text-center border border-dark rounded-0">
                            <h6>Grupo tutorado</h6>
                        </li>
                        <li class="list-group col-2 text-center border border-dark rounded-0">
                            <h7>{this.props.Grupo}</h7>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-8 border border-white" />
                        <li class="list-group col-2 text-center border border-dark rounded-0">
                            <h6>Ciclo</h6>
                        </li>
                        <li class="list-group col-2 text-center border border-dark rounded-0">
                            <h7>{this.props.Ciclo}</h7>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-2 text-center border border-dark rounded-0">
                            <h6>Nombre del tutor</h6>
                        </li>
                        <li class="list-group col-10 text-center border border-dark rounded-0">
                            <h7>{this.props.Nom+" "+this.props.Ape}</h7>
                        </li>
                    </ul>
                    <br />
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group text-center col-6 border border-dark rounded-0">
                            <h6>Sesiones Grupales Programadas</h6>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group text-center col-md-12 border border-dark rounded-0">
                            <h6>Descripción</h6>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-1 text-center border border-dark rounded-0">
                            <h6>Nu.</h6>
                        </li>
                        <li class="list-group col-md-5 border border-dark rounded-0">
                            <h6>Lo planeado</h6>
                        </li>
                        <li class="list-group col-md-6 border border-dark rounded-0">
                            <h6>Lo realizado</h6>
                        </li>
                    </ul>
                    {this.readAll()}
                    <br />
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-md-6 border border-white rounded-0">
                            <ul class="list-group list-group-horizontal">
                                <li class="list-group col-md-12 border border-dark rounded-0">
                                    <h6>Observaciones</h6>
                                </li>
                            </ul>
                            {this.readOpser()}
                        </li>
                        <li class="list-group col-md-6 border border-white rounded-0">
                            <ul class="list-group list-group-horizontal">
                                <li class="list-group col-md-12 border border-dark rounded-0">
                                    <h6>Evidencias</h6>
                                </li>
                            </ul>
                            {this.readSesion()}
                        </li>
                    </ul>
                    <br />
                </div>
            </div>
        );
    }//Función para mostrar todas las sesiones de la api
    readSesion(){
        return this.state.readSesio.map((datos)=>{
            return(
                <ul class="list-group list-group-horizontal">
                    <li class="list-group col-md-12 border border-dark rounded-0">
                        {datos.evidencias}
                    </li>
                </ul>
            );
        });
    }//Función para mostrar todas las observaciones de la api 
    readOpser(){
        return this.state.readOpser.map((datos2)=>{
            return(
                <ul class="list-group list-group-horizontal">
                    <li class="list-group col-md-12 border border-dark rounded-0">
                        <h7>{datos2.observaAtenIndi}</h7> 
                    </li>
                </ul>
            );
        });
    }//Función para mostrar todo lo planeado y lo realizado 
    readAll(){
        return this.state.readAll.map((datos3, index)=>{
            return(
                <ul class="list-group list-group-horizontal">
                    <li class="list-group col-1 text-center border border-dark rounded-0">
                        <h6>{index + 1}</h6>
                    </li>
                    <li class="list-group col-md-5 border border-dark rounded-0">
                        <h7>{datos3.loPlaneado}</h7>
                    </li>
                    <li class="list-group col-md-6 border border-dark rounded-0">
                        <h7>{datos3.loRealizado}</h7>
                    </li>
                </ul>
            );
        });
    }
}
//Clase para generar las funciones de genrerar pdf, imprimir directamente, etc
class GenerarPDFRep extends React.Component{
    render(){
        return(
            <div>
                <div class="container">
                    <VerReportPlPDF idTutor={this.props.match.params.idTutor} id={this.props.match.params.id} Nom={this.props.match.params.Nom} Ape={this.props.match.params.Ape} Grupo={this.props.match.params.Grupo} Ciclo={this.props.match.params.Ciclo} ref={el => (this.componentRef = el)} />
                    <ReactToPrint documentTitle="Reporte de plan de acción tutorial" content={() => this.componentRef}>
                        <PrintContextConsumer>
                        {({ handlePrint }) => (
                            <div class="text-center">
                                <Link class="btn btn-success" onClick={handlePrint} >Generar PDF</Link>
                            </div>
                        )}
                        </PrintContextConsumer>
                    </ReactToPrint>
                </div>
                <br /><br /><br />
                <Foolder />
            </div>
        )
    }
}

export default GenerarPDFRep;