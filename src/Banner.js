import axios from 'axios';
import React, { useEffect, useState } from 'react'
import requests from './requests';

function Banner() {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        async function fetchData() {
            <input type="text" placeholder='search..'/>
            const request = await axios.get(requests.fetchNetflixOriginals);
            console.log(request.data.results[Math.floor(Math.random() * request.data.result.length - 1)]);
            return request;
        }
        fetchData();
    }, []);
    console.log(movie);
  return (
      <header className='banner'
          style={{
              backgroundSize: "cover",
              backgroundImage: `url(
                "https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}"
              )`,
              backgroundPosition:"center center",
      }}
      > 
          <div className='banner_contents'>
              {/* Title */} 
              <h1>
                  {movie?.title || movie?.name || movie?.original_name}
              </h1>
              
              <div className='banner_buttons'>
                  <button className="banner_button">Play</button>
                  <button className="banner_button">My List</button>
              </div>
              <h1 className='banner_description'>
                {movie?.overview}
              </h1>
          </div>
          

    </header>
  )
}

export default Banner;