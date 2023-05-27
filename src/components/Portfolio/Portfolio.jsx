import React from "react";

import "./Portfolio.css";

import PortfolioItem from "../PortfolioItem/PortfolioItem";

function Portfolio({ portfolio }) {

    return (
        <main className="content-page">
            <div className="container-contents">

                {portfolio.map(
                    (item, index) =>
                        <PortfolioItem
                            key={index}
                            link={item.link}
                            image={item.image}
                            description={item.description}
                        ></PortfolioItem>
                    )   
                }

            </div>
        </main>
    )
}

export default Portfolio;
