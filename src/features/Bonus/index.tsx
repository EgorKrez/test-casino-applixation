import { ReactComponent as WelcomeBonusRectangle } from "../../shared/welcome-bonus-rectangle.svg";
import { ReactComponent as FirstDepositBonusRectangle } from "../../shared/first-deposit-bonus-rectangle.svg";
import { ReactComponent as NoBonusRectangle } from "../../shared/no-bonus-rectangle.svg";
import { ReactComponent as Box } from "../../shared/box.svg";
import { ReactComponent as FirstDepositIcon } from "../../shared/welcome-bonus.svg";
import { ReactComponent as NoBonusIcon } from "../../shared/no-bonus.svg";
import { ReactComponent as ArrowIcon } from "../../shared/arrow-down.svg";
import { ReactComponent as Divider } from "../../shared/divider.svg";
import { Checkbox } from "../Checkbox";
import "./styles.css";

type Props = {
  isBonusStarted: boolean;
};

export const Bonus = (props: Props) => {
  const { isBonusStarted } = props;
  return (
    <div className="bonus-wrapper">
      <div className="bonus">
        <WelcomeBonusRectangle className="rectangle-background" />
        <Box className="top-level" />
        <div className="text-wrapper">
          <h2>Welcome bonus</h2>
          <h3>100% up to €500 +120 FreeSpins</h3>
        </div>
        {isBonusStarted ? (
          <Checkbox />
        ) : (
          <>
            <Divider className="divider" />
            <ArrowIcon className="arrow-icon" />
          </>
        )}
      </div>
      {isBonusStarted && (
        <div className="bonus first-bonus">
          <FirstDepositBonusRectangle className="rectangle-background" />
          <FirstDepositIcon className="top-level" />
          <div className="text-wrapper">
            <h2>First deposit bonus</h2>
            <h3>100% up to €500 +120 FreeSpins</h3>
          </div>
          {isBonusStarted ? (
            <Checkbox />
          ) : (
            <>
              <Divider className="divider" />
              <ArrowIcon className="arrow-icon" />
            </>
          )}
        </div>
      )}
      {isBonusStarted && (
        <div className="bonus">
          <NoBonusRectangle className="rectangle-background" />
          <NoBonusIcon className="top-level" />
          <div className="text-wrapper">
            <h2>No bonus</h2>
            <h3>100% up to €500 +120 FreeSpins</h3>
          </div>

          {isBonusStarted ? (
            <Checkbox />
          ) : (
            <>
              <Divider className="divider" />
              <ArrowIcon className="arrow-icon" />
            </>
          )}
        </div>
      )}
    </div>
  );
};
