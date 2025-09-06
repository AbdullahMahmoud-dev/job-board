import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getJobs } from "../api";

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const jobs = await getJobs();
      const selectedJob = jobs.find((j) => j.id.toString() === id);
      setJob(selectedJob);
    }
    fetchData();
  }, [id]);

  if (!job) return <p>Loading...</p>;

  return (
    <div>
      <h2>{job.title}</h2>
      <h3>{job.company_name}</h3>
      <p>{job.candidate_required_location}</p>
      <div dangerouslySetInnerHTML={{ __html: job.description }}></div>
    </div>
  );
};

export default JobDetails;
