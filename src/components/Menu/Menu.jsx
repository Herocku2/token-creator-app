/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React, { useState, createContext, useContext } from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Language Context
const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  
  const translations = {
    en: {
      home: 'Home',
      vote: 'Vote',
      publishProject: 'Publish Project',
      createToken: 'Create Token',
      swap: 'Swap',
      news: 'News',
      forum: 'Forum',
      switchToSpanish: 'ES'
    },
    es: {
      home: 'Inicio',
      vote: 'Votar',
      publishProject: 'Publicar Proyecto',
      createToken: 'Crear Token',
      swap: 'Intercambiar',
      news: 'Noticias',
      forum: 'Foro',
      switchToEnglish: 'EN'
    }
  };
  
  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'es' : 'en');
  };
  
  return (
    <LanguageContext.Provider value={{ language, translations, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const Menu = ({
  className,
  line = "/img/line-1-1.svg",
  img = "/img/line-2-1.svg",
  line1 = "/img/line-2-1.svg",
  line2 = "/img/line-2-1.svg",
  line3 = "/img/line-2-1.svg",
  line4 = "/img/line-2-1.svg",
  line5 = "/img/line-2-1.svg",
  to,
  to1,
  to2,
  to3,
  to4,
  to5,
}) => {
  const { language, translations, toggleLanguage } = useLanguage();
  const t = translations[language];
  
  return (
    <div className={`menu ${className}`}>
      <Link className="text-wrapper-21" to={to2}>
        {t.home}
      </Link>

      <img className="line-2" alt="Line" src={line} />

      <Link className="text-wrapper-22" to={to}>
        {t.vote}
      </Link>

      <img className="line-2" alt="Line" src={img} />

      <Link className="text-wrapper-22" to={to1}>
        {t.publishProject}
      </Link>

      <img className="line-2" alt="Line" src={line1} />

      <Link className="text-wrapper-22" to={to3}>
        {t.createToken}
      </Link>

      <img className="line-2" alt="Line" src={line2} />

      <Link className="text-wrapper-22" to={to4}>
        {t.swap}
      </Link>

      <img className="line-2" alt="Line" src={line3} />

      <Link className="text-wrapper-22" to={to5}>
        {t.news}
      </Link>

      <img className="line-2" alt="Line" src={line4} />

      <div className="text-wrapper-23">{t.forum}</div>

      <img className="line-2" alt="Line" src={line5} />
      
      <button 
        className="language-toggle" 
        onClick={toggleLanguage}
        style={{
          background: 'transparent',
          border: '1px solid #ff01a1',
          color: '#ff01a1',
          padding: '4px 8px',
          borderRadius: '4px',
          fontSize: '14px',
          cursor: 'pointer',
          fontFamily: 'Orbitron, Helvetica'
        }}
      >
        {language === 'en' ? 'ES' : 'EN'}
      </button>
    </div>
  );
};

Menu.propTypes = {
  line: PropTypes.string,
  img: PropTypes.string,
  line1: PropTypes.string,
  line2: PropTypes.string,
  line3: PropTypes.string,
  line4: PropTypes.string,
  line5: PropTypes.string,
  to: PropTypes.string,
  to1: PropTypes.string,
  to2: PropTypes.string,
  to3: PropTypes.string,
  to4: PropTypes.string,
  to5: PropTypes.string,
};
