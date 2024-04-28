import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Bus_IMG from "../assets/bus.jpg";
import "../components/Description.css";
import Footer from "../components/Footer";
function Description(){
  return(
    <>
    <Navbar/>
    <Hero
      heroclass="Hero"
      HeroIMGdata={Bus_IMG}
      Title="About our Trip"
      TagName="Details points below"
      url="/Join-Trip"
      btn="ReserveBtnClass"
      btnName="Reserve"
      scrolldown_div="tab1"

    />
    <table id="tab1">
      <tr>
        <th>items</th>
        <th>details</th>
      </tr>
      <tr>
        <td>prise</td>
        <td>35dt</td>
      </tr>
      <tr>
        <td>trip duration </td>
        <td>8h </td>
      </tr>
      <tr>
        <td>total distance</td>
        <td>503.5 KM</td>
      </tr>
      <tr>
        <td>Agency-Travel Name</td>
        <td>RAYA</td>
      </tr>
      <tr>
        <td>having breake</td>
        <td>cafe marina SKHIRA</td>
      </tr>
      <tr>
        <td>Time of the breake</td>
        <td>15 MIN</td>
      </tr>
      <tr>
        <td>the path</td>
        <td>autoroot A1</td>
      </tr>
      <tr>
        <td>the choise of the enter to djerba</td>
        <td> Djerba-Zarzis Roman Causeway Bridge</td>
      </tr>
    </table>
    <br></br>
    <div id="div_tab2">
    <table id="tab2">
    <tr>
        <th>Bus_Code</th>
        <th>Departior plase</th>
        <th>day of departior</th>
        <th>Time of departior</th>
        <th>Arriaval Time</th>
        
    </tr>
    <tr>
        <td>A</td>
        <td>Rond-point iset Sousse</td>
        <td>Friday 24 May</td>
        <td>13:00</td>
        <td>21:00</td>
        
    </tr>
    <tr>
        <td>B</td>
        <td>
          <tr>foyer 3 Août</tr>
          <tr>FSM</tr>
         </td>
        <td>Friday 24 May</td>
        <td>
          <tr>13:00</tr>
          <tr>13:15</tr>
        </td>
        <td>21:00</td>
        
    </tr>
    <tr>
        <td>C</td>
        <td>Mehdia</td>
        <td>Friday 24 May</td>
        <td>13:00</td>
        <td>21:00</td>
        
    </tr>
    </table>
    </div>
    <br></br>
    <iframe className="Map" src="https://www.google.com/maps/d/embed?mid=1rSIFdhi3fhZuomG9hMfOu-JrI6qQ7NQ&ehbc=2E312F" width="640" height="480"></iframe>
    <Footer/>
    </>
  )
}
export default Description;