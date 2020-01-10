import React from 'react';
import PropTypes from 'prop-types';

const Header = ({title}) => {
return ( <h1 className="text-center pt-4 text-white">{title}</h1> );
}

//especificamos los tipos de datos que recibimos
Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header;