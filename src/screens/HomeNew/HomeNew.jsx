import React from "react";
import { Heder } from "../../components/Heder";
import { MenuTabla } from "../../components/MenuTabla";
import { Paginacion } from "../../components/Paginacion";
import { TarjetaProyectos } from "../../components/TarjetaProyectos";
import { TarjetaRanking } from "../../components/TarjetaRanking";
import "./style.css";

export const HomeNew = () => {
  return (
    <div className="home-new screen-wrapper">
      <Heder
        className="heder-instance"
        to="/vote"
        to1="/publish1"
        to2="/homeu47all"
        to3="/swap"
        to4="/create1"
        to5="/news"
      />

      <div className="frame-70">
        <img
          className="fair-launches-the-3"
          alt="Fair launches the"
          src="/img/fair-launches-the-dev-gets-80-and-marketing-is-on-us.png"
        />

        <img
          className="no-need-for-a-3"
          alt="No need for a"
          src="/img/no-need-for-a-community-everyone-s-here-waiting-to-blow-up-you.png"
        />

        <img
          className="element-launches-a-month-3"
          alt="Element launches a month"
          src="/img/2-launches-a-month-only-the-best-takes-the-crown.png"
        />
      </div>

      <img
        className="img-5"
        alt="Frame logo isotipo"
        src="/img/frame-logo-isotipo.png"
      />

      <img className="baner-3" alt="Baner" src="/img/baner1-2.png" />

      <div className="titulo-pagina-5" />

      <div className="frame-71">
        <TarjetaRanking
          className="tarjeta-ranking-7"
          text="4"
          projectName="Nova Token"
          projectStatus="Próximamente"
          projectTime="en 3 días"
          marketCapValue="$5K"
          buttonText="+ 0.0005 SOL"
        />
        <TarjetaRanking
          className="tarjeta-ranking-8"
          text="5"
          projectName="Crypto Z"
          projectStatus="Nuevo"
          projectTime="recién listado"
          marketCapValue="$8.2K"
          buttonText="+ 0.0008 SOL"
        />
        <TarjetaRanking
          className="tarjeta-ranking-9"
          text="6"
          projectName="Galaxy Coin"
          projectStatus="En Preventa"
          projectTime="ahora"
          marketCapValue="$15K"
          buttonText="+ 0.0015 SOL"
        />
      </div>

      <MenuTabla
        className="menu-tabla-4"
        divClassName1="menu-tabla-3"
        divClassNameOverride="menu-tabla-5"
        img="/img/line-2-3.svg"
        line="/img/line-3-3.svg"
        line1="/img/line-1-3.svg"
        text="New"
        to="/homeu47next"
        to2="/homeu47all"
      />
      <div className="frame-72">
        <div className="frame-73">
          <TarjetaProyectos
            openOutline="/img/open-outline-13.svg"
            starOutline="/img/star-outline-13.svg"
            to="/homeu47detalletokenu47compra"
          />
          <TarjetaProyectos
            openOutline="/img/open-outline-13.svg"
            starOutline="/img/star-outline-14.svg"
          />
        </div>

        <div className="frame-73">
          <TarjetaProyectos
            openOutline="/img/open-outline-13.svg"
            starOutline="/img/star-outline-15.svg"
          />
          <TarjetaProyectos
            openOutline="/img/open-outline-13.svg"
            starOutline="/img/star-outline-16.svg"
          />
        </div>

        <div className="frame-73">
          <TarjetaProyectos
            openOutline="/img/open-outline-13.svg"
            starOutline="/img/star-outline-17.svg"
          />
          <TarjetaProyectos
            openOutline="/img/open-outline-13.svg"
            starOutline="/img/star-outline-18.svg"
          />
        </div>

        <Paginacion
          className="paginacion-3"
          iconChevronRight="/img/icon-chevron-right-2.png"
          img="/img/icon-chevron-right-3.png"
        />
      </div>
    </div>
  );
};
