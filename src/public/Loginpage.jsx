import "../css/Loginpage.css"

const LoginPage = () => {
  return (
    <div className="login-page">
      {/* Background image directly in JSX */}
      <img src="/room-background.jpg" alt="Interior room" className="background-image" />

      {/* Login form overlay */}
      <div className="login-form">
        <h1 className="welcome-title">Welcome</h1>
        <p className="welcome-subtitle">we design for your space.</p>

        <div className="form-inputs">
          <input type="text" placeholder="Username or Email" />
          <input type="password" placeholder="Password" />
          <button className="login-button">Log In</button>
        </div>

        <div className="form-links">
          <a href="#" className="forgot-link">
            Forgot Password?
          </a>
          <div className="signup-text">
            Don't have an account?{" "}
            <a href="#" className="signup-link">
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
