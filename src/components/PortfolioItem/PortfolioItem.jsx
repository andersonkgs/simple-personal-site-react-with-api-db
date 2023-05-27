import React from "react";

import "./PortfolioItem.css";

function PortfolioItem(props) {
    return (
        <div className="portfolio-item">
            <a href={props.link} target="_blank">
                <img src={props.image} alt="Site do Atelier Flor Azul"/>
                <p>{props.description}</p>
            </a>
        </div>
    )
    
}

export default PortfolioItem;
