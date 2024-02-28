import { ReactComponent as ButtonRectangle } from "../../shared/start-button-rectangle.svg";
import "./styles.scss";

type Props = {
  isFieldCompleted: boolean;
  // eslint-disable-next-line no-unused-vars
  setIsBonusStarted: (val: boolean) => void;
};

export const StartButton = (props: Props) => {
  const { isFieldCompleted, setIsBonusStarted } = props;
  return (
    <button
      className={"start-button"}
      onClick={() => {
        setIsBonusStarted(true);
      }}
      disabled={!isFieldCompleted}
    >
      <ButtonRectangle
        className={
          isFieldCompleted ? "start-button-icon" : "start-button-icon-disabled"
        }
      />
      <h1 className="start-button-label">Start with your 100% bonus</h1>
    </button>
  );
};
