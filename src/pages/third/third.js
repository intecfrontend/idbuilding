import React from 'react'
import "../../first.css"
import ShufflebtnYES from "./ShufflebtnYES.js"
import ShufflebtnNO from "./ShufflebtnNO.js"
import info from "../../assets/info_iconK.svg"
import OrangeBtn from "./Orangebtn"
import Erpelogo from "../../assets/ErpeMere.svg"
import { Link } from 'react-scroll'

function third() {


  return (
    <div className='Trd__maincontainer' id="number1">
      <div className="erpeContainer">
        <img className="Trd__erpelogo" src={Erpelogo} alt="Erpelogo" />
      </div>

      <div className="Trd__main">
        <div className="navbar">
          <span><Link id="active" to="number1" spy={true} smooth={true} offset={-0} duration={500} >01</Link></span>
          <span><Link to="number2" spy={true} smooth={true} offset={-0} duration={500} >02</Link></span>
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
        <div className="Trd__topText">
          <div className="Trd__title">
            <span className="Trd__titleNr">01</span> Welkom bij 100% Lokaal
          </div>
          <div className="Trd__body">Dank je! . . . om mee te werken aan het beheren en optimaliseren van de gegevens van jouw onderneming.
            Wij helpen je zoveel mogelijk! <br /> Deze bijkomende informatie zal nuttig voor elke bezoeker die jouw onderneming heeft gevonden.
          </div>

        </div>
        <div className="Trd__linewrapper"></div>

        <div className="Trd__bottomTextContainer">

          <div className="Trd__bottomTextWrapper ">
            <div className="Trd__subtitle">
              MIJN ONDERNEMING IS ACTIEF?
            </div>


            <div className="Trd__btnContainer">
              <div className="Trd__btnWrapper">
                <ShufflebtnYES />
                <img className="Trd__infoicon" id="Trd__cornerID" src={info} alt="infoicon" />
                <span className="Trd__verder">
                  Nu kunnen we verder !
                </span>
              </div>
              <div className="Trd__btnWrapper">
                <ShufflebtnNO />
                <img className="Trd__infoicon  Trd__verderMedia" src={info} alt="infoicon" />
                <span className="Trd__verder">
                  Je onderneming wordt gedesactiveerd :)
                </span>
              </div>
            </div>

            <div>
              <div className="Trd__checkwrapper">
                <input type="checkbox" className="Trd__check" name="akkoord" value="GDPR" />
                <span className="Trd__aboveSmallText"> Ik aanvaard de verwerking van mijn gegevens volgens de GDPR</span>
                <div className="Trd__smallText">
                  Laatst aanvaard op: Wed Aug 17 2022 09:55
                </div>
              </div>

              <div className="Trd__checkwrapper">
                <input type="checkbox" className="Trd__check" name="akkoord" value="voorwaarden" />
                <span className="Trd__aboveSmallText"> Ik aanvaard de <span className="darker">algemene voorwaarden</span> </span>
                <div className="Trd__smallText">
                  Laatst aanvaard op: Wed Aug 17 2022 10:04
                </div>
              </div>
              <div className="Trd__checkwrapper">
                <input type="checkbox" className="Trd__check" name="akkoord" value="delengemeente" />
                <span className="Trd__aboveNoSmallText"> Ik aanvaard dat mijn gegevens - in combinatie met 100procentlokaal - gedeeld worden met mijn stad of gemeente</span>

              </div>

            </div>
            <div className="Trd__LastAboveSmallText"> Vind je de ondersteuning van dit initiatief door jouw stad of gemeente een goed idee?</div>
            <select id="Trd__kiezen">
              <option >Gelieve een optie te kiezen</option>
              <option value="optie1">optie1</option>
              <option value="optie2">optie2</option>
              <option value="optie3">optie3</option>
              <option value="optie4">optie4</option>
            </select>
          </div>

          <div className="Trd__sectionmid"></div>

          <div className="Trd__bottomTextWrapper ">
            <div className="Trd__subtitle">
              WEDSTRIJD! <span className="Trd__SideSubtitle">Jij doet toch ook mee ?</span>
            </div>


            <div className="Trd__btnContainer">
              <div className="Trd__btnWrapper">
                <ShufflebtnYES />
                <img className="Trd__infoicon" id="Trd__cornerID" src={info} alt="infoicon" />
                <span className="Trd__verder">
                  Fantastisch !
                </span>
              </div>
              <div className="Trd__btnWrapper">
                <ShufflebtnNO />
                <img className="Trd__infoicon" id="Trd__cornerID" src={info} alt="infoicon" />
                <span className="Trd__verder">
                  Je weet niet wat je mist :)
                </span>
              </div>
            </div>

            <div>
              <div className="Trd__aboveSmallText">
                Voor de <span className="orangetext">Business Pagina in 100%Lokaal </span>betaalt de ondernemer € 100/jaar.
                <br />
                Dit is het éénmalig voordeel wanneer je alle gegevens voor jouw onderneming aanvult!
                <br />
                <br />

                Bovendien doet iedere ondernemer die deelneemt ook automatisch mee voor de grote wedstrijd. Elke 100ste ondernemer wint een jaarabonnement voor een compleet dienstenpakket ter waarde van € 1600.
                <br />
                <br />

                <strong> OPGELET! </strong>Het aanleveren van het logo (.ai, .eps, .svg, .pdf-vector) maakt deel uit van het wedstrijdreglement voor deelname.
              </div>
            </div>
            <strong className="Trd__LastAboveSmallText darker"> Lees of haal hier het wedstrijdregelement op.</strong>
            <div className="Trd__orangebtn">
              <Link to="number2" spy={true} smooth={true} offset={-0} duration={500} ><OrangeBtn text={"Volgende"} /></Link>            </div>
          </div>
        </div>
      </div>


    </div>
  )
}
export default third