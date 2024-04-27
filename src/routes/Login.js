import Navbar from "../components/Navbar"
function Login(){
  return(
    <>
      <Navbar/>
      <form id="Login_form">
        <div>
          <h1>Login</h1>
          <p class="RQ_please_label">Please fill in this form to login in your account.</p>
          <label for="email"><b>Email</b></label>
          <input type="text" placeholder="Enter Email" name="email" required/>
          <label for="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required/>
    <div class="login_button_div">
      <button type="button" class="cancelbtn">Cancel</button>
      <button type="submit" class="signup_Login_btn">Login</button>
    </div>
  </div>
</form>
      </>
  );
}
export default Login;