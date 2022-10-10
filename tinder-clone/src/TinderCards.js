// @ts-nocheck
import React, { useEffect, useState } from "react";
import "./TinderCards.css";
import TinderCard from "react-tinder-card";
import axios from "axios";
function TinderCards() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {    
        fetch('https://api.unsplash.com/search/photos?query='+"NFT"+'&per_page=30&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo')
            .then(response => response.json())
            .then(response => {console.log(response)
                                // setData(response)
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
                style={{ backgroundImage: `url( ${single.image_url})` }}
                className="card"
              >
                <h3 style={{ color: `red` }}>{single.name}</h3>
              </div>
            </TinderCard>
          ))}
      </div>
    </div>
  );
}

export default TinderCards;
