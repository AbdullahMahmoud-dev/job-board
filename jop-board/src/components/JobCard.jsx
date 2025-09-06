import React from "react";
import { Link } from "react-router-dom";

const JobCard = ({ job, removeFavorite }) => {
  const addToFavorites = () => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (!favorites.find((f) => f.id === job.id)) {
      favorites.push(job);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  };

  return (
    <div className="job-card">
      <h3>{job.title}</h3>
      <p>{job.company_name}</p>
      <p>{job.candidate_required_location}</p>
      <div className="actions">
        <Link to={`/job/${job.id}`}>Details</Link>
        {!removeFavorite && (
          <button onClick={addToFavorites}>Add to Favorites</button>
        )}
        {removeFavorite && (
          <button
            className="btn btn-remove"
            onClick={() => removeFavorite(job.id)}
          >
            Remove from Favorites
          </button>
        )}
      </div>
    </div>
  );
};

export default JobCard;
