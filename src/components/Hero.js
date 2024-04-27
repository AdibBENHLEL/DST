import "./Herostyle.css"
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
      <a href={props.url} className={props.btn}>
         {props.btnName}
      </a>
      <br></br>
      <a onClick={handleClick} className="fleche-link">
      <i class="fa-solid fa-angles-down"></i>     
      </a>
    </div>
    </>
  )
}
export default Hero;