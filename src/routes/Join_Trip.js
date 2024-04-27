import React, { useRef } from 'react';
import Navbar from "../components/Navbar";
import Hero from "../components/Hero"; // Import the Hero component
import Join_Trip_IMG from "../assets/mohamed-fsili-M0vrg6obovY-unsplash.jpg";
import "../components/Formulaire.css";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Join_Trip() {
  const form = useRef(null); // Initialize the form reference

  return (
    <>
      <Navbar />
      <Hero
        heroclass="Hero"
        HeroIMGdata={Join_Trip_IMG}
        Title="Join-Trip"
        TagName="To join a trip, complete the information below."
        scrolldown_div="form_frame"
      />
      <form id="form_frame"ref={form}>
        <label htmlFor="name">Full Name</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="cin">CIN</label>
        <input type="text" id="cin" name="cin" required />


        <label htmlFor="tel">Phone Number</label>
        <input type="tel" id="tel" name="tel" required />

        <label htmlFor="departure">Departure Details</label>
        <Link  to="/Description"><i className="fa-solid fa-circle-info"></i>For more details about the departure </Link>        
        <select id="departure" name="departure" required>
          <option value="">Select the departure place</option>
          <option value="Rond-point iset Sousse">Rond-point iset Sousse </option>
          <option value="foyer 3 Août">foyer 3 Août</option>
          <option value="FSM">FSM</option>
          <option value="Mahdia">Mahdia</option>

        </select>



        <label htmlFor="Arrival">Arriaval Details</label>
        <select id="Arrival" name="Arrival" required>
          <option value="">Select the Arriaval place</option>
          <option value="Rond-point iset Sousse">El may </option>
          <option value="foyer 3 Août">Houmet Souk</option>
          <option value="Mahdia">Midoun</option>
        </select>

        <label class="RQ_please_label">You will get a QR code after you clique bellow</label>
        <input type="submit" value="Join Trip" />
      </form>
      <Footer/>
    </>
  );
}

export default Join_Trip;
