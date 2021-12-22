import React from 'react';
import { Switch, Route} from 'react-router-dom';
import login from '../componentes/login';
import HomeM from '../componentes/HomeM';
import validation from '../componentes/validation';
import verEntreIniJyPE from '../componentes/EncarTutorPE/verEntreIniJyPE';
//Jefe de tutora
import HomeJ from '../componentes/HomeJ';
import SubInfo from '../componentes/JefeT/subInfo';
import VerInfores from '../componentes/JefeT/verInformes';
import EncuestaF from '../componentes/JefeT/encuestaF';
import verResulGrupos from '../componentes/JefeT/verResulGrupos';
import verResulEvalua from '../componentes/JefeT/verResulEvalua';
import verResEvafilte from '../componentes/JefeT/verResEvafilte';
import verEntreIniJ from '../componentes/JefeT/verEntreIniJ';
import VerEntreIniGroupJ from '../componentes/JefeT/verEntreIniGroupJ';
import verEntreIniFiltrar from '../componentes/JefeT/verEntreIniFiltrar';
import InsertSubInfo from '../componentes/JefeT/insertSubInfo';
import verIfrmGrupExII from '../componentes/JefeT/verIfrmGrupExII';
import verResIndiExamII from '../componentes/JefeT/verResIndiExamII';
//Encargado de Tutoria Por programa Educativo
import HomePE from '../componentes/HomePE';
import ISAT from '../componentes/EncarTutorPE/ISAT';
import CambioT from '../componentes/EncarTutorPE/CambioT';
import verISAT from '../componentes/EncarTutorPE/verISAT';
import updateISAT from '../componentes/EncarTutorPE/updateISAT';
import filtrarFecha from '../componentes/EncarTutorPE/filtrarFecha';
import VerEntreIniGrupPE from '../componentes/EncarTutorPE/verEntreIniGrupPE';
import verIndiISAT from '../componentes/EncarTutorPE/verIndiISAT';
//Tutor
import HomeT from '../componentes/HomeT';
import Plan from '../componentes/Tutor/Plan';
import reportePlan from '../componentes/Tutor/reportePlan';
import Canalizacion from '../componentes/Tutor/Canalizacion';
import insertPlan from '../componentes/Tutor/insertPlan';
import verReportPlanB from '../componentes/Tutor/verReportPlanB';
import verCanalizacion from '../componentes/Tutor/verCanalizacion';
import verExameII from '../componentes/Tutor/verExameII';
import ubdatePlanSesio from '../componentes/Tutor/ubdatePlanSesio';
import VerReportePlanBIndi from '../componentes/Tutor/verReportePlanBIndi';
import updateCanalizacion from '../componentes/Tutor/updateCanalizacion';
import verEntreIniT from '../componentes/Tutor/verEntreIni';
import newPlan from '../componentes/Tutor/newPlan';
import creaPlan from '../componentes/Tutor/creaPlan';
import insertAtencionIndi from '../componentes/Tutor/insertAtencionIndi';
import updateAtencionIndi from '../componentes/Tutor/updateAtencionIndi';
import updatePlan from '../componentes/Tutor/updatePlan';
import insertReportePlan from '../componentes/Tutor/insertReportePlan';
import VerEntreIniIndividual from '../componentes/verEntreIniIndividual';
import VerIndiCanalizacion from '../componentes/Tutor/verIndiCanalizacion';
import InsertAlumCanali from '../componentes/Tutor/insertAlumCanali';
import verPlanInPDF from '../componentes/Tutor/verPlanInPDF';
import verReportPlPDF from '../componentes/Tutor/verReportPlPDF';
//Alumno
import HomeA from '../componentes/HomeA';
import entrevistaIni from '../componentes/Alumno/entrevistaIni';
import evaluaDocente from '../componentes/Alumno/evaluaDocente';
    
