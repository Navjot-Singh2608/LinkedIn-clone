import React from "react";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import "./Widgets.css";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("News of the day", "478 readers")}
      {newsArticle(
        "Health Canada",
        "Health Canada investigating blood clot reports after U.S. pauses J&J vaccine"
      )}
      {newsArticle(
        "Canada receives...",
        "Canada receives report of blood clot linked to AstraZeneca"
      )}
      {newsArticle(
        "Canada nearing...",
        "Canada nearing peak of next wave of COVID-19, Tam says"
      )}
      {newsArticle(
        "Canadian men's basketball",
        "Canadian men's basketball team suffers big blow as Jamal Murray suffers torn ACL"
      )}
      {newsArticle(
        "Hideki Matsuyama",
        "Hideki Matsuyama becomes first Japanese in Masters green jacket"
      )}
    </div>
  );
}

export default Widgets;
