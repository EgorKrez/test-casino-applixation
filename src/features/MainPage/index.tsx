import React, { useState } from "react";
import { Deposit } from "../Deposit";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Menu } from "../Menu";
import { RecentWinners } from "../RecentWinners";
import { NavigationButtonsTop } from "../NavigationButtonsTop";
import { NavigationButtonsBottom } from "../NavigationButtonsBottom";
import "./styles.css";

export const MainPage = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleShowMenuButton = () => {
    setShowMenu(prevState => !prevState);
  };

  return (
    <>
      {showMenu ? (
        <div className="menu-container">
          <Header isMenu={true} />
          <Menu />
          <Footer
            handleShowMenuButton={handleShowMenuButton}
            isMenu={showMenu}
          />
        </div>
      ) : (
        <div className="main-container">
          <div className="top-container-background">
            <div className="top-container">
              <Header />
              <Deposit />
              <NavigationButtonsTop
                handleShowMenuButton={handleShowMenuButton}
              />
            </div>
          </div>
          <div className="bottom-container">
            <div className="bottom-wrapper">
              <NavigationButtonsBottom
                handleShowMenuButton={handleShowMenuButton}
              />
              <RecentWinners />
              <Footer
                handleShowMenuButton={handleShowMenuButton}
                isMenu={showMenu}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
