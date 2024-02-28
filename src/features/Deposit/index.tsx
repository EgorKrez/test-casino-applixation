import { ReactComponent as FireBackground } from "../../shared/fire-background.svg";
import { Bonus } from "../Bonus";
import { DropdownsBlock } from "../DropdownsBlock";
import { StartButton } from "../StartButton";
import { useState } from "react";
import "./styles.css";

export const Deposit = () => {
  const [isFieldCompleted, setIsFieldCompleted] = useState<boolean>(false);
  const [isBonusStarted, setIsBonusStarted] = useState<boolean>(false);

  return (
    <div className="deposit-container">
      <div
        className="deposit-wrapper"
        style={{ paddingBottom: isBonusStarted ? 16 : 0 }}
      >
        <FireBackground className="fire-background" />

        <h1 className="deposit-label">Deposit and play</h1>
        <Bonus isBonusStarted={isBonusStarted} />
        {!isBonusStarted ? (
          <>
            <DropdownsBlock setIsFieldCompleted={setIsFieldCompleted} />
            <StartButton
              isFieldCompleted={isFieldCompleted}
              setIsBonusStarted={setIsBonusStarted}
            />
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
