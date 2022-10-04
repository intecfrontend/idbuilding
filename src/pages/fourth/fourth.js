import React from 'react'
import "../../first.css"
import OrangeBtn from "./Orangebtn"
import Erpelogo from "../../assets/ErpeMere.svg"
import Man from "../../assets/Naamicon.svg"
import Gsm from "../../assets/gsmicon.svg"
import Tel from "../../assets/telicon.svg"
import Mail from "../../assets/mailicon.svg"
import robotArmsOpen from "../../assets/robotArmsopen.svg"
import { Link } from 'react-scroll'

function fourth() {


  return (
    <div className='Trd__maincontainer' id="number2">
      <div className="erpeContainer">
        <img className="Trd__erpelogo" src={Erpelogo} alt="infoicon" />

      </div>


      <div className="Trd__main">
        <div className="navbar">
          <span><Link to="number1" spy={true} smooth={true} offset={-0} duration={500} >01</Link></span>
          <span><Link id="active" to="number2" spy={true} smooth={true} offset={-0} duration={500} >02</Link></span>
          <span><Link to="number3" spy={true} smooth={true} offset={-0} duration={500} >03</Link></span>
          <span><Link to="number4" spy={true} smooth={true} offset={-0} duration={500} >04</Link></span>
          <span><Link to="number5" spy={true} smooth={true} offset={-0} duration={500} >05</Link></span>
          <span><Link to="number6" spy={true} smooth={true} offset={-0} duration={500} >06</Link></span>
          <span><Link to="number7" spy={true} smooth={true} offset={-0} duration={500} >07</Link></span>
          <span><Link to="number8" spy={true} smooth={true} offset={-0} duration={500} >08</Link></span>
          <span><Link to="number9" spy={true} smooth={true} offset={-0} duration={500} >09</Link></span>
          <span><Link to="numbe10" spy={true} smooth={true} offset={-0} duration={500} >10</Link></span>
          <span><Link to="numbe11" spy={true} smooth={true} offset={-0} duration={500} >11</Link></span>
          <span><Link to="numbe12" spy={true} smooth={true} offset={-0} duration={500} >12</Link></span>
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
          <Link to="number1" spy={true} smooth={true} offset={-0} duration={500} ><OrangeBtn text={"Vorige"} /></Link>
          <Link to="number3" spy={true} smooth={true} offset={-0} duration={500} ><OrangeBtn text={"Volgende"} /></Link>
          </div>
        </div>
      </div>


    </div>
  )
}
export default fourth