import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Formulaire from "../components/Formulaire";
import Contact_IMG from "../assets/bac.jpg";
import Footer from "../components/Footer";

function Contact(){
  return(
    <>
    <Navbar/>
    <Hero
      heroclass="Hero"
      HeroIMGdata={Contact_IMG}
      Title="Contact"
      TagName="For more questions, please send a message below."
      url="/Join-Trip"
      btn="ReserveBtnClass"
      btnName="Reserve"
      scrolldown_div="form_contact_frame"
    />
    <Formulaire/>
    <Footer/>
    </>
  )
}
export default Contact;