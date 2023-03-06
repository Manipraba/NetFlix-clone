import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import navbar from './navbar';

function App() {
  return (
    <div className="app">
      {/* NavBar */}
       <Banner />
      <Row title="Movies"
        fetchUrl={requests.fetchNetflixOriginals}
        
      />
      <Row title ="Recommended" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top_Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      {/*<Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />*/}
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      


      
      
    </div>
  );
}

export default App;
