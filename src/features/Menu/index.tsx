import { Login } from "../Login";
import "./styles.css";
import { MenuList } from "../MenuList";
import background from "../../shared/menu-background.svg";

export const Menu = () => {
  return (
    <div className="menu-wrapper">
      <Login />
      <MenuList />
      <img src={background} alt={"background"} className="menu-background" />
    </div>
  );
};
