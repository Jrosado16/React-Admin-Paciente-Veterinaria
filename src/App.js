import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import NuevaCita from './components/NuevaCita';
import ListaCitas from './components/ListaCitas';

class App extends Component  {
  state = {
    citas: []
  }

  //metodo que se ejecuta cuando se carga la app
  componentDidMount(){
    if(localStorage.getItem('citas')){
      const citas = JSON.parse(localStorage.getItem('citas'));


      console.log(citas)
      this.setState({
        citas
      })
    }
  }


  //metodo que sejecuta cuando se ocurre un evento en la app
  componentDidUpdate(){
    localStorage.setItem('citas', JSON.stringify(this.state.citas))
  }

  //agregamos la nueva cita al state
  crearNuevaCita = (datos) => {
    const citas = [...this.state.citas, datos];

    this.setState({
      citas
    })
  }
  //eleminamos una cita el state
  eliminarCita = id =>{
    const citasActuales = [...this.state.citas];
    const citas = citasActuales.filter(cita =>  cita.id !== id);

    this.setState({
      citas
    });

  }

  render(){
    return (
      <div className="container">
        <Header
          title="Administrador de Pacientes de una Veterinaria"
        />
        <div className="row">
          <div className="col-md-10 mx-auto">
            <NuevaCita 
              crearNuevaCita={this.crearNuevaCita}
            />
          </div>
        </div>

        <div className="col-md-10 mx-auto">
          <ListaCitas 
            citas={this.state.citas}
            eliminarCita={this.eliminarCita}
          />
        </div>
      </div>
  
    )

  }
}

export default App;
