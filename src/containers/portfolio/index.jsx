import React, { useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { GoBriefcase } from "react-icons/go";
import "./styles.scss";
import { filterOptions, portfolioData } from "./utils";

const Portfolio = () => {
  const [filterValue, setFilterValue] = useState(1);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleFilter = (id) => {
    setFilterValue(id);
  };

  console.log(filterValue);

  const filteredPortfolioData =
    filterValue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.sectionId === filterValue);

  return (
    <section className="portfolio" id="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<GoBriefcase size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterOptions.map((option, key) => (
            <li
              onClick={() => handleFilter(option.id)}
              key={`filter${option.id}`}
            >
              {option.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredPortfolioData.map((item, key) => (
            <div
              onMouseEnter={() => setHoveredIndex(key)}
              onMouseLeave={() => setHoveredIndex(null)}
              key={key}
              className="portfolio__content__cards__item"
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a>
                  <img src={item.image} alt="project" />
                </a>
              </div>
              <div className="overlay">
                {hoveredIndex === key && (
                  <div>
                    <p>{item.projectName}</p>
                    <button>Go To Project</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
