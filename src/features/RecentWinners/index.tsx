import recentWinners from "../../shared/recent-winners.svg";
import sunOfEgyptIcon from "../../shared/sun-of-egypt.svg";
import "./styles.css";

export const RecentWinners = () => {
  return (
    <div className="recent-winners-wrapper">
      <div className="recent-winners-content">
        <img src={recentWinners} alt="recent-winners" />
        <div className="recent-winners-text">
          <h1>Recent</h1>
          <h1 className="recent-winners-text-bottom">Winners</h1>
        </div>
        <div className="sun-of-egypt-text">
          <h1>
            Robert - €18.75 in <b>Sun of Egypt</b>
          </h1>
        </div>
        <img
          src={sunOfEgyptIcon}
          alt="sunOfEgyptIcon"
          className="sun-of-egypt-icon"
        />
        <div className="sun-of-egypt-text dark">
          <h1>
            Robert - €18.75 in <b>Sun of Egypt</b>
          </h1>
        </div>
      </div>
    </div>
  );
};
