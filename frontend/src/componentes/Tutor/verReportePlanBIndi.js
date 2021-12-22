import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../Home.css';
import Foolder from '../fooldel';
import ReactToPrint, { PrintContextConsumer } from 'react-to-print'; // librería para generar el pdf 

class VerResulEvalua extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            readDatos:[],
            readProgra:[],
            readCanaliz:[],
            readPsiToHo:[],
            readPsiToMu:[],
            readPedagHo:[],
            readPedagMu:[],
            readBecaHo:[],
            readBecaMu:[],
            readEnfeHo:[],
            readEnfeMu:[],
            observaciones:[],
            asuntoTEnd:[],
            noProgramadas:0,
            campoProgra:0,
            campoCanali:0,
            campoToPsiH:0
        }
    }
    componentDidMount(){
        let numControlD = this.props.idTutor;
        let idDatosAccion = this.props.idReport;// Metodo para obtener las canalizaciónes programadas de la api 
        const Url = "http://localhost:3000/apis/list/report/planB/Total/prog/"+numControlD+"/"+idDatosAccion;
        axios.get(Url)
        .then(res=>{
            if(res.data.success){
                const programadas = res.data.data[0];
                this.setState({
                    readProgra:programadas,
                    campoProgra:programadas.programadas
                });
            }
        });
        let grupoTutores = this.props.Grupo;// Metodo para obtener las canalizaciónes realizadas de la api
        const Url2 = "http://localhost:3000/apis/list/total/canaliz/"+numControlD+"/"+grupoTutores;
        axios.get(Url2)
        .then(res=>{
            if(res.data.success){
                const canaliz = res.data.data[0];
                this.setState({
                    readCanaliz:canaliz,
                    campoCanali:canaliz.canaliz
                });
            }
        });// Metodo para obtener el número de hombres canalizados a psicologia de la api
        const Url3 = "http://localhost:3000/apis/list/totalHom/canali/psicoT/"+numControlD+"/"+grupoTutores;
        axios.get(Url3)
        .then(res=>{
            if(res.data.success){
                const psicolToHo = res.data.data[0];
                this.setState({
                    readPsiToHo:psicolToHo,
                    campoToPsiH:psicolToHo.psicologoTH,
                    campoTipoH:psicolToHo.tipo
                });
            }
        });// Metodo para obtener el número de mujeres canalizadas a psicologia de la api
        const Url4 = "http://localhost:3000/apis/list/totalMuj/canali/psicoTM/"+numControlD+"/"+grupoTutores;
        axios.get(Url4)
        .then(res=>{
            if(res.data.success){
                const psicolToMu = res.data.data[0];
                this.setState({
                    readPsiToMu:psicolToMu,
                    campoToPsiM:psicolToMu.psicologoTM,
                    campoTipoM:psicolToMu.tipoM
                });
            }
        });// Metodo para obtener el número de hombres canalizados al pedagogo de la api
        const Url5 = "http://localhost:3000/apis/list/totalHombr/canali/pedagogoTH/"+numControlD+"/"+grupoTutores;
        axios.get(Url5)
        .then(res=>{
            if(res.data.success){
                const pedagogoTH = res.data.data[0];
                this.setState({
                    readPedagHo:pedagogoTH,
                    campoToPdHo:pedagogoTH.PedagogoTH,
                    campoTipoPdH:pedagogoTH.tipoH
                });
            }
        });// Metodo para obtener el número de mujeres canalizadas al pedagogo de la api 
        const Url6 = "http://localhost:3000/apis/list/totalMuje/canali/pedagogoTMu/"+numControlD+"/"+grupoTutores;
        axios.get(Url6)
        .then(res=>{
            if(res.data.success){
                const pedagogoTM = res.data.data[0];
                this.setState({
                    readPedagMu:pedagogoTM,
                    campoToPdMu:pedagogoTM.PedagogoTM,
                    campoTipoPdM:pedagogoTM.tipoM
                });
            }
        });// Metodo para obtener el número de hombres canalizados al becas de la api
        const Url7 = "http://localhost:3000/apis/list/totalHom/canali/becaTHomb/"+numControlD+"/"+grupoTutores;
        axios.get(Url7)
        .then(res=>{
            if(res.data.success){
                const becaTH = res.data.data[0];
                this.setState({
                    readBecaHo:becaTH,
                    campoToBeHo:becaTH.BecaTH,
                    campoTipoBeH:becaTH.tipoH
                });
            }
        });// Metodo para obtener el número de mujeres canalizadas al becas de la api
        const Url8 = "http://localhost:3000/apis/list/totalMuj/canaliM/becaTMuje/"+numControlD+"/"+grupoTutores;
        axios.get(Url8)
        .then(res=>{
            if(res.data.success){
                const becaTM = res.data.data[0];
                this.setState({
                    readBecaMu:becaTM,
                    campoToBeMu:becaTM.BecaTM,
                    campoTiBeM:becaTM.tipoM
                });
            }
        });// Metodo para obtener el número de hombres canalizados al Enfermería  de la api
        const Url9 = "http://localhost:3000/apis/list/totalHom/canaliH/EnfermeHom/"+numControlD+"/"+grupoTutores;
        axios.get(Url9)
        .then(res=>{
            if(res.data.success){
                const enferTH = res.data.data[0];
                this.setState({
                    readEnfeHo:enferTH,
                    campoToEnHo:enferTH.EnfermeriaTH,
                    campoTiEnH:enferTH.tipoH
                });
            }
        });// Metodo para obtener el número de mujeres canalizadas al pedagogo de la api 
        const Url11 = "http://localhost:3000/apis/list/totalMuj/canaliMu/EnfermeMuj/"+numControlD+"/"+grupoTutores;
        axios.get(Url11)
        .then(res=>{
            if(res.data.success){
                const enferTM = res.data.data[0];
                this.setState({
                    readEnfeMu:enferTM,
                    campoToEnMu:enferTM.EnfermeriaTM,
                    campoTiEnM:enferTM.tipoM
                });
            }
        });// Metodo para obtener el número de hombres canalizados al incubadora de la api
        const Url12 = "http://localhost:3000/apis/list/totalHomb/canaliHom/IncubaHom/"+numControlD+"/"+grupoTutores;
        axios.get(Url12)
        .then(res=>{
            if(res.data.success){
                const IncubaTH = res.data.data[0];
                this.setState({
                    campoToInHo:IncubaTH.IncubadoraTH,
                    campoTiInH:IncubaTH.tipoH
                });
            }
        });// Metodo para obtener el número de mujeres canalizadas al pedagogo de la api 
        const Url13 = "http://localhost:3000/apis/list/totalMu/canaliM/IncubaM/"+numControlD+"/"+grupoTutores;
        axios.get(Url13)
        .then(res=>{
            if(res.data.success){
                const IncubaTM = res.data.data[0];
                this.setState({
                    campoToInMu:IncubaTM.IncubadoraTM,
                    campoTiInM:IncubaTM.tipoM
                });
            }
        });// Metodo para obtener el número de hombres canalizados a la bosa de trabajo de la api
        const Url14 = "http://localhost:3000/apis/list/totalHo/canaliH/Bolsa/TrabajoH/"+numControlD+"/"+grupoTutores;
        axios.get(Url14)
        .then(res=>{
            if(res.data.success){
                const BolTrabTH = res.data.data[0];
                this.setState({
                    campoToBoTrHo:BolTrabTH.BolsaTrabajoTH,
                    campoTiBoTrH:BolTrabTH.tipoH
                });
            }
        });// Metodo para obtener el número de mujeres canalizadas a la bosa de trabajo de la api
        const Url15 = "http://localhost:3000/apis/list/totalMu/canaliM/BolsaM/TrabajoM/"+numControlD+"/"+grupoTutores;
        axios.get(Url15)
        .then(res=>{
            if(res.data.success){
                const BolTrabTM = res.data.data[0];
                this.setState({
                    campoToBoTrMu:BolTrabTM.BolsaTrabajoTM,
                    campoTiBoTrM:BolTrabTM.tipoM
                });
            }
        });// Metodo para obtener el número de hombres canalizados al acesor academico de la api
        const Url16 = "http://localhost:3000/apis/list/totalH/canaliH/AcesorH/AcadeH/"+numControlD+"/"+grupoTutores;
        axios.get(Url16)
        .then(res=>{
            if(res.data.success){
                const AcesAcadeTH = res.data.data[0];
                this.setState({
                    campoToAcAcHo:AcesAcadeTH.AsesorAcademicoTH,
                    campoTiBoAcAcH:AcesAcadeTH.tipoH
                });
            }
        });// Metodo para obtener el número de mujeres canalizadas al acesor academico de la api
        const Url17 = "http://localhost:3000/apis/list/totalM/canaliM/AcesorM/AcadeM/"+numControlD+"/"+grupoTutores;
        axios.get(Url17)
        .then(res=>{
            if(res.data.success){
                const AcesAcadeTM = res.data.data[0];
                this.setState({
                    campoToAcAcMu:AcesAcadeTM.AsesorAcademicoTM,
                    campoTiBoAcAcM:AcesAcadeTM.tipoM
                });
            }
        });// Metodo para obtener las observaciones de la api
        const Url18 = "http://localhost:3000/apis/list/Ops/Report/Plan/Accion/"+numControlD+"/"+grupoTutores;
        axios.get(Url18)
        .then(res=>{
            if(res.data.success){
                const Observaciones = res.data.data;
                this.setState({
                    observaciones:Observaciones,
                });
            }
        });// Metoto para obtener el número de canalizaciones no programadas de la api
        const Url19 = "http://localhost:3000/apis/list/total/no/progra/"+numControlD+"/"+grupoTutores;
        axios.get(Url19)
        .then(res=>{
            const noProgra = res.data.data[0];
            this.setState({
                noProgramadas:noProgra.noProgram,
            });
            
        });//Metodo para obtener el asunto de atencio de la api
        const Url20 = "http://localhost:3000/apis/list/all/asunti/de/tencion/"+numControlD+"/"+grupoTutores;
        axios.get(Url20)
        .then(res=>{
            const asuTen = res.data.data;
            this.setState({asuntoTEnd:asuTen});
            
        });
    }
    render(){
        return(
            <div>
                <nav class="navbar bg-nav fixed-top">
                    <Link class="navbar-brand color" to={"/HomeT/"+this.props.idTutor}>SIIUTeM</Link>
                    <Link to={"/verreportplanB/"+this.props.idTutor} class="boton_salir color navbar-brand">Volver</Link>
                </nav>
                <br></br><br></br><br></br><br></br>
                <div class="container">
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item col-md-2 border border-white">
                            <img
                            width="150px" 
                            max-width=":256px"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQk6ORHe7XD9wZ5o7SkAo3ZnD6jsszlry4fgQ&usqp=CAU"/>
                        </li>
                        <li class="list-group-item col-10 border border-white">
                            <h4>REPORTE DE PLAN DE ACCIÓN TUTORIAL B DEL GRIUPO {this.props.Grupo}</h4>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-md-9" />
                        <li class="list-group col-1 text-center border border-dark rounded-0">
                            <h6>Grupo</h6>
                        </li>
                        <li class="list-group col-2 text-center border border-dark rounded-0">
                            <h7>{this.props.Grupo}</h7>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-md-9" />
                        <li class="list-group col-1 text-center border border-dark rounded-0">
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
                        <li class="list-group col-10 border border-dark rounded-0">
                            <h7>{this.props.Nom+" "+this.props.Ape}</h7>
                        </li>    
                    </ul>
                    <br />
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-md-12 border border-dark rounded-0">
                            <h6>Entrevistas tutoriales individuales</h6>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item col-md-4 border border-dark rounded-0">
                            <ul class="list-group list-gruop-horizontal">
                                <li class="list-group col-md-12 border border-dark rounded-0">
                                    <h6>Programadas</h6>
                                </li>
                                <li class="list-group text-center col-md-12 border border-dark rounded-0">
                                    {this.state.campoProgra}
                                </li>
                            </ul>
                        </li>
                        <li class="list-group-item col-md-4 border border-dark rounded-0">
                            <ul class="list-group list-gruop-horizontal">
                                <li class="list-group col-md-12 border border-dark rounded-0">
                                    <h6>Realizadas</h6>
                                </li>
                                <li class="list-group text-center col-md-12 border border-dark rounded-0">
                                    {this.state.campoCanali}
                                </li>
                            </ul>
                        </li>
                        <li class="list-group-item col-md-4 border border-dark rounded-0">
                            <ul class="list-group list-gruop-horizontal">
                                <li class="list-group col-md-12 border border-dark rounded-0">
                                    <h6>Canalizados</h6>
                                </li>
                                <li class="list-group text-center col-md-12 border border-dark rounded-0">
                                    {this.state.campoCanali}
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <br />
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-md-12 border border-dark rounded-0">
                            <h6>Áreas de canalización</h6>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-md-2 text-xl-center border border-dark rounded-0">
                            <h6>Psicólogo</h6>
                        </li>
                        <li class="list-group col-md-2 text-xl-center border border-dark rounded-0">
                            <h6>Pedagogo</h6>
                        </li>
                        <li class="list-group col-md-1 text-xl-center border border-dark rounded-0">
                            <h6>Becas</h6>
                        </li>
                        <li class="list-group col-md-2 text-xl-center border border-dark rounded-0">
                            <h6>Enfermería</h6>
                        </li>
                        <li class="list-group col-md-2 text-xl-center border border-dark rounded-0">
                            <h6>Incubadora</h6>
                        </li>
                        <li class="list-group col-md-1 text-xl-center border border-dark rounded-0">
                            <h6>Bolsa de trabajo</h6>
                        </li>
                        <li class="list-group col-md-2 text-xl-center border border-dark rounded-0">
                            <h6>Asesor académico</h6>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item col-md-2 text-xl-center border border-dark rounded-0">
                            <h7>{this.state.campoToPsiH} {this.state.campoTipoH}</h7><br />
                            <h7>{this.state.campoToPsiM} {this.state.campoTipoM}</h7>
                        </li>
                        <li class="list-group-item col-md-2 text-xl-center border border-dark rounded-0">
                            <h7>{this.state.campoToPdHo} {this.state.campoTipoPdH}</h7><br />
                            <h7>{this.state.campoToPdMu} {this.state.campoTipoPdM}</h7>
                        </li>
                        <li class="list-group-item col-md-1 text-xl-center border border-dark rounded-0">
                            <h7>{this.state.campoToBeHo} {this.state.campoTipoBeH}</h7><br />
                            <h7>{this.state.campoToBeMu} {this.state.campoTiBeM}</h7>
                        </li>
                        <li class="list-group-item col-md-2 text-xl-center border border-dark rounded-0">
                            <h7>{this.state.campoToEnHo} {this.state.campoTiEnH}</h7><br />
                            <h7>{this.state.campoToEnMu} {this.state.campoTiEnM}</h7><br />
                        </li>
                        <li class="list-group-item col-md-2 text-xl-center border border-dark rounded-0">
                            <h7>{this.state.campoToInHo} {this.state.campoTiInH}</h7><br />
                            <h7>{this.state.campoToInMu} {this.state.campoTiInM}</h7><br />
                        </li>
                        <li class="list-group-item col-md-1 text-xl-center border border-dark rounded-0">
                            <h7>{this.state.campoToBoTrHo} {this.state.campoTiBoTrH}</h7><br />
                            <h7>{this.state.campoToBoTrMu} {this.state.campoTiBoTrM}</h7><br />
                        </li>
                        <li class="list-group-item col-md-2 text-xl-center border border-dark rounded-0">
                            <h7>{this.state.campoToAcAcHo} {this.state.campoTiBoAcAcH}</h7><br />
                            <h7>{this.state.campoToAcAcMu} {this.state.campoTiBoAcAcM}</h7><br />
                        </li>
                    </ul>
                    <br />
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-md-12 border border-dark rounded-0">
                            <h6>Resultado de la canalización</h6>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                    <li class="list-group text-center col-1 border border-dark rounded-0">
                            <h6>Nu.</h6>
                        </li>
                        <li class="list-group col-md-2 border border-dark rounded-0">
                            <h6 class="text-center">Nombres</h6>
                        </li>
                        <li class="list-group col-md-2 border border-dark rounded-0">
                            <h6 class="text-center">Apellidos</h6>
                        </li>
                        <li class="list-group col-md-3 border border-dark rounded-0">
                            <h6 class="text-center">Área</h6>
                        </li>
                        <li class="list-group col-md-4 border border-dark rounded-0">
                            <h6 class="text-center">Observaciones</h6>
                        </li>
                    </ul>
                    {this.observaciones()}
                    <br />
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-3 border border-dark rounded-0">
                            <h6>No programadas</h6>		
                        </li>
                        <li class="list-group text-center col-2 border border-dark rounded-0">
                            <h7>{this.state.noProgramadas}</h7>		
                        </li>
                    </ul>
                    <br />
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group  text-center col-1 border border-dark rounded-0">
                            <h6>Nu.</h6>
                        </li>
                        <li class="list-group text-center col-md-2 border border-dark rounded-0">
                            <h6>Nombre</h6>
                        </li>
                        <li class="list-group text-center col-md-2 border border-dark rounded-0">
                            <h6>Apellidos</h6>
                        </li>
                        <li class="list-group text-center col-md-3 border border-dark rounded-0">
                            <h6>Asunto de atención</h6>
                        </li>
                        <li class="list-group text-center col-md-4 border border-dark rounded-0">
                            <h6>Observaciones</h6>
                        </li>
                    </ul>
                    {this.asuntoTEnd()}
                    <br /><br />
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-md-12 border border-dark rounded-0">
                            <h6 class="text-center">Bajas</h6>
                        </li>
                    </ul>
                    <br />
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-3 border border-dark rounded-0">
                            <h6>Total</h6>
                        </li>
                        <li class="list-group text-center col-3 border border-dark rounded-0">
                            <h7>Value</h7>
                        </li>
                    </ul>
                    <br />
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group text-center col-md-3 border border-dark rounded-0"><h6>Motivo de baja</h6></li>
                        <li class="list-group text-center col-md-3 border border-dark rounded-0"><h6>Cantidad</h6></li>
                        <li class="list-group text-center col-md-3 border border-dark rounded-0"><h6>Tipo de baja</h6></li>
                        <li class="list-group text-center col-md-3 border border-dark rounded-0"><h6>Observaciones</h6></li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-md-3 border border-dark rounded-0">No se cumplieron expectativas</li>
                        <li class="list-group col-md-3 border border-dark rounded-0"></li>
                        <li class="list-group col-md-3 border border-dark rounded-0"></li>
                        <li class="list-group col-md-3 border border-dark rounded-0"></li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-md-3 border border-dark rounded-0">Reprobación</li>
                        <li class="list-group col-md-3 border border-dark rounded-0"></li>
                        <li class="list-group col-md-3 border border-dark rounded-0"></li>
                        <li class="list-group col-md-3 border border-dark rounded-0"></li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-md-3 border border-dark rounded-0">Dificultades para el transporte</li>
                        <li class="list-group col-md-3 border border-dark rounded-0"></li>
                        <li class="list-group col-md-3 border border-dark rounded-0"></li>
                        <li class="list-group col-md-3 border border-dark rounded-0"></li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-md-3 border border-dark rounded-0">Problemas de trabajo</li>
                        <li class="list-group col-md-3 border border-dark rounded-0"></li>
                        <li class="list-group col-md-3 border border-dark rounded-0"></li>
                        <li class="list-group col-md-3 border border-dark rounded-0"></li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-md-3 border border-dark rounded-0">Cambio de carrera</li>
                        <li class="list-group col-md-3 border border-dark rounded-0"></li>
                        <li class="list-group col-md-3 border border-dark rounded-0"></li>
                        <li class="list-group col-md-3 border border-dark rounded-0"></li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-md-3 border border-dark rounded-0">Incompatibilidad de horario </li>
                        <li class="list-group col-md-3 border border-dark rounded-0"></li>
                        <li class="list-group col-md-3 border border-dark rounded-0"></li>
                        <li class="list-group col-md-3 border border-dark rounded-0"></li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-md-3 border border-dark rounded-0">Faltas al reglamento</li>
                        <li class="list-group col-md-3 border border-dark rounded-0"></li>
                        <li class="list-group col-md-3 border border-dark rounded-0"></li>
                        <li class="list-group col-md-3 border border-dark rounded-0"></li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-md-3 border border-dark rounded-0">Cambio de residencia</li>
                        <li class="list-group col-md-3 border border-dark rounded-0"></li>
                        <li class="list-group col-md-3 border border-dark rounded-0"></li>
                        <li class="list-group col-md-3 border border-dark rounded-0"></li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-md-3 border border-dark rounded-0">Cambio de universidad</li>
                        <li class="list-group col-md-3 border border-dark rounded-0"></li>
                        <li class="list-group col-md-3 border border-dark rounded-0"></li>
                        <li class="list-group col-md-3 border border-dark rounded-0"></li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-md-3 border border-dark rounded-0">Problemas familiares</li>
                        <li class="list-group col-md-3 border border-dark rounded-0"></li>
                        <li class="list-group col-md-3 border border-dark rounded-0"></li>
                        <li class="list-group col-md-3 border border-dark rounded-0"></li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-md-3 border border-dark rounded-0">Problemas personales</li>
                        <li class="list-group col-md-3 border border-dark rounded-0"></li>
                        <li class="list-group col-md-3 border border-dark rounded-0"></li>
                        <li class="list-group col-md-3 border border-dark rounded-0"></li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-md-3 border border-dark rounded-0">Otra</li>
                        <li class="list-group col-md-3 border border-dark rounded-0"></li>
                        <li class="list-group col-md-3 border border-dark rounded-0"></li>
                        <li class="list-group col-md-3 border border-dark rounded-0"></li>
                    </ul>
                    <br />
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-md-12 border border-dark rounded-0">
                            <h6>Dificultades para ejercer la tutoría</h6>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-md-12 border border-dark rounded-0">
                            <h7>Value</h7>
                        </li>
                    </ul>
                </div>
                <br /><br />
            </div>
        );
    }// función para mostrar las observaciones
    observaciones(){
        return this.state.observaciones.map((Observaciones, index)=>{
            return(
                <ul class="list-group list-group-horizontal">
                     <li class="list-group col-1 text-center border border-dark rounded-0">
                        <h6>{index + 1}</h6>
                    </li>
                    <li class="list-group col-md-2 border border-dark rounded-0">
                        {Observaciones.nombreAlumno}
                    </li>
                    <li class="list-group col-md-2 border border-dark rounded-0">
                        {Observaciones.apellidoAlumno}
                    </li>
                    <li class="list-group col-md-3 border border-dark rounded-0">
                        {Observaciones.areaCanalAlu}
                    </li>
                    <li class="list-group col-md-4 border border-dark rounded-0">
                        {Observaciones.obserCanalAlu}
                    </li>
                </ul>
            );
        });
    }//Función para mostrar el asunto de atencion
    asuntoTEnd(){
        return this.state.asuntoTEnd.map((asuTen, index)=>{
            return(
                <ul class="list-group list-group-horizontal">
                    <li class="list-group col-1 text-center border border-dark rounded-0">
                        <h6>{index + 1}</h6>
                    </li>
                    <li class="list-group col-md-2 border border-dark rounded-0">
                        {asuTen.nombreAlumno}
                    </li>
                    <li class="list-group col-md-2 border border-dark rounded-0">
                        {asuTen.apellidoAlumno}
                    </li>
                    <li class="list-group col-md-3 border border-dark rounded-0">
                        {asuTen.areaCanalAlu}
                    </li>
                    <li class="list-group col-md-4 border border-dark rounded-0">
                        {asuTen.obserCanalAlu}
                    </li>
                </ul>
            );
        });
    }
}
//Clase para generar las funciones de generar pdf, imprimir directamente etc. 
class GenerarPDF extends React.Component {
    render() {
        return (
            <div>
                <div class="container">
                        <VerResulEvalua idTutor={this.props.match.params.id} Grupo={this.props.match.params.Grupo} Ciclo={this.props.match.params.Ciclo} Nom={this.props.match.params.Nom} Ape={this.props.match.params.Ape} idReport={this.props.match.params.idReport} ref={el => (this.componentRef = el)}/>
                        <ReactToPrint documentTitle={"Reporte de plan de acción tutorial B del grupo "+this.props.match.params.Grupo}  content={() => this.componentRef} >
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

export default GenerarPDF;