import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../Home.css';
import Foolder from '../fooldel';
import ReactToPrint, { PrintContextConsumer } from 'react-to-print';

class VerIndiISAT extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }//Metodo para obtener todos los datos registrados en el informe de seguimiento de la acción tutorial 
    componentDidMount(){
        let idIast = this.props.idIast;
        const Url = "http://localhost:3000/apis/list/Onli/verISAT/"+idIast;
        axios.get(Url)
        .then(res=>{
            const datos = res.data.data[0];
            this.setState({
                totalAtendi:datos.totalAtendi,
                carreraAcc:datos.carreraAcc,
                totalGrupo:datos.totalGrupo, 
                totalTutor:datos.totalTutor,
                periodoCuatri:datos.periodoCuatri,
                tutorGrupa:datos.tutorGrupa,
                totalTemas:datos.totalTemas,
                totalTemaVist:datos.totalTemaVist,
                tutorIndi:datos.tutorIndi,
                totalPrograma:datos.totalPrograma,
                totalRealiza:datos.totalRealiza,
                psicologo:datos.psicologo, 
                pedagogo:datos.pedagogo, 
                enfermeria:datos.enfermeria, 
                becas:datos.becas, 
                incubadora:datos.incubadora, 
                bolsaTrabajo:datos.bolsaTrabajo, 
                asesorAcademico:datos.asesorAcademico,
                acadTutorIndi:datos.acadTutorIndi, 
                profTutorIndi:datos.profTutorIndi, 
                admiTutorIndi:datos.admiTutorIndi, 
                otrosTutorIn:datos.otrosTutorIn,
                totalIniCuatri:datos.totalIniCuatri, 
                totalTermiCuatri:datos.totalTermiCuatri,
                cumpliExH:datos.cumpliExSH,
                cumpliExM:datos.cumpliExSM,
                reprobacH:datos.reprobacSH,
                reprobacM:datos.reprobacSM,
                problEcoH:datos.problEcoSH,
                problEcoM:datos.problEcoSM,
                dificuTrH:datos.dificuTrSH,
                dificuTrM:datos.dificuTrSM,
                probleTrH:datos.probleTrSH,
                probleTrM:datos.probleTrSM,
                cambiCarH:datos.cambiCarSH,
                cambiCarM:datos.cambiCarSM,
                incompHoH:datos.incompHoSH,
                incompHoM:datos.incompHoSM,
                faltReglH:datos.faltReglSH,
                faltReglM:datos.faltReglSM,
                cambiRegH:datos.cambiRegSH,
                cambiRegM:datos.cambiRegSM,
                cambiUniH:datos.cambiUniSH,
                cambiUniM:datos.cambiUniSM,
                problFamH:datos.problFamSH,
                problFamM:datos.problFamSM,
                problPerH:datos.problPerSH,
                problPerM:datos.problPerSM,
                otraH:datos.otraSH,
                otraSM:datos.otraSM,
                cumpliExNH:datos.cumpliExNH,
                cumpliExNM:datos.cumpliExNM,
                reprobacNH:datos.reprobacNH,
                reprobacNM:datos.reprobacNM,
                problEcoNH:datos.problEcoNH,
                problEcoNM:datos.problEcoNM,
                dificuTrNH:datos.dificuTrNH,
                dificuTrNM:datos.dificuTrNM,
                probleTrNH:datos.probleTrNH,
                probleTrNM:datos.probleTrNM,
                cambiCarNH:datos.cambiCarNH,
                cambiCarNM:datos.cambiCarNM,
                incompHoNH:datos.incompHoNH,
                incompHoNM:datos.incompHoNM,
                faltReglNH:datos.faltReglNH,
                faltReglNM:datos.faltReglNM,
                cambiRegNH:datos.cambiRegNH,
                cambiRegNM:datos.cambiRegNM,
                cambiUniNH:datos.cambiUniNH,
                cambiUniNM:datos.cambiUniNM,
                problFamNH:datos.problFamNH,
                problFamNM:datos.problFamNM,
                problPerNH:datos.problPerNH,
                problPerNM:datos.problPerNM,
                otraNH:datos.otraNH,
                otraNM:datos.otraNM,  
                comentario:datos.comentario
            });
        });//Metodo para obtener el número de canalizaciones a psicologo
        let Carrera = this.props.Carrera;
        const psi = 'http://localhost:3000/apis/list/Total/Psi/'+Carrera;
        axios.get(psi)
        .then(res=>{
            const psicologoT = res.data.data[0];
            this.setState({
                psicologoT:psicologoT.psicologo
            });
        });//Metodo para obtener el número de canalizaciones a pedagogo
        const ped = 'http://localhost:3000/apis/list/Tota/Peda/'+Carrera;
        axios.get(ped)
        .then(res=>{
            const pedagogoT = res.data.data[0];
            this.setState({
                pedagogoT:pedagogoT.pedagogo
            });
        });//Metodo para obtener el número de canalizaciones a becas 
        const bec = 'http://localhost:3000/apis/list/Tot/Becas/'+Carrera;
        axios.get(bec)
        .then(res=>{
            const becasT = res.data.data[0];
            this.setState({
                becasT:becasT.becas
            });
        });//Metodo para obtener el número de canalizaciones a enfermería 
        const enf = 'http://localhost:3000/apis/list/Total/Enfermeria/'+Carrera;
        axios.get(enf)
        .then(res=>{
            const enfermeriaT = res.data.data[0];
            this.setState({
                enfermeriaT:enfermeriaT.enfermeria
            });
        });//Metodo para obtener el número de canalizaciones a incubadora 
        const inc = 'http://localhost:3000/apis/list/To/Incubadora/'+Carrera;
        axios.get(inc)
        .then(res=>{
            const incubadoraT = res.data.data[0];
            this.setState({
                incubadoraT:incubadoraT.incubadora
            });
        });//Metodo para obtener el número de canalizaciones a bolsa de trabajo 
        const bol = 'http://localhost:3000/apis/list/To/bolsa/trabjo/'+Carrera;
        axios.get(bol)
        .then(res=>{
            const bolsaTrabjoT = res.data.data[0];
            this.setState({
                bolsaTrabjoT:bolsaTrabjoT.bolsaTrabajo
            });
        });//Metodo para obtener el número de canalizaciones al asesor academico 
        const ase = 'http://localhost:3000/apis/list/To/Asesoria/Academica/'+Carrera;
        axios.get(ase)
        .then(res=>{
            const asesoriaAcademicaT = res.data.data[0];
            this.setState({
                asesoriaAcademicaT:asesoriaAcademicaT.asesoriaAcademica
            });
        });//Metodo para obtener el número total de alumnos canalizados por programa educativo 
        const total = 'http://localhost:3000/apis/list/To/Alum/Canaliz/'+Carrera;
        axios.get(total)
        .then(res=>{
            const totalAluT = res.data.data[0];
            this.setState({
                totalAluT:totalAluT.alumnosCanalizados
            });
        });//Metodo para obtener los nombres y los apellidos del encargado de tutoria 
        const Nom = "http://localhost:3000/apis/list/PE/Nom/Ape/"+this.props.id;
        axios.get(Nom)
        .then(res=>{
            if(res.data.success){
                const nomApe = res.data.data[0];
                this.setState({
                    nombre:nomApe.nombreDocente,
                    apellidos:nomApe.apellidoDocente
                });
            }
        });
    }
    render(){
        return(
            <div>
                <nav class="navbar bg-nav fixed-top">
                    <Link class="navbar-brand color" to={"/HomePE/"+this.props.id}>SIIUTeM</Link>
                    <Link to={"/verisat/"+this.props.id} class="boton_salir color navbar-brand">Volver</Link>
                </nav>
                <br></br><br></br><br></br><br></br>
                <div class="container">
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-2 rounded-0 border-white">
                            <img
                            width="150px" 
                            max-width=":256px"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQk6ORHe7XD9wZ5o7SkAo3ZnD6jsszlry4fgQ&usqp=CAU"/>
                        </li>
                        <li class="list-group col-8 rounded-0 border-white">
                            <h4 class="text-center">INFORME DE SEGUIMIENTO DE PLAN DE ACCIÓN TUTORIAL</h4>
                        </li>
                    </ul>
                    <br />
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-1 text-center rounded-0 border border-dark">
                            <h6>Carrera</h6>
                        </li>
                        <li class="list-group col-4 rounded-0 border border-dark">
                            <h7>{this.state.carreraAcc}</h7>
                        </li>
                        <li class="list-group col-1" />
                        <li class="list-group col-3 rounded-0 border border-dark">
                            <h6>Periodo cuatrimestral</h6>
                        </li> 
                        <li class="list-group col-3 text-center rounded-0 border border-dark">
                            <h7>{this.state.periodoCuatri}</h7>
                        </li>    
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-4 rounded-0 border border-dark">
                           <h6>Total de grupos de la carrera</h6>
                        </li>
                        <li class="list-group col-1 text-center rounded-0 border border-dark">
                           <h7>{this.state.totalGrupo}</h7>
                        </li>
                        <li class="list-group col-1" />
                        <li class="list-group col-3 rounded-0 border border-dark">
                            <h6>Total de alumnos atendidos</h6>
                        </li> 
                        <li class="list-group col-3 text-center rounded-0 border border-dark">
                            <h7>{this.state.totalAtendi}</h7>
                        </li>   
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-4 rounded-0 border border-dark">
                           <h6>Total de tutores de la carrera</h6>
                        </li>
                        <li class="list-group col-1 text-center rounded-0 border border-dark">
                           <h7>{this.state.totalTutor}</h7>
                        </li>
                    </ul>
                    <br></br>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-4 rounded-0 border border-dark">
                            <h6>Tutorías grupales</h6>
                        </li>
                        <li class="list-group col-1 rounded-0 text-center border border-dark">
                            <h7>{this.state.tutorGrupa}</h7>
                        </li>
                        <li class="list-group col-1 border border-white"></li>
                        <li class="list-group col-6 rounded-0 border border-dark">
                            <h6 class="text-center">Bajas</h6>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-4 rounded-0 border border-dark">
                            <h7>Total de temas programados</h7>
                        </li>
                        <li class="list-group col-1 rounded-0 text-center border border-dark">
                            <h7>{this.state.totalTemas}</h7>
                        </li>
                        <li class="list-group col-1 rounded-0 border border-white"/>
                        <li class="list-group col-5 rounded-0 border border-dark">
                            <h7>Total de alumnos activos al iniciar el cuatrimestre	</h7>
                        </li>
                        <li class="list-group col-1 rounded-0 text-center border border-dark">
                            <h7>{this.state.totalIniCuatri}</h7>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-4 rounded-0 border border-dark">
                            <h7>Total de temas programados vistos</h7>
                        </li>
                        <li class="list-group col-1 rounded-0 text-center border border-dark">
                            <h7>{this.state.totalTemaVist}</h7>
                        </li>
                        <li class="list-group col-1 border border-white"></li>
                        <li class="list-group col-5 rounded-0 border border-dark">
                            <h7>Total de bajas al terminar el cuatrimestre</h7>
                        </li>
                        <li class="list-group col-1 rounded-0 text-center border border-dark">
                            <h7>{this.state.totalTermiCuatri}</h7>
                        </li>
                    </ul>
                    <br />
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-4 rounded-0 border border-dark">
                            <h6>Tutorías individuales</h6>
                        </li>
                        <li class="list-group col-1 rounded-0 text-center border border-dark">
                            <h7>{this.state.tutorIndi}</h7>
                        </li>
                        <li class="list-group col-1 rounded-0 border border-white"></li>
                        <li class="list-group col-6  rounded-0 border border-white">
                            <h6 class="text-center">Motivos de bajas</h6>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-4 rounded-0 border border-dark">
                            <h7>Total programadas</h7>
                        </li>
                        <li class="list-group col-1 rounded-0 text-center border border-dark">
                            <h7>{this.state.totalPrograma}</h7>
                        </li>
                        <li class="list-group col-1 rounded-0 border border-white"></li>
                        <li class="list-group col-3 rounded-0 border border border-dark">
                            <h7>No se cumplieron expectativas</h7>
                        </li>
                        <li class="list-group col-3 rounded-0 border border border-dark">
                            <h7>{this.state.cumpliExH+":H "+this.state.cumpliExM+":M-Canalizados"}</h7>
                            <h7>{this.state.cumpliExNH+":H "+this.state.cumpliExNM+":M-No Canalizados"}</h7>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-4 rounded-0 border border border-dark">
                            <h7>Total realizadas</h7>
                        </li>
                        <li class="list-group col-1 rounded-0 text-center border border border-dark">
                            <h7>{this.state.totalRealiza}</h7>
                        </li>
                        <li class="list-group col-1 rounded-0 border border-white"></li>
                        <li class="list-group col-3 rounded-0 border border-dark">
                            <h7>Reprobación</h7>
                        </li>
                        <li class="list-group col-3 rounded-0 border border border-dark">
                            <h7>{this.state.reprobacH+":H "+this.state.reprobacM+":M-Canalizados"}</h7>
                            <h7>{this.state.reprobacNM+":H "+this.state.reprobacNH+":M-No Canalizados"}</h7>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-4 rounded-0 border border border-dark">
                            <h6 class="text-center">Alumnos canalizados</h6>
                        </li>
                        <li class="list-group col-1 text-center rounded-0 border border border-dark">
                            <h7>{this.state.totalAluT}</h7>
                        </li>
                        <li class="list-group col-1 border border-white"></li>
                        <li class="list-group col-3 rounded-0 border border border-dark">
                            <h7>Problemas económicos</h7>
                        </li>
                        <li class="list-group col-3 rounded-0 border border border-dark">
                            <h7>{this.state.problEcoH+":H "+this.state.problEcoM+":M-Canalizados"}</h7>
                            <h7>{this.state.problEcoNH+":H "+this.state.problEcoNM+":M-No Canalizados"}</h7>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-4 rounded-0 border border border-dark">
                            <h7>Psicólogo</h7>
                        </li>
                        <li class="list-group col-1 rounded-0 text-center border border border-dark">
                            <h7>{this.state.psicologoT}</h7>
                        </li>
                        <li class="list-group col-1 border border-white"></li>
                        <li class="list-group col-3 rounded-0 border border border-dark">
                            <h7>Dificultades para el transporte</h7>
                        </li>
                        <li class="list-group col-3 rounded-0 border border border-dark">
                            <h7>{this.state.dificuTrH+":H "+this.state.dificuTrM+":M-Canalizados"}</h7>
                            <h7>{this.state.dificuTrNH+":H "+this.state.dificuTrNM+":M-No Canalizados"}</h7>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-4 rounded-0 border border border-dark">
                            <h7>Pedagogo</h7>
                        </li>
                        <li class="list-group col-1 rounded-0 text-center border border border-dark">
                            <h7>{this.state.pedagogoT}</h7>
                        </li>
                        <li class="list-group col-1 border border-white"></li>
                        <li class="list-group col-3 border rounded-0 border border border-dark">
                            <h7>Problemas de trabajo</h7>
                        </li>
                        <li class="list-group col-3 rounded-0 border border border-dark">
                            <h7>{this.state.probleTrH+":H "+this.state.probleTrM+":M-Canalizados"}</h7>
                            <h7>{this.state.probleTrNH+":H "+this.state.probleTrNM+":M-No Canalizados"}</h7>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-4 rounded-0 border border border-dark">
                            <h7>Enfermería</h7>
                        </li>
                        <li class="list-group col-1 rounded-0 text-center border border border-dark">
                            <h7>{this.state.enfermeriaT}</h7>
                        </li>
                        <li class="list-group col-1 border border-white"></li>
                        <li class="list-group col-3 rounded-0 border border border-dark">
                            <h7>Cambio de carrera</h7>
                        </li>
                        <li class="list-group col-3 rounded-0 border border border-dark">
                            <h7>{this.state.cambiCarH+":H "+this.state.cambiCarM+":M-Canalizados"}</h7>
                            <h7>{this.state.cambiCarNH+":H "+this.state.cambiCarNM+":M-No Canalizados"}</h7>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-4 rounded-0 border border border-dark">
                            <h7>Becas</h7>
                        </li>
                        <li class="list-group col-1 rounded-0 text-center border border border-dark">
                            <h7>{this.state.becasT}</h7>
                        </li>
                        <li class="list-group col-1 border border-white"></li>
                        <li class="list-group col-3 border rounded-0 border border border-dark">
                            <h7>Incompatibilidad de horario</h7>
                        </li>
                        <li class="list-group col-3 rounded-0 border border border-dark">
                            <h7>{this.state.incompHoH+":H "+this.state.incompHoM+":M-Canalizados"}</h7>
                            <h7>{this.state.incompHoNH+":H "+this.state.incompHoNM+":M-No Canalizados"}</h7>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-4 rounded-0 border border border-dark">
                            <h7>Incubadora</h7>
                        </li>
                        <li class="list-group col-1 rounded-0 text-center border border border-dark">
                            <h7>{this.state.incubadoraT}</h7>
                        </li>
                        <li class="list-group col-1 border border-white"></li>
                        <li class="list-group col-3 rounded-0 border border border-dark">
                            <h7>Faltas al reglamento</h7>
                        </li>
                        <li class="list-group col-3 rounded-0 border border border-dark">
                            <h7>{this.state.faltReglH+":H "+this.state.faltReglM+":M-Canalizados"}</h7>
                            <h7>{this.state.faltReglNH+":H "+this.state.faltReglNM+":M-No Canalizados"}</h7>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-4 rounded-0 border border border-dark">
                            <h7>Bolsa de trabajo</h7>
                        </li>
                        <li class="list-group col-1 rounded-0 text-center border border border-dark">
                            <h7>{this.state.bolsaTrabjoT}</h7>
                        </li>
                        <li class="list-group col-1 border border-white"></li>
                        <li class="list-group col-3 border rounded-0 border border border-dark">
                            <h7>Cambio de residencia</h7>
                        </li>
                        <li class="list-group col-3 rounded-0 border border border-dark">
                            <h7>{this.state.cambiRegH+":H "+this.state.cambiRegM+":M-Canalizados"}</h7>
                            <h7>{this.state.cambiRegNH+":H "+this.state.cambiRegNM+":M-No Canalizados"}</h7>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-4 rounded-0 border border border-dark">
                            <h7>Asesor académico</h7>
                        </li>
                        <li class="list-group col-1 rounded-0 text-center border border border-dark">
                            <h7>{this.state.asesoriaAcademicaT}</h7>
                        </li>
                        <li class="list-group col-1 border border-white"></li>
                        <li class="list-group col-3 rounded-0 border border border-dark">
                            <h7>Cambio de universidad</h7>
                        </li>
                        <li class="list-group col-3 rounded-0 border border border-dark">
                            <h7>{this.state.cambiUniH+":H "+this.state.cambiUniM+":M-Canalizados"}</h7>
                            <h7>{this.state.cambiUniNH+":H "+this.state.cambiUniNM+":M-No Canalizados"}</h7>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-5 border border-white">
                            <h6 class="text-center">Total de tutorías individuales no programadas</h6>
                        </li>
                        <li class="list-group-item col-md-1 border border-white"></li>
                        <li class="list-group col-3 rounded-0 border border border-dark">
                            <h7>Problemas familiares</h7>
                        </li>
                        <li class="list-group col-3 rounded-0 border border border-dark">
                            <h7>{this.state.problFamH+":H "+this.state.problFamM+":M-Canalizados"}</h7>
                            <h7>{this.state.problFamNH+":H "+this.state.problFamNM+":M-No Canalizados"}</h7>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-5 rounded-0 border border border-dark">
                            <h6 class="text-center">Temas abordados</h6>
                        </li>
                        <li class="list-group col-1 border border-white"></li>
                        <li class="list-group col-3 border rounded-0 border border border-dark">
                            <h7>Problemas personales</h7>
                        </li>
                        <li class="list-group col-3 rounded-0 border border border-dark">
                            <h7>{this.state.problPerH+":H "+this.state.problPerM+":M-Canalizados"}</h7>
                            <h7>{this.state.problPerNH+":H "+this.state.problPerNM+":M-No Canalizados"}</h7>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-4 rounded-0 border border border-dark">
                            <h7>Académicos</h7>
                        </li>
                        <li class="list-group col-1 rounded-0 text-center border border border-dark">
                            <h7>{this.state.acadTutorIndi}</h7>
                        </li>
                        <li class="list-group col-1 border border-white"></li>
                        <li class="list-group col-3 rounded-0 border border border-dark">
                            <h7>Otra</h7>
                        </li>
                        <li class="list-group col-3 rounded-0 border border border-dark">
                                <h7>{this.state.otraH+":H "+this.state.otraSM+":M-Canalizados"}</h7>
                            <h7>{this.state.otraNH+":H "+this.state.otraNM+":M-No Canalizados"}</h7>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-4 rounded-0 border border border-dark">
                            <h7>Profesionales</h7>
                        </li>
                        <li class="list-group col-1 rounded-0 text-center border border border-dark">
                            <h7>{this.state.profTutorIndi}</h7>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-4 rounded-0 border border border-dark">
                            <h7>Administrativos</h7>
                        </li>
                        <li class="list-group col-1 rounded-0 text-center border border border-dark">
                            <h7>{this.state.admiTutorIndi}</h7>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-4 rounded-0 border border border-dark">
                            <h7>Otros</h7>
                        </li>
                        <li class="list-group col-1 rounded-0 text-center border border border-dark">
                            <h7>{this.state.otrosTutorIn}</h7>
                        </li>
                    </ul>
                    <br />
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-5 rounded-0 border border border-dark">
                            <h6>Responsable de Tutorías de la Carrera</h6>
                        </li>
                        <li class="list-group col-7 rounded-0 border border border-dark">
                            <h7>{this.state.nombre+" "+this.state.apellidos}</h7>
                        </li>
                    </ul>
                    <br />
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group col-2 rounded-0 border border border-dark">
                            <h6>Observaciones</h6>
                        </li>
                        <li class="list-group col-10 rounded-0 border border border-dark">
                            <h7>{this.state.comentario}</h7>
                        </li>
                    </ul>        
                </div>
                <br />
            </div>
        );
    }
}
//Clase para generar el pdf 
class GenerarPDFISAT extends React.Component{
    render(){
        return(
            <div>
                <div class="container">
                    <VerIndiISAT id={this.props.match.params.id} idIast={this.props.match.params.idIast} Carrera={this.props.match.params.Carrera} ref={el => (this.componentRef = el)}/>
                    <ReactToPrint documentTitle="Informe de seguimiento de acción tutorial" content={() => this.componentRef}>
                        <PrintContextConsumer>
                            {({ handlePrint }) => (
                                <div class="text-center">
                                    <Link class="btn btn-success" onClick={handlePrint}>Generar PDF</Link>
                                </div>
                            )}
                        </PrintContextConsumer>
                    </ReactToPrint>
                </div>
                <br></br><br></br><br></br><br></br>
                <Foolder />
            </div>
        );
    }
}

export default GenerarPDFISAT;