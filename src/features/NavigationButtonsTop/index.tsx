import { ReactComponent as GameSlots } from "../../shared/game-slots.svg";
import { ReactComponent as LiveCasino } from "../../shared/live-casino.svg";
import { ReactComponent as FireIcon } from "../../shared/fire-button.svg";
import "./styles.css";

type Props = {
  handleShowMenuButton: () => void;
};

export const NavigationButtonsTop = (props: Props) => {
  const { handleShowMenuButton } = props;

  return (
    <div className="navigation-button-top-container">
      <button className="button game-slots" onClick={handleShowMenuButton}>
        <FireIcon className="fire-icon" />
        <GameSlots className="navigation-game-item-icon" />
        Game slots
      </button>
      <button className="button live-casino" onClick={handleShowMenuButton}>
        <FireIcon className="fire-icon" />
        <LiveCasino className="navigation-live-casino-item-icon" />
        Live Casino
      </button>
    </div>
  );
};
