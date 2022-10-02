import React from 'react'
import "../../first.css"
import OrangeBtn from "./Orangebtn"
import Erpelogo from "../../assets/ErpeMere.svg"

function third() {


  return (
    <div className='Trd__maincontainer'>
      <div className="erpeContainer">
        <img className="Trd__erpelogo" src={Erpelogo} alt="infoicon" />

      </div>


      <div id="Trd__main">
        <div className="navbar">
          <span>01</span>
          <span id="active">02</span>
          <span>03</span>
          <span>04</span>
          <span>05</span>
          <span>06</span>
          <span>07</span>
          <span>08</span>
          <span>09</span>
          <span>10</span>
          <span>11</span>
          <span>12</span>
        </div>
        <div className="Trd__topText">
          <div className="Trd__title">
            <span className="Trd__titleNr">02</span> Laten we starten met je persoonlijke gegevens
          </div>
          <div className="Trd__body">Onderstaande gegevens worden <span className="orangetext"> NOOIT </span> online gepubliceerd maar ook niet gedeeld met jouw lokaal bestuur.
            Deze zijn uitsluitend voor intern gebruik om je te contacteren wanneer er toch iets niet correct is ingevuld.
            <br />
          </div>
        </div>
        <div className="Trd__linewrapper"></div>



        <div className="Trd__bottomTextContainer">
          <div className="Trd__bottomTextWrapper ">

          </div>
        </div>
        <div className="Frt__formContainer">
          <input placeholder="Voornaam" className="Frt__inputer" id="Frt__Voornaam" />
          <input placeholder="Naam" className="Frt__inputer" id="Frt__Achternaam" />
          <input placeholder="Mobiele Telefoon" className="Frt__inputer" id="Frt__Gsm" />
          <input placeholder="Telefoon" className="Frt__inputer" id="Frt__Tel" />
          <input placeholder="Email" className="Frt__inputer" id="Frt__Mail" />


        </div>
        <div className="Frt__orangebtnWrapper">
          <div className="Frt__orangebtn">
            <OrangeBtn text={"Vorige"} />
            <OrangeBtn text={"Volgende"} />
          </div>
        </div>
      </div>


    </div>
  )
}
export default third