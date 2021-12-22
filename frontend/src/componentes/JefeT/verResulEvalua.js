import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../Home.css';
import Foolder from '../fooldel';
import ReactToPrint, { PrintContextConsumer } from 'react-to-print';//Librería para generar el pdg

class VerResulEvalua extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }//Metodo para obtener todol los datos de la evaluación de la acción tutorial
    componentDidMount(){
        let idRes = this.props.idRes;
        const Url = "http://localhost:3000/apis/list/result/evalua/onli/one/"+idRes;
        axios.get(Url)
        .then(res=>{
            const datos = res.data.data[0]; 
            this.setState({
                campoCarrer:datos.carreTutores,
                campoCuatri:datos.cuatrimestre,
                campoNomAlu:datos.nombreAlumno,
                campoApeAlu:datos.apellidoAlumno,
                campoGrupo:datos.grupoTutores,
                campoFecha:datos.fechaDatoGene,
                campoTutor:datos.nombreDocente,
                campoApeTu:datos.apellidoDocente,
                cuatrimestre:datos.cuatrimestre,
                campoPreg1:datos.pregunta1,
                campoPreg2:datos.pregunta2,
                campoPreg3:datos.pregunta3,
                campoPreg4:datos.pregunta4,
                campoPreg5:datos.pregunta5,
                campoPreg6:datos.pregunta6,
                campoPreg7:datos.pregunta7,
                campoPreg8:datos.pregunta8,
                campoPreg9:datos.pregunta9,
                campoPreg10:datos.pregunta10,
                campoComent:datos.comentario
            }); 
        });
    }
    render(){
        return(
            <div>
                <nav class="navbar bg-nav fixed-top" >
                    <Link class="navbar-brand color" to={"/HomeJ/"+this.props.id}>SIIUTeM</Link>
                    <Link to={"/verResulGrupos/"+this.props.id+"/"+this.props.id2+"/"+this.props.grupo+"/"+this.props.ano} class="boton_salir color navbar-brand">Volver</Link>
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
                            <h4 class="text-center">CUESTIONARIO DE EVALUACIÓN DE LA ACCIÓN TUTORIAL</h4>
                        </li>
                    </ul>
                    <br></br><br></br>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-1 text-center border border-dark rounded-0">
                            <h6>Carrera</h6>
                        </li>
                        <li class="list-group col-7 text-center border border-dark rounded-0">
                            <h7>{this.state.campoCarrer}</h7>
                        </li>
                        <li class="list-group text-center col-2 border border-dark rounded-0">
                            <h6>Cuatrimestre</h6>
                        </li>
                        <li class="list-group col-2 text-center border border-dark rounded-0">
                            <h7>{this.state.cuatrimestre}</h7>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-2 text-center border border-dark rounded-0">
                            <h6>Nombre del tutor</h6>
                        </li>
                        <li class="list-group col-7 text-center border border-dark rounded-0">
                            <h7>{this.state.campoTutor+" "+this.state.campoApeTu}</h7>
                        </li>
                        <li class="list-group col-1 text-center border border-dark rounded-0">
                            <h6>Grupo</h6>
                        </li>
                        <li class="list-group col-2 text-center border border-dark rounded-0">
                            <h7>{this.state.campoGrupo}</h7>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-9 text-center border border-white rounded-0"/>
                        <li class="list-group col-1 text-center border border-dark rounded-0">
                            <h6>Fecha</h6>
                        </li>
                        <li class="list-group col-2 text-center border border-dark rounded-0">
                            <h7>{this.state.campoFecha}</h7>
                        </li>
                    </ul>
                    <br></br>
                    <ul class="nav nav-pills nav-fill">
                        <li class="nav-item">
                            <h5 class="nav-link">1= Nunca (No)</h5>
                        </li>
                        <li class="nav-item">
                            <h5 class="nav-link">2 = Casi nunca</h5>
                        </li>
                        <li class="nav-item">
                            <h5 class="nav-link">3= Casi siempre</h5>
                        </li>
                        <li class="nav-item">
                            <h5 class="nav-link">4=  Siempre (Sí)</h5>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item col-1 text-center border border-dark rounded-0">
                            <label class="form-check-label" for="exampleCheck1">1</label>
                        </li>
                        <li class="list-group-item col-9 border border-dark rounded-0">
                            <label class="form-check-label" for="exampleCheck1">El tutor se presentó al grupo y explicó los propósitos de las tutorías.</label>
                        </li>
                        <li class="list-group-item col-2 border border-dark rounded-0">
                            <p class="text-center">{this.state.campoPreg1}</p>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item col-1 text-center border border-dark rounded-0">
                            <label class="form-check-label" for="exampleCheck1">2</label>
                        </li>
                        <li class="list-group-item col-9 border border-dark rounded-0">
                            <label class="form-check-label" for="exampleCheck1">El tutor presentó un plan de trabajo (temas) para las sesiones grupales.</label>
                        </li>
                        <li class="list-group-item col-2 border border-dark rounded-0">
                        <p class="text-center">{this.state.campoPreg2}</p>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item col-1 text-center border border-dark rounded-0">
                            <label class="form-check-label" for="exampleCheck1">3</label>
                        </li>
                        <li class="list-group-item col-9 border border-dark rounded-0">
                            <label class="form-check-label" for="exampleCheck1">Los temas propuestos para las sesiones grupales fueron abordados según lo previsto.</label>
                        </li>
                        <li class="list-group-item col-2 border border-dark rounded-0">
                        <p class="text-center">{this.state.campoPreg3}</p>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item col-1 text-center border border-dark rounded-0">
                            <label class="form-check-label" for="exampleCheck1">4</label>
                        </li>
                        <li class="list-group-item col-9 border border-dark rounded-0">
                            <label class="form-check-label" for="exampleCheck1">En las sesiones de tutorías se abordaron temas de interés o problemáticas grupales.</label>
                        </li>
                        <li class="list-group-item col-2 border border-dark rounded-0">
                            <p class="text-center">{this.state.campoPreg4}</p>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item col-1 text-center border border-dark rounded-0">
                            <label class="form-check-label" for="exampleCheck1">5</label>
                        </li>
                        <li class="list-group-item col-9 border border-dark rounded-0">
                            <label class="form-check-label" for="exampleCheck1">El tutor mostró disposición para atenderte cuando tenías una preocupación o problema individual sea de carácter personal o académico.</label>
                        </li>
                        <li class="list-group-item col-2 border border-dark rounded-0">
                            <p class="text-center">{this.state.campoPreg5}</p>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item col-1 text-center border border-dark rounded-0">
                            <label class="form-check-label" for="exampleCheck1">6</label>
                        </li>
                        <li class="list-group-item col-9 border border-dark rounded-0">
                            <label class="form-check-label" for="exampleCheck1">El tutor mostró cordialidad y capacidad para crear una clima de confianza para exponer problemáticas individuales.</label>
                        </li>
                        <li class="list-group-item col-2 border border-dark rounded-0">
                            <p class="text-center">{this.state.campoPreg6}</p>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item col-1 text-center border border-dark rounded-0">
                            <label class="form-check-label" for="exampleCheck1">7</label>
                        </li>
                        <li class="list-group-item col-9 border border-dark rounded-0">
                            <label class="form-check-label" for="exampleCheck1">El tutor pudo atender adecuadamente las problemáticas presentadas ofreciendo orientación para resolverlas.</label>
                        </li>
                        <li class="list-group-item col-2 border border-dark rounded-0">
                            <p class="text-center">{this.state.campoPreg7}</p>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item col-1 text-center border border-dark rounded-0">
                            <label class="form-check-label" for="exampleCheck1">8</label>
                        </li>
                        <li class="list-group-item col-9 border border-dark rounded-0">
                            <label class="form-check-label" for="exampleCheck1">El tutor mostró dominio de temas pedagógicos para la atención grupal e individualizada como por ejemplo en relación a técnicas de estudio, de lectura, etc.</label>
                        </li>
                        <li class="list-group-item col-2 border border-dark rounded-0">
                            <p class="text-center">{this.state.campoPreg8}</p>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item col-1 text-center border border-dark rounded-0">
                            <label class="form-check-label" for="exampleCheck1">9</label>
                        </li>
                        <li class="list-group-item col-9 border border-dark rounded-0">
                            <label class="form-check-label" for="exampleCheck1">Las tutorías impactaron de manera positiva en mi desempeño académico y/o en mi desarrollo personal y profesional</label>
                        </li>
                        <li class="list-group-item col-2 border border-dark rounded-0">
                            <p class="text-center">{this.state.campoPreg9}</p>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item col-1 text-center border border-dark rounded-0">
                            <label class="form-check-label" for="exampleCheck1">10</label>
                        </li>
                        <li class="list-group-item col-9 border border-dark rounded-0">
                            <label class="form-check-label" for="exampleCheck1">El personal de los servicios de apoyo (psicopedagógico, enfermería, becas, incubadora,) atendió adecuadamente mis necesidades</label>
                        </li>
                        <li class="list-group-item col-2 border border-dark rounded-0">
                            <p class="text-center">{this.state.campoPreg10}</p>
                        </li>
                    </ul>
                    <br></br>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-3 text-center border border-dark rounded-0">
                            <h6>Comentarios o sugerencias</h6>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item col-md-12 border border-dark rounded-0">
                            <h7>{this.state.campoComent}</h7>
                        </li>
                    </ul>
                    <br />
                </div>
            </div>
        );
    }
}
//Clase para generar el pdf 
class GenerarPDFEvalu extends React.Component{
    render(){
        return(
            <div>
                <div class="container">
                    <VerResulEvalua idRes={this.props.match.params.idRes} ano={this.props.match.params.ano} id={this.props.match.params.id} id2={this.props.match.params.id2} grupo={this.props.match.params.grupo} ref={el => (this.componentRef = el)}/>
                    <ReactToPrint documentTitle="Cuestionario de evaluación de la acción tutorial" content={() => this.componentRef}>
                        <PrintContextConsumer>
                            {({ handlePrint }) =>(
                                <div class="text-center">
                                    <Link class="btn btn-success" onClick={handlePrint}>Generar PDF</Link>
                                </div>
                            )}
                        </PrintContextConsumer>
                    </ReactToPrint>
                </div>
                <br></br><br></br><br></br>
                <Foolder />
            </div>
        );
    }
}

export default GenerarPDFEvalu;