const Router = () => {
    return(
        <Switch>
            <Route exact path="/" component={login}/>
            <Route path="/validation/:id" component={validation}/>
            <Route path="/HomeT/:id" component={HomeT}/>
            <Route path="/plan/:id" component={Plan}/>
            <Route path="/reportePlan/:id" component={reportePlan}/>
            <Route path="/canalizacion/:id" component={Canalizacion}/>
            <Route path="/insertPlan/:id/:idTutor" component={insertPlan}/>
            <Route path="/verreportplanB/:id" component={verReportPlanB}/>
            <Route path="/verExameII/:id" component={verExameII} />
            <Route path="/ubdatePlanSesio/:id/:idPlan/:idTutor" component={ubdatePlanSesio}/>
            <Route path="/verReportePlanBIndi/:id/:Grupo/:Ciclo/:Nom/:Ape/:idReport" component={VerReportePlanBIndi}/>
            <Route path="/updateCanalizacion/:id/:idd2/:idAlumno" component={updateCanalizacion}/>
            <Route path="/verEntreIni/:id" component={verEntreIniT}/>
            <Route path="/newPlan/:id" component={newPlan}/>
            <Route path="/creaPlan/:id/:idTutor" component={creaPlan}/>
            <Route path="/verPlanInPDF/:id/:idTutor" component={verPlanInPDF}/>
            <Route path="/insertAtencionIndi/:id/:idTutor/:grupo" component={insertAtencionIndi}/>
            <Route path="/updateAtencionIndi/:id/:idTutor/:grupo" component={updateAtencionIndi}/>
            <Route path="/updatePlan/:id/:idTutor" component={updatePlan}/>
            <Route path="/insertReportePlan/:id/:idTutor/:Nom/:Ape/:Grupo/:Ciclo" component={insertReportePlan}/>
            <Route path="/verEntreIniIndividual/:idTutor/:Grupo/:idAlumno/:Tipo/:volver" component={VerEntreIniIndividual}/>
            <Route path="/verIndiCanalizacion/:id/:can" component={VerIndiCanalizacion}/>
            <Route path="/vercanalizacion/:id" component={verCanalizacion}/>
            <Route path="/insertAlumCanali/:id/:idAlum/:planONoplan" component={InsertAlumCanali}/>
            <Route path="/verReportPlPDF/:id/:idTutor/:Nom/:Ape/:Grupo/:Ciclo" component={verReportPlPDF}/>
            <Route path="/HomeM" component={HomeM}/>
            <Route path="/HomeJ/:id" component={HomeJ}/>
            <Route path="/subInfo/:id" component={SubInfo}/>
            <Route path="/verInfores/:id" component={VerInfores}/>
            <Route path="/encuestaF/:id" component={EncuestaF}/>
            <Route path="/verResulGrupos/:id/:id2/:grupo/:ano" component={verResulGrupos}/>
            <Route path="/verResulEvalua/:id/:id2/:grupo/:idRes/:ano" component={verResulEvalua}/>
            <Route path="/verResEvafilte/:id/:ano" component={verResEvafilte}/>
            <Route path="/verEntreIniJ/:id" component={verEntreIniJ}/>
            <Route path="/verEntreIniGroupJ/:id/:grupo/:volver" component={VerEntreIniGroupJ}/>
            <Route path="/verEntreIniFiltrar/:id/:ano" component={verEntreIniFiltrar}/>
            <Route path="/insertSubInfo/:id/:grupo" component={InsertSubInfo}/>
            <Route path="/verIfrmGrupExII/:id/:grupo/:ano" component={verIfrmGrupExII}/>
            <Route path="/verResIndiExamII/:id/:ano" component={verResIndiExamII} />
            <Route path="/entrevistaIni/:id" component={entrevistaIni}/>
            <Route path="/evaluaDocente/:id" component={evaluaDocente}/>
            <Route path="/HomePE/:id" component={HomePE}/>
            <Route path="/isat/:id" component={ISAT}/>
            <Route path="/cambiot/:id" component={CambioT}/>
            <Route path="/verisat/:id" component={verISAT}/>
            <Route path="/HomeA/:id" component={HomeA}/>
            <Route path="/filtrarFecha/:id/:ano" component={filtrarFecha}/>
            <Route path="/verEntreIniGrupPE/:id/:grupo/:volver" component={VerEntreIniGrupPE}/>
            <Route path="/updateISAT/:id/:idPE" component={updateISAT}/>
            <Route path="/verEntreIniJyPE/:id" component={verEntreIniJyPE}/>
            <Route path="/verIndiISAT/:id/:idIast/:Carrera" component={verIndiISAT}/>
        </Switch>
    );
} 

export default Router;