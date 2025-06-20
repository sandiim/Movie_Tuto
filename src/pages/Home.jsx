import React from "react";
import MovieCard from "../components/movieCard";
import {useState} from "react"

function Home() {

  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    { id: 1, title: "John Wick", release_date: "2020" },
    { id: 2, title: "Vondam", release_date: "2021" },
    { id: 3, title: "Got", release_date: "2022" },
    { id: 4, title: "John Wick 2", release_date: "2023" },
  ];

    const handleSearch = (e) => {
      e.preventDefault(); // used so when i refresh the page the value is sticked on the search-button
      alert(searchQuery)
    };

  return (
    <div className="home">

      <form className="search-form" onSubmit={handleSearch}>
        <input 
          type="text" 
          placeholder="Search for Movies ..." 
          className="search-input"
          value={searchQuery}
          onChange= {(e)=> setSearchQuery(e.target.value)}>
        </input>
      <button type="submit" className="search-button">Search</button>
      </form>

      <div className="movies-grid">
        {movies.map((movie) => (
          movie.title.toLowerCase().startsWith(searchQuery) && // show Movies that the title matchs the searchQuery
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
