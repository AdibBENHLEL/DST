import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home_IMG from "../assets/home.jpg";
import video from "../assets/video.mp4";
import "../components/Home.css";
function Home(){
  return(
    <>
    <Navbar/>
    <Hero
      heroclass="Hero"
      HeroIMGdata={Home_IMG}
      Title="Djerba Student Trip"
      TagName="Reserve your place now"
      url="/Join-Trip"
      btn="ReserveBtnClass"
      btnName="Reserve"
      scrolldown_div="Homediv"
    />
    <div id="Homediv">
      <div class="videoframe">
      <video controls>
      <source src={video} type="video/mp4"></source>
      Your browser does not support the video tag.
      </video>   
      </div>
      <div class="sketchfab-embed-wrapper"> <iframe id="bus" title="indonesian bus Ecoline" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share  src="https://sketchfab.com/models/fda12812ab1147b79c1a6c7aa3adc5f8/embed?ui_theme=dark"> </iframe> </div>
    </div>
    <Footer/>
    </>
  )
}
export default Home;