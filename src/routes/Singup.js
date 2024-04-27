import Navbar from "../components/Navbar"
import "../components/Formulaire.css";

function Singup(){
  return(
    <>
      <Navbar/>
      <form id="sign_up_form">
        <div>
          <h1>Sign Up</h1>
          <p class="RQ_please_label">Please fill in this form to create an account.</p>
          <label for="email"><b>Email</b></label>
          <input type="text" placeholder="Enter Email" name="email" required/>
          <label for="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required/>
          <label for="psw-repeat"><b>Repeat Password</b></label>
          <input type="password" placeholder="Repeat Password" name="psw-repeat" required/>
        <p class="RQ_please_label">By creating an account you agree to our <a href="#" >Terms & Privacy</a>.</p>

    <div class="signup_button_div">
      <button type="button" class="cancelbtn">Cancel</button>
      <button type="submit" class="signup_Login_btn">Sign Up</button>
    </div>
  </div>
</form>
      </>
  );
}
export default Singup;