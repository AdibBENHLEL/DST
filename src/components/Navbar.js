import { Component } from "react";
import "./NavbarStyle.css" ;
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
class Navbar extends Component
{ state = {clicked:false};
  handleclick=()=>{
    this.setState({clicked: !this.state.clicked})
  }

  render(){
    return( 
      <nav className="NavebarItems">
        <h1 className="navebar-logo">DST</h1>

        <div className="menu-icons" onClick={this.handleclick}>
          <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        
        <ul className={this.state.clicked ? "nav-Menu active" : "nav-Menu"}>
          {MenuItems.map((item,index)=>{
            return(<li>
              <Link className={item.classname} to={item.url}><i className={item.icon}></i>{item.title}</Link>
            </li>)



          })}
        </ul>
      </nav>
      )
  }
}
export default Navbar;