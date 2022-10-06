import React from 'react'
import "../../first.css"
import OrangeBtn from "./Orangebtn"
import Erpelogo from "../../assets/ErpeMere.svg"
import Valies from "../../assets/Valiesicon.svg"
import Gsm from "../../assets/gsmicon.svg"
import Tel from "../../assets/telicon.svg"
import Mail from "../../assets/mailicon.svg"
import Fax from "../../assets/faxicon.svg"
import info from "../../assets/info_iconK.svg"
import { Link } from 'react-scroll'

function fifth() {


  return (
    <div className='Trd__maincontainer' id="number3">
      <div className="erpeContainer">
        <img className="Trd__erpelogo" src={Erpelogo} alt="Erpelogo" />

      </div>


      <div className="Trd__main">
        <div className="navbar">
          <span><Link to="number1" spy={true} smooth={true} offset={-0} duration={500} >01</Link></span>
          <span><Link to="number2" spy={true} smooth={true} offset={-0} duration={500} >02</Link></span>
          <span><Link id="active" to="number3" spy={true} smooth={true} offset={-0} duration={500} >03</Link></span>
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
            <span className="Frt__titleNr">03</span>
            <span className="Frt__title">
              Hoe kunnen bezoekers je bereiken?
            </span></div>
          <div className="Frt__body">Je begrijpt dat het heel belangrijk is om correcte gegevens van je onderneming te publiceren. <br /> Op deze manier kunnen bezoekers je ook bereiken.
          </div>
          <div className="Fft__body">
            <img className="Trd__infoicon" id="Trd__cornerID" src={info} alt="info" />
            De volgende informatie zal <strong> ZICHTBAAR ZIJN VOOR IEDEREEN!    </strong>       </div>
        </div>
        <div className="Trd__linewrapper"></div>



        <div className="Trd__bottomTextContainer">
          <div className="Trd__bottomTextWrapper ">
          </div>
        </div>
        <div className="Fft__formContainer">
          <div id="Fft__MaatNaam">
            <div className="Frt__inputWrapper Fft__inputWrapper">
              <img src={Valies} alt="icon" className="Fft__icon" />
              <input type="text" placeholder="Maatschappelijke Naam (kan niet gewijzigd worden)" className="Frt__inputter" />
            </div>
            <div className="Frt__inputWrapper Fft__inputWrapper">
              <img src={Valies} alt="icon" className="Fft__icon" />
              <input type="text" placeholder="Commerciële naam" className="Frt__inputter" />
            </div>
            <div className="Frt__inputWrapper Fft__inputWrapper">
              <img src={Mail} alt="icon" className="Fft__icon" />
              <input type="email" placeholder="Email (wordt dus nooit zichtbaar)" className="Frt__inputter" />
            </div>
          </div>
          <div id="Fft__TelGsmFax">
            <div id="Fft__margbottsmaltext"className="Fft__body">
              <img className="Fft__infoicon" src={info} alt="info" />
              <span className="Fft__smalltext">
                De publicatie van 1 telefoonnummer is een <span className="darker">   vereiste </span> van FOD Economie
              </span>
            </div>
            <div className="Frt__inputWrapper Fft__inputWrapper">
              <img src={Gsm} alt="icon" className="Fft__icon1" />
              <input type="text" placeholder="Mobiele telefoon" className="Frt__inputter" />
            </div>
            <div className="Frt__inputWrapper Fft__inputWrapper Fft__inputWrapper">
              <img src={Tel} alt="icon" className="Fft__icon1" />
              <input type="text" placeholder="Telefoon" className="Frt__inputter" />
            </div>
            <div id="Fft__Faxicon" className="Frt__inputWrapper Fft__inputWrapper">
              <img src={Fax} alt="icon" className="Fft__icon1" />
              <input type="text" placeholder="Fax" className="Frt__inputter" />
            </div>
          </div>
          <div id="Fft__textHandel">
            <div className="watbiedje  Fft__body">
              Handel je met bedrijven of consumenten?
            </div>
            <div id="Fft__selectHandel">
              <select className="Fft__kiezen">
                <option >Gelieve een optie te kiezen</option>
                <option value="optie1">optie1</option>
                <option value="optie2">optie2</option>
                <option value="optie3">optie3</option>
                <option value="optie4">optie4</option>
              </select>
          </div>
          <div className="Fft__WatBiedJe" >
            <div  className="watbiedje Fft__body">
              Wat bied je aan?
            </div>

            <select id="Fft__kiezen2" className="Fft__kiezen">
              <option >Gelieve een optie te kiezen</option>
              <option value="optie1">optie1</option>
              <option value="optie2">optie2</option>
              <option value="optie3">optie3</option>
              <option value="optie4">optie4</option>
            </select>
            </div>
          </div>
          <div Id="Fft__btnplaatser">
            <div className="Frt__orangebtn">
              <Link to="number2" spy={true} smooth={true} offset={-0} duration={500} ><OrangeBtn text={"Vorige"} /></Link>
              <Link to="number4" spy={true} smooth={true} offset={-0} duration={500} ><OrangeBtn text={"Volgende"} /></Link>
            </div>
          </div>

        </div>

      </div>

      Jouw onderneming wordt nu gevonden op alle activiteiten die je aanvult.

    </div>
  )
}
export default fifth