import React, { useEffect, useState } from "react";
import JobCard from "../components/JobCard";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(favs);
  }, []);

  const clearFavorites = () => {
    localStorage.removeItem("favorites"); // تمسح المفتاح من localStorage
    setFavorites([]); // تحدث الـ state عشان الواجهة تتحدث
  };
   
  const removeFavorite = (id)=>{
    const nonRemoveFavorite = favorites.filter((job)=> job.id !== id );
    setFavorites(nonRemoveFavorite)
    localStorage.setItem("favorites", JSON.stringify(nonRemoveFavorite));
  };

  if (favorites.length === 0) return <p>No favorites yet.</p>;

  return (
    <div>
      <button onClick={clearFavorites} className="clearAll">
        Clear All Favorites
      </button>


      <div className="job-list">
      {favorites.map((job) => (
        <JobCard key={job.id} job={job} removeFavorite={removeFavorite} />
      ))}
    </div>
    </div>
  );
};

export default Favorites;

