/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../Menu/Menu";
import "./style.css";

export const MenuTabla = ({
  className,
  divClassName,
  line = "/img/line-2-1.svg",
  divClassNameOverride,
  img = "/img/line-1-1.svg",
  line1 = "/img/line-2-1.svg",
  divClassName1,
  text = "new",
  to,
  to1,
  to2,
}) => {
  const { language, translations } = useLanguage();
  const t = translations[language];
  
  const menuTranslations = {
    en: {
      all: 'All',
      next: 'Next',
      new: 'New'
    },
    es: {
      all: 'Todos',
      next: 'Siguiente',
      new: 'Nuevo'
    }
  };
  
  const mt = menuTranslations[language];
  
  return (
    <div className={`menu-tabla ${className}`}>
      <Link className={`text-wrapper-11 ${divClassName}`} to={to2}>
        {mt.all}
      </Link>

      <img className="line" alt="Line" src={line} />

      <Link className={`text-wrapper-12 ${divClassNameOverride}`} to={to}>
        {mt.next}
      </Link>

      <img className="line" alt="Line" src={img} />

      <Link className={`new ${divClassName1}`} to={to1}>
        {mt.new}
      </Link>

      <img className="line" alt="Line" src={line1} />
    </div>
  );
};

MenuTabla.propTypes = {
  line: PropTypes.string,
  img: PropTypes.string,
  line1: PropTypes.string,
  text: PropTypes.string,
  to: PropTypes.string,
  to1: PropTypes.string,
  to2: PropTypes.string,
};
