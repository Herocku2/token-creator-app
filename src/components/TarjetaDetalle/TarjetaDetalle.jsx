/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useLanguage } from "../Menu/Menu";
import "./style.css";

export const TarjetaDetalle = ({
  className,
  earthOutline = "/img/earth-outline.svg",
  xLogoSvgClassName,
  symbolSvgClassName,
}) => {
  const { language, translations } = useLanguage();
  const t = translations[language];
  
  const detailTranslations = {
    en: {
      makeSureWebsite: 'Make sure the website in',
      status: 'Status',
      ended: 'Ended',
      saleType: 'Sale type',
      whitelistOnly: 'Whitelist Only',
      unsoldTokens: 'Unsold tokens',
      claimTime: 'Claim time:',
      totalContributors: 'Total contributors'
    },
    es: {
      makeSureWebsite: 'Asegúrate de que el sitio web en',
      status: 'Estado',
      ended: 'Finalizado',
      saleType: 'Tipo de venta',
      whitelistOnly: 'Solo Lista Blanca',
      unsoldTokens: 'Tokens no vendidos',
      claimTime: 'Tiempo de reclamo:',
      totalContributors: 'Total de contribuyentes'
    }
  };
  
  const dt = detailTranslations[language];
  
  return (
    <div className={`tarjeta-detalle ${className}`}>
      <div className="make-sure-the-wrapper">
        <p className="make-sure-the">
          <span className="text-wrapper-25">{dt.makeSureWebsite}</span>

          <span className="text-wrapper-26"> meteora</span>
        </p>
      </div>

      <div className="frame-44">
        <div className="text-wrapper-27">Dogecoin</div>

        <div className="frame-45">
          <img
            className="earth-outline"
            alt="Earth outline"
            src={earthOutline}
          />

          <div className={`x-logo-svg ${xLogoSvgClassName}`} />

          <div className={`symbol-svg ${symbolSvgClassName}`} />
        </div>
      </div>

      <div className="frame-46">
        <div className="frame-47">
          <div className="text-wrapper-28">{dt.status}</div>

          <div className="text-wrapper-29">{dt.ended}</div>
        </div>

        <div className="frame-47">
          <div className="text-wrapper-28">{dt.saleType}</div>

          <div className="text-wrapper-30">{dt.whitelistOnly}</div>
        </div>

        <div className="frame-47">
          <div className="text-wrapper-28">{dt.unsoldTokens}</div>

          <div className="text-wrapper-31">200 Doge</div>
        </div>

        <div className="frame-47">
          <div className="text-wrapper-32">{dt.claimTime}</div>

          <div className="text-wrapper-31">2024.10.09 15:54 (UTC)</div>
        </div>

        <div className="frame-47">
          <div className="text-wrapper-28">{dt.totalContributors}</div>

          <div className="text-wrapper-31">256</div>
        </div>
      </div>
    </div>
  );
};

TarjetaDetalle.propTypes = {
  earthOutline: PropTypes.string,
};
