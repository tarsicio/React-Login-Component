/**
 * Componente creado por
 * @Author Tarsicio Carrizales telecom.com.ve@gmail.com
 * Fecha 2024/05/27
 * Este Componente se crea a partir de la plantilla HTML de https://youtube.com/@AsmrProg
 * La misma fue modificada en su totalidad ya que se encontraba en formato HTML y se paso a React
 * Si deseas componentes personalizados ponte en contacto. 
 * Instalar:
 * "@fortawesome/free-brands-svg-icons": "^6.5.2",
 * "@fortawesome/react-fontawesome": "^0.2.2",
 * "react-bootstrap": "^2.10.2",  
 */
import { useState } from 'react';
import './css/login.css';
import Image from "react-bootstrap/Image";
import LogoHorus from './img/horus.jpg';
import SocialMedia from './SocialMedia';

const Login = () => {
  const [isActive, setIsActive] = useState(false);

  const handleRegisterClick = () => {
    setIsActive(true);
  };

  const handleLoginClick = () => {
    setIsActive(false);
  };

  return (
    <div className={`container ${isActive ? 'active' : ''}`} id="container">
      <div className="form-container sign-up">
        <form>
          <h4>Create Account</h4>
          <SocialMedia />
          <span>or use your email for registeration</span>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in">
        <form>
          <h4>Sign In</h4>
          <SocialMedia />
          <span>or use your email password</span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Forget Your Password?</a>
          <button>Sign In</button>
        </form>
      </div>
      <div className="toggle-container active">
        <div className="toggle">
          <div className={`toggle-panel toggle-left ${isActive ? 'active' : ''}`}>
            <div className="image-container"> 
              <Image src={LogoHorus} style={{width: 120, height: 120, borderRadius: '50%'}} alt="Logo_Horus" />
            </div>
            <h4>Welcome to HORUS</h4>
            <p>Enter your data to use the system...</p>
            <button className="hidden" id="login" onClick={handleLoginClick}>
              Sign In
            </button>
          </div>
          <div className={`toggle-panel toggle-right ${isActive ? '' : 'active'}`}>
            <div className="image-container"> 
              <Image src={LogoHorus} style={{width: 120, height: 120, borderRadius: '50%'}} alt="Logo_Horus" />
            </div>
            <h4>Welcome to HORUS</h4>
            <p>Register your details to use the system</p>
            <button className="hidden" id="register" onClick={handleRegisterClick}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;