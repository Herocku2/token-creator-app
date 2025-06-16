import React from "react";
import { BanerMovil } from "../../components/BanerMovil";
import { Heder } from "../../components/Heder";
import "./style.css";

export const News = () => {
  return (
    <div className="news">
      <Heder
        className="heder-2"
        logoColor="url(#pattern0_2089_1279)"
        menuImg="/img/line-1.svg"
        menuLine="/img/line-2.svg"
        menuLine1="/img/line-2.svg"
        menuLine2="/img/line-2.svg"
        menuLine3="/img/line-2.svg"
        menuLine4="/img/line-2.svg"
        menuLine5="/img/line-2.svg"
        to="/vote"
        to1="/publish1"
        to2="/homeu47all"
        to3="/swap"
        to4="/create1"
        to5="/news"
      />

      <div className="titulo-pagina" />

      <BanerMovil
        className="baner-movil-instance"
        frame="/img/frame-31-1.svg"
        groupClassName="baner-movil-2"
        groupClassNameOverride="baner-movil-2"
        imageWrapperClassName="baner-movil-2"
        imageWrapperClassNameOverride="baner-movil-2"
      />
      <div className="frame-58">
        <div className="frame-59">
          <div className="text-wrapper-42">Marketing</div>

          <img
            className="rectangle-7"
            alt="Rectangle"
            src="/img/rectangle-17.png"
          />

          <img
            className="rectangle-7"
            alt="Rectangle"
            src="/img/rectangle-15.png"
          />

          <img
            className="rectangle-7"
            alt="Rectangle"
            src="/img/rectangle-16-2.png"
          />
        </div>

        <img className="line-4" alt="Line" src="/img/line-13.svg" />

        <div className="frame-59">
          <div className="text-wrapper-42">News</div>

          <img
            className="rectangle-7"
            alt="Rectangle"
            src="/img/rectangle-17-1.png"
          />

          <img
            className="rectangle-7"
            alt="Rectangle"
            src="/img/rectangle-15-1.png"
          />

          <img
            className="rectangle-7"
            alt="Rectangle"
            src="/img/rectangle-16.png"
          />
        </div>

        <img className="line-4" alt="Line" src="/img/line-13.svg" />

        <div className="frame-59">
          <div className="text-wrapper-42">Proximos lanzamientos</div>

          <img
            className="rectangle-7"
            alt="Rectangle"
            src="/img/rectangle-16-2.png"
          />

          <img
            className="rectangle-7"
            alt="Rectangle"
            src="/img/rectangle-15-2.png"
          />

          <img
            className="rectangle-7"
            alt="Rectangle"
            src="/img/rectangle-16-1.png"
          />
        </div>
      </div>
    </div>
  );
};
