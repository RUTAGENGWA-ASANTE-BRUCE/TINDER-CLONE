// @ts-nocheck
import React, { useEffect, useState } from 'react'
import "./TinderCards.css"
import TinderCard from "react-tinder-card"
import axios from './axios'
function TinderCards ()
{
    const [data, setData] = useState([])

    useEffect(() =>
    {
        async function fetchData ()
        {
            const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://pinterest-video-and-image-downloader.p.rapidapi.com/pinterest',
  params: {url: 'https://in.pinterest.com/pin/1095852521805152932/'},
  headers: {
    'X-RapidAPI-Key': '4580762247mshb4a711a634972ffp17767bjsnadc23ee59733',
    'X-RapidAPI-Host': 'pinterest-video-and-image-downloader.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
    setData(response.data);
}).catch(function (error) {
	console.error(error);
});
        }   
        fetchData()
    }, [])
    console.log(data)
    const swiped = (direction, nameToDelete) =>
    {
        console.log("Removing " + nameToDelete)
    }
    const outOfFrame = (name) =>
    {
        console.log(name + " Left the screen")
    }
    return (
        <div className='TinderCards'>
            <div className='tinderCards__Cardcontainer'>
                {data.length>0 && data.map((single) => (
                    <TinderCard
                        className='swipe'
                        key={single.thumbnail}
                        preventSwipe={["up", "down"]}
                        onSwipe={(dir) => swiped(dir, single.thumbnail)}
                        onCardLeftScreen={() => outOfFrame(single.thumbnail)}
                    >
                        <div style={{ backgroundImage: `url( ${single.thumbnail})` }}
                            className='card'>
                            <h3 style={{ color: `red` }}>{single.duration}</h3>

                        </div>
                    </TinderCard>


                ))}


            </div>
        </div>
    )
}

export default TinderCards
