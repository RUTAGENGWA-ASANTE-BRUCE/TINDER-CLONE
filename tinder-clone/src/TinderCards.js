// @ts-nocheck
import React, { useEffect, useState } from "react";
import "./TinderCards.css";
import TinderCard from "react-tinder-card";
import axios from "./axios";
function TinderCards() {
  const [data, setData] = useState([]);

  useEffect(() => {const options = {
    method: 'GET',
    url: 'https://opensea13.p.rapidapi.com/assets',
    params: {
      collection_slug: 'cryptopunks',
      order_direction: 'desc',
      limit: '20',
      include_orders: 'false'
    },
    headers: {
      'X-RapidAPI-Key': '4580762247mshb4a711a634972ffp17767bjsnadc23ee59733',
      'X-RapidAPI-Host': 'opensea13.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
      console.log(response.data);
  }).catch(function (error) {
      console.error(error);
  });
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
              key={single.thumbnail}
              preventSwipe={["up", "down"]}
              onSwipe={(dir) => swiped(dir, single.thumbnail)}
              onCardLeftScreen={() => outOfFrame(single.thumbnail)}
            >
              <div
                style={{ backgroundImage: `url( ${single.thumbnail})` }}
                className="card"
              >
                <h3 style={{ color: `red` }}>{single.duration}</h3>
              </div>
            </TinderCard>
          ))}
      </div>
    </div>
  );
}

export default TinderCards;
