import { ReactComponent as RegisterButtonRectangle } from "../../shared/register-button-rectangle.svg";
import { ReactComponent as LoginButtonRectangle } from "../../shared/login-button-rectangle.svg";
import "./styles.scss";

export const Login = () => {
  return (
    <div className="login-wrapper">
      <button className="register-button">
        <RegisterButtonRectangle className={"register-button-icon"} />
        <h1 className="register-label">Register</h1>
      </button>
      <button className="login-button">
        <LoginButtonRectangle className={"login-button-icon"} />
        <h1 className="login-label">Login</h1>
      </button>
    </div>
  );
};
