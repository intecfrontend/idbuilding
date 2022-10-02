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

function fifth() {


  return (
    <div className='Trd__maincontainer'>
      <div className="erpeContainer">
        <img className="Trd__erpelogo" src={Erpelogo} alt="Erpelogo" />

      </div>


      <div className="Trd__main">
        <div className="navbar">
          <span>01</span>
          <span >02</span>
          <span id="active">03</span>
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

          <div id="Fft__MaatNaam" className="Frt__inputWrapper">
            <img src={Valies} alt="icon" className="Frth__icon" />
            <input type="text" placeholder="Maatschappelijke Naam (kan niet gewijzigd worden)" className="Frt__inputter" />
          </div>
          <div id="Fft__commNaam" className="Frt__inputWrapper">
            <img src={Valies} alt="icon" className="Frth__icon" />
            <input type="text" placeholder="Commerciële naam" className="Frt__inputter" />
          </div>
          <div id="Fft__Mail" className="Frt__inputWrapper">
            <img src={Mail} alt="icon" className="Frth__icon" />
            <input type="email" placeholder="Email (wordt dus nooit zichtbaar)" className="Frt__inputter" />
          </div>

          <div className="Fft__body">
            <img className="Fft__infoicon" src={info} alt="info" />
            <span className="Fft__smalltext">
              De publicatie van 1 telefoonnummer is een <span className="darker">   vereiste </span> van FOD Economie
            </span>
          </div>
          <div id="Fft__Mobileicon" className="Frt__inputWrapper">
            <img src={Gsm} alt="icon" className="Frth__icon" />
            <input type="text" placeholder="Mobiele telefoon" className="Frt__inputter" />
          </div>
          <div id="Fft__Phoneicon" className="Frt__inputWrapper">
            <img src={Tel} alt="icon" className="Frth__icon" />
            <input type="text" placeholder="Telefoon" className="Frt__inputter" />
          </div>
          <div id="Fft__Faxicon" className="Frt__inputWrapper">
            <img src={Fax} alt="icon" className="Frth__icon" />
            <input type="text" placeholder="Fax" className="Frt__inputter" />
          </div>
          <div id="Fft__textHandelje">
            <div className="Fft__body">
              Handel je met bedrijven of consumenten?
            </div>
            <div id="Fft__selectHandelje">


              <select className="Fft__kiezen">
                <option >Gelieve een optie te kiezen</option>
                <option value="optie1">optie1</option>
                <option value="optie2">optie2</option>
                <option value="optie3">optie3</option>
                <option value="optie4">optie4</option>
              </select>
            </div>
          </div>
          <div className="Fft__body">
            Wat bied je aan?
          </div>

          <select className="Fft__kiezen">
            <option >Gelieve een optie te kiezen</option>
            <option value="optie1">optie1</option>
            <option value="optie2">optie2</option>
            <option value="optie3">optie3</option>
            <option value="optie4">optie4</option>
          </select>


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
export default fifth