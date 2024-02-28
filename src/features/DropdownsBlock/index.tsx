import { useEffect, useState } from "react";
import { Dropdown } from "../Dropdown";
import "./styles.css";

const countriesData = [
  "Afganistan",
  "Andorra",
  "Angulla",
  "Argentina",
  "Armenia",
  "Afganistan",
  "Andorra",
  "Angulla",
  "Argentina",
  "Armenia",
  "Afganistan",
  "Andorra",
  "Angulla",
  "Argentina",
  "Armenia",
  "Afganistan",
  "Andorra",
  "Angulla",
  "Argentina",
  "Armenia",
];

const currenciesData = [
  "Argentine Peso",
  "Australian Dollar",
  "Baht",
  "Brazillian Real",
  "Bulgarian Lev",
  "Argentine Peso",
  "Australian Dollar",
  "Baht",
  "Brazillian Real",
  "Bulgarian Lev",
  "Argentine Peso",
  "Australian Dollar",
  "Baht",
  "Brazillian Real",
  "Bulgarian Lev",
  "Argentine Peso",
  "Australian Dollar",
  "Baht",
  "Brazillian Real",
  "Bulgarian Lev",
];

type Props = {
  // eslint-disable-next-line no-unused-vars
  setIsFieldCompleted: (val: boolean) => void;
};

export const DropdownsBlock = (props: Props) => {
  const { setIsFieldCompleted } = props;
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedCurrency, setSelectedCurrency] = useState<string>("");

  useEffect(() => {
    if (selectedCurrency && selectedCurrency) {
      setIsFieldCompleted(true);
    }
  }, [selectedCurrency, selectedCurrency]);

  return (
    <div className="dropdowns-wrapper">
      <Dropdown
        data={countriesData}
        checkedValue={selectedCountry}
        defaultValue={"Country"}
        setCheckedValue={setSelectedCountry}
      />
      <Dropdown
        data={currenciesData}
        checkedValue={selectedCurrency}
        defaultValue={"EUR"}
        setCheckedValue={setSelectedCurrency}
      />
    </div>
  );
};
