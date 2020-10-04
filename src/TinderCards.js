import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import axios from "./axios.js";
import "./TinderCards.css";

function TinderCards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/tinder/getcards");
      setPeople(req.data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <div className="tinderCards__cardContainer">
        {/* loop through */}
        {people.map((person) => (
          <TinderCard
            className="swipe"
            // allows REACT to efficiently re-render a LIST
            // makes your APP super fast
            // will not refresh other irrelevant items
            key={person.name}
            //prevent from swiping up and down
            preventSwipe={["up", "down"]}
          >
            {/* care about the bracket `` for `url(${person.url})` */}
            {/* changing the css with java script with the style line*/}
            <div
              style={{ backgroundImage: `url(${person.imgUrl})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
