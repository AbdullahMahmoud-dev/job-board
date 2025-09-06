import React, { useEffect, useState } from "react";
import { getJobs } from "../api";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import JobList from "../components/JobList";

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    async function fetchData() {
      const data = await getJobs();
      setJobs(data);
      setFilteredJobs(data);
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

  return (
    <div>
      <SearchBar search={search} setSearch={setSearch} />
      <CategoryFilter category={category} setCategory={setCategory} />
      <JobList jobs={filteredJobs} />
    </div>
  );
};

export default Home;
