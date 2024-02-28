import "./styles.scss";
import searchIcon from "../../shared/search-icon.svg";
import { ReactComponent as GameSlots } from "../../shared/game-slots.svg";
import { ReactComponent as LiveCasino } from "../../shared/live-casino.svg";
import { ReactComponent as Promotions } from "../../shared/promotions.svg";
import { ReactComponent as Tournaments } from "../../shared/tournaments.svg";
import { ReactComponent as Lottery } from "../../shared/lottery.svg";
import { ReactComponent as HallOfFame } from "../../shared/hall-of-fame.svg";
import { ReactComponent as Vip } from "../../shared/vip.svg";
import { ReactComponent as Payment } from "../../shared/payment.svg";
import { ReactComponent as Support } from "../../shared/support.svg";
import { useState } from "react";

export const MenuList = () => {
  const [filterValue, setFilterValue] = useState<string>("");

  const onFilter = (key: string) =>
    !filterValue || key.toLowerCase().includes(filterValue.toLowerCase())
      ? { display: "flex" }
      : { display: "none" };

  return (
    <div>
      <div className="input-wrapper">
        <img src={searchIcon} alt="searchIcon" className="input-icon" />
        <input
          onChange={event => setFilterValue(event.target.value)}
          placeholder={"Game name or provider"}
        />
      </div>
      <>
        <div className="item-list games-item" style={onFilter("Games")}>
          <GameSlots className="game-item-icon" />
          <h1 className={"item-list-label"}>Games</h1>
        </div>
        <div
          className="item-list promotions-item"
          style={onFilter("Promotions")}
        >
          <Promotions className="promotions-item-icon" />
          <h1 className={"item-list-label"}>Promotions</h1>
        </div>
        <div
          className="item-list tournaments-item"
          style={onFilter("Tournaments")}
        >
          <Tournaments className="tournaments-item-icon" />
          <h1 className={"item-list-label"}>Tournaments</h1>
        </div>
        <div
          className="item-list live-casino-item"
          style={onFilter("Live dealers")}
        >
          <LiveCasino className="live-casino-item-icon" />
          <h1 className={"item-list-label"}>Live dealers</h1>
        </div>
        <div className="item-list lottery-item" style={onFilter("Lottery")}>
          <Lottery className="lottery-item-icon" />
          <h1 className={"item-list-label"}>Lottery</h1>
        </div>
        <div
          className="item-list hall-of-fame-item"
          style={onFilter("Hall of fame")}
        >
          <HallOfFame className="hall-of-fame-item-icon" />
          <h1 className={"item-list-label"}>Hall of fame</h1>
        </div>
        <div className="item-list vip-item" style={onFilter("VIP")}>
          <Vip className="vip-item-icon" />
          <h1 className={"item-list-label"}>VIP</h1>
        </div>
        <div className="item-list payment-item" style={onFilter("Payment")}>
          <Payment className="payment-item-icon" />
          <h1 className={"item-list-label"}>Payment</h1>
        </div>
        <div className="item-list support-item" style={onFilter("Support")}>
          <Support className="support-item-icon" />
          <h1 className={"item-list-label"}>Support</h1>
        </div>
      </>
    </div>
  );
};
