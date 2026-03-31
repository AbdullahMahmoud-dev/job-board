import React, { useEffect, useState } from "react";
import { getJobs } from "../api";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import JobList from "../components/JobList";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";
import Loading from "../components/Loading";
import Error from "../components/Error";

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const data = await getJobs();
        setJobs(data);
        setFilteredJobs(data);
        setError(null);
      } catch (err) {
        setError("Failed to load jobs. Please try again later.");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    let filtered = jobs;

    if (search) {
      filtered = filtered.filter((job) =>
        job.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category) {
      filtered = filtered.filter(
        (job) => job.category.toLowerCase() === category.toLowerCase()
      );
    }

    setFilteredJobs(filtered);
  }, [search, category, jobs]);

  const handleRetry = () => {
    window.location.reload();
  };

  if (loading) {
    return <Loading message="Loading amazing jobs for you..." />;
  }

  if (error) {
    return <Error message={error} onRetry={handleRetry} />;
  }

  return (
    <div className="home-page">
      <Hero />
      <div className="container">
        <div className="search-filter-container">
          <SearchBar search={search} setSearch={setSearch} />
          <CategoryFilter category={category} setCategory={setCategory} />
        </div>
        <JobList jobs={filteredJobs} />
      </div>
      <Stats />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Home;
