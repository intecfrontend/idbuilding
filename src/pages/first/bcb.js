import React from 'react'
import "../../first.css"
import cornericon from "../../assets/cornericon.svg"
import info from "../../assets/info_icon.svg"


function bcb() {
  return (
    <div className="Bcb__container">
      <div className="Bcb__wrapper"> E-mail adres
        <span className="darker Bcb__leftmargin"> (wettelijk verplicht)</span>
        <div className="Bcb__cornerwrapper">
          <img className="BC__locicon" id="Bcb__cornerID" src={cornericon} alt="cornericon" />
        </div>
        ******@*************** .be
      </div>
      <span className="Bcb__infocontainer">
        <img className="Bcb__infoicon" id="Bcb__cornerID" src={info} alt="infoicon" />
      </span>

      Ondanks deze verplichting zijn wij erin geslaagd om met FOD Economie tot een vergelijk
      te komen en tonen wij, om SPAM te voorkomen,
      <span className="orangetext"> NOOIT een e-mail adres </span>!
      Er werd een contactformulier ontwikkeld dat 100% tegemoet komt aan de wettelijke normvereisten. <br />
      <div className="Bcb__lesstop"> Je hoofdactiviteit
        <span className="orangetext"> (in KBO):</span>
      </div>
      <div className="Bcb__greenbtn">Inmobiliën</div>
    </div>
  )
}

export default bcb