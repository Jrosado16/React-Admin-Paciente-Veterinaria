import React from 'react';
import Cita from './Cita';
import PropTypes from 'prop-types';

const ListaCitas = ({citas, eliminarCita}) => {
    return ( 
      <div className="card mt-4">
        
        <div className="card-body">
          <div className="card-title">
            <h2 className="text-center">Lista de Citas</h2>
          </div>
          <div className="lista-citas">
            {citas.map(cita => (
              <Cita 
                key={cita.id}
                cita={cita}
                eliminarCita={eliminarCita}
              />
            ))}
          </div>
        </div>
      </div> 
    );
}

//especificamos los tipos de datos que recibimos
ListaCitas.propTypes = {
  cita: PropTypes.object,
  eliminarCita: PropTypes.func.isRequired
}
export default ListaCitas;