import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faFire,
  faSubscriptions,
  faLibrary,
  faHistory,
  faUser,
  faBook,
  faList,
  faSearch,
  faMicrophone,
  faVideo,
  faplay,
} from "@fortawesome/free-solid-svg-icons";

const Icon = ({ name }) => {
  let iconToRender;

  switch (name) {
    case "home":
      iconToRender = faHome;
      break;
    case "fire":
      iconToRender = faFire;
      break;
    case "subscriptions":
      iconToRender = faUser;
      break;
    case "library":
      iconToRender = faList;
      break;
    case "history":
      iconToRender = faHistory;
      break;
    case "search":
      iconToRender = faSearch;
      break;
    case "mic":
      iconToRender = faMicrophone;
      break;
    case "video":
      iconToRender = faVideo;
      break;
    case "apps":
      iconToRender = faVideo;
      break;
    default:
      iconToRender = faHome;
      console.error(
        `El icono "${name}" no está definido. Usando un icono predeterminado.`
      );
  }

  return <FontAwesomeIcon icon={iconToRender} />;
};

export default Icon;
