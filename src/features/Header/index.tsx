import logo from "../../shared/logo.svg";
import label from "../../shared/label.svg";
import search from "../../shared/search.svg";
import notifications from "../../shared/notifications.svg";
import en from "../../shared/en.svg";
import "./styles.css";

type Props = {
  isMenu?: boolean;
};

export const Header = (props: Props) => {
  const { isMenu } = props;
  return (
    <div className="header-wrapper" style={{ marginLeft: isMenu ? 4 : 0 }}>
      <div className="header-logo-wrapper">
        <img src={logo} alt="logo" height={51} width={40} />
        <img src={label} alt="label" height={54} width={51} />
        <div className="search-button">
          <img src={search} alt="label" height={17} width={17} />
        </div>
      </div>

      {isMenu && (
        <div className="header-setting">
          <img src={notifications} alt="notifications" height={33} width={27} />
          <img src={en} alt="en" />
        </div>
      )}
    </div>
  );
};
