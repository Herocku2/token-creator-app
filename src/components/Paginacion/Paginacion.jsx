/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useLanguage } from "../Menu/Menu";
import "./style.css";

export const Paginacion = ({
  className,
  iconChevronRight = "/img/icon-chevron-right.png",
  img = "/img/icon-chevron-right-1.png",
}) => {
  const { language } = useLanguage();
  
  const paginationTranslations = {
    en: {
      pageInfo: '1 of 10'
    },
    es: {
      pageInfo: '1 de 10'
    }
  };
  
  const pt = paginationTranslations[language];
  return (
    <div className={`paginacion ${className}`}>
      <img
        className="icon-chevron-right"
        alt="Icon chevron right"
        src={iconChevronRight}
      />

      <div className="element-de">{pt.pageInfo}</div>

      <img className="icon-chevron-right" alt="Icon chevron right" src={img} />
    </div>
  );
};

Paginacion.propTypes = {
  iconChevronRight: PropTypes.string,
  img: PropTypes.string,
};
