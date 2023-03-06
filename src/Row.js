import React, { useState, useEffect } from 'react'
import axios from './axios';
import "./Row.css";
import "./requests";

  const base_url="https://image.tmdb.org/t/p/original/"
//const base_url = "https://api.themoviedb.org/3/discover/movie/";
//const url = "https://image.tmdb.org/t/p/w500/";
                           //The main key
//const base_url = "https://image.tmdb.org/t/p/w500/"; 
function Row({title , fetchUrl,isLargeRow }) { 
  const [comment, setComment ] = useState({})
 
 
    const [movies,setMovies] = useState([]);
    // A code run Based on spicific Condition
    useEffect(() => {
      //if [] , run once the row loads, not run again.......
      async function fetchData() {
        const request = await axios.get(fetchUrl);
        //https://api.themoviedb.org/3/movie/550?api_key=93fa04b3d14728f50673dbfa930c4d75
        setMovies(request.data.results);
        return request;
      }
      fetchData();
    }, [fetchUrl]);
   console.table(movies);

  return (
    <div className='row'>
      <h3>{title}</h3>  
      {/*show the several row_posters of the website*/}
        <div className='row_posters'>
          {movies.map(movie=>(
            
             
              
            < img
            key={movies.id}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`} 
               src = {`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                alt={movie.name} />
           
          ))}
        </div>
    </div> 
  )
}

export default Row;