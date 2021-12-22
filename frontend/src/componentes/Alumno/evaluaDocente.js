import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../Home.css';
import Swal from 'sweetalert2/dist/sweetalert2.js';//Libreria para los alertas
import 'sweetalert2/src/sweetalert2.scss';//Libreria para los alertas
import Foolder from '../fooldel';

class Titulo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            cuatrimestre:"",
            campoIdAlumnos12:0,
            campoPreg1:0,
            campoPreg2:0,
            campoPreg3:0,
            campoPreg4:0,
            campoPreg5:0,
            campoPreg6:0,
            campoPreg7:0,
            campoPreg8:0,
            campoPreg9:0,
            campoPreg10:0,
            campoComent:"",
            campoIdDatoGeneral2:1,
            campoTotalPuntos:0
        }
    }
    render(){
        return(
            <div>
                <nav class="navbar bg-nav fixed-top" >
                    <Link class="navbar-brand color" to={"/evaluaDocente/"+this.props.match.params.id} >SIIUTeM</Link>
                </nav>
                <br></br><br></br><br></br><br></br>
                <div class="container">
                    <h5 class="text-center">CUESTIONARIO DE EVALUACIÓN DE LA ACCIÓN TUTORIAL</h5>
                    <br />
                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <h6>Cuatrimestre</h6>
                            <select class="form-control" onChange={(value) => this.setState({cuatrimestre:value.target.value})}>
                                <option selected="true" disabled="disabled">seleccione una opción</option>  
                                <option value="Primero">Primero</option>
                                <option value="Segundo">Segundo</option>
                                <option value="Tercero">Tercero</option>
                                <option value="Cuarto">Cuarto</option>
                                <option value="Quinto">Quinto</option>
                                <option value="Séptimo">Séptimo</option>
                                <option value="Octavo">Octavo</option>
                                <option value="Noveno">Noveno</option>
                                <option value="Décimo">Décimo</option>
                            </select>
                        </div>
                    </div>
                    <br />
                    <h5 class="card-title text-center">Indicaciones: Escribe el número que consideres según la siguiente escala de valores</h5>
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
                            <h5 class="nav-link"> 4=  Siempre (Sí)</h5>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item col-md-1">
                            <label class="form-check-label" for="exampleCheck1">1</label>
                        </li>
                        <li class="list-group-item col-md-9">
                            <label class="form-check-label" for="exampleCheck1">El tutor se presentó al grupo y explicó los propósitos de las tutorías.</label>
                        </li>
                        <li class="list-group-item col-md-2">
                            <input type="number" class="form-control" onChange={(value) => this.setState({campoPreg1:value.target.value})} />
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item col-md-1">
                            <label class="form-check-label" for="exampleCheck1">2</label>
                        </li>
                        <li class="list-group-item col-md-9">
                            <label class="form-check-label" for="exampleCheck1">El tutor presentó un plan de trabajo (temas) para las sesiones grupales.</label>
                        </li>
                        <li class="list-group-item col-md-2">
                            <input type="number" class="form-control" onChange={(value) => this.setState({campoPreg2:value.target.value})}/>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item col-md-1">
                            <label class="form-check-label" for="exampleCheck1">3</label>
                        </li>
                        <li class="list-group-item col-md-9">
                            <label class="form-check-label" for="exampleCheck1">Los temas propuestos para las sesiones grupales fueron abordados según lo previsto.</label>
                        </li>
                        <li class="list-group-item col-md-2">
                            <input type="number" class="form-control" onChange={(value) => this.setState({campoPreg3:value.target.value})}/>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item col-md-1">
                            <label class="form-check-label" for="exampleCheck1">4</label>
                        </li>
                        <li class="list-group-item col-md-9">
                            <label class="form-check-label" for="exampleCheck1">En las sesiones de tutorías se abordaron temas de interés o problemáticas grupales.</label>
                        </li>
                        <li class="list-group-item col-md-2">
                            <input type="number" class="form-control" onChange={(value) => this.setState({campoPreg4:value.target.value})}/>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item col-md-1">
                            <label class="form-check-label" for="exampleCheck1">5</label>
                        </li>
                        <li class="list-group-item col-md-9">
                            <label class="form-check-label" for="exampleCheck1">El tutor mostró disposición para atenderte cuando tenías una preocupación o problema individual sea de carácter personal o académico.</label>
                        </li>
                        <li class="list-group-item col-md-2">
                            <input type="number" class="form-control" onChange={(value) => this.setState({campoPreg5:value.target.value})}/>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item col-md-1">
                            <label class="form-check-label" for="exampleCheck1">6</label>
                        </li>
                        <li class="list-group-item col-md-9">
                            <label class="form-check-label" for="exampleCheck1">El tutor mostró cordialidad y capacidad para crear una clima de confianza para exponer problemáticas individuales.</label>
                        </li>
                        <li class="list-group-item col-md-2">
                            <input type="number" class="form-control" onChange={(value) => this.setState({campoPreg6:value.target.value})}/>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item col-md-1">
                            <label class="form-check-label" for="exampleCheck1">7</label>
                        </li>
                        <li class="list-group-item col-md-9">
                            <label class="form-check-label" for="exampleCheck1">El tutor pudo atender adecuadamente las problemáticas presentadas ofreciendo orientación para resolverlas.</label>
                        </li>
                        <li class="list-group-item col-md-2">
                            <input type="number" class="form-control" onChange={(value) => this.setState({campoPreg7:value.target.value})}/>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item col-md-1">
                            <label class="form-check-label" for="exampleCheck1">8</label>
                        </li>
                        <li class="list-group-item col-md-9">
                            <label class="form-check-label" for="exampleCheck1">El tutor mostró dominio de temas pedagógicos para la atención grupal e individualizada como por ejemplo en relación a técnicas de estudio, de lectura, etc.</label>
                        </li>
                        <li class="list-group-item col-md-2">
                            <input type="number" class="form-control" onChange={(value) => this.setState({campoPreg8:value.target.value})}/>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item col-md-1">
                            <label class="form-check-label" for="exampleCheck1">9</label>
                        </li>
                        <li class="list-group-item col-md-9">
                            <label class="form-check-label" for="exampleCheck1">Las tutorías impactaron de manera positiva en mi desempeño académico y/o en mi desarrollo personal y profesional</label>
                        </li>
                        <li class="list-group-item col-md-2">
                            <input type="number" class="form-control" onChange={(value) => this.setState({campoPreg9:value.target.value})}/>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item col-md-1">
                            <label class="form-check-label" for="exampleCheck1">10</label>
                        </li>
                        <li class="list-group-item col-md-9">
                            <label class="form-check-label" for="exampleCheck1">El personal de los servicios de apoyo (psicopedagógico, enfermería, becas, incubadora,) atendió adecuadamente mis necesidades</label>
                        </li>
                        <li class="list-group-item col-md-2">
                            <input type="number" class="form-control" onChange={(value) => this.setState({campoPreg10:value.target.value})}/>
                        </li>
                    </ul>
                    <br></br>
                    <div class="form-group">
                        <h5 class="card-title">Comentarios o sugerencias</h5>
                        <div class="input-group">
                            <textarea class="form-control" aria-label="With textarea" onChange={(value) => this.setState({campoComent:value.target.value})}></textarea>
                        </div>
                    </div>
                    <br></br>
                    <div class="row">
                        <div class="col text-center">
                            <form action="/">
                                <input type="button" class="btn btn-primary" onClick={()=>this.Save()} value="Enviar" />
                            </form>
                            <br></br><br></br><br></br><br></br>
                        </div>
                    </div>
                </div>
                <Foolder />
            </div>
        );
    }//Función para guardar la evaluación en la base de datos
    Save(){
        if(this.state.cuatrimestre === ""){
            Swal.fire(
                'Error',
                'El campo Cuatrimestre no debe estar vacío',
                'error'
            );
        }else if(this.state.campoPreg1 === 0){
            Swal.fire(
                'Error',
                'La pregunta 1 no puede estar vacía',
                'error'
            );
        }else if(this.state.campoPreg1 > 4){
            Swal.fire(
                'Error',
                'El valor de la pregunta 1 debe ser menor o igual a 4',
                'error'
            );
        }else if(this.state.campoPreg1 <= 0){
            Swal.fire(
                'Error',
                'El valor de la pregunta 1 deve ser mayor a 0',
                'error'
            );
        }else if(this.state.campoPreg2 === 0){
            Swal.fire(
                'Error',
                'La pregunta 2 no puede estar vacía',
                'error'
            );
        }else if(this.state.campoPreg2 > 4){
            Swal.fire(
                'Error',
                'El valor de la pregunta 2 debe ser menor o igual a 4',
                'error'
            );
        }else if(this.state.campoPreg2 <= 0){
            Swal.fire(
                'Error',
                'El valor de la pregunta 1 deve ser mayor a 0',
                'error'
            );
        }else if(this.state.campoPreg3 === 0){
            Swal.fire(
                'Error',
                'La pregunta 3 no puede estar vacía',
                'error'
            );
        }else if(this.state.campoPreg3 > 4){
            Swal.fire(
                'Error',
                'El valor de la pregunta 3 debe ser menor o igual a 4',
                'error'
            );
        }else if(this.state.campoPreg3 <= 0){
            Swal.fire(
                'Error',
                'El valor de la pregunta 3 deve ser mayor a 0',
                'error'
            );
        }else if(this.state.campoPreg4 === 0){
            Swal.fire(
                'Error',
                'La pregunta 4 no puede estar vacía',
                'error'
            );
        }else if(this.state.campoPreg4 > 4){
            Swal.fire(
                'Error',
                'El valor de la pregunta 4 debe ser menor o igual a 4',
                'error'
            );
        }else if(this.state.campoPreg4 <= 0){
            Swal.fire(
                'Error',
                'El valor de la pregunta 4 deve ser mayor a 0',
                'error'
            );
        }else if(this.state.campoPreg5 === 0){
            Swal.fire(
                'Error',
                'La pregunta 5 no puede estar vacía',
                'error'
            );
        }else if(this.state.campoPreg5 > 4){
            Swal.fire(
                'Error',
                'El valor de la pregunta 5 debe ser menor o igual a 4',
                'error'
            );
        }else if(this.state.campoPreg5 <= 0){
            Swal.fire(
                'Error',
                'El valor de la pregunta 5 deve ser mayor a 0',
                'error'
            );
        }else if(this.state.campoPreg6 === 0){
            Swal.fire(
                'Error',
                'La pregunta 6 no puede estar vacía',
                'error'
            );
        }else if(this.state.campoPreg6 > 4){
            Swal.fire(
                'Error',
                'El valor de la pregunta 6 debe ser menor o igual a 4',
                'error'
            );
        }else if(this.state.campoPreg6 <= 0){
            Swal.fire(
                'Error',
                'El valor de la pregunta 6 deve ser mayor a 0',
                'error'
            );
        }else if(this.state.campoPreg7 === 0){
            Swal.fire(
                'Error',
                'La pregunta 7 no puede estar vacía',
                'error'
            );
        }else if(this.state.campoPreg7 > 4){
            Swal.fire(
                'Error',
                'El valor de la pregunta 7 debe ser menor o igual a 4',
                'error'
            );
        }else if(this.state.campoPreg7 <= 0){
            Swal.fire(
                'Error',
                'El valor de la pregunta 7 deve ser mayor a 0',
                'error'
            );
        }else if(this.state.campoPreg8 === 0){
            Swal.fire(
                'Error',
                'La pregunta 8 no puede estar vacía',
                'error'
            );
        }else if(this.state.campoPreg8 > 4){
            Swal.fire(
                'Error',
                'El valor de la pregunta 8 debe ser menor o igual a 4',
                'error'
            );
        }else if(this.state.campoPreg8 <= 0){
            Swal.fire(
                'Error',
                'El valor de la pregunta 8 deve ser mayor a 0',
                'error'
            );
        }else if(this.state.campoPreg9 === 0){
            Swal.fire(
                'Error',
                'La pregunta 9 no puede estar vacía',
                'error'
            );
        }else if(this.state.campoPreg9 > 4){
            Swal.fire(
                'Error',
                'El valor de la pregunta 9 debe ser menor o igual a 4',
                'error'
            );
        }else if(this.state.campoPreg9 <= 0){
            Swal.fire(
                'Error',
                'El valor de la pregunta 9 deve ser mayor a 0',
                'error'
            );
        }else if(this.state.campoPreg10 === 0){
            Swal.fire(
                'Error',
                'La pregunta 10 no puede estar vacía',
                'error'
            );
        }else if(this.state.campoPreg10 > 4){
            Swal.fire(
                'Error',
                'El valor de la pregunta 10 debe ser menor o igual a 4',
                'error'
            );
        }else if(this.state.campoPreg10 <= 0){
            Swal.fire(
                'Error',
                'El valor de la pregunta 10 deve ser mayor a 0',
                'error'
            );
        } 
        else{
            const Url = "http://localhost:3000/apis/create";
            const datos = {
            cuatrimestre: this.state.cuatrimestre,
            idAlumnos12: this.props.match.params.id,
            pregunta1: this.state.campoPreg1, 
            pregunta2: this.state.campoPreg2,
            pregunta3: this.state.campoPreg3, 
            pregunta4: this.state.campoPreg4, 
            pregunta5: this.state.campoPreg5,
            pregunta6: this.state.campoPreg6,
            pregunta7: this.state.campoPreg7,
            pregunta8: this.state.campoPreg8,
            pregunta9: this.state.campoPreg9,
            pregunta10: this.state.campoPreg10,
            comentario: this.state.campoComent,
            idAlumnos13: this.props.match.params.id,
            idAlumnos16: this.props.match.params.id
            }
            Swal.fire({
                icon: 'question',
                title:'Enviar',
                text:'Deseas registrar tu respuesta',
                showCancelButton:true,
                confirmButtonText:'Enviar',
                confirmButtonColor:'#1D98CB',
                cancelButtonText:'Cancelar',
                cancelButtonColor:'#d33'
            })
            .then((result)=>{
                if(result.value){
                    Swal.fire({
                        icon: 'success',
                        title:'Listo',
                        text:'Tu respuesta se a registrado',
                        confirmButtonText:'Ok',
                        confirmButtonColor: '#1D98CB'
                    })
                    .then((result)=>{
                        if(result.value){
                            axios.post(Url, datos);
                            window.location.replace("/HomeA/"+this.props.match.params.id);
                        }
                    });
                }
            });
        }  
    }
}

export default Titulo;