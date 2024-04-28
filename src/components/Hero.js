import "./Herostyle.css"
import { Link } from "react-router-dom";
function Hero(props){
  const handleClick = () => {
    const target = document.getElementById(props.scrolldown_div);
    target.scrollIntoView({ behavior: "smooth" });
  };
  return(
    <>
    <div className={props.heroclass}>
      <img alt="HeroIMG" src={props.HeroIMGdata}></img>
    </div>
    <div className="HeroText">
      <h1>
       {props.Title}
      </h1>
      <p>
        {props.TagName}
      </p>
      <Link  to={props.url} className={props.btn}> {props.btnName} </Link>
      <br></br>
      <a onClick={handleClick} className="fleche-link">
      <i class="fa-solid fa-angles-down"></i>     
      </a>
    </div>
    </>
  )
}
export default Hero;