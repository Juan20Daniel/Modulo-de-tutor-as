import React from 'react';
import axios from 'axios';

class validation extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      listEmployee:[],
      campoNumCon:""
    }
  }
 //Metodo de redireccionamiento dependiendo del número de control
  componentDidMount(){
    let userId = this.props.match.params.id;
    const url = "http://localhost:3000/apis/"+userId;
    axios.get(url)
    .then(res=>{
      if (res.data.success){
        const data = res.data.data[0];
        if(data.tipo === "Jefe de tutoria"){
          window.location.replace("/HomeJ/"+data.numControlD);
        }else if(data.tipo === "Tutor"){
          window.location.replace("/HomeT/"+data.numControlD); 
        }else if(data.tipo === "Encargado de tutoria"){
          window.location.replace("/HomePE/"+data.numControlD);
        }else if(data.tipo === "Maestro"){
          window.location.replace("/HomeM");
        }else{
          window.location.replace("/HomeA/"+data.idAlumnos);
        }
      }else{
        window.location.replace("/");
        alert("Numero de control incorrecto");
      }
    })
    .catch(error=>{
      alert(error)
      window.location.replace("/");
    });
  }
  render(){
    return(
      <div />
    );
  }
}
export default validation;