import React, { Component } from 'react';
import PropTypes from 'prop-types';


//creamos un objeto de los datos que tendria el state y lo usuaremos para cuando querramos actualizarlo a basio
const datos = { 
  citas: {
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: '',
  },
  error: false
 }

class NuevaCita extends Component {

    state = { 
      ...datos
    }
    //funcion para escuchar  cambios en los inputs
    handleChange = e => {
      //actualizamos el state con setState
      this.setState({
        citas: {
          ...this.state.citas,
          [e.target.name]: e.target.value,
        }
      })
    }
    // funcion para guardar los datos
    handleSubmit = (e) => {
      e.preventDefault();

      const {mascota, propietario, hora, fecha, sintomas} = this.state.citas;

      //validar los campos
      if(mascota === '' || propietario === '' || hora === '' || fecha === '' || sintomas === ''){
        this.setState({
          error: true
        });
        return;
      }

      //obtengo un Date que lo usare como id ya que sera unico
      let id = new Date().getTime()

      let citas = this.state.citas;
      citas.id = id;

      //mandamos los datos 
      this.props.crearNuevaCita(citas);

      //reiniciamos el state
      this.setState({
        ...datos
      })
    }
    render() { 
      const error = this.state.error;
      return ( 
          <div className="card px-4 mt-4">
            {error ? <div className="alert alert-danger mt-3 text-center">Todos los campos son obligatorios</div>  : null}
            <div className="card-body">
              <div className="card-title text-center">
                <h2>Ingrese una Macosta </h2>
              </div>
              <form onSubmit={this.handleSubmit}>
                <div className="form-group row">
                  <label className="col-sm-4 col-lg-2 col-form-label">Nombre Macosta:</label>
                  <input
                    className="form-control col-sm-8 col-lg-10"
                    type="text"
                    placeholder="Ingrese el nombre de su mascota"
                    name="mascota"
                    onChange={this.handleChange}
                    value={this.state.citas.mascota}
                  />
                </div>
                <div className="form-group row">
                  <label className="col-sm-4 col-lg-2 col-form-label">Dueño:</label>
                  <input
                    className="form-control col-sm-8 col-lg-10"
                    type="text"
                    placeholder="Propietario"
                    name="propietario"
                    onChange={this.handleChange}
                    value={this.state.citas.propietario}
                  />
                </div>
                <div className="form-group row">
                  <label className="col-sm-4 col-lg-2 col-form-label">Fecha:</label>
                  <input
                    className="form-control col-sm-4 col-lg-4"
                    type="date"
                    name="fecha"
                    onChange={this.handleChange}
                    value={this.state.citas.fecha}
                  />

                  <label className="col-sm-4 col-lg-2 col-form-label">Hora:</label>
                  <input
                    className="form-control col-sm-4 col-lg-4"
                    type="time"
                    name="hora"
                    onChange={this.handleChange}
                    value={this.state.citas.hora}
                  />
                </div>
                <div className="form-group row">
                  <label className="col-sm-4 col-lg-2 col-form-label">Sintomas:</label>
                  <textarea 
                    className="form-control col-lg-10 col-sm-8"
                    placeholder="Sistomas de la mascota"
                    name="sintomas"
                    onChange={this.handleChange}
                    value={this.state.citas.sintomas}
                  ></textarea>
                </div>
                <div className="form-group row">
                  <input type="submit" value="Registrar" className="btn btn-success btn-block"/>
                </div>
            </form>
            </div>           
          </div>
        );
    }
}
//especificamos los tipos de datos que recibimos

NuevaCita.propTypes = {
  crearNuevaCita: PropTypes.func.isRequired
}

export default NuevaCita;