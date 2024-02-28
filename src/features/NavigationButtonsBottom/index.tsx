import { ReactComponent as Promotions } from "../../shared/promotions.svg";
import { ReactComponent as Tournaments } from "../../shared/tournaments.svg";
import { ReactComponent as FireIcon } from "../../shared/fire-button.svg";
import "./styles.css";

type Props = {
  handleShowMenuButton: () => void;
};

export const NavigationButtonsBottom = (props: Props) => {
  const { handleShowMenuButton } = props;

  return (
    <div className="navigation-button-bottom-container">
      <button className="button promotions" onClick={handleShowMenuButton}>
        <FireIcon className="fire-icon" />
        <Promotions className="navigation-promotions-item-icon" />
        Promotions
      </button>
      <button className="button tournaments" onClick={handleShowMenuButton}>
        <FireIcon className="fire-icon" />
        <Tournaments className="navigation-tournaments-item-icon" />
        Tournaments
      </button>
    </div>
  );
};
