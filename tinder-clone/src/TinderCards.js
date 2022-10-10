// @ts-nocheck
import React, { useEffect, useState } from "react";
import "./TinderCards.css";
import TinderCard from "react-tinder-card";
import axios from "axios";
function TinderCards() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '4580762247mshb4a711a634972ffp17767bjsnadc23ee59733',
                'X-RapidAPI-Host': 'opensea13.p.rapidapi.com'
            }
        };
        
        fetch('https://opensea13.p.rapidapi.com/assets?collection_slug=cryptopunks&order_direction=desc&limit=20&include_orders=false', options)
            .then(response => response.json())
            .then(response => {console.log(response)
                                setData(response)})
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
