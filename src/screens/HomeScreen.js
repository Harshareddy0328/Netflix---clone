import "./HomeScreen.css";
import React from 'react';
import Nav from "../Nav";
import Banner from "../Banner";
import Row from "../Row";
import requests from "../Requests";

function HomeScreen() {
  return (
    <div className="homescreen">
    <Nav />
    <Banner />
    <Row 
      title= "NETFLIX ORIGINALS"
      fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow
    />
    <Row 
      title= "Action Movies"
      fetchUrl={requests.fetchActionMovies}
      
    />
    <Row 
      title= "Comedy Movies"
      fetchUrl={requests.fetchComedyMovies}
      
    />
    <Row 
      title= "Horror Movies"
      fetchUrl={requests.fetchHorrorMovies}
      
    />
    <Row 
      title= "Romantic Movies"
      fetchUrl={requests.fetchRomanticMovies}
      
    />
    <Row 
      title= "Documentaries"
      fetchUrl={requests.fetchDocumentaries}
      
    />
    </div>
  )
}

export default HomeScreen
