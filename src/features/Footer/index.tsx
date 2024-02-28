import { ReactComponent as SignInButtonRectangle } from "../../shared/login-button-rectangle.svg";
import { ReactComponent as MenuButtonIcon } from "../../shared/menu-button.svg";
import { ReactComponent as SignUpButtonRectangle } from "../../shared/sign-up-button-rectangle.svg";
import "./styles.scss";

type Props = {
  handleShowMenuButton: () => void;
  isMenu: boolean;
};

export const Footer = (props: Props) => {
  const { isMenu, handleShowMenuButton } = props;
  return (
    <div
      className={
        isMenu ? "footer-wrapper menu-footer-wrapper" : "footer-wrapper"
      }
    >
      <button className="sign-in-button">
        <SignInButtonRectangle className={"sign-in-button-icon"} />
        <h1 className={"sign-in-button-label"}>Sign in</h1>
      </button>

      <button
        onClick={handleShowMenuButton}
        className="menu-button-icon-wrapper"
      >
        <MenuButtonIcon className="menu-button-icon" />
      </button>

      <button className="sign-up-button">
        <SignUpButtonRectangle className={"sign-up-button-icon"} />
        <h1 className={"sign-up-button-label"}>Sign up</h1>
      </button>
    </div>
  );
};
