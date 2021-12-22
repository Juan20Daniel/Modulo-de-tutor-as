import React from 'react';
import '../App.css'

class login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            campoNuCont:0,
            campoPasswo:"",
            datosPersona:[]
        }
    }
    
    render(){
        return(
            <div class="container">
                <br></br><br></br><br></br><br></br>
                <div class="grid">
                    <div class="form login">
                        <header class="login__header">
                            <h3 class="login__title">Iniciar Sesión</h3>
                        </header>
                        <div class="login__body">
                            <div class="form__field">
                                <input type="text" placeholder="Numero de control" onChange={(value) => this.setState({campoNuCont:value.target.value})} />
                            </div>
                            <br></br>
                            <div class="form__field">
                                <input type="password" placeholder="Contraseña" onChange={(value) => this.setState({campoPasswo:value.target.value})} />
                            </div>
                        </div>
                        <footer class="login__footer">
                            <input type="submit" class="btn btn-outline-info" onClick={() => this.loadFillData()} value="Entrar" />   
                        </footer>
                    </div>
                </div>
            </div>
        );
    } // Funcion de redireccionamiento a la vista o archivo (validation)
    loadFillData(){
        var value;
        value = this.state.campoNuCont;
        window.location.replace("/validation/"+value);
    }
} 
export default login;