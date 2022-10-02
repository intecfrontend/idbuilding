import React from 'react'
import "../../first.css"
import OrangeBtn from "./Orangebtn"
import Erpelogo from "../../assets/ErpeMere.svg"
import Man from "../../assets/Naamicon.svg"
import Gsm from "../../assets/gsmicon.svg"
import Tel from "../../assets/telicon.svg"
import Mail from "../../assets/mailicon.svg"
import robotArmsOpen from "../../assets/robotArmsopen.svg"

function third() {


  return (
    <div className='Trd__maincontainer'>
      <div className="erpeContainer">
        <img className="Trd__erpelogo" src={Erpelogo} alt="infoicon" />

      </div>


      <div className="Trd__main">
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
        <div className="Frt__topText">
          <div className="Frt__titlewrapper">
            <span className="Frt__titleNr">02</span>
            <span className="Frt__title">
              Laten we starten met je persoonlijke gegevens
            </span></div>
          <div className="Frt__body">Onderstaande gegevens worden <span className="orangetext"> NOOIT </span> online gepubliceerd maar ook niet gedeeld met jouw lokaal bestuur.
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
          <div id="Frt__Voornaam" className="Frt__inputWrapper">
            <img src={Man} alt="icon" className="Frth__icon" />
            <input type="text" placeholder="Voornaam" className="Frt__inputter" />
          </div>
          <div id="Frt__Naam" className="Frt__inputWrapper">
            <img src={Man} alt="icon" className="Frth__icon" />
            <input type="text" placeholder="Naam" className="Frt__inputter" />
          </div>
          <div id="Frt__Gsm" className="Frt__inputWrapper">
            <img src={Gsm} alt="icon" className="Frth__icon" />
            <input type="phone" placeholder="Mobiele telefoon" className="Frt__inputter" />
          </div>
          <div id="Frt__Tel" className="Frt__inputWrapper">
            <img src={Tel} alt="icon" className="Frth__icon" />
            <input type="phone" placeholder=" Telefoon" className="Frt__inputter" />
          </div>
          <div id="Frt__Mail" className="Frt__inputWrapper">
            <img src={Mail} alt="icon" className="Frth__icon" />
            <input type="email" placeholder="Email" className="Frt__inputter" />
          </div>

          <img src={robotArmsOpen} alt="robot" id="Frt__robot" />

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