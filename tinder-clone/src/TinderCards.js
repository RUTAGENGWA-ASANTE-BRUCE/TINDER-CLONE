// @ts-nocheck
import React, { useEffect, useState } from "react";
import "./TinderCards.css";
import TinderCard from "react-tinder-card";
import axios from "axios";
function TinderCards() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {    
        fetch('https://api.unsplash.com/search/photos?query='+"nba"+'&per_page=30&client_id=Ilhz-h8GYzT3vwj3FnR0kf49qEehObfNh5RVGkfEEbI')
            .then(response => response.json())
            .then(response => {console.log(response)
                                setData(response.results)
                            })
            .catch(err => console.error(err));
    }
    fetchData();
  }, []);
  console.log(data);
  const swiped = (direction, nameToDelete) => {
    console.log("Removing " + nameToDelete);
  };
  const outOfFrame = (name) => {
    console.log(name + " Left the screen");
  };
  return (
    <div className="TinderCards">
      <div className="tinderCards__Cardcontainer">
        {data.length > 0 &&
          data.map((single) => (
            <TinderCard
              className="swipe"
              key={single.id}
              preventSwipe={["up", "down"]}
              onSwipe={(dir) => swiped(dir, single.id)}
              onCardLeftScreen={() => outOfFrame(single.id)}
            >
              <div
                style={{ backgroundImage: `url(${single.urls.full})` }}
                className="card"
              >
                <h3 style={{ color: `red` }}>{single.user.name}</h3>
              </div>
            </TinderCard>
          ))}
      </div>
    </div>
  );
}

export default TinderCards;
