import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFire, faSubscriptions, faLibrary, faHistory } from '@fortawesome/free-solid-svg-icons';

const Icon = ({ name }) => {
  let iconToRender;

  switch (name) {
    case 'home':
      iconToRender = faHome;
      break;
    case 'fire':
      iconToRender = faFire;
      break;
    case 'subscriptions':
      iconToRender = faSubscriptions;
      break;
    case 'library':
      iconToRender = faLibrary;
      break;
    case 'history':
      iconToRender = faHistory;
      break;
    default:
      iconToRender = faHome; 
      console.error(`El icono "${name}" no está definido. Usando un icono predeterminado.`);
  }

  return (
    <FontAwesomeIcon icon={iconToRender} />
  );
};

export default Icon;
