import React from "react";
import CardLeft from "./CardLeft";
import CardRight from "./CardRight";

const BuildCard = ({ apps, totalapps }) => {
  	const cards = apps.map((app, index) => (
    	<div className="app-card" key={app.name}>
			<CardLeft img={app.img} appno={index + 1} totalapps={totalapps} />
			<CardRight app={app} />
    	</div>
  	));
  	return cards;
};
    
export default BuildCard;
