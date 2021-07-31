import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="title">Stackfindover</div>
        <form className="form">
          <div className="form-title">Sign in to your account</div>
          <div className="email">
          <label className="email-label">
              Email
          </label>
          <input type="text"  className="input"/>
          </div>
          <div className="password">
            <div className="password-forgot">
            <label className="password-label">
              Password
          </label>
          <a target="_blank" href='https://www.google.com/' className="forgot_password">Forgot your password?</a>
            </div>
          <input type="password" className="input" />
          </div>
          <div className="checkbox-title">
          <input type="checkbox" className="checkbox-input"/>
          <div className="checkbox-label">Stay signed in for a week</div>
          </div>
          <div className="submit-button">
          <input type="submit" value="Continue" className="button"/>
          </div>
          <a target="_blank" href='https://www.google.com.ua/maps' className="google-auth">Use single-on (Google) instead</a>
        </form>
        <div className="signup">
          <div>
          Don't have an account?
          </div> 
          <a target="_blank" href='https://www.facebook.com/' className="signup-link">Sign up</a>
        </div>
      </header>
    </div>
  );
}

export default App;
