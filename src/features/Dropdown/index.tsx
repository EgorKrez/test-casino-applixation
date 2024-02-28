import dropdownArrowUp from "../../shared/dropdown-arrow-up.svg";
import dropdownArrowDown from "../../shared/dropdown-arrow-down.svg";
import { useEffect, useRef, useState } from "react";

type Props = {
  data: string[];
  checkedValue: string;
  // eslint-disable-next-line no-unused-vars
  setCheckedValue: (val: string) => void;
  defaultValue: string;
};

export const Dropdown = (props: Props) => {
  const { data, defaultValue, setCheckedValue, checkedValue } = props;
  const [isShowCountriesData, setIsShowCountriesData] =
    useState<boolean>(false);
  const countriesRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onClick = (e: any) => {
      if (
        countriesRef.current &&
        !countriesRef.current.contains(e.target) &&
        isShowCountriesData
      ) {
        setIsShowCountriesData(false);
      }
    };

    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
    };
  }, [isShowCountriesData]);

  return (
    <>
      <button
        className="dropdown"
        onClick={() => setIsShowCountriesData(true)}
        ref={countriesRef}
      >
        {checkedValue || defaultValue}
        {isShowCountriesData ? (
          <img
            src={dropdownArrowUp}
            alt="dropdownArrowUp"
            className="dropdown-icon"
          />
        ) : (
          <img
            src={dropdownArrowDown}
            alt="dropdownArrowDown"
            className="dropdown-icon"
          />
        )}
      </button>
      {isShowCountriesData && (
        <div className="dropdown-items">
          {data.map((item, index) => (
            <button
              key={item + index}
              className="dropdown-item"
              onClick={() => {
                setCheckedValue(item);
              }}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </>
  );
};
