import { useState } from "react";
import checkbox from "../../shared/checkbox.svg";
import "./styles.css";

export const Checkbox = () => {
  const [checked, setChecked] = useState<boolean>(false);

  const handleCheckbox = () => {
    setChecked(prevState => !prevState);
  };

  return (
    <>
      <button className="checkbox-wrapper" onClick={handleCheckbox}>
        {checked ? (
          <img src={checkbox} alt="checkbox" />
        ) : (
          <div className="checkbox" />
        )}
      </button>
    </>
  );
};